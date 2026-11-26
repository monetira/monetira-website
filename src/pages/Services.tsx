import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Website Design',
    intro: 'A clean, professional website for an established business that needs a better first impression.',
    items: ['Custom design, not a template look', 'Mobile-friendly layout', 'Contact or inquiry form', 'Help connecting your domain'],
  },
  {
    title: 'Website Updates',
    intro: 'Improvements to a website you already have, so it reflects your business accurately today.',
    items: ['Updated services and contact details', 'Clearer page structure and wording', 'Readability and mobile fixes', 'New pages or sections'],
  },
  {
    title: 'Implementation Assistance',
    intro: 'Selected help putting review recommendations into practice when you would rather not do it alone.',
    items: ['Customer follow-up templates', 'Simple process documentation', 'Vendor comparison support', 'Inquiry and intake forms'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">Additional Services</span>
          <h1>Help beyond the review.</h1>
          <p className="lede">
            Business reviews are Monetira's core service. For clients who want hands-on help, we also offer a limited
            number of website and implementation projects, quoted separately based on scope.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.intro}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="note-box">
            Additional services are available by request and quoted individually. Availability is limited so each
            project gets proper attention. Website examples can be provided privately upon request.
          </p>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>Interested in an additional service?</h2>
          <p>Mention it in your inquiry, and we'll reply with availability and next steps.</p>
          <div className="cta-row">
            <Link className="btn btn-white" to="/contact">Contact Monetira</Link>
            <Link className="btn btn-outline" to="/">About Business Reviews</Link>
          </div>
        </div>
      </section>
    </>
  )
}
