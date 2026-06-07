import { createElement } from "react";
import { cx } from "./cx.js";

/**
 * Button — the studio's primary call-to-action primitive.
 *
 * Polymorphic: pass `as="a"` (or any tag/component) to render a link that
 * looks like a button — the portfolio uses anchor CTAs throughout.
 *
 * Props:
 *   variant: "primary" | "secondary" | "ghost"  (default "primary")
 *   size:    "sm" | "md" | "lg"                  (default "md")
 *   as:      element type                        (default "button")
 *   fullWidth: boolean — stretch to container width
 */
export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  className = "",
  type,
  children,
  ...rest
}) {
  // Only set a default `type` when actually rendering a <button>.
  const resolvedType = as === "button" ? type ?? "button" : type;

  return createElement(
    as,
    {
      type: resolvedType,
      className: cx(
        "ui-btn",
        `ui-btn--${variant}`,
        `ui-btn--${size}`,
        fullWidth && "w-full",
        className,
      ),
      ...rest,
    },
    children,
  );
}
