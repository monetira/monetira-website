import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">404</p>
      <h1 className="mt-4 text-4xl font-bold">We couldn't find that page.</h1>
      <p className="mt-5 text-lg text-ink-soft">The page may have moved, or the address may be mistyped.</p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <Button to="/">Go to the homepage</Button>
        <Button to="/contact" variant="secondary">Contact us</Button>
      </div>
    </section>
  )
}
