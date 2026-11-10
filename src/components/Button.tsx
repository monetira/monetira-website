import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'light'

const styles: Record<Variant, string> = {
  primary: 'bg-teal text-white hover:bg-teal-dark shadow-sm',
  secondary: 'border border-charcoal/20 text-charcoal hover:border-charcoal/50 bg-white/60',
  light: 'bg-ivory text-charcoal hover:bg-white',
}

export default function Button({
  to,
  children,
  variant = 'primary',
  arrow = false,
}: {
  to: string
  children: ReactNode
  variant?: Variant
  arrow?: boolean
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
    </Link>
  )
}
