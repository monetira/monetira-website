import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-head" style={{ minHeight: '50vh' }}>
      <div className="wrap">
        <span className="eyebrow">Page not found</span>
        <h1>We couldn't find that page.</h1>
        <p className="lede">The page may have moved. Try one of these instead.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/">Go to the homepage</Link>
          <Link className="btn btn-secondary" to="/contact">Contact Monetira</Link>
        </div>
      </div>
    </section>
  )
}
