import { studio, nav } from "../content.js";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300">
          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
            <path
              d="M16 5 L18.4 13.6 L27 16 L18.4 18.4 L16 27 L13.6 18.4 L5 16 L13.6 13.6 Z"
              className="fill-emerald-400"
            />
          </svg>
          {studio.fullName}
        </div>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-neutral-600">
          © {studio.year} {studio.fullName}
        </p>
      </div>
    </footer>
  );
}
