import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StudioPageHeader, goldBtn } from '../components/Studio'

export default function NotFound() {
  return (
    <StudioPageHeader eyebrow="404" title="We couldn't find that page.">
      <p>The page may have moved, or the address may be mistyped.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className={goldBtn}>
          Go to the homepage <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-[15px] font-semibold text-ivory transition-colors hover:border-ivory/60"
        >
          Contact us
        </Link>
      </div>
    </StudioPageHeader>
  )
}
