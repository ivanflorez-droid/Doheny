import { ArrowUpRight, Quote } from "lucide-react";
import { ASSETS, VOICES } from "@/content";
import { Reveal } from "./Reveal";

export const Voices = () => {
  return (
    <section
      id="voices"
      data-testid="voices-section"
      className="border-y border-brand-deep/10 bg-white px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-2xl space-y-4 text-center md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            {VOICES.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {VOICES.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure
              data-testid="archbishop-quote-card"
              className="relative h-full rounded-3xl border border-brand-deep/10 bg-brand-alabaster p-8 md:p-12"
            >
              <Quote className="mb-6 h-10 w-10 text-brand-blue/30" aria-hidden="true" />
              <blockquote className="font-display text-xl font-normal italic leading-relaxed text-brand-deep md:text-2xl">
                “{VOICES.quote.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={ASSETS.archbishopPortrait}
                  alt="Portrait of Archbishop José H. Gómez"
                  className="h-14 w-14 rounded-full border border-brand-deep/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-bold text-brand-deep">{VOICES.quote.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-slate">
                    {VOICES.quote.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            {VOICES.coverage.map((item, i) => (
              <Reveal key={item.href} delay={120 + i * 100}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`coverage-link-${i}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-brand-deep/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                      {item.label}
                    </div>
                    <div className="font-display mt-2 text-base font-medium leading-snug text-brand-deep">
                      {item.title}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-brand-slate transition-colors group-hover:text-brand-blue" />
                </a>
              </Reveal>
            ))}

            <Reveal delay={340}>
              <div
                data-testid="youth-voices-note"
                className="rounded-2xl border border-dashed border-brand-deep/25 bg-brand-alabaster p-6"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-slate">
                  Youth Voices
                </div>
                <p className="mt-2 text-xs leading-relaxed text-brand-slate">{VOICES.youthNote}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
