// Illustrative customer-scenario parts for the hero previews.
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
// All businesses here are fictional. Nothing here imitates a real brand's interface.
import { asset } from '../../data/site'
import { Star, Globe, Menu, ArrowRight, Ban, ShieldCheck } from 'lucide-react'

// ---------------------------------------------------------------
// Garden scene (stand-in for licensed landscaping photography)
// ---------------------------------------------------------------
export function GardenScene({ variant = 1, className = '' }: { variant?: 1 | 2 | 3 | 4 | 5; className?: string }) {
  if (variant === 5) return <PatioScene className={className} />
  const id = `g${variant}`
  const skies: Record<number, [string, string]> = {
    1: ['#f3e3c4', '#cfe0d6'],
    2: ['#f6dcc0', '#e8e3cf'],
    3: ['#dfe9e4', '#f2ead7'],
    4: ['#f1d7b5', '#d7e2d2'],
  }
  const [s1, s2] = skies[variant]
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s1} />
          <stop offset="1" stopColor={s2} />
        </linearGradient>
        <linearGradient id={`${id}-lawn`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fa055" />
          <stop offset="1" stopColor="#4f7a35" />
        </linearGradient>
        <pattern id={`${id}-stripe`} width="44" height="260" patternUnits="userSpaceOnUse" patternTransform="skewX(-28)">
          <rect width="22" height="260" fill="#ffffff" opacity="0.07" />
        </pattern>
        <radialGradient id={`${id}-sun`} cx="0.78" cy="0.18" r="0.5">
          <stop offset="0" stopColor="#fff6dc" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff6dc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-sky)`} />
      <rect width="400" height="260" fill={`url(#${id}-sun)`} />
      {/* distant tree line */}
      <path d="M0 120 Q30 92 60 110 Q85 80 120 104 Q150 86 180 108 Q215 78 250 102 Q285 84 315 106 Q350 82 400 100 L400 150 L0 150Z" fill="#41603a" opacity="0.85" />
      <path d="M0 132 Q40 112 80 128 Q120 108 160 126 Q200 112 240 128 Q290 110 330 128 Q370 114 400 124 L400 160 L0 160Z" fill="#355230" />
      {/* lawn */}
      <path d="M0 150 Q200 132 400 150 L400 260 L0 260Z" fill={`url(#${id}-lawn)`} />
      <path d="M0 150 Q200 132 400 150 L400 260 L0 260Z" fill={`url(#${id}-stripe)`} />
      {/* stone path */}
      {variant !== 3 && (
        <path d="M170 260 Q190 205 230 180 Q258 164 290 154 L305 156 Q268 172 248 192 Q218 222 214 260Z" fill="#e9dfcc" opacity="0.95" />
      )}
      {variant === 3 && <rect x="40" y="190" width="320" height="70" rx="4" fill="#d9cdb6" />}
      {/* hedges */}
      <rect x="18" y="158" width="120" height="26" rx="13" fill="#2f4d2a" />
      <rect x="300" y="150" width="90" height="22" rx="11" fill="#2f4d2a" />
      {/* ornamental trees */}
      <circle cx="70" cy="140" r="26" fill="#3d6234" />
      <rect x="67" y="160" width="6" height="18" fill="#5b4632" />
      <circle cx="350" cy="128" r="20" fill="#4a7040" />
      <rect x="347" y="144" width="5" height="14" fill="#5b4632" />
      {/* flower beds */}
      {[...Array(14)].map((_, i) => (
        <circle key={i} cx={30 + i * 9} cy={200 + (i % 3) * 3} r="3.2" fill={i % 2 ? '#e8b4b8' : '#f3d27a'} />
      ))}
      {[...Array(10)].map((_, i) => (
        <circle key={`b${i}`} cx={300 + i * 9} cy={186 + (i % 2) * 3} r="3" fill={i % 2 ? '#c9a4d8' : '#fbf3e4'} />
      ))}
    </svg>
  )
}

// Warm, light stone-patio illustration (fallback until real photos are supplied)
function PatioScene({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ps-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7e2bd" />
          <stop offset="0.55" stopColor="#f3e9d6" />
          <stop offset="1" stopColor="#e7dcc6" />
        </linearGradient>
        <radialGradient id="ps-sun" cx="0.8" cy="0.12" r="0.6">
          <stop offset="0" stopColor="#fff3d1" stopOpacity="1" />
          <stop offset="1" stopColor="#fff3d1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ps-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6dac4" />
          <stop offset="1" stopColor="#cdbd9f" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#ps-sky)" />
      <rect width="400" height="500" fill="url(#ps-sun)" />
      {/* light house wall and pergola */}
      <rect x="0" y="90" width="170" height="250" fill="#f5efe4" />
      <rect x="20" y="130" width="60" height="110" fill="#d9e0de" stroke="#c9bfae" strokeWidth="3" />
      <rect x="95" y="130" width="60" height="110" fill="#d9e0de" stroke="#c9bfae" strokeWidth="3" />
      <rect x="150" y="150" width="12" height="190" fill="#b89a74" />
      <rect x="320" y="150" width="12" height="190" fill="#b89a74" />
      <rect x="140" y="140" width="210" height="12" fill="#a88a63" />
      {[...Array(8)].map((_, i) => (
        <rect key={i} x={150 + i * 26} y="132" width="7" height="22" fill="#b89a74" />
      ))}
      {/* distant soft greenery */}
      <path d="M170 250 Q210 210 250 236 Q290 206 330 232 Q370 214 400 228 L400 330 L170 330Z" fill="#9db383" />
      <path d="M170 280 Q230 254 290 276 Q350 258 400 272 L400 340 L170 340Z" fill="#86a06c" />
      {/* stone terrace */}
      <path d="M0 340 L400 330 L400 500 L0 500Z" fill="url(#ps-stone)" />
      {[0, 1, 2, 3, 4].map((r) => (
        <path key={r} d={`M0 ${370 + r * 30} L400 ${362 + r * 32}`} stroke="#bfae8e" strokeWidth="2" />
      ))}
      {[...Array(7)].map((_, i) => (
        <path key={`v${i}`} d={`M${30 + i * 60} 340 L${10 + i * 66} 500`} stroke="#bfae8e" strokeWidth="2" />
      ))}
      {/* outdoor seating */}
      <rect x="200" y="300" width="150" height="34" rx="8" fill="#f4eee3" />
      <rect x="200" y="286" width="150" height="20" rx="8" fill="#ece3d3" />
      <rect x="235" y="352" width="80" height="18" rx="4" fill="#9a7b55" />
      <rect x="250" y="370" width="6" height="20" fill="#7d6243" />
      <rect x="295" y="370" width="6" height="20" fill="#7d6243" />
      {/* planters */}
      <rect x="40" y="320" width="40" height="40" rx="4" fill="#d7c9b0" />
      <circle cx="60" cy="305" r="24" fill="#7f9a62" />
      <rect x="350" y="320" width="34" height="38" rx="4" fill="#d7c9b0" />
      <circle cx="367" cy="306" r="20" fill="#8aa66d" />
    </svg>
  )
}

// Real photo with an illustrated fallback until the photo file exists.
export function PhotoSlot({ src, alt, fallback = 5, className = '' }: { src: string; alt: string; fallback?: 1 | 2 | 3 | 4 | 5; className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <GardenScene variant={fallback} className={className} />
  return <img src={asset(src)} alt={alt} onError={() => setFailed(true)} className={`object-cover ${className}`} />
}

// ---------------------------------------------------------------
// Text message (generic messaging style)
// ---------------------------------------------------------------
export function TextBubble({ sender, message, className = '' }: { sender: string; message: string; className?: string }) {
  return (
    <div className={`rounded-3xl bg-[#fbf8f2]/95 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/5 backdrop-blur ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#c9b28a] to-[#9e8559] text-xs font-semibold text-white">
          {sender[0]}
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-charcoal">{sender}</p>
          <p className="text-[11px] text-charcoal/70">Messages · now</p>
        </div>
      </div>
      <p className="mt-3 inline-block rounded-2xl rounded-tl-md bg-[#e9e4da] px-4 py-2.5 text-[15px] leading-snug text-charcoal">
        {message}
      </p>
    </div>
  )
}

// ---------------------------------------------------------------
// Generic map-style business listing
// ---------------------------------------------------------------
function MiniMap({ muted = false }: { muted?: boolean }) {
  return (
    <svg viewBox="0 0 320 90" className="block h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="90" fill={muted ? '#e7e4de' : '#ece6d8'} />
      <path d="M0 30 L320 18" stroke="#fff" strokeWidth="7" />
      <path d="M0 70 Q160 50 320 78" stroke="#fff" strokeWidth="5" />
      <path d="M90 0 L120 90" stroke="#fff" strokeWidth="5" />
      <path d="M230 0 L210 90" stroke="#fff" strokeWidth="4" />
      <rect x="250" y="30" width="60" height="30" rx="6" fill={muted ? '#d3d8cf' : '#cfdcc2'} />
      <rect x="10" y="38" width="70" height="26" rx="6" fill={muted ? '#d3d8cf' : '#cfdcc2'} />
      <g transform="translate(160 26)">
        <path d="M0 0 C-10 0 -14 8 -14 13 C-14 22 0 34 0 34 C0 34 14 22 14 13 C14 8 10 0 0 0Z" fill={muted ? '#9b9890' : '#b99b68'} />
        <circle cx="0" cy="12" r="5" fill="#fff" />
      </g>
    </svg>
  )
}

export function ScenarioLabel({ className = '' }: { className?: string }) {
  return (
    <p className={`text-[11.5px] tracking-wide text-ivory/70 ${className}`}>
      Illustrative scenario featuring fictional businesses and AI-generated imagery, not actual client work.
    </p>
  )
}

// ---------------------------------------------------------------
// Renders children at a fixed design width, scaled to fit the box,
// so the mock phone and listing look identical at every screen size.
// ---------------------------------------------------------------
export function Scaled({ designWidth, children, className = '' }: { designWidth: number; children: ReactNode; className?: string }) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>(undefined)
  useLayoutEffect(() => {
    const update = () => {
      if (!outer.current || !inner.current) return
      const s = outer.current.clientWidth / designWidth
      setScale(s)
      setHeight(inner.current.offsetHeight * s)
    }
    update()
    const ro = new ResizeObserver(update)
    if (outer.current) ro.observe(outer.current)
    if (inner.current) ro.observe(inner.current)
    return () => ro.disconnect()
  }, [designWidth])
  return (
    <div ref={outer} className={`relative min-w-0 ${className}`} style={{ height }}>
      <div
        ref={inner}
        className="absolute left-0 top-0"
        style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------
// VERSION B PARTS
// Photo files (place in public/images/scenario/). Until they exist,
// a warm illustrated placeholder is shown.
// ---------------------------------------------------------------
export const scenarioPhotos = {
  hero: 'images/scenario/westfield-hero.jpg', // 1200 x 1500 (4:5)
  project1: 'images/scenario/westfield-project-1.jpg', // 1000 x 1000 (1:1)
  project2: 'images/scenario/westfield-project-2.jpg', // 1000 x 1000 (1:1)
  project3: 'images/scenario/westfield-project-3.jpg', // 1000 x 1000 (1:1)
}

const DOTS = (n: number, cls: string) =>
  [...Array(n)].map((_, i) => <Star key={i} className={cls} />)

// Premium mobile website for the fictional competitor (design width 300px).
export function PremiumSite() {
  return (
    <div className="rounded-[2.5rem] bg-[#111414] p-[8px] shadow-[0_60px_120px_-25px_rgba(0,0,0,0.9)] ring-1 ring-white/15">
      <div className="relative h-[612px] overflow-hidden rounded-[2.1rem] bg-[#faf6ef]">
        <span aria-hidden="true" className="absolute left-1/2 top-2 z-30 h-[18px] w-[32%] -translate-x-1/2 rounded-full bg-[#111414]" />
        {/* full-bleed photo hero */}
        <div className="relative h-[372px]">
          <PhotoSlot src={scenarioPhotos.hero} alt="" fallback={5} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/0 via-35% to-[#1b1a16]/85" />
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 pt-9">
            <p className="leading-none text-white">
              <span className="block font-serif text-[21px]">Westfield</span>
              <span className="block text-[7.5px] font-semibold uppercase tracking-[0.28em] text-white/85">Landscape & Outdoor Living</span>
            </p>
            <Menu className="h-5 w-5 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <p className="text-[8.5px] font-semibold uppercase tracking-[0.25em] text-[#f1dcae]">Design · Build · Maintain</p>
            <p className="mt-1.5 font-serif text-[30px] leading-[1] text-white">
              Outdoor living,
              <br />
              <em className="text-[#f1dcae]">beautifully crafted.</em>
            </p>
            <span className="mt-3.5 flex items-center justify-center gap-2 rounded-full bg-[#d9bd84] py-[11px] text-[12.5px] font-bold text-[#1b1d1d] shadow-lg">
              Request a Quote <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
        {/* trust strip */}
        <div className="flex items-center justify-between border-b border-[#e8dfcf] px-4 py-2.5 text-[10px] text-[#3a3a34]">
          <span className="flex items-center gap-1">
            <span className="flex">{DOTS(5, 'h-2.5 w-2.5 fill-[#c9962e] text-[#c9962e]')}</span>
            <b className="ml-0.5">4.9</b> · 85 reviews
          </span>
          <span className="flex items-center gap-1 font-semibold">
            <ShieldCheck className="h-3 w-3 text-[#6b7f4a]" /> Free estimates
          </span>
        </div>
        {/* services with photos */}
        <p className="px-4 pt-3 text-[8px] font-bold uppercase tracking-[0.25em] text-[#9a7d48]">Our services</p>
        <div className="grid grid-cols-3 gap-1.5 px-3 pt-1.5">
          {[
            { src: scenarioPhotos.project1, label: 'Patios & stone' },
            { src: scenarioPhotos.project2, label: 'Garden design' },
            { src: scenarioPhotos.project3, label: 'Outdoor living' },
          ].map((x, i) => (
            <div key={x.label}>
              <PhotoSlot src={x.src} alt="" fallback={i === 0 ? 5 : ((i + 2) as 3 | 4)} className="block aspect-square w-full rounded-lg" />
              <p className="mt-1 text-center text-[9px] font-semibold text-[#2d3a2b]">{x.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Hartley's listing, with a clearly visible "No website" (design width 330px).
export function HartleyListing({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#f6f3ed] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.65)] ring-1 ring-black/5">
      {!compact && (
        <div className="h-[64px] saturate-[0.5]">
          <MiniMap muted />
        </div>
      )}
      <div className="p-4">
        <p className="font-heading text-[17px] font-bold text-charcoal">Hartley Landscaping</p>
        <div className="mt-1 flex items-center gap-1.5 text-[13px] text-charcoal/75">
          <span className="font-semibold text-charcoal">4.9</span>
          <span className="flex">{DOTS(5, 'h-3.5 w-3.5 fill-[#d4a63c] text-[#d4a63c]')}</span>
          <span>(87)</span>
        </div>
        <div className="mt-3.5 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#a9483a]/55 bg-[#a9483a]/8 py-3 text-[15px] font-extrabold uppercase tracking-[0.12em] text-[#9b3f32]">
          <Ban className="h-5 w-5" strokeWidth={2.5} /> No website
        </div>
      </div>
    </div>
  )
}

// Westfield's listing chip, parallel to Hartley's (design width 260px).
export function WestfieldChip() {
  return (
    <div className="rounded-2xl bg-white p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
      <p className="font-heading text-[15px] font-bold text-charcoal">Westfield Landscaping</p>
      <div className="mt-0.5 flex items-center gap-1.5 text-[12.5px] text-charcoal/75">
        <span className="font-semibold text-charcoal">4.9</span>
        <span className="flex">{DOTS(5, 'h-3 w-3 fill-[#d4a63c] text-[#d4a63c]')}</span>
        <span>(85)</span>
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-teal py-2 text-[13px] font-bold text-white">
        <Globe className="h-4 w-4" /> Website
      </div>
    </div>
  )
}
