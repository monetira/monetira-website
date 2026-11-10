import { X } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AuditGraphic from '../components/AuditGraphic'
import AuditDetails from '../components/AuditDetails'
import ProcessSteps from '../components/ProcessSteps'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import SnapshotBand from '../components/SnapshotBand'
import { audit, formatPrice } from '../data/site'
import { auditSection, auditPage } from '../data/content'

export default function Audit() {
  return (
    <>
      <PageHeader eyebrow={auditSection.eyebrow} title={auditSection.title}>
        <p>{auditSection.intro}</p>
      </PageHeader>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="rounded-3xl border border-bronze/40 bg-ivory p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{audit.priceLabel}</p>
            <p className="mt-2 font-heading text-6xl font-extrabold">{formatPrice(audit.price)}</p>
            <p className="mt-2 text-ink-soft">Business Opportunity Audit</p>
            {audit.turnaround && (
              <p className="mt-4 text-sm text-ink-soft">
                <span className="font-semibold text-charcoal">Turnaround:</span> {audit.turnaround}
              </p>
            )}
            <div className="mt-8">
              <Button to="/contact?topic=audit" arrow>
                {auditSection.cta}
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-soft">{auditPage.paymentNote}</p>
          </div>
          <AuditGraphic />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AuditDetails />
          <p className="mt-8 text-sm italic text-ink-soft">{auditSection.note}</p>
        </div>
      </section>

      <section className="border-y border-line bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Process" title={auditPage.howTitle} />
          <div className="mt-16">
            <ProcessSteps steps={auditPage.how} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-20">
          <SectionHeading eyebrow="Your information" title={auditPage.notAskTitle} />
          <ul className="space-y-3">
            {auditPage.notAsk.map((n) => (
              <li key={n} className="flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4">
                <X aria-hidden="true" className="h-4 w-4 shrink-0 text-bronze" strokeWidth={2.2} />
                <span className="font-medium">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-line">
        <SnapshotBand />
      </div>
    </>
  )
}
