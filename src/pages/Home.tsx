import { CircleCheck } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import CtaSection from '../components/CtaSection'
import Button from '../components/Button'
import { audit, formatPrice } from '../data/site'
import AuditGraphic from '../components/AuditGraphic'
import AuditDetails from '../components/AuditDetails'
import SnapshotBand from '../components/SnapshotBand'
import { missingSection, aiSection, processSection, auditSection, aboutSection, finalCta } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />

      {/* A: What could your business be missing */}
      <section className="border-t border-line bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={missingSection.eyebrow} title={missingSection.title} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {missingSection.services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <SnapshotBand />

      {/* B: Why AI matters */}
      <section className="border-t border-line bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20">
          <div>
            <SectionHeading eyebrow={aiSection.eyebrow} title={aiSection.title} />
          </div>
          <div>
            {aiSection.paragraphs.map((p) => (
              <p key={p} className="mb-5 text-lg leading-relaxed text-ink-soft">{p}</p>
            ))}
            <p className="mb-8 border-l-2 border-bronze pl-5 font-heading text-lg font-semibold text-charcoal">
              {aiSection.closing}
            </p>
            <ul className="space-y-4">
              {aiSection.points.map((pt) => (
                <li key={pt} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                  <CircleCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={1.8} />
                  <span className="font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* C: How Monetira works */}
      <section className="border-y border-line py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={processSection.eyebrow} title={processSection.title} />
          <div className="mt-16">
            <ProcessSteps steps={processSection.steps} />
          </div>
        </div>
      </section>

      {/* D: The Business Opportunity Audit */}
      <section id="audit" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <SectionHeading eyebrow={auditSection.eyebrow} title={auditSection.title} />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{auditSection.intro}</p>
              <div className="mt-8 inline-flex items-baseline gap-4 rounded-2xl border border-bronze/40 bg-white px-7 py-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{audit.priceLabel}</span>
                <span className="font-heading text-4xl font-extrabold">{formatPrice(audit.price)}</span>
              </div>
            </div>
            <AuditGraphic />
          </div>

          <div className="mt-16">
            <AuditDetails />
          </div>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm italic text-ink-soft">{auditSection.note}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/audit" variant="secondary">Audit details</Button>
              <Button to="/contact?topic=audit" arrow>
                {auditSection.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* E: About */}
      <section className="border-t border-line py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20">
          <SectionHeading eyebrow={aboutSection.eyebrow} title={aboutSection.title} />
          <div>
            {aboutSection.paragraphs.map((p) => (
              <p key={p} className="mb-5 text-lg leading-relaxed text-ink-soft">{p}</p>
            ))}
            <div className="mt-8">
              <Button to="/about" variant="secondary">
                More about Monetira
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* F: Final CTA */}
      <CtaSection title={finalCta.title} supporting={finalCta.supporting} button={finalCta.button} to="/snapshot" />
    </>
  )
}
