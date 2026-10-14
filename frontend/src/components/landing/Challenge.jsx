import { Heart, Users, HandHeart } from "lucide-react";
import { CHALLENGE } from "@/content";
import { Reveal } from "./Reveal";

const ICONS = { heart: Heart, users: Users, "hand-heart": HandHeart };

const ACCENTS = {
  blue: { chip: "bg-brand-blue/10 text-brand-blue", bar: "bg-brand-blue" },
  yellow: { chip: "bg-brand-yellow/20 text-brand-deep", bar: "bg-brand-yellow" },
  green: { chip: "bg-brand-green/15 text-brand-green", bar: "bg-brand-green" },
};

export const Challenge = () => {
  return (
    <section
      id="challenge"
      data-testid="challenge-section"
      className="px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-3xl space-y-5 text-center md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            {CHALLENGE.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {CHALLENGE.headline}
          </h2>
          {CHALLENGE.body.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-brand-slate md:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHALLENGE.cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            const accent = ACCENTS[card.accent];
            return (
              <Reveal key={card.title} delay={i * 120} className="h-full">
                <div
                  data-testid={`challenge-card-${card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="relative h-full overflow-hidden rounded-2xl border border-brand-deep/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className={`absolute left-0 top-0 h-full w-1 ${accent.bar}`} aria-hidden="true" />
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ${accent.chip}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-brand-deep">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-slate">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
