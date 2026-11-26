import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const INTERVAL = 5500

type Slide = { key: string; label: string; title: string; support: string; body: ReactNode }

const slides: Slide[] = [
  {
    key: 'expenses',
    label: 'Expenses',
    title: 'Expenses Keep Climbing?',
    support: 'Find opportunities to control costs.',
    body: (
      <>
        <div className="ss-sub">Recurring cost review</div>
        <ul className="ss-rows">
          <li>
            <div><b>Software subscriptions</b><span>11 active, 3 rarely used</span></div>
            <em className="flag f-red">Review</em>
          </li>
          <li>
            <div><b>Waste hauling contract</b><span>Price up 18% in two years</span></div>
            <em className="flag f-red">Compare quotes</em>
          </li>
          <li>
            <div><b>Equipment lease</b><span>Auto-renews in 45 days</span></div>
            <em className="flag f-gold">Decide by renewal</em>
          </li>
          <li>
            <div><b>Office overhead</b><span>Unchanged, in line with need</span></div>
            <em className="flag f-teal">No action</em>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 'sales',
    label: 'Sales',
    title: 'Customers Not Calling Back?',
    support: 'Find gaps in your sales follow-up.',
    body: (
      <>
        <div className="ss-sub">Follow-up review, last 30 days</div>
        <div className="ss-funnel">
          <div className="fn"><span>Inquiries received</span><div className="bar"><i style={{ width: '100%' }} /></div><b>24</b></div>
          <div className="fn"><span>Quotes sent</span><div className="bar"><i style={{ width: '62%' }} /></div><b>15</b></div>
          <div className="fn"><span>Quotes followed up</span><div className="bar"><i className="low" style={{ width: '17%' }} /></div><b>4</b></div>
        </div>
        <ul className="ss-notes">
          <li><em className="flag f-red">Gap</em>11 quotes never received a follow-up</li>
          <li><em className="flag f-gold">Gap</em>Past customers aren't asked for reviews</li>
        </ul>
      </>
    ),
  },
  {
    key: 'operations',
    label: 'Operations',
    title: 'Too Much on Your Plate?',
    support: "Identify what's slowing your business down.",
    body: (
      <>
        <div className="ss-sub">Owner's weekly admin hours</div>
        <div className="ss-hours">
          <div className="hr"><span>Email and phone</span><div className="bar"><i style={{ width: '88%' }} /></div><b>7h</b></div>
          <div className="hr"><span>Scheduling</span><div className="bar"><i style={{ width: '75%' }} /></div><b>6h</b></div>
          <div className="hr"><span>Invoicing</span><div className="bar"><i style={{ width: '62%' }} /></div><b>5h</b></div>
        </div>
        <ol className="ss-priorities">
          <li><b>1</b>Document how jobs get booked</li>
          <li><b>2</b>Use templates for common emails</li>
          <li><b>3</b>Batch invoicing once a week</li>
        </ol>
      </>
    ),
  },
]

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const playing = !reduced && !userPaused && !hovering

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [])

  useEffect(() => {
    if (!playing) return
    timer.current = window.setTimeout(() => go(index + 1), INTERVAL)
    return () => window.clearTimeout(timer.current)
  }, [playing, index, go])

  return (
    <section className="hero2" aria-label="Introduction">
      <div className="wrap hero2-grid">
        <div className="hero2-copy">
          <p className="hero2-brand">Every Customer Matters. Every Dollar Counts.</p>
          <h1>
            <span className="line">Too Many Expenses.</span>
            <span className="line">Not Enough Sales.</span>
            <span className="line q">Where Do You Start?</span>
            <span className="here">RIGHT HERE.</span>
          </h1>
          <p className="hero2-lede">
            Running a small business is demanding enough. Finding ways to reduce costs, improve operations, and uncover
            missed opportunities shouldn't mean another full-time job.
          </p>
          <p className="hero2-lede">
            Monetira provides an independent business review with practical findings and a prioritized action plan, so
            you know where to focus first.
          </p>
          <div className="cta-row">
            <Link className="btn btn-gold" to="/contact">Request a Business Review</Link>
            <Link className="btn btn-ghost" to="/#how">See How It Works</Link>
          </div>
        </div>

        <div
          className="ss"
          role="region"
          aria-roledescription="carousel"
          aria-label="Sample business review findings"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <div className="ss-window">
            <div
              className={`ss-track${reduced ? ' no-motion' : ''}`}
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live={playing ? 'off' : 'polite'}
            >
              {slides.map((s, i) => (
                <article
                  key={s.key}
                  className="ss-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}: ${s.label}`}
                  aria-hidden={i !== index}
                >
                  <header className="ss-head">
                    <span className="ss-kicker">Sample review &middot; {s.label}</span>
                    <span className="ss-count">0{i + 1} / 0{slides.length}</span>
                  </header>
                  <h2 className="ss-title">{s.title}</h2>
                  <p className="ss-support">{s.support}</p>
                  <div className="ss-body">{s.body}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="ss-controls">
            <button className="ss-btn" onClick={() => go(index - 1)} aria-label="Previous slide">
              <span aria-hidden="true">&#8592;</span>
            </button>
            <div className="ss-dots">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  className={`ss-dot${i === index ? ' on' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}: ${s.label}`}
                  aria-current={i === index}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button className="ss-btn" onClick={() => go(index + 1)} aria-label="Next slide">
              <span aria-hidden="true">&#8594;</span>
            </button>
            {!reduced && (
              <button
                className="ss-btn ss-pause"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? 'Resume slideshow' : 'Pause slideshow'}
              >
                <span className="lbl">{userPaused ? 'Play' : 'Pause'}</span>
                <span className="ico" aria-hidden="true">{userPaused ? '\u25B6' : '\u275A\u275A'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
