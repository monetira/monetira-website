import type { ReactNode } from 'react'

export default function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
          <span aria-hidden="true" className="h-px w-8 bg-bronze" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] md:text-[3.4rem]">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>}
      </div>
    </section>
  )
}
