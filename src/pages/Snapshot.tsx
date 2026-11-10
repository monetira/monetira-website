import { Check, Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Questionnaire from '../components/Questionnaire'
import TallyEmbed from '../components/TallyEmbed'
import { site, snapshot } from '../data/site'
import { snapshotPage } from '../data/content'

export default function Snapshot() {
  // When the Tally form is set, it supplies its own headline, questions,
  // consent, and thank-you page, so the page shows only the form.
  if (site.snapshotTallyUrl) {
    return (
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="sr-only">Free Business Checkup</h1>
          <TallyEmbed urlOrId={site.snapshotTallyUrl} title="Free Business Checkup questionnaire" />
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader eyebrow={snapshot.name} title="Find Out Where a Closer Look Could Help.">
        <p>{snapshotPage.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
          {snapshot.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 font-medium text-charcoal">
              <Check aria-hidden="true" className="h-4 w-4 text-teal" strokeWidth={2.2} />
              {h}
            </li>
          ))}
        </ul>
      </PageHeader>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_280px]">
          <Questionnaire />
          <aside className="space-y-4 lg:pt-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Before you begin</h2>
            {snapshotPage.notes.map((n) => (
              <p key={n} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {n}
              </p>
            ))}
            {snapshot.responseTime && (
              <p className="text-sm text-ink-soft">
                <span className="font-semibold text-charcoal">Response time:</span> {snapshot.responseTime}
              </p>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
