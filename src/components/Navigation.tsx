import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/site'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[15px] font-medium transition-colors ${isActive ? 'text-teal' : 'text-charcoal/75 hover:text-charcoal'}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Monetira home">
          <Logo size={52} />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/snapshot"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Free Snapshot
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ivory px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => `block py-3 ${linkClass({ isActive })}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/snapshot"
            className="mt-3 block rounded-full bg-teal px-5 py-3 text-center font-semibold text-white"
          >
            Get Your Free Business Snapshot
          </Link>
        </div>
      )}
    </header>
  )
}
