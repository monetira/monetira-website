import Button from './Button'

export default function CtaSection({
  title,
  supporting,
  button,
  to,
}: {
  title: string
  supporting: string
  button: string
  to: string
}) {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div aria-hidden="true" className="mx-auto mb-8 h-px w-12 bg-bronze" />
        <h2 className="text-3xl font-bold leading-tight text-ivory md:text-[2.6rem]">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">{supporting}</p>
        <div className="mt-10">
          <Button to={to} variant="light" arrow>
            {button}
          </Button>
        </div>
      </div>
    </section>
  )
}
