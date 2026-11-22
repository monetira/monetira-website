import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/site'
import { studio } from '../data/studio'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  const isActive = (to: string) => {
    const current = location.pathname + location.hash
    return to === '/' ? current === '/' : current === to
  }
  const linkClass = (to: string) =>
    `text-[15px] font-medium transition-colors ${isActive(to) ? 'text-teal' : 'text-charcoal/70 hover:text-charcoal'}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Monetira home">
          <Logo size={44} />
          <span className="leading-tight">
            <span className="block font-serif text-[26px] leading-none text-charcoal">Monetira</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/70 sm:block">
              {studio.descriptor}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(l.to)} aria-current={isActive(l.to) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-teal"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ivory px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={`block py-3 ${linkClass(l.to)}`} aria-current={isActive(l.to) ? 'page' : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-3 block rounded-full bg-charcoal px-5 py-3 text-center font-semibold text-ivory">
            Start a Project
          </Link>
        </div>
      )}
    </header>
  )
}
