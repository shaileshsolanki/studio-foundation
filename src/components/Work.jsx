import { work } from "../content.js";
import { Reveal } from "./Reveal.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

/** Decorative thumbnail — gradient panel with the client's monogram. */
function Thumb({ client, accent }) {
  const initials = client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accent}`}
      aria-hidden="true"
    >
      <span className="text-5xl font-bold text-white/80">{initials}</span>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,0,0,0.35),_transparent_60%)]" />
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things we've shipped."
          intro="A sample of recent engagements. Names and details are illustrative placeholders until our case studies are published."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 90}
              as="article"
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20"
            >
              <Thumb client={item.client} accent={item.accent} />
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-100">
                  {item.client} — {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                  {item.summary}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  {item.metric}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-100 transition-colors hover:text-emerald-400"
          >
            Want to be next?
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
