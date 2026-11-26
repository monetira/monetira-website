import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset } from '../data/site'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/#how', label: 'How It Works' },
  { to: '/services', label: 'Additional Services' },
  { to: '/about', label: 'About Us' },
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
      <NavLink to={l.to} end className={({ isActive }) => (isActive ? 'active' : undefined)}>
        {l.label}
      </NavLink>
    )

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Monetira home">
          <img src={asset('images/monetira-logo.png')} alt="" width={64} height={64} />
          <span>MONETIRA</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>{item(l)}</li>
          ))}
        </ul>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" size={22} strokeWidth={2.5} /> : <Menu aria-hidden="true" size={22} strokeWidth={2.5} />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        <ul className="wrap">
          {links.map((l) => (
            <li key={l.to}>{item(l)}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}
