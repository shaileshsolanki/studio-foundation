# Studio Foundation

The shared frontend foundation our studio builds every client project on top of.
A clean, fast, production-ready scaffold so each engagement starts from a known-good
baseline instead of a blank folder.

**Stack:** React 19 · Vite 7 · Tailwind CSS v4 · ESLint (flat config)

---

## Prerequisites

- **Node.js 20+** (developed on Node 24)
- **npm 10+**

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server with HMR → http://localhost:5173
```

## Scripts

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Vite dev server with hot module replacement (port 5173).            |
| `npm run build`   | Production build to `dist/` (hashed, minified, gzipped assets).     |
| `npm run preview` | Serve the production build locally to verify it → http://localhost:4173 |
| `npm run lint`    | Lint all JS/JSX with ESLint.                                        |

## Project structure

```
.
├── index.html          # App entry HTML (Vite injects the bundle)
├── public/             # Static assets served as-is (favicon, etc.)
├── src/
│   ├── main.jsx        # React root render
│   ├── App.jsx         # Root component (currently the placeholder page)
│   └── index.css       # Tailwind entry (@import "tailwindcss")
├── vite.config.js      # Vite + React + Tailwind plugins
├── eslint.config.js    # ESLint flat config
├── vercel.json         # Vercel deploy config
└── netlify.toml        # Netlify deploy config (alternative)
```

## Styling

Tailwind v4 is wired through the official Vite plugin (`@tailwindcss/vite`) — there
is **no `tailwind.config.js`**; configuration lives in CSS via `@import "tailwindcss"`
in `src/index.css`. Add design tokens with `@theme {}` in that file when the design
system lands.

---

## Deploy

The build is a static SPA: `npm run build` emits everything to `dist/`. Any static
host works. Two zero-config options are committed and ready:

**Recommended: Vercel** (`vercel.json`)
- Connect the repo in the Vercel dashboard, or run `npx vercel` / `npx vercel --prod`.
- Build command `npm run build`, output `dist`, framework `vite` — already declared.
- A catch-all rewrite to `/index.html` is configured so client-side routes resolve.

**Alternative: Netlify** (`netlify.toml`)
- Connect the repo, or run `npx netlify deploy --prod`.
- Build command and `publish = "dist"` plus an SPA redirect are already declared.

**Why Vercel as the default:** first-class Vite support, instant preview deploys per
PR (useful for design review on client work), and a generous free tier. Netlify is an
equivalent fallback if a client already standardizes on it. **Final hosting choice is
the CEO's call** — both paths are wired so switching is a dashboard decision, not a
code change.

### Local "deploy" verification

Until a host is connected, the production build is verifiable locally:

```bash
npm run build && npm run preview   # serves dist/ at http://localhost:4173
```

This is the same `dist/` that gets uploaded to any host, so a passing local preview
is a faithful smoke test of the deploy artifact.
