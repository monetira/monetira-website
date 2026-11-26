import { Link } from 'react-router-dom'

// About Us page: approved copy (Nov 26, 2026). Business voice ("we", "our").
// No personal name, photo, or employer names at this time.
const foundation = [
  "Bachelor's degree in Organizational Leadership, Texas A&M University",
  'Business operations and healthcare management',
  'National client engagement and customer success',
  'Sales and business development',
  'Vendor management, negotiation and cost efficiency',
  'Strategic planning and operational improvement',
]

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">About Us</span>
          <h1>About Monetira</h1>
          <p className="about-sub">Real Business Experience. Practical Solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p>
              Monetira was founded on a simple belief: small-business owners deserve access to experienced business
              guidance without the complexity and expense often associated with traditional consulting.
            </p>
            <p>
              Our foundation is built on years of professional experience in business operations, healthcare
              management, national client engagement, vendor management and organizational leadership.
            </p>
            <p>
              We understand the challenges of managing expenses, maintaining customer relationships, coordinating
              operations and identifying opportunities for improvement.
            </p>
          </div>
          <aside className="foundation" aria-labelledby="foundation-title">
            <h2 id="foundation-title">Professional Foundation</h2>
            <p className="foundation-note">More than two decades of professional business experience.</p>
            <ul>
              {foundation.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap about-pair">
          <div>
            <h2>An Independent Perspective</h2>
            <p>
              When you're busy running a business, it can be difficult to step back and recognize where improvements
              can be made.
            </p>
            <p>
              Monetira provides an independent perspective, helping business owners identify overlooked opportunities and
              determine which actions deserve their attention first.
            </p>
            <p>Our approach is straightforward, personalized and focused on practical recommendations.</p>
          </div>
          <div>
            <h2>Beyond the Business Review</h2>
            <p>
              When additional assistance is needed, Monetira also offers professional website design, website updates
              and selected implementation services.
            </p>
            <p>
              Our goal is to help small businesses make informed decisions, operate more efficiently and build a
              stronger foundation for the future.
            </p>
            <p><Link to="/services">See Additional Services</Link></p>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>Ready for a clear view of your business?</h2>
          <p>Start with a short inquiry. We'll reply with next steps for your review.</p>
          <div className="cta-row"><Link className="btn btn-white" to="/contact">Request a Business Review</Link></div>
          <p className="brand-line">Every Customer Matters. Every Dollar Counts.</p>
        </div>
      </section>
    </>
  )
}
