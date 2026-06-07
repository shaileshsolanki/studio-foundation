import { createElement } from "react";
import { cx } from "./cx.js";

/**
 * Typography scale — one place that defines the studio's type ramp so
 * headings and body copy stay consistent across projects.
 *
 * Each component renders a sensible default tag but accepts `as` to keep
 * the document outline correct (e.g. a Display rendered as an <h2>).
 */

const DISPLAY =
  "text-4xl font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl";
const H1 = "text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl";
const H2 = "text-2xl font-semibold tracking-tight text-ink sm:text-3xl";
const H3 = "text-xl font-semibold text-ink";
const LEAD = "text-lg leading-relaxed text-ink-muted";
const BODY = "text-[15px] leading-relaxed text-ink-muted";
const EYEBROW =
  "text-xs font-semibold uppercase tracking-widest text-accent";

function make(defaultTag, base) {
  return function TypographyComponent({ as = defaultTag, className = "", children, ...rest }) {
    return createElement(as, { className: cx(base, className), ...rest }, children);
  };
}

/** Hero-scale display text. Default tag: h1. */
export const Display = make("h1", DISPLAY);
/** Section/page heading. Default tag: h1. */
export const Heading = make("h1", H1);
/** Sub-section heading. Default tag: h2. */
export const Subheading = make("h2", H2);
/** Card / small heading. Default tag: h3. */
export const Title = make("h3", H3);
/** Intro / lead paragraph. Default tag: p. */
export const Lead = make("p", LEAD);
/** Default body copy. Default tag: p. */
export const Text = make("p", BODY);
/** Uppercase accent label above a heading. Default tag: p. */
export const Eyebrow = make("p", EYEBROW);
