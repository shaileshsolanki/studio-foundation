import { studio, stats } from "../content.js";
import { Reveal } from "./Reveal.jsx";
import { Badge, Button } from "../ui/index.js";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/3 animate-drift rounded-full bg-emerald-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_60%)]"
      />

      <div className="mx-auto max-w-4xl text-center">
        <Reveal as="div" className="mb-6">
          <Badge dot>Design &amp; build studio</Badge>
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight text-transparent text-balance sm:text-6xl lg:text-7xl"
        >
          We design and build
          <br className="hidden sm:block" /> the web, properly.
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 text-balance"
        >
          {studio.fullName} is a small, senior team crafting fast, accessible
          frontends, considered UI/UX, and bespoke WordPress — from first pixel
          to production deploy.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button as="a" href="#contact" className="w-full sm:w-auto">
            Start a project
          </Button>
          <Button as="a" href="#work" variant="secondary" className="w-full sm:w-auto">
            See our work
          </Button>
        </Reveal>
      </div>

      <Reveal
        delay={320}
        className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-neutral-950 px-4 py-6 text-center sm:px-6">
            <div className="text-2xl font-bold text-neutral-100 sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
