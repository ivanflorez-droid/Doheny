import { HeartHandshake, CalendarCheck, Megaphone, Users, Sprout } from "lucide-react";
import { IMPACT } from "@/content";
import { Reveal } from "./Reveal";

const ICONS = {
  "heart-handshake": HeartHandshake,
  "calendar-check": CalendarCheck,
  megaphone: Megaphone,
  users: Users,
  sprout: Sprout,
};

const ACCENT_DOTS = ["bg-brand-blue", "bg-brand-yellow", "bg-brand-green", "bg-brand-red", "bg-white"];

export const Impact = () => {
  return (
    <section
      id="impact"
      data-testid="impact-section"
      className="bg-brand-night px-5 py-16 text-white md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-3xl space-y-4 text-center md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
            {IMPACT.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-white md:text-4xl lg:text-[42px]">
            {IMPACT.headline}
          </h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">{IMPACT.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {IMPACT.metrics.map((metric, i) => {
            const Icon = ICONS[metric.icon];
            return (
              <Reveal key={metric.title} delay={i * 100} className="h-full">
                <div
                  data-testid={`impact-card-${metric.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-white/90" strokeWidth={1.75} />
                    <span className={`h-2 w-2 rounded-full ${ACCENT_DOTS[i % ACCENT_DOTS.length]}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{metric.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{metric.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p data-testid="impact-note" className="text-[11px] italic text-white/50">
            {IMPACT.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
