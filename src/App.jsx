function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Studio Foundation
        </p>
        <h1 className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl">
          Ready to build.
        </h1>
        <p className="mt-4 text-balance text-neutral-400">
          React&nbsp;19 &middot; Vite&nbsp;7 &middot; Tailwind&nbsp;v4. This placeholder confirms the
          build, dev server, and deploy pipeline all work. Replace it with the first
          client project.
        </p>
        <p className="mt-8 text-xs text-neutral-600">
          Edit <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-neutral-300">src/App.jsx</code> and save to start.
        </p>
      </div>
    </main>
  )
}

export default App
