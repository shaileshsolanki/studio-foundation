/**
 * Tiny class-name joiner. Filters out falsy values so conditional classes
 * read cleanly: cx("ui-btn", isActive && "ui-btn--primary", className).
 */
export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
