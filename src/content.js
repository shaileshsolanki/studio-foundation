// Central content for the studio landing site.
// Copy lives here so it can be edited without touching component markup.

export const studio = {
  name: "Northlight",
  fullName: "Northlight Studio",
  tagline: "A small, senior studio that designs and builds the web.",
  email: "hello@northlight.studio",
  year: "2026",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Frontend development",
    blurb:
      "Fast, accessible, framework-grade interfaces. React, modern CSS, and a build pipeline tuned for Core Web Vitals — not just demos that look good in a screenshot.",
    points: ["React & TypeScript", "Design-system engineering", "Performance & a11y"],
  },
  {
    title: "UI/UX design",
    blurb:
      "Interfaces that are obvious to use and a pleasure to look at. We design in the medium — real type, real spacing, real states — so what we ship is what you saw.",
    points: ["Product & marketing UI", "Design systems", "Prototyping"],
  },
  {
    title: "WordPress",
    blurb:
      "Bespoke themes and block editor builds that hand the keys back to your team. Editor-friendly, fast, and a world away from a bloated page-builder template.",
    points: ["Custom block themes", "Headless WP", "Content modelling"],
  },
  {
    title: "End-to-end delivery",
    blurb:
      "One team from first sketch to production deploy. Discovery, design, build, QA, and launch — owned by the people who actually do the work.",
    points: ["Discovery & strategy", "Build & QA", "Launch & handover"],
  },
];

// Placeholder case studies — swap for real engagements as they ship.
export const work = [
  {
    client: "Meridian Health",
    title: "Patient portal redesign",
    category: "Product UI · Frontend",
    summary:
      "Rebuilt a clunky portal into a calm, accessible dashboard. Task completion up, support tickets down.",
    metric: "−38% support load",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    client: "Atlas Outdoors",
    title: "Commerce storefront",
    category: "WordPress · Frontend",
    summary:
      "A headless WordPress storefront with sub-second loads and an editor your marketing team actually enjoys.",
    metric: "0.9s median load",
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    client: "Cadence Fintech",
    title: "Brand & marketing site",
    category: "UI/UX · End-to-end",
    summary:
      "From positioning to launch in six weeks. A site that finally looked as serious as the product behind it.",
    metric: "6-week delivery",
    accent: "from-fuchsia-500/20 to-rose-500/10",
  },
];

export const stats = [
  { value: "12+", label: "Years shipping for the web" },
  { value: "40+", label: "Products designed & built" },
  { value: "AA", label: "Accessibility, by default" },
];
