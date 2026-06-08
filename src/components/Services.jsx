import { services } from "../content.js";
import { Reveal } from "./Reveal.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-emerald-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What we do"
          title="One team for the whole build."
          intro="Most studios hand you off between specialists. We don't. The people who design your product are the ones who ship it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 2) * 80}
              className="ui-card ui-card--interactive group relative p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold tabular-nums text-emerald-400/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-neutral-100">{service.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
                {service.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-sm text-neutral-300">
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
