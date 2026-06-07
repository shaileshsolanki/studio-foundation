import { useId } from "react";
import { cx } from "./cx.js";

/**
 * Input — a labelled text field with built-in id wiring, error text, and
 * accessible aria-invalid / aria-describedby plumbing.
 *
 * Props:
 *   label: string (required for a11y; pass aria-label instead if omitting)
 *   error: string — shown below, marks the field invalid
 *   hint:  string — helper text below the field
 *   as:    "input" | "textarea" | "select"  (default "input")
 *   ...rest spreads onto the control (name, type, required, rows, etc.)
 */
export function Input({
  label,
  error,
  hint,
  as = "input",
  id,
  className = "",
  children,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const describedBy = error
    ? `${fieldId}-error`
    : hint
      ? `${fieldId}-hint`
      : undefined;

  const controlProps = {
    id: fieldId,
    className: cx("ui-field", as === "textarea" && "resize-y", className),
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    ...rest,
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={fieldId} className="ui-label">
          {label}
        </label>
      )}

      {as === "textarea" ? (
        <textarea {...controlProps} />
      ) : as === "select" ? (
        <select {...controlProps}>{children}</select>
      ) : (
        <input {...controlProps} />
      )}

      {hint && !error && (
        <p id={`${fieldId}-hint`} className="text-sm text-ink-faint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${fieldId}-error`} className="text-sm" style={{ color: "oklch(0.72 0.17 25)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
