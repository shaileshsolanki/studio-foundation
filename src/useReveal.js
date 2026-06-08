import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook. Attach the returned ref to an element that carries the
 * `data-reveal` attribute; when it scrolls into view we flip it to
 * `data-reveal="in"`, which CSS animates. Reduced-motion users see no
 * animation (handled in index.css) and still get fully visible content.
 *
 * @param {{ once?: boolean }} [options]
 */
export function useReveal({ once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.dataset.reveal = "in";
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.dataset.reveal = "";
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return ref;
}
