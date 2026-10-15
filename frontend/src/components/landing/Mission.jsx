import { ArrowUpRight } from "lucide-react";
import { ASSETS, MISSION } from "@/content";
import { Reveal } from "./Reveal";

export const Mission = () => {
  return (
    <section
      id="mission"
      data-testid="mission-section"
      className="border-y border-brand-deep/10 bg-white px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <Reveal className="space-y-6 md:col-span-7">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            {MISSION.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {MISSION.headline}
          </h2>
          {MISSION.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-brand-slate md:text-lg">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {MISSION.facts.map((fact) => (
              <div
                key={fact.label}
                data-testid={`mission-fact-${fact.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-2xl border border-brand-deep/10 bg-brand-alabaster p-4"
              >
                <div className="font-display text-lg font-medium text-brand-deep">{fact.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand-slate">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href={MISSION.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mission-cta"
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-brand-deep/20 bg-white px-7 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-alabaster"
          >
            {MISSION.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-brand-deep/10 shadow-lg">
            <img
              src={ASSETS.missionImage}
              alt="Scholas USA community gathering with young people in Los Angeles"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                {MISSION.imageCaption.kicker}
              </span>
              <div className="font-display mt-1 text-base font-semibold">
                {MISSION.imageCaption.title}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
