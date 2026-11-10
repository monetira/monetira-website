import { AlertTriangle, CircleCheck, PlugZap } from 'lucide-react'
import type { ReactNode } from 'react'
import { site } from '../data/site'

export function NotConnectedNotice() {
  return (
    <div role="note" className="flex gap-3 rounded-xl border border-bronze/50 bg-bronze/10 p-4 text-sm text-charcoal">
      <PlugZap aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
      <p>
        <span className="font-semibold">This form is not yet connected.</span> You can preview it, but submissions are
        turned off until a secure form service is set up.
        {site.contactEmail && (
          <>
            {' '}In the meantime, please email{' '}
            <a href={`mailto:${site.contactEmail}`} className="font-semibold text-teal underline">
              {site.contactEmail}
            </a>
            .
          </>
        )}
      </p>
    </div>
  )
}

export function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <div role="alert" className="flex gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900">
      <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <p>{children}</p>
    </div>
  )
}

export function SuccessPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div role="status" className="rounded-2xl border border-teal/30 bg-white p-10 text-center">
      <CircleCheck aria-hidden="true" className="mx-auto h-10 w-10 text-teal" strokeWidth={1.6} />
      <h2 className="mt-5 text-2xl font-bold">{title}</h2>
      <div className="mt-3 text-ink-soft">{children}</div>
    </div>
  )
}
