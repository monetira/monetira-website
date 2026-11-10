import { Check } from 'lucide-react'
import Button from './Button'
import Logo from './Logo'
import { site, snapshot } from '../data/site'
import { hero } from '../data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle dot grid, fading out toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,37,37,0.09) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.5fr_1fr] md:pb-28 md:pt-24">
        <div className="fade-up">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
            <span aria-hidden="true" className="h-px w-8 bg-bronze" />
            {hero.eyebrow}
          </p>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] md:text-[4.25rem]">{site.headline}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.supporting}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/snapshot" arrow>
              {hero.primaryCta}
            </Button>
            <Button to="/audit" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft" aria-label="About the free snapshot">
            {snapshot.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 text-teal" strokeWidth={2.2} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up-delay flex flex-col items-center">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-5 rounded-full border border-bronze/40" />
            <div aria-hidden="true" className="absolute -inset-10 rounded-full border border-bronze/15" />
            <Logo size={230} className="relative max-w-[52vw]" />
          </div>
          <p className="mt-14 text-center font-heading text-lg font-semibold text-charcoal">{site.tagline}</p>
        </div>
      </div>
    </section>
  )
}
