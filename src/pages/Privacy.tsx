import { site } from '../data/site'

export default function Privacy() {
  const email = site.contactEmail
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">Privacy Policy</span>
          <h1>How we handle your information.</h1>
          <p className="lede">Last updated: {site.privacyLastUpdated}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow prose">
          <p>
            This policy explains what information Monetira collects through this website and during a business review,
            how it is used, and which outside services help process it. We aim to keep it plain and accurate.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li><b>Inquiry form:</b> your name, email address, business name, basic business details, and the concerns you choose to share.</li>
            <li><b>Business review questionnaire (clients only):</b> information about how your business operates, such as expenses, vendors, processes, and customer follow-up, at the level of detail you choose to provide.</li>
            <li><b>Email:</b> anything you send us directly by email.</li>
          </ul>
          <p>
            We ask that you do not send passwords, bank or account information, tax returns, or personal information
            about your employees or customers. If you include something we didn't ask for, we may delete it.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your inquiry and communicate with you about a review or other service.</li>
            <li>To evaluate your business and prepare your findings, recommendations, and action checklist.</li>
            <li>To keep basic records of our client work.</li>
          </ul>
          <p>We do not sell your information, and we do not use it for advertising.</p>

          <h2>Services that help process your information</h2>
          <ul>
            <li>
              <b>Tally.</b> Our inquiry form and questionnaires are built with Tally, a third-party form service. Your
              answers are submitted to and stored by Tally, which may use cookies to operate the form. Tally's own
              privacy policy applies to its handling of your data.
            </li>
            <li>
              <b>Email.</b> Form notifications and our correspondence with you pass through our email provider.
            </li>
            <li>
              <b>AI-assisted tools.</b> We may use AI-assisted tools, such as ChatGPT or Claude, to help organize your
              answers, analyze information, and draft materials for your review. These are tools we use to support our
              work. Every finding and recommendation is reviewed by a person before you receive it.
            </li>
            <li>
              <b>Website hosting.</b> Our hosting provider may automatically record basic technical information, such
              as IP addresses and browser type, when you visit the site. This website does not use advertising or
              analytics trackers.
            </li>
          </ul>
          <p>
            Because these services are operated by other companies, we can't control or guarantee how they store or
            secure information, but we choose reputable services and share only what is needed.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep inquiry and review information only as long as reasonably needed to provide our services and keep
            basic business records. You can ask us to delete your information at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            You can request a copy of the information you've given us, ask us to correct it, or ask us to delete it by
            emailing <a href={`mailto:${email}`}>{email}</a>. Information already processed by third-party services may
            also be subject to their own deletion processes.
          </p>

          <h2>Children</h2>
          <p>This website and our services are intended for business owners and are not directed to children.</p>

          <h2>Changes to this policy</h2>
          <p>If we update this policy, we'll change the date at the top of this page.</p>

          <h2>Contact</h2>
          <p>Questions about privacy? Email <a href={`mailto:${email}`}>{email}</a>.</p>
        </div>
      </section>
    </>
  )
}
