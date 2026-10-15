import { useState } from "react";
import axios from "axios";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/content";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = { full_name: "", organization: "", email: "", message: "", website: "" };

const validate = (form) => {
  const errors = {};
  if (form.full_name.trim().length < 2) errors.full_name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-brand-alabaster px-4 py-3 text-sm text-brand-ink transition-colors placeholder:text-brand-slate/60 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 ${
    hasError ? "border-brand-red" : "border-brand-deep/20"
  }`;

export const ContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((errs) => ({ ...errs, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      setSubmitted(true);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        typeof detail === "string"
          ? detail
          : "We couldn't send your inquiry just now. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <Reveal className="mx-auto max-w-xl">
        <div className="rounded-3xl border border-brand-deep/15 bg-white p-8 shadow-sm md:p-10">
          {submitted ? (
            <div data-testid="contact-success" className="space-y-4 py-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand-green" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-brand-deep">
                {CONTACT.successTitle}
              </h3>
              <p className="text-sm leading-relaxed text-brand-slate">{CONTACT.successBody}</p>
              <button
                type="button"
                data-testid="contact-send-another"
                onClick={() => {
                  setForm(INITIAL);
                  setSubmitted(false);
                }}
                className="text-xs font-semibold uppercase tracking-wider text-brand-teal transition-colors hover:text-brand-deep"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-center text-xl font-semibold text-brand-deep md:text-2xl">
                {CONTACT.title}
              </h3>
              <p className="mb-8 mt-2 text-center text-xs text-brand-slate">{CONTACT.subtitle}</p>

              <form data-testid="contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot — invisible to humans, catches spam bots */}
                <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={update("website")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold text-brand-deep">
                    Full Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-name"
                    data-testid="contact-name-input"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.full_name}
                    onChange={update("full_name")}
                    aria-invalid={Boolean(errors.full_name)}
                    aria-describedby={errors.full_name ? "contact-name-error" : undefined}
                    className={inputClass(errors.full_name)}
                  />
                  {errors.full_name && (
                    <p id="contact-name-error" data-testid="contact-name-error" className="mt-1.5 text-xs text-brand-red">
                      {errors.full_name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-organization" className="mb-1.5 block text-xs font-bold text-brand-deep">
                    Organization
                  </label>
                  <input
                    id="contact-organization"
                    data-testid="contact-organization-input"
                    type="text"
                    autoComplete="organization"
                    placeholder="Foundation or organization"
                    value={form.organization}
                    onChange={update("organization")}
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold text-brand-deep">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="contact-email"
                    data-testid="contact-email-input"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@organization.org"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p id="contact-email-error" data-testid="contact-email-error" className="mt-1.5 text-xs text-brand-red">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-bold text-brand-deep">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-message-input"
                    rows={4}
                    required
                    placeholder="Partnership focus or meeting inquiry…"
                    value={form.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${inputClass(errors.message)} resize-y`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" data-testid="contact-message-error" className="mt-1.5 text-xs text-brand-red">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={submitting}
                  className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-brand-deep text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {submitting ? "Sending…" : "Submit Partnership Inquiry"}
                </button>
              </form>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
};
