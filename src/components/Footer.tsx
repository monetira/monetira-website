import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <span className="word">Monetira</span>
          <small>Business Efficiency &amp; Opportunity Reviews</small>
        </div>
        <nav aria-label="Footer">
          <Link to="/services">Additional Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
        <small style={{ width: '100%' }}>
          &copy; {new Date().getFullYear()} Monetira &middot;{' '}
          <a href={`mailto:${site.contactEmail}`} style={{ color: '#E8D3A8' }}>{site.contactEmail}</a>
        </small>
      </div>
    </footer>
  )
}
