import { useEffect } from 'react'
import TallyEmbed from '../components/TallyEmbed'
import { site } from '../data/site'
import { visionPage } from '../data/studio'

// Private client questionnaire. Not linked in the navigation; share the
// link (monetira.com/website-vision) with clients after scope is agreed.
export default function WebsiteVision() {
  // Keep this private page out of search engines, even after launch.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">{visionPage.eyebrow}</p>
        <h1 className="mt-4 font-serif text-6xl font-normal">{visionPage.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{visionPage.intro}</p>
        <div className="mt-12">
          {site.visionTallyUrl ? (
            <TallyEmbed urlOrId={site.visionTallyUrl} title="Website Vision questionnaire" loadingLabel="Loading the questionnaire..." />
          ) : (
            <p className="rounded-2xl border border-line bg-white p-8 text-ink-soft">{visionPage.pending}</p>
          )}
        </div>
      </div>
    </section>
  )
}
