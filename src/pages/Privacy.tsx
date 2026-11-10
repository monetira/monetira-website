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
              collect only what we need to respond to you and to review your business.
            </p>
          </div>

          <div>
            <h2>Information you provide</h2>
            <p>When you complete the Free Business Snapshot or the contact form, we collect:</p>
            <ul className="mt-3">
              <li>Your name and email address</li>
              <li>Your business name, and your website and phone number if you choose to share them</li>
              <li>Your answers to the Snapshot questions and any message you write</li>
            </ul>
            <p className="mt-3">
              Please do not submit confidential financial records, customer lists, passwords, or other sensitive data.
            </p>
          </div>

          <div>
            <h2>How we use it</h2>
            <ul>
              <li>To review your business and prepare a response</li>
              <li>To reply to your questions and requests</li>
              <li>To follow up about services you have asked about</li>
            </ul>
            <p className="mt-3">We do not sell or rent your information.</p>
          </div>

          <div>
            <h2>How forms are processed</h2>
            <p>
              This website does not store form submissions itself. Submissions are delivered through {provider}, which
              processes the information on our behalf so it can reach us.
            </p>
          </div>

          <div>
            <h2>Cookies and analytics</h2>
            <p>
              This website does not use advertising cookies or analytics tracking. The site is hosted on GitHub Pages,
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
