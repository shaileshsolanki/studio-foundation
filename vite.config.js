import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path is "/" for local dev/preview and for Vercel/Netlify.
// On GitHub Pages a project site is served under /<repo>/, so the
// deploy workflow sets VITE_BASE=/<repo>/ at build time.
const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
