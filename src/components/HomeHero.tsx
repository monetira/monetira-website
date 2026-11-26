// Homepage hero: "The moment after the referral" (approved Version B).
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Eyebrow, goldBtn } from './Studio'
import { TextBubble, ScenarioLabel, Scaled, PremiumSite, HartleyListing, WestfieldChip } from './scenario/ScenarioParts'

// Approved homepage hero copy
const copy = {
  eyebrow: 'The moment after the referral',
  line1: 'Someone recommended you.',
  line2: 'Then they looked you up.',
  question: 'What did they find?',
  supporting: [
    'You may not rely on your website to find customers. But your customers may rely on it to decide whether to choose you.',
    'From your first website to a complete redesign, Monetira delivers professional, custom websites without the big agency price tag.',
  ],
  primary: 'Start Your Project',
  secondary: 'See Our Work',
  price: 'Professional websites starting at $300.',
}

function HeroShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      {/* teal depth top right, champagne light behind the visual */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[-15%] top-[-30%] h-[900px] w-[900px] rounded-full bg-teal/45 blur-[160px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[18%] h-[620px] w-[620px] rounded-full bg-[#e8d3a8]/20 blur-[120px]" />
      {/* Order on mobile: headline, visual, supporting copy and buttons. Desktop: visual spans the right column. */}
      <div className="relative mx-auto grid max-w-7xl gap-y-10 px-6 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-x-12 lg:gap-y-0 lg:pb-24 lg:pt-16">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <Eyebrow tone="dark">{copy.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.45rem] font-normal leading-[1.02] tracking-[-0.01em] text-ivory sm:text-[3.4rem] xl:text-[3.85rem]">
            <span className="block [text-wrap:balance]">{copy.line1}</span>
            <span className="block [text-wrap:balance]">{copy.line2}</span>
            <em className="block text-[#e2c991]">{copy.question}</em>
          </h1>
        </div>
        <div className={`min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center order-last lg:order-none`}>{children}</div>
        <div className={`lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-7 -mt-4 lg:mt-0`}>
          <div className="max-w-lg space-y-4 text-lg leading-relaxed text-ivory/80">
            {copy.supporting.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className={goldBtn}>
              {copy.primary} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-[15px] font-semibold text-ivory transition-colors hover:border-ivory/60"
            >
              {copy.secondary}
            </Link>
          </div>
          <p className="mt-5 text-sm text-ivory/75">{copy.price}</p>
        </div>
      </div>
    </section>
  )
}


// Who gets the call? Illustrative comparison (fictional businesses)
function Pill({ children, gold = false, small = false }: { children: string; gold?: boolean; small?: boolean }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full font-bold uppercase ${small ? 'px-2.5 py-1 text-[9.5px] tracking-[0.06em]' : 'px-3 py-1 text-[10.5px] tracking-[0.14em]'} ${gold ? 'bg-[#d9bd84] text-charcoal' : 'bg-ivory/15 text-ivory ring-1 ring-ivory/30'}`}
    >
      {children}
    </span>
  )
}

export default function HomeHero() {
  const msg = 'Try Hartley Landscaping. They do amazing work!'
  return (
    <HeroShell>
      {/* Desktop composition */}
      <div className="hidden lg:block">
        <div className="relative aspect-square w-full">
          <TextBubble sender="Jenna" message={msg} className="absolute left-0 top-0 z-20 w-[52%] -rotate-[1.5deg]" />
          <div className="absolute left-[1%] top-[29%] z-10 w-[50%]">
            <Pill>Earned the Referral</Pill>
            <Scaled designWidth={330} className="mt-2.5">
              <HartleyListing />
            </Scaled>
          </div>
          <div className="absolute right-0 top-[-2%] w-[45%]">
            <div aria-hidden="true" className="absolute -inset-12 rounded-full bg-[#f1dcae]/25 blur-3xl" />
            <div className="relative">
              <Pill gold>The Competitor</Pill>
              <div className="mt-2.5 rotate-[2deg]">
                <Scaled designWidth={300}>
                  <PremiumSite />
                </Scaled>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[4%] right-[24%] z-20 w-[34%] -rotate-[2deg]">
            <Scaled designWidth={260}>
              <WestfieldChip />
            </Scaled>
          </div>
          <p className="absolute bottom-[3%] left-[1%] w-[40%] font-serif text-[3.3rem] italic leading-[0.95] text-[#e2c991]">
            Who gets
            <br />
            the call?
          </p>
        </div>
        <ScenarioLabel className="mt-6" />
      </div>

      {/* Mobile: compact comparison panel */}
      <div className="lg:hidden">
        <div className="rounded-3xl bg-white/[0.06] p-4 ring-1 ring-ivory/15 backdrop-blur">
          <TextBubble sender="Jenna" message={msg} className="w-[92%] -rotate-[1deg] !p-3 [&_p:last-child]:text-[14px]" />
          <p className="mt-4 text-center font-serif text-[2.1rem] italic leading-none text-[#e2c991]">Who gets the call?</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <Pill small>Earned the referral</Pill>
              <div className="mt-2 rounded-2xl bg-[#f6f3ed] p-3 text-charcoal">
                <p className="text-[13px] font-bold leading-tight">Hartley Landscaping</p>
                <p className="mt-1 flex items-center gap-1 text-[12px]">
                  <b>4.9</b>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#d4a63c]">★</span>
                    ))}
                  </span>
                  <span className="text-charcoal/70">(87)</span>
                </p>
                <div className="mt-3 flex h-[132px] flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[#a9483a]/55 bg-[#a9483a]/8 text-center">
                  <span className="text-[22px] leading-none text-[#9b3f32]">⊘</span>
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#9b3f32]">No website</span>
                </div>
              </div>
            </div>
            <div>
              <Pill gold small>The Competitor</Pill>
              <div className="mt-2 rounded-2xl bg-white p-3 text-charcoal shadow-[0_0_40px_rgba(241,220,174,0.35)]">
                <p className="text-[13px] font-bold leading-tight">Westfield Landscaping</p>
                <p className="mt-1 flex items-center gap-1 text-[12px]">
                  <b>4.9</b>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#d4a63c]">★</span>
                    ))}
                  </span>
                  <span className="text-charcoal/70">(85)</span>
                </p>
                {/* top of Westfield's website */}
                <div className="mt-3 overflow-hidden rounded-xl">
                  <div className="relative h-[90px] overflow-hidden">
                    <Scaled designWidth={300}>
                      <div className="-m-[8px]">
                        <PremiumSite />
                      </div>
                    </Scaled>
                  </div>
                  <div className="flex h-[42px] items-center justify-center gap-1 whitespace-nowrap bg-teal text-[11.5px] font-extrabold uppercase tracking-[0.04em] text-white">
                    <span className="text-[15px] leading-none">✓</span> Has a website
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScenarioLabel className="mt-3 text-center" />
      </div>
    </HeroShell>
  )
}

