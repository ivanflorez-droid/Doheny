# PRD — Scholas USA × Carrie Estelle Doheny Foundation Partnership Page

## Original Problem Statement
Premium, pixel-perfect, fully responsive institutional fundraising landing page for
Scholas USA, tailored to the philanthropic priorities and Catholic mission of the
Carrie Estelle Doheny Foundation. Not a generic donation site — a personalized
partnership proposal to secure a strategic relationship and potentially multi-year
funding. Must communicate institutional credibility, Catholic identity, emotional
connection, measurable impact, and community opportunity in Los Angeles. Reference:
give.scholasusa.org/donate-for-youth, scholasusa.org, dohenyfoundation.org.

## User Personas
- Primary: board members and grants staff of the Carrie Estelle Doheny Foundation
  (75-year LA Catholic foundation funding welfare, health, education, Catholic faith ministries).
- Secondary: Scholas USA leadership (President & ED Maria Jimena Florez) presenting the proposal.

## Architecture
- React (CRA/craco) + Tailwind frontend; FastAPI backend; MongoDB (motor).
- Design direction: "Scholas Editorial Monograph" (user-picked) — alabaster + primary teal
  #007072 and its gamut (#0D9B9D light, #093A3C night, user request 2026-10-15),
  serif display (Iowan Old Style/Palatino stack) + system sans, editorial centered layout.
  Source of truth: /app/design/direction.html; guidelines: /app/design_guidelines.json.
- Content centralized in /app/frontend/src/content.js (CMS-style editable data file per brief §19).
- Email: Emergent-managed Resend integration (integration proxy + EMERGENT_EMAIL_KEY).
  Recipient configurable via INQUIRY_RECIPIENT_EMAIL (default info@scholasusa.org).

## Core Requirements (static)
- 10 sections: Hero, Mission, Challenge (3 cards), Scholas Model (5 steps), Pico-Union
  (300 youth / 50 families as TARGETS, never outcomes), Measurable Impact (5 metric cards,
  no invented numbers), Partnership Opportunity ($25k–$50k / $75k–$100k proposed ranges +
  disclaimer), Catholic Leadership & Testimonials (verified quotes only), Institutional
  Partners (Archdiocese of LA, QueensCare — never Doheny), Final CTA, Contact form, Footer.
- Working inquiry form: Full Name, Organization, Email, Message; validation, honeypot
  spam protection, success confirmation; emailed via managed Resend + stored in MongoDB.
- No invented data, testimonials, partners, or funding commitments. No aggressive
  fundraising. No outdated deadlines.

## Implemented (2026-10-14)
- Full landing page, all 10 sections + header/footer, responsive (1440→390), reduced-motion
  support, scroll-reveal, smooth anchor scrolling, data-testids throughout.
- Real assets from scholasusa.org/give.scholasusa.org: logos, hero/parish/mission photos,
  Archbishop Gómez portrait + verified quote, Angelus News coverage links.
- POST /api/inquiries (pydantic validation, honeypot, IP rate limit 10/hr, Mongo storage,
  Resend notification email with guardrail gate). GET /api/health.
- SEO: title/description/OG/Twitter/JSON-LD (NGO, Tax ID 84-5101258, founder Pope Francis),
  robots.txt with AI-crawler group, llms.txt, favicon, noscript fallback. No canonical/og:url
  (no confirmed production domain — intentionally omitted).
- /privacy page with honest data-use policy.
- Verified: form E2E (validation + submit + success), email_sent=true, mobile menu,
  no horizontal overflow, all sections render, API 422 on invalid payloads.

## Pending / Needs Confirmation
- Real production domain → then add canonical, og:url, sitemap.xml (currently omitted by design).
- Confirm INQUIRY_RECIPIENT_EMAIL (currently info@scholasusa.org, verified from official site).
- Verified youth testimonial for the Voices section (placeholder note displayed honestly).
- Optional meeting-scheduling link (user skipped).

## Backlog
- P0: none blocking.
- P1: add canonical/og:url/sitemap when domain confirmed; add youth testimonial when approved.
- P2: program overview PDF download, multi-language (Spanish) variant, impact dashboard
  once verified outcome data exists.
