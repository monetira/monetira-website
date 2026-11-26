import { site } from '../data/site'

// Simplified Privacy Policy (approved Nov 26, 2026).
export default function Privacy() {
  const email = site.contactEmail
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p className="lede">Last updated: {site.privacyLastUpdated}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow prose">
          <p>
            Monetira collects contact and business information that you voluntarily provide to respond to inquiries,
            perform business reviews and deliver requested services.
          </p>
          <p>
            We use third-party services, including Tally, Gmail and AI-assisted tools such as ChatGPT and Claude, to
            support our work. Findings and recommendations are reviewed by a person before delivery.
          </p>
          <p>
            We do not sell your information or use it for advertising. Our website does not use advertising or analytics
            trackers. Third-party services may use cookies or collect technical information, including IP addresses,
            under their own privacy policies.
          </p>
          <p>
            Please do not submit passwords, account numbers, sensitive financial documents or personal information about
            employees or customers.
          </p>
          <p>Information is retained as reasonably necessary to provide our services and maintain business records.</p>
          <p>
            For privacy questions or requests to access, correct or delete your information, contact{' '}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
