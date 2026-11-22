import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import seo from './data/seo.json'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import WebsiteVision from './pages/WebsiteVision'
// Audit and Snapshot pages (src/pages) and the old About/Contact/Home (src/legacy) are kept
// but are no longer linked or routed.
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

type PageSeo = { title: string; description?: string; noindex?: boolean }
const pages = seo.pages as Record<string, PageSeo>

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

function PageEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
    const page = pages[path]
    document.title = page?.title ?? 'Page Not Found | Monetira'
    const description = page?.description ?? pages['/'].description!
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', document.title)
    setMeta('meta[property="og:url"]', 'content', seo.siteUrl + (path === '/' ? '/' : path))
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
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
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/website-vision" element={<WebsiteVision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
