import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ASSETS, NAV_LINKS } from "@/content";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 border-b border-brand-deep/10 bg-brand-alabaster/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:h-20 md:px-9 lg:px-16">
        <a href="#top" data-testid="header-logo-link" className="flex items-center gap-3">
          <img src={ASSETS.logoColor} alt="Scholas USA" className="h-9 w-auto md:h-10" />
          <span className="hidden text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-brand-slate sm:block">
            Foundation
            <br />
            Partnership Brief
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              data-testid={`nav-${link.id}`}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-brand-slate transition-colors hover:text-brand-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#partnership"
            data-testid="header-cta"
            className="hidden h-11 items-center rounded-full bg-brand-deep px-6 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-teal sm:inline-flex"
          >
            Explore Partnership
          </a>
          <button
            type="button"
            data-testid="mobile-menu-button"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-deep/15 text-brand-deep transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          data-testid="mobile-menu"
          aria-label="Mobile"
          className="border-t border-brand-deep/10 bg-brand-alabaster px-5 pb-6 pt-2 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              data-testid={`mobile-nav-${link.id}`}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-brand-deep/5 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partnership"
            data-testid="mobile-header-cta"
            onClick={() => setOpen(false)}
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-brand-deep text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-teal"
          >
            Explore Partnership
          </a>
        </nav>
      )}
    </header>
  );
};
