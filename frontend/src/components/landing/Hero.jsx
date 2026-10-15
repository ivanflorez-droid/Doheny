import { ASSETS, HERO } from "@/content";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="px-5 pb-16 pt-14 md:px-9 md:pb-24 md:pt-24 lg:px-16"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span
          data-testid="hero-eyebrow"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-deep/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep md:text-xs"
        >
          {HERO.eyebrow}
        </span>

        <h1
          data-testid="hero-headline"
          className="font-display text-[36px] font-normal leading-[1.1] tracking-tight text-brand-deep md:text-6xl lg:text-[64px]"
        >
          {HERO.headlineLines.map((line, i) => (
            <span key={line} className="hero-line">
              <span className={i === 2 ? "italic text-brand-teal" : ""}>{line}</span>
            </span>
          ))}
        </h1>

        <p
          data-testid="hero-body"
          className="mx-auto mb-10 mt-8 max-w-2xl text-base leading-relaxed text-brand-slate md:text-lg"
        >
          {HERO.body}
        </p>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={HERO.primaryCta.href}
            data-testid="hero-primary-cta"
            className="inline-flex h-[52px] items-center rounded-full bg-brand-deep px-8 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-teal md:h-14"
          >
            {HERO.primaryCta.label}
          </a>
          <a
            href={HERO.secondaryCta.href}
            data-testid="hero-secondary-cta"
            className="inline-flex h-[52px] items-center rounded-full border border-brand-deep/20 bg-white px-8 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-alabaster md:h-14"
          >
            {HERO.secondaryCta.label}
          </a>
        </div>

        <p data-testid="hero-credibility" className="font-display text-sm italic text-brand-slate">
          {HERO.credibility}
        </p>
      </div>

      <Reveal className="mx-auto mt-14 max-w-6xl md:mt-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-deep/10 shadow-2xl sm:aspect-[16/8] md:aspect-[21/9]">
          <img
            src={ASSETS.heroImage}
            alt="Scholas USA young people in a dialogue encounter in Los Angeles"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-left text-white md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-yellow md:text-xs">
              {HERO.imageCaption.kicker}
            </div>
            <div className="font-display mt-1 text-lg font-medium md:text-xl">
              {HERO.imageCaption.title}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
