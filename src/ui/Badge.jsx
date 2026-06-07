import { cx } from "./cx.js";

/**
 * Badge — small pill label, optionally with the accent status dot.
 * Used for eyebrows and "Design & build studio"-style tags.
 *
 * Props:
 *   dot: boolean — show the leading accent dot (default false)
 */
export function Badge({ dot = false, className = "", children, ...rest }) {
  return (
    <span className={cx("ui-badge", className)} {...rest}>
      {dot && <span className="ui-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
