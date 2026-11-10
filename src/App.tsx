import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Audit from './pages/Audit'
import Snapshot from './pages/Snapshot'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

const titles: Record<string, string> = {
  '/': 'Monetira | Find What Your Business Is Missing',
  '/about': 'About | Monetira',
  '/audit': 'Business Opportunity Audit | Monetira',
  '/snapshot': 'Free Business Snapshot | Monetira',
  '/contact': 'Contact | Monetira',
  '/privacy': 'Privacy Policy | Monetira',
}

function PageEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Page Not Found | Monetira'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <PageEffects />
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/snapshot" element={<Snapshot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
