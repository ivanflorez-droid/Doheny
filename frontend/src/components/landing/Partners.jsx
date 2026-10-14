import { PARTNERS } from "@/content";
import { Reveal } from "./Reveal";

export const Partners = () => {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal className="mx-auto mb-12 max-w-2xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            {PARTNERS.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {PARTNERS.headline}
          </h2>
          <p className="text-sm leading-relaxed text-brand-slate md:text-base">{PARTNERS.body}</p>
        </Reveal>

        <Reveal>
          <div
            data-testid="partner-strip"
            className="flex flex-col items-center justify-center gap-8 rounded-3xl border border-brand-deep/10 bg-white px-8 py-10 shadow-sm sm:flex-row sm:gap-16 md:gap-24"
          >
            {PARTNERS.partners.map((partner) => (
              <div
                key={partner}
                data-testid={`partner-${partner.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="space-y-1"
              >
                <div className="font-display text-xl font-medium text-brand-deep md:text-2xl">
                  {partner}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-slate">
                  Verified Partner
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-[11px] italic text-brand-slate">{PARTNERS.note}</p>
        </Reveal>
      </div>
    </section>
  );
};
