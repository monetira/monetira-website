import { Link } from 'react-router-dom'
import { publishedProjects } from '../data/projects'
import { asset } from '../data/site'

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
            project gets proper attention.
          </p>
        </div>
      </section>

      <section className="section section-ivory" id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Selected Website Work</span>
            <h2>Websites designed and built by Monetira.</h2>
            <p className="lede">Independently developed projects, shown as examples of design and build quality.</p>
          </div>
          <div className="work-grid">
            {publishedProjects.map((p) => (
              <article className="work" key={p.slug}>
                <div className="work-shot">
                  {p.desktopImage && <img src={asset(p.desktopImage)} alt={`${p.name} website, desktop view`} loading="lazy" />}
                </div>
                <div className="work-body">
                  <span className="cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.features.map((f) => <span key={f}>{f}</span>)}</div>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener">
                      Visit website <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
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
