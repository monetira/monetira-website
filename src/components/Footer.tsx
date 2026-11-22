import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site, navLinks } from '../data/site'
import { studio } from '../data/studio'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Logo size={56} />
          <div>
            <p className="font-serif text-2xl leading-none">{site.tagline}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/70">{studio.descriptor}</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-charcoal/70 hover:text-teal">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-charcoal/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Monetira. All rights reserved.</p>
          <p className="flex gap-6">
            {site.contactEmail && <a href={`mailto:${site.contactEmail}`} className="hover:text-teal">{site.contactEmail}</a>}
            <Link to="/privacy" className="hover:text-teal">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
