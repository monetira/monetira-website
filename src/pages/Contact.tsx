import TallyEmbed from '../components/TallyEmbed'
import { site } from '../data/site'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">Request a Business Review</span>
          <h1>Tell us about your business.</h1>
          <p className="lede">
            Share a few details and your main concerns. We'll review your inquiry and reply by email with next steps.
            There's no obligation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <TallyEmbed urlOrId={site.contactTallyUrl} title="Monetira business inquiry form" loadingLabel="Loading the inquiry form..." />
          <aside className="side-box">
            <h3>What happens next</h3>
            <ol>
              <li>We read your inquiry and your main concerns.</li>
              <li>We reply by email to confirm fit, focus areas, and next steps.</li>
              <li>If you go ahead, you'll receive a short questionnaire to begin your review.</li>
            </ol>
            <h3 style={{ marginTop: 24 }}>Prefer email?</h3>
            <p><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
            <p style={{ fontSize: '.95rem', marginTop: 16 }}>
              Your information is used to respond to your inquiry and provide requested services. Please do not submit
              sensitive personal or financial information. See our{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
