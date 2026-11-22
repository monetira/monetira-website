import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { StudioPageHeader, Eyebrow } from '../components/Studio'
import TallyEmbed from '../components/TallyEmbed'
import { site } from '../data/site'
import { contactStudio } from '../data/studio'

export default function Contact() {
  return (
    <>
      <StudioPageHeader eyebrow={contactStudio.eyebrow} title={contactStudio.title}>
        <p>{contactStudio.intro}</p>
      </StudioPageHeader>

      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_360px]">
          {/* Public project inquiry form: set contactTallyUrl in data/site.ts */}
          {site.contactTallyUrl ? (
            <div>
              <TallyEmbed urlOrId={site.contactTallyUrl} title="Project inquiry form" loadingLabel="Loading the project inquiry form..." />
              <p className="mt-4 text-sm text-charcoal/70">
                We use the information you provide to respond to your inquiry. Read our{' '}
                <Link to="/privacy" className="font-semibold text-teal underline hover:text-teal-dark">Privacy Policy</Link>.
              </p>
            </div>
          ) : (
            <div className="rounded-3xl border border-line bg-white p-8 md:p-12">
              <h2 className="font-serif text-4xl font-normal">Project inquiry</h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">{contactStudio.pending}</p>
              {site.contactEmail && (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 font-semibold text-ivory transition-colors hover:bg-teal"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" /> {site.contactEmail}
                </a>
              )}
            </div>
          )}

          <aside>
            <Eyebrow>{contactStudio.nextTitle}</Eyebrow>
            <ol className="mt-6 border-t border-charcoal">
              {contactStudio.next.map((step, i) => (
                <li key={step} className="flex gap-4 border-b border-line py-5">
                  <span className="font-serif text-3xl leading-none text-teal">{String(i + 1).padStart(2, '0')}</span>
                  <span className="leading-relaxed text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
            {site.contactEmail && (
              <p className="mt-8 text-sm text-charcoal/70">
                Prefer email? <a href={`mailto:${site.contactEmail}`} className="font-semibold text-teal hover:text-teal-dark">{site.contactEmail}</a>
              </p>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
