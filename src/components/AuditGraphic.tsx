// A restrained, illustrative "audit report" graphic. It shows the structure
// of an audit (areas reviewed, priorities, action plan), not real results.
const areas = ['Revenue', 'Operations', 'AI & Automation', 'Customer Experience']

export default function AuditGraphic() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm select-none">
      {/* back sheet */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-2 rounded-2xl border border-line bg-white/70" />
      {/* front sheet */}
      <div className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_24px_48px_-28px_rgba(37,37,37,0.35)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze">Monetira</p>
            <p className="mt-1 font-heading text-lg font-bold leading-tight">Business Opportunity Audit</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-bronze/60">
            <div className="h-7 w-7 rounded-full border border-bronze/30" />
          </div>
        </div>

        <div className="my-6 h-px bg-line" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">Areas reviewed</p>
        <ul className="mt-3 space-y-3">
          {areas.map((a, i) => (
            <li key={a} className="flex items-center gap-3">
              <span className="w-32 shrink-0 text-xs font-medium text-charcoal">{a}</span>
              <span className="h-1.5 flex-1 rounded-full bg-ivory">
                <span className="block h-1.5 rounded-full bg-teal/70" style={{ width: `${[72, 55, 64, 48][i]}%` }} />
              </span>
            </li>
          ))}
        </ul>

        <div className="my-6 h-px bg-line" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">Action plan</p>
        <ol className="mt-3 space-y-2.5">
          {[0, 1, 2].map((i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-charcoal font-heading text-[10px] font-bold text-ivory">
                {i + 1}
              </span>
              <span className="h-1.5 rounded-full bg-line" style={{ width: `${[78, 64, 52][i]}%` }} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
