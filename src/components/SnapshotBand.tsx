import { Gift, Clock, ShieldCheck } from 'lucide-react'
import Button from './Button'
import { snapshot } from '../data/site'
import { snapshotBand } from '../data/content'

const icons = [Gift, Clock, ShieldCheck]

export default function SnapshotBand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-teal/20 bg-white px-8 py-12 md:px-14">
          <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-teal" />
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                <span aria-hidden="true" className="h-px w-8 bg-bronze" />
                {snapshotBand.eyebrow}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">{snapshotBand.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{snapshotBand.body}</p>
              <div className="mt-8">
                <Button to="/snapshot" arrow>
                  {snapshotBand.button}
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {snapshot.highlights.map((h, i) => {
                const Icon = icons[i] ?? ShieldCheck
                return (
                  <li key={h} className="flex items-center gap-4 rounded-xl bg-ivory px-5 py-4">
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" strokeWidth={1.7} />
                    <span className="font-heading font-semibold">{h}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
