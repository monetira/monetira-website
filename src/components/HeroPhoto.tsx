// Homepage hero: approved photographic version (Nov 26, 2026).
// Real text over a dark teal background, with the magnifying glass photo
// blended in on the right. No slideshow, no animation.
import { Link } from 'react-router-dom'
import { asset } from '../data/site'

export default function HeroPhoto() {
  return (
    <section className="hero3">
      <img className="hero3-photo" src={asset('images/hero-magnifier.jpg')} alt="" aria-hidden="true" />
      <div className="hero3-shade" aria-hidden="true" />
      <div className="wrap hero3-inner">
        <h1>
          <span className="line">Not Enough Sales.</span>
          <span className="line">Too Many Expenses.</span>
          <span className="line">Where Do You Start?</span>
          <span className="here">RIGHT HERE.</span>
        </h1>
        <svg className="hero3-swoosh" viewBox="0 0 500 12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 9 C 140 1, 360 1, 500 5 C 360 4, 140 6, 0 9 Z" fill="currentColor" />
        </svg>
        <p className="hero3-lede">
          Identify unnecessary expenses, uncover missed sales opportunities, and get a prioritized action plan for your
          business.
        </p>
        <Link className="hero3-btn" to="/contact">Request a Business Review</Link>
      </div>
    </section>
  )
}
