import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ASSETS } from "@/content";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-alabaster text-brand-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Link
          to="/"
          data-testid="privacy-back-link"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors hover:text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the partnership page
        </Link>
        <img src={ASSETS.logoColor} alt="Scholas USA" className="mb-8 h-10 w-auto" />
        <h1 className="font-display text-3xl text-brand-deep md:text-4xl">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-slate">
          <p>
            This page is a partnership proposal presented by Scholas USA. When you
            submit the partnership inquiry form, we collect your name,
            organization, email address, and message solely to respond to your
            inquiry.
          </p>
          <p>
            Inquiry details are stored securely and shared only with the Scholas
            USA leadership team. We do not sell, rent, or share your information
            with third parties for marketing purposes.
          </p>
          <p>
            You may request a copy or deletion of your submitted information at
            any time by writing to{" "}
            <a
              href="mailto:info@scholasusa.org"
              data-testid="privacy-contact-link"
              className="font-semibold text-brand-deep underline decoration-brand-blue/40 underline-offset-4 transition-colors hover:text-brand-blue"
            >
              info@scholasusa.org
            </a>
            .
          </p>
          <p className="text-sm">
            Scholas USA is a registered 501(c)(3) nonprofit organization · Tax ID
            84-5101258 · Established 2020.
          </p>
        </div>
      </div>
    </div>
  );
}
