import { Mail, Phone, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import TallyEmbed from '../components/TallyEmbed'
import Button from '../components/Button'
import { site } from '../data/site'
import { contactPage } from '../data/content'

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={contactPage.title}>
        <p>{contactPage.intro}</p>
      </PageHeader>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_320px]">
          {site.contactTallyUrl ? <TallyEmbed urlOrId={site.contactTallyUrl} title="Contact form" /> : <ContactForm />}
          <aside className="space-y-6">
            {(site.contactEmail || site.contactPhone || site.location) && (
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Direct contact</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {site.contactEmail && (
                    <li className="flex items-center gap-3">
                      <Mail aria-hidden="true" className="h-4 w-4 text-teal" />
                      <a href={`mailto:${site.contactEmail}`} className="hover:text-teal">{site.contactEmail}</a>
                    </li>
                  )}
                  {site.contactPhone && (
                    <li className="flex items-center gap-3">
                      <Phone aria-hidden="true" className="h-4 w-4 text-teal" />
                      {site.contactPhone}
                    </li>
                  )}
                  {site.location && (
                    <li className="flex items-center gap-3">
                      <MapPin aria-hidden="true" className="h-4 w-4 text-teal" />
                      {site.location}
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border border-teal/25 bg-white p-6">
              <h2 className="font-heading text-lg font-bold">Not sure where to start?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The Free Business Snapshot is a quick way to begin. There is no obligation to purchase.
              </p>
              <div className="mt-5">
                <Button to="/snapshot" arrow>Free Snapshot</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
