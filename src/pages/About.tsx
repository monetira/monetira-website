import { Briefcase, Building2, Handshake, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CtaSection from '../components/CtaSection'
import { aboutSection, aboutPage, finalCta } from '../data/content'

const bgIcons = [Building2, Handshake, Users, Briefcase]

export default function About() {
  return (
    <>
      <PageHeader eyebrow={aboutSection.eyebrow} title={aboutSection.title}>
        <p>{aboutSection.paragraphs[0]}</p>
      </PageHeader>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20">
          <SectionHeading eyebrow={aboutPage.backgroundEyebrow} title={aboutPage.backgroundTitle} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutPage.background.map((b, i) => {
              const Icon = bgIcons[i] ?? Briefcase
              return (
                <li key={b} className="rounded-2xl border border-line bg-ivory p-6">
                  <Icon aria-hidden="true" className="h-5 w-5 text-teal" strokeWidth={1.6} />
                  <p className="mt-4 font-heading font-semibold leading-snug">{b}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20">
          <SectionHeading eyebrow={aboutPage.independentEyebrow} title={aboutPage.independentTitle} />
          <div>
            {aboutPage.independent.map((p) => (
              <p key={p} className="mb-5 text-lg leading-relaxed text-ink-soft">{p}</p>
            ))}
            <p className="mt-8 border-l-2 border-bronze pl-5 font-heading text-lg font-semibold">
              {aboutSection.paragraphs[1]}
            </p>
          </div>
        </div>
      </section>

      <CtaSection title={finalCta.title} supporting={finalCta.supporting} button={finalCta.button} to="/snapshot" />
    </>
  )
}
