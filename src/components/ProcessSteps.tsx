type Step = { title: string; description: string }

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-4 md:gap-8">
      <div aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-bronze/60 bg-ivory font-heading text-lg font-bold text-charcoal">
            {String(i + 1).padStart(2, '0')}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Step {i + 1}</p>
          <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{s.description}</p>
        </li>
      ))}
    </ol>
  )
}
