import { createElement } from "react";
import { cx } from "./cx.js";

const SIZES = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

/**
 * Container — centers content with a consistent max-width and gutter.
 * The whole site uses `mx-auto max-w-* px-6`; this captures that once.
 *
 * Props:
 *   size: "sm" | "md" | "lg" | "xl"  (default "lg" — the page default)
 *   as:   element type               (default "div")
 */
export function Container({ size = "lg", as = "div", className = "", children, ...rest }) {
  return createElement(
    as,
    { className: cx("mx-auto w-full px-6", SIZES[size], className), ...rest },
    children,
  );
}
