import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { site } from '../data/site'

// Plain-language privacy policy that reflects how this site actually works.
// Have it reviewed before launch, and update it if you add analytics,
// payments, or a different form provider.
export default function Privacy() {
  const provider = site.formProviderName || 'a third-party form service'
  return (
    <>
      <PageHeader eyebrow="Privacy Policy" title="Privacy Policy">
        <p>Last updated: {site.privacyLastUpdated}</p>
      </PageHeader>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-relaxed text-ink-soft [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
          <div>
            <h2>Overview</h2>
            <p>
              This policy explains what information Monetira collects through monetira.com and how it is used. We
              collect only what we need to respond to your inquiry and, if you become a client, to plan and build your website.
            </p>
          </div>

          <div>
            <h2>Information you provide</h2>
            <p>We collect information only when you choose to send it to us through one of two forms:</p>
            <ul className="mt-3">
              <li>
                <strong className="text-charcoal">Project inquiry form</strong> (on our Contact page): your name, email
                address, business name, and the details you share about your business and your project.
              </li>
              <li>
                <strong className="text-charcoal">Website Vision questionnaire</strong> (sent privately to clients after
                we agree on a project): information about your business, customers, services, branding, visual
                preferences, website content, pages, and domain.
              </li>
            </ul>
            <p className="mt-3">
              Please do not submit passwords, payment card details, financial account numbers, or other sensitive
              personal data through either form.
            </p>
          </div>

          <div>
            <h2>How we use it</h2>
            <ul>
              <li>To respond to your inquiry and discuss your project</li>
              <li>To prepare a proposal and agree on scope</li>
              <li>To design and build your website if you become a client</li>
              <li>To follow up about the services you have asked about</li>
            </ul>
            <p className="mt-3">We do not sell or rent your information, and we do not add you to a mailing list without your permission.</p>
          </div>

          <div>
            <h2>How forms are processed</h2>
            <p>
              Both forms are provided by {provider}, a third-party form service. Your answers are submitted to and
              stored by {provider} on our behalf, and a notification is sent to our business email so we can reply.
              This website does not store form submissions itself. {provider}'s handling of data is described in its
              own privacy policy.
            </p>
          </div>

          <div>
            <h2>Cookies and analytics</h2>
            <p>
              This website does not use advertising cookies or analytics tracking. The site is hosted on Cloudflare Pages,
              which may record basic technical information, such as IP addresses, for security and operations.
            </p>
          </div>

          <div>
            <h2>Keeping and deleting your information</h2>
            <p>
              We keep your information only as long as needed for the purposes above. You can ask us to access,
              correct, or delete your information at any time by{' '}
              {site.contactEmail ? (
                <>
                  emailing <a href={`mailto:${site.contactEmail}`} className="font-semibold text-teal underline">{site.contactEmail}</a>
                </>
              ) : (
                <>
                  using our <Link to="/contact" className="font-semibold text-teal underline">contact form</Link>
                </>
              )}
              .
            </p>
          </div>

          <div>
            <h2>Changes to this policy</h2>
            <p>If this policy changes, the updated version will be posted on this page with a new date.</p>
          </div>
        </div>
      </section>
    </>
  )
}
