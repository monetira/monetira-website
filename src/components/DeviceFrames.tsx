import { asset } from '../data/site'

// Reusable device frames for showing website screenshots.
// Pass an empty src to show a neutral "screenshot coming soon" placeholder.

function Placeholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-br from-[#e9e2d4] via-[#f1ece2] to-[#ddd3c0] ${tall ? 'aspect-[390/820]' : 'aspect-[16/9]'}`}
    >
      <div className="text-center">
        <p className="font-serif text-2xl italic text-charcoal/70">{label}</p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/70">Screenshot coming soon</p>
      </div>
    </div>
  )
}

export function BrowserFrame({
  src,
  alt,
  label,
  dark = false,
  className = '',
}: {
  src: string
  alt: string
  label: string
  dark?: boolean
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ${dark ? 'bg-[#2c3232] ring-white/10' : 'bg-white ring-charcoal/10'} ${className}`}
    >
      <div className={`flex items-center gap-1.5 px-3.5 py-2.5 ${dark ? 'bg-[#2c3232]' : 'bg-[#efebe3]'}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#e46e5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e3b54f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#7bb563]" />
        <span
          className={`ml-3 hidden h-5 flex-1 rounded-md sm:block ${dark ? 'bg-white/8' : 'bg-white/80'}`}
          aria-hidden="true"
        />
      </div>
      {src ? (
        <img src={asset(src)} alt={alt} loading="lazy" className="block aspect-[16/9] w-full object-cover object-top" />
      ) : (
        <Placeholder label={label} />
      )}
    </div>
  )
}

export function PhoneFrame({
  src,
  alt,
  label,
  className = '',
}: {
  src: string
  alt: string
  label: string
  className?: string
}) {
  return (
    <div
      className={`rounded-[2rem] bg-[#151818] p-[7px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.55)] ring-1 ring-white/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-[14px] w-[34%] -translate-x-1/2 rounded-full bg-[#151818]"
        />
        {src ? (
          <img src={asset(src)} alt={alt} loading="lazy" className="block aspect-[390/820] w-full object-cover object-top" />
        ) : (
          <Placeholder label={label} tall />
        )}
      </div>
    </div>
  )
}
