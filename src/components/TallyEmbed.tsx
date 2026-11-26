import { useEffect, useState } from 'react'
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

export default function TallyEmbed({ urlOrId, title, loadingLabel = 'Loading the form...' }: { urlOrId: string; title: string; loadingLabel?: string }) {
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
      <p role="alert" className="status">
        The form link could not be read. Please email {site.contactEmail}.
      </p>
    )
  }

  return (
    <div className="tally-box">
      {!loaded && (
        <p className="status" role="status">
          {loadingLabel} If it doesn't appear, <a href={`https://tally.so/r/${id}`} target="_blank" rel="noopener">open the form in a new tab</a>.
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

      />
      <noscript>
        <a href={`https://tally.so/r/${id}`}>Open the form</a>
      </noscript>
    </div>
  )
}
