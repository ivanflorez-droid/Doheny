import { ArrowUpRight } from "lucide-react";
import { ASSETS, PICO_UNION } from "@/content";
import { Reveal } from "./Reveal";

const TARGET_COLORS = { yellow: "text-brand-yellow", green: "text-brand-green" };

export const PicoUnion = () => {
  return (
    <section
      id="pico-union"
      data-testid="pico-union-section"
      className="bg-brand-deep px-5 py-16 text-white md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <Reveal className="space-y-5 md:col-span-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
            {PICO_UNION.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-white md:text-4xl lg:text-[42px]">
            {PICO_UNION.headline}
          </h2>
          {PICO_UNION.body.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-white/80 md:text-base">
              {p}
            </p>
          ))}
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {PICO_UNION.communityFact}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {PICO_UNION.targets.map((target) => (
              <div
                key={target.unit}
                data-testid={`pico-target-${target.unit.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-2xl border border-white/15 bg-white/10 p-5"
              >
                <div className={`font-display text-3xl font-extrabold md:text-4xl ${TARGET_COLORS[target.accent]}`}>
                  {target.value}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
                  {target.unit}
                </div>
                <div className="mt-1 text-[11px] text-white/60">{target.label}</div>
              </div>
            ))}
          </div>
          <p data-testid="pico-targets-note" className="text-[11px] italic text-white/50">
            {PICO_UNION.targetsNote}
          </p>

          <a
            href={PICO_UNION.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="pico-union-cta"
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {PICO_UNION.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20">
            <img
              src={ASSETS.picoUnionImage}
              alt="Community gathering at St. Thomas the Apostle parish in Pico-Union, Los Angeles"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                {PICO_UNION.imageCaption.kicker}
              </div>
              <div className="font-display mt-1 text-base font-semibold">
                {PICO_UNION.imageCaption.title}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
