import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { site } from '../data/site'

// Accepts a Tally share link (tally.so/r/ID), an embed link (tally.so/embed/ID),
// or just the form ID, and embeds the form inside the page.
export function tallyFormId(urlOrId: string): string | null {
  const v = urlOrId.trim()
  if (!v) return null
  const m = v.match(/tally\.so\/(?:r|embed|forms)\/([A-Za-z0-9]+)/)
  if (m) return m[1]
  return /^[A-Za-z0-9]+$/.test(v) ? v : null
}

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

export default function TallyEmbed({ urlOrId, title }: { urlOrId: string; title: string }) {
  const id = tallyFormId(urlOrId)
  const [loaded, setLoaded] = useState(false)

  // Tally's script lets the form grow to fit its content (no inner scrollbar)
  useEffect(() => {
    if (!id) return
    const src = 'https://tally.so/widgets/embed.js'
    if (window.Tally) {
      window.Tally.loadEmbeds()
      return
    }
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script')
      s.src = src
      s.async = true
      s.onload = () => window.Tally?.loadEmbeds()
      document.body.appendChild(s)
    }
  }, [id])

  if (!id) {
    return (
      <p role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900">
        The questionnaire link could not be read. Please email {site.contactEmail}.
      </p>
    )
  }

  return (
    <div className="relative rounded-3xl border border-line bg-white p-4 md:p-8">
      {!loaded && (
        <p className="flex items-center gap-2 p-6 text-ink-soft" role="status">
          <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> Loading the questionnaire...
        </p>
      )}
      <iframe
        data-tally-src={`https://tally.so/embed/${id}?alignLeft=1&transparentBackground=1&dynamicHeight=1`}
        src={`https://tally.so/embed/${id}?alignLeft=1&transparentBackground=1&dynamicHeight=1`}
        title={title}
        loading="lazy"
        width="100%"
        height="600"
        onLoad={() => setLoaded(true)}
        className="w-full border-0"
      />
      <noscript>
        <a href={`https://tally.so/r/${id}`}>Open the questionnaire</a>
      </noscript>
    </div>
  )
}
