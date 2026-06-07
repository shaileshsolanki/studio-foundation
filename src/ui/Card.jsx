import { createElement } from "react";
import { cx } from "./cx.js";

const PADS = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Card — bordered, subtly-raised surface. The studio's default content panel.
 *
 * Props:
 *   interactive: boolean — add hover affordance (border/bg lift)
 *   padding: "none" | "sm" | "md" | "lg"  (default "md")
 *   as: element type — e.g. "article"     (default "div")
 */
export function Card({
  interactive = false,
  padding = "md",
  as = "div",
  className = "",
  children,
  ...rest
}) {
  return createElement(
    as,
    {
      className: cx(
        "ui-card",
        interactive && "ui-card--interactive",
        PADS[padding],
        className,
      ),
      ...rest,
    },
    children,
  );
}
