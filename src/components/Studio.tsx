// Reusable building blocks for the Monetira studio pages.
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { pricingSection, processSection2 } from '../data/studio'

export const goldBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-charcoal transition-colors hover:bg-gold-light'

type Tone = 'light' | 'dark' | 'teal'
const toneText: Record<Tone, string> = { light: 'text-gold-deep', dark: 'text-gold-light', teal: 'text-gold-pale' }
const toneLine: Record<Tone, string> = { light: 'bg-gold', dark: 'bg-gold-light', teal: 'bg-gold-pale' }

export function Eyebrow({ children, tone = 'light' }: { children: string; tone?: Tone }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${toneText[tone]}`}>
      <span aria-hidden="true" className={`h-px w-8 ${toneLine[tone]}`} />
      {children}
    </p>
  )
}

// Dark page header used on inner pages.
export function StudioPageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string
  title: string
  accent?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-ivory md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-teal/40 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif text-6xl font-normal leading-[0.95] text-ivory md:text-8xl">
          {title}
          {accent && (
            <>
              <br />
              <em className="text-gold-light">{accent}</em>
            </>
          )}
        </h1>
        {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">{children}</div>}
      </div>
    </section>
  )
}

// Dark call-to-action band. compact = smaller version for inner pages.
export function CtaBand({
  title,
  accent,
  supporting,
  button,
  compact = false,
}: {
  title: string
  accent?: string
  supporting: string
  button: string
  compact?: boolean
}) {
  return (
    <section className={`relative overflow-hidden bg-charcoal text-center text-ivory ${compact ? 'py-20' : 'py-24 md:py-32'}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/30 blur-[140px]"
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className={`font-serif font-normal leading-[1] text-ivory ${compact ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'}`}>
          {title}
          {accent && (
            <>
              <br />
              <em className="text-gold-light">{accent}</em>
            </>
          )}
        </h2>
        <p className={`mx-auto max-w-xl text-lg text-ivory/80 ${compact ? 'mt-5' : 'mt-7'}`}>{supporting}</p>
        <Link to="/contact" className={`${goldBtn} ${compact ? 'mt-8' : 'mt-10'}`}>
          {button} <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

// Pricing: heading, "includes" list, and the price rows.
export function PricingBlock({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
      <div>
        {showHeading && (
          <>
            <Eyebrow>{pricingSection.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-[1] md:text-6xl">
              {pricingSection.title}
              <br />
              <em className="text-teal">{pricingSection.titleAccent}</em>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-ink-soft">{pricingSection.intro}</p>
          </>
        )}
        <h3 className={`${showHeading ? 'mt-12' : ''} text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70`}>
          {pricingSection.includesTitle}
        </h3>
        <ul className="mt-4 max-w-md">
          {pricingSection.includes.map((item) => (
            <li key={item} className="flex gap-3 border-b border-line py-3 text-[15px]">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-md border-l-2 border-gold pl-4 font-serif text-xl italic leading-snug text-charcoal">
          {pricingSection.timeline}
        </p>
      </div>

      <div>
        <ul className="border-t border-charcoal">
          {pricingSection.items.map((item) => (
            <li key={item.name} className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-6">
              <div>
                <h3 className="font-serif text-3xl font-normal">{item.name}</h3>
                <p className="mt-1 text-[15px] text-ink-soft">{item.description}</p>
                {item.note && <p className="mt-1 text-[13px] text-charcoal/70">{item.note}</p>}
              </div>
              <p className="font-serif text-3xl text-teal">{item.price}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-charcoal/70">{pricingSection.footnote}</p>
      </div>
    </div>
  )
}

// Three-step process, on a teal background.
export function ProcessSteps() {
  return (
    <>
      <Eyebrow tone="teal">{processSection2.eyebrow}</Eyebrow>
      <h2 className="mt-5 font-serif text-5xl font-normal text-ivory md:text-6xl">{processSection2.title}</h2>
      <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {processSection2.steps.map((s, i) => (
          <li key={s.title} className="border-t border-ivory/20 pt-6">
            <span className="font-serif text-6xl text-gold-light">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-ivory">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-ivory/85">{s.description}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
