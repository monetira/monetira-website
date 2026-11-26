import HeroPhoto from '../components/HeroPhoto'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

const checklist = [
  { title: 'Follow up on every completed job within 3 days', note: 'Repeat requests depend on memory, not a routine.', pri: ['High priority', 'p-high'], effort: 'Low effort' },
  { title: 'Compare quotes on the two largest recurring vendor bills', note: 'Neither contract has been reviewed in over 3 years.', pri: ['High priority', 'p-high'], effort: 'Medium effort' },
  { title: 'Write down the scheduling process', note: 'Only one person knows how jobs get booked.', pri: ['Medium priority', 'p-med'], effort: 'Low effort' },
  { title: "Update the website's services and contact page", note: 'Referrals check it first. It lists retired services.', pri: ['Plan next', 'p-low'], effort: 'Medium effort' },
]

const includes = [
  'Personalized business assessment',
  'Identification of potential cost-saving opportunities',
  'Review of operational and sales opportunities',
  'Written findings and recommendations',
  '3-5 prioritized action items',
]

// Approved Nov 26, 2026. Shown when site.testimonialsApproved is true.
const testimonials = [
  {
    quote:
      'Monetira helped us take a fresh look at our business, identify areas that deserved more attention, and establish practical priorities. The recommendations were straightforward, thoughtful and relevant to our needs.',
    initials: 'C.P.',
    business: 'Carriage House Door Services',
    service: 'Business Review',
  },
  {
    quote:
      'Monetira helped bring our vision to life with a professional website that reflects our mission and communicates our purpose clearly. The attention to detail and personalized approach made all the difference.',
    initials: 'C.M.',
    business: 'Paw Protection Alliance',
    service: 'Website Development',
  },
]
const showTestimonials = site.testimonialsApproved || import.meta.env.VITE_PREVIEW_FILE === '1'

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
      <HeroPhoto />

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
            <ul className="receive-list">
              {receive.map(([k, t, d]) => (
                <li key={k}>
                  <span className="k">{k}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="report" aria-label="Sample prioritized action checklist">
            <div className="report-head">
              <strong>Prioritized Action Checklist</strong>
              <span className="tag">Sample</span>
            </div>
            <div className="report-meta"><b>Business:</b> Commercial service company, 14 employees</div>
            <ol>
              {checklist.map((c, i) => (
                <li key={c.title}>
                  <div className="num">{i + 1}</div>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.note}</p>
                    <div className="pills">
                      <span className={`pill ${c.pri[1]}`}>{c.pri[0]}</span>
                      <span className="pill p-effort">{c.effort}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="wrap">
          <div className="pricing" id="pricing">
            <div>
              <span className="eyebrow">Introductory Pricing</span>
              <h3>Business Efficiency &amp; Opportunity Review</h3>
              <p className="price"><span>Starting at</span> $295</p>
              <p className="fine">
                Final pricing is confirmed before work begins. Additional implementation services are quoted separately.
              </p>
              <Link className="btn btn-primary" to="/contact">Request a Business Review</Link>
            </div>
            <div className="pricing-incl">
              <h4>Includes</h4>
              <ul>
                {includes.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
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

      {showTestimonials && (
        <section className="section section-ivory" aria-labelledby="testimonials-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="testimonials-title">What Others Say</h2>
            </div>
            <div className="quotes">
              {testimonials.map((t) => (
                <figure className="quote" key={t.initials}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <b>{t.initials}</b>
                    <span>{t.business}</span>
                    <span className="quote-svc">{t.service}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="fine quote-note">Testimonials provided by family members of Monetira's founder.</p>
          </div>
        </section>
      )}

      <section className="final">
        <div className="wrap">
          <h2>Know where to focus first.</h2>
          <p>Tell us a little about your business, and we'll follow up with next steps for your review.</p>
          <div className="cta-row">
            <Link className="btn btn-white" to="/contact">Request a Business Review</Link>
          </div>
          <p className="brand-line">Every Customer Matters. Every Dollar Counts.</p>
        </div>
      </section>
    </>
  )
}
