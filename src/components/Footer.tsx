import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site, navLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo size={72} />
          <p className="mt-5 max-w-xs font-heading text-lg font-semibold text-charcoal">{site.tagline}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
            Independent business assessment and advisory for small and midsize businesses.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/snapshot" className="text-ink-soft hover:text-teal">Free Business Snapshot</Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-soft hover:text-teal">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {site.contactEmail && (
              <li>
                <a href={`mailto:${site.contactEmail}`} className="hover:text-teal">{site.contactEmail}</a>
              </li>
            )}
            {site.contactPhone && <li>{site.contactPhone}</li>}
            {site.location && <li>{site.location}</li>}
            <li>
              <Link to="/contact" className="hover:text-teal">Send a message</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-soft sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Monetira. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-teal">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
