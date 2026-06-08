import { createElement } from "react";
import { useReveal } from "../useReveal.js";

/**
 * Wraps children in a scroll-revealed container.
 * `delay` (ms) staggers grouped items; `as` picks the element tag.
 *
 * Rendered via createElement (rather than a renamed `<Tag>` in JSX) so the
 * dynamic tag is an unambiguous reference for both React and the linter.
 */
export function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();
  return createElement(
    as,
    {
      ref,
      "data-reveal": "",
      style: delay ? { "--reveal-delay": `${delay}ms` } : undefined,
      className,
      ...rest,
    },
    children,
  );
}
