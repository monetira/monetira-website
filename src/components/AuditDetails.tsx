import { Check, Clock } from 'lucide-react'
import { audit } from '../data/site'
import { auditSection } from '../data/content'

// Scope, deliverables, turnaround, and the results note. Used on the
// homepage and the Business Opportunity Audit page. Edit the lists in
// src/data/site.ts.
export default function AuditDetails() {
  const cols = [
    { title: auditSection.examinesTitle, items: audit.scope, accent: false },
    { title: auditSection.deliverablesTitle, items: audit.deliverables, accent: true },
  ]
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {cols.map((col) => (
          <div
            key={col.title}
            className={`rounded-2xl border bg-white p-8 ${col.accent ? 'border-teal/30' : 'border-line'}`}
          >
            <h3 className="text-xl font-bold">{col.title}</h3>
            <ul className="mt-6 space-y-3.5">
              {col.items.map((it) => (
                <li key={it} className="flex gap-3 text-ink-soft">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2.2} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {audit.turnaround && (
        <p className="mt-6 flex items-center gap-3 text-ink-soft">
          <Clock aria-hidden="true" className="h-4 w-4 text-teal" />
          <span>
            <span className="font-semibold text-charcoal">Turnaround:</span> {audit.turnaround}
          </span>
        </p>
      )}
    </>
  )
}
