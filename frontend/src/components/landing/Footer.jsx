import { Link } from "react-router-dom";
import { ASSETS, FOOTER } from "@/content";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 bg-brand-night px-5 py-14 text-white md:px-9 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <img src={ASSETS.logoWhite} alt="Scholas USA" className="h-10 w-auto" />
            <p className="max-w-md text-xs leading-relaxed text-white/60">{FOOTER.description}</p>
            <p className="text-[11px] text-white/40">{FOOTER.president}</p>
          </div>

          <div className="md:col-span-3">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </div>
            <ul className="space-y-3">
              {FOOTER.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-xs text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <Link
                  to="/privacy"
                  data-testid="footer-link-privacy-policy"
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </div>
            <ul className="space-y-3">
              {FOOTER.contacts.map((contact) => (
                <li key={contact.value} className="text-xs">
                  <span className="text-white/50">{contact.label}: </span>
                  <a
                    href={`mailto:${contact.value}`}
                    data-testid={`footer-contact-${contact.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="text-white transition-colors hover:text-brand-teal"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/40 md:flex-row">
          <span>© {year} Scholas USA. All rights reserved.</span>
          <span>{FOOTER.legal}</span>
        </div>
      </div>
    </footer>
  );
};
