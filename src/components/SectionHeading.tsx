export default function SectionHeading({
  eyebrow,
  title,
  center = false,
  light = false,
}: {
  eyebrow: string
  title: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
        {!center && <span aria-hidden="true" className="h-px w-8 bg-bronze" />}
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold leading-tight md:text-[2.6rem] ${light ? 'text-ivory' : ''}`}>{title}</h2>
    </div>
  )
}
