import { ArrowUpRight } from "lucide-react";
import { INVITATION } from "@/content";
import { Reveal } from "./Reveal";

export const Invitation = () => {
  return (
    <section
      id="invitation"
      data-testid="invitation-section"
      className="border-y border-brand-blue/15 bg-[#EAF6FC] px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
          {INVITATION.eyebrow}
        </span>
        <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[44px]">
          {INVITATION.headline}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-slate md:text-lg">
          {INVITATION.body}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={INVITATION.primaryCta.href}
            data-testid="invitation-primary-cta"
            className="inline-flex h-[52px] items-center rounded-full bg-brand-deep px-8 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-blue md:h-14"
          >
            {INVITATION.primaryCta.label}
          </a>
          <a
            href={INVITATION.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="invitation-secondary-cta"
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-brand-deep/20 bg-white px-8 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-alabaster md:h-14"
          >
            {INVITATION.secondaryCta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
};
