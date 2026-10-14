from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import time
import uuid
import logging
import ipaddress
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Emergent managed email (Resend) — per integration playbook.
# EMAIL_BASE_URL is a constant on purpose: it must survive deployment.
# ---------------------------------------------------------------------------
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Scholas USA")
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
# Configurable recipient for partnership inquiries (admin setting).
INQUIRY_RECIPIENT = os.environ.get("INQUIRY_RECIPIENT_EMAIL", "info@scholasusa.org")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as http_client:
            resp = await http_client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        try:
            code = e.response.json().get("code", "")
        except ValueError:
            code = ""
        if code in ("insufficient_credits", "integration_disabled", "daily_limit_reached"):
            logger.warning(f"Email paused: {code} ({e.response.status_code})")
            raise HTTPException(status_code=503, detail="Email is temporarily unavailable")
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


# ---------------------------------------------------------------------------
# Partnership inquiries
# ---------------------------------------------------------------------------
class InquiryCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    organization: str = Field(default="", max_length=160)
    email: EmailStr
    message: str = Field(min_length=10, max_length=4000)
    website: str = Field(default="", max_length=200)  # honeypot — must stay empty


_RATE: dict[str, list[float]] = {}


def _inquiry_email_html(*, full_name: str, organization: str, email: str,
                        message: str, inquiry_id: str, created_at: str) -> str:
    name = escape(full_name)
    org = escape(organization) if organization else "—"
    addr = escape(email)
    msg = escape(message).replace("\n", "<br/>")
    ref = escape(inquiry_id)
    when = escape(created_at)
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
        '<tr><td style="padding:24px;font-family:Arial,sans-serif;color:#172B3A">'
        f'<h2 style="margin:0 0 16px;color:#123D66">New partnership inquiry</h2>'
        '<table role="presentation" cellpadding="6" cellspacing="0" style="font-size:14px">'
        f'<tr><td style="color:#617383"><strong>Name</strong></td><td>{name}</td></tr>'
        f'<tr><td style="color:#617383"><strong>Organization</strong></td><td>{org}</td></tr>'
        f'<tr><td style="color:#617383"><strong>Email</strong></td>'
        f'<td><a href="mailto:{addr}">{addr}</a></td></tr>'
        f'<tr><td style="color:#617383;vertical-align:top"><strong>Message</strong></td><td>{msg}</td></tr>'
        f'<tr><td style="color:#617383"><strong>Submitted (UTC)</strong></td><td>{when}</td></tr>'
        f'<tr><td style="color:#617383"><strong>Reference</strong></td><td>{ref}</td></tr>'
        '</table>'
        f'<p style="font-size:12px;color:#888;margin-top:20px">Sent by the {escape(EMAIL_FROM_NAME)} '
        'partnership page. We never ask for passwords or card details by email.</p>'
        '</td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Scholas USA partnership API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/inquiries")
async def create_inquiry(payload: InquiryCreate, request: Request):
    # Honeypot: bots fill the hidden field; pretend success and discard.
    if payload.website.strip():
        return {"status": "success", "id": None, "email_sent": False}

    # Lightweight per-IP rate limit: 10 inquiries per hour.
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    bucket = [t for t in _RATE.get(ip, []) if now - t < 3600]
    if len(bucket) >= 10:
        raise HTTPException(status_code=429, detail="Too many inquiries. Please try again later.")
    bucket.append(now)
    _RATE[ip] = bucket

    inquiry_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()
    doc = {
        "id": inquiry_id,
        "full_name": payload.full_name.strip(),
        "organization": payload.organization.strip(),
        "email": str(payload.email),
        "message": payload.message.strip(),
        "created_at": created_at,
        "email_sent": False,
    }
    await db.inquiries.insert_one(doc)

    safe_name = re.sub(r"[\r\n]+", " ", doc["full_name"])[:80]
    subject = f"New partnership inquiry — {safe_name}"
    html = _inquiry_email_html(
        full_name=doc["full_name"], organization=doc["organization"],
        email=doc["email"], message=doc["message"],
        inquiry_id=inquiry_id, created_at=created_at,
    )
    email_sent = False
    if EMAIL_KEY:
        try:
            email_id = await send_email(to=INQUIRY_RECIPIENT, subject=subject, html=html)
            email_sent = True
            await db.inquiries.update_one(
                {"id": inquiry_id}, {"$set": {"email_sent": True, "email_id": email_id}}
            )
        except HTTPException:
            logger.warning(f"Inquiry {inquiry_id} stored but notification email failed")
    else:
        logger.warning("EMERGENT_EMAIL_KEY not configured; inquiry stored without email")

    return {"status": "success", "id": inquiry_id, "email_sent": email_sent}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
