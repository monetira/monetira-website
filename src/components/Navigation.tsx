import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset } from '../data/site'

const links = [
  { to: '/#how', label: 'How It Works' },
  { to: '/services', label: 'Additional Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => setOpen(false), [pathname, hash])

  const item = (l: { to: string; label: string }) =>
    l.to.includes('#') ? (
      <Link to={l.to}>{l.label}</Link>
    ) : (
      <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
        {l.label}
      </NavLink>
    )

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Monetira home">
          <img src={asset('images/monetira-logo.png')} alt="" width={52} height={52} />
          <span>Monetira</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>{item(l)}</li>
          ))}
          <li>
            <Link className="btn btn-primary" to="/contact">Request a Review</Link>
          </li>
        </ul>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        <ul className="wrap">
          {links.map((l) => (
            <li key={l.to}>{item(l)}</li>
          ))}
          <li>
            <Link className="btn btn-primary" to="/contact">Request a Business Review</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
