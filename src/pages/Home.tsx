import HeroSlideshow from '../components/HeroSlideshow'
import { Link } from 'react-router-dom'

const receive = [
  ['01', 'A concise written assessment', 'A plain-language summary of what we found in the areas you chose, without jargon or filler.'],
  ['02', 'Three to five prioritized recommendations', 'The changes most likely to matter, ranked so you know what deserves attention first.'],
  ['03', 'A practical action checklist', 'Specific steps you can start on right away, with an honest estimate of the effort involved.'],
  ['04', 'Suggested next steps', 'What to do after the first wins, so progress continues once the review is finished.'],
]

const areas = [
  ['Expenses', 'Recurring costs, subscriptions, and spending that has grown without anyone noticing.'],
  ['Operations', 'Daily processes, bottlenecks, and tasks that only one person knows how to do.'],
  ['Vendors', "Contracts, renewals, and supplier relationships that haven't been reviewed in years."],
  ['Customer Follow-Up', 'How you stay in touch, follow up on quotes, ask for reviews, and bring past customers back.'],
  ['Opportunities', 'Services, referrals, and growth options that are within reach but not being used.'],
]

const steps = [
  ['Questionnaire', 'You answer a focused set of questions about how your business runs today.'],
  ['Review', 'We review your answers in the areas you chose, up to three.'],
  ['Findings', 'You receive clear, plain-language findings. No jargon, no sales pitch.'],
  ['Action Checklist', 'A prioritized list of what to do first, next, and later, so you can act right away.'],
]

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <section className="section">
        <div className="wrap receive-grid">
          <div>
            <span className="eyebrow">What You'll Receive</span>
            <h2>A review you can actually use.</h2>
            <p className="lede">
              Not a long report that sits in a drawer. Every recommendation comes with a clear next step, so you can
              start with what matters most.
            </p>
            <p className="fine">
              Findings are based on the information you provide and anything we can independently check, and we tell
              you which is which. We don't promise specific savings or sales results.
            </p>
          </div>
          <ul className="receive-list">
            {receive.map(([k, t, d]) => (
              <li key={k}>
                <span className="k">{k}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-ivory" id="review">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What Monetira Reviews</span>
            <h2>Five areas where small businesses commonly lose time and money.</h2>
            <p className="lede">You choose up to three areas that matter most to you, and the review focuses there.</p>
          </div>
          <div className="cards">
            {areas.map(([t, d], i) => (
              <div className="card" key={t}>
                <div className="k">0{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four simple steps. Very little of your time.</h2>
          </div>
          <div className="steps">
            {steps.map(([t, d], i) => (
              <div className="step" key={t}>
                <div className="n">{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">About Monetira</span>
            <h2>An experienced outside perspective.</h2>
            <p>
              Monetira is built on years of professional experience in business operations, client engagement, and
              vendor management, coordinating complex programs where budgets, timelines, and details all had to work.
            </p>
            <p><Link to="/about">More about Monetira</Link></p>
          </div>
          <ul className="points">
            <li><b>01</b>Independent. We don't sell software or take commissions from vendors.</li>
            <li><b>02</b>Practical. Every recommendation comes with a realistic next step.</li>
            <li><b>03</b>Respectful of your time. A simple process in plain language.</li>
            <li><b>04</b>Discreet. Your information is used to prepare your review and communicate with you about it.</li>
          </ul>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>Know where to focus first.</h2>
          <p>Tell us a little about your business, and we'll follow up with next steps for your review.</p>
          <div className="cta-row">
            <Link className="btn btn-white" to="/contact">Request a Business Review</Link>
          </div>
        </div>
      </section>
    </>
  )
}
