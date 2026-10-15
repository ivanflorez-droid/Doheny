import { PARTNERSHIP } from "@/content";
import { Reveal } from "./Reveal";

export const Partnership = () => {
  return (
    <section
      id="partnership"
      data-testid="partnership-section"
      className="px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto mb-14 max-w-2xl space-y-4 text-center md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            {PARTNERSHIP.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {PARTNERSHIP.headline}
          </h2>
          <p className="text-sm leading-relaxed text-brand-slate md:text-base">{PARTNERSHIP.body}</p>
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PARTNERSHIP.tiers.map((tier, i) => (
            <Reveal key={tier.kicker} delay={i * 120} className="h-full">
              <div
                data-testid={`tier-card-${tier.kicker.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`h-full space-y-4 rounded-3xl p-8 md:p-10 ${
                  tier.featured
                    ? "border-2 border-brand-deep bg-brand-alabaster shadow-md"
                    : "border border-brand-deep/15 bg-white shadow-sm"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    tier.featured ? "text-brand-yellow" : "text-brand-teal"
                  }`}
                  style={tier.featured ? { color: "#b98a12" } : undefined}
                >
                  {tier.kicker}
                </span>
                <div className="font-display text-3xl font-normal text-brand-deep md:text-4xl">
                  {tier.range}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-deep">
                  {tier.name}
                </div>
                <p className="text-sm leading-relaxed text-brand-slate">{tier.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p data-testid="partnership-disclaimer" className="text-[11px] leading-relaxed text-brand-slate">
            {PARTNERSHIP.disclaimer}
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PARTNERSHIP.primaryCta.href}
            data-testid="partnership-primary-cta"
            className="inline-flex h-[52px] items-center rounded-full bg-brand-deep px-8 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-teal md:h-14"
          >
            {PARTNERSHIP.primaryCta.label}
          </a>
          <a
            href={PARTNERSHIP.secondaryCta.href}
            data-testid="partnership-secondary-cta"
            className="inline-flex h-[52px] items-center rounded-full border border-brand-deep/20 bg-white px-8 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-alabaster md:h-14"
          >
            {PARTNERSHIP.secondaryCta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
};
