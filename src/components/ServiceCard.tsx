import type { Service } from '../data/content'

export default function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <article className="group rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(37,37,37,0.25)]">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/25 text-teal">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
    </article>
  )
}
