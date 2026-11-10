import { asset } from '../data/site'

// The original Monetira logo, unaltered except for a transparent background
// outside the circle. Always place it on white or ivory backgrounds.
export default function Logo({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src={asset('images/monetira-logo.png')}
      alt="Monetira"
      width={size}
      height={size}
      className={`h-auto shrink-0 ${className}`}
      style={{ width: size }}
    />
  )
}
