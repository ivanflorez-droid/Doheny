import { MODEL } from "@/content";
import { Reveal } from "./Reveal";

const STEP_STYLES = {
  deep: "bg-brand-deep/10 text-brand-deep border-brand-deep/30",
  blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/40",
  yellow: "bg-brand-yellow/20 text-brand-deep border-brand-yellow/50",
  red: "bg-brand-red/10 text-brand-red border-brand-red/40",
  green: "bg-brand-green/15 text-brand-green border-brand-green/50",
};

export const Model = () => {
  return (
    <section
      id="model"
      data-testid="model-section"
      className="border-y border-brand-deep/10 bg-white px-5 py-16 md:px-9 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-2xl space-y-4 text-center md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            {MODEL.eyebrow}
          </span>
          <h2 className="font-display text-[29px] font-normal leading-tight text-brand-deep md:text-4xl lg:text-[42px]">
            {MODEL.headline}
          </h2>
          <p className="text-sm leading-relaxed text-brand-slate md:text-base">{MODEL.body}</p>
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[10%] right-[10%] top-6 hidden border-t-2 border-dashed border-brand-blue/30 lg:block"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {MODEL.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div
                  data-testid={`model-step-${step.number}`}
                  className="relative z-10 flex flex-col items-center space-y-3 text-center"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold ${STEP_STYLES[step.accent]}`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-display text-base font-semibold text-brand-deep">{step.title}</h3>
                  <p className="max-w-[220px] text-xs leading-relaxed text-brand-slate">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
