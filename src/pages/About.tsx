import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">About Monetira</span>
          <h1>An experienced outside perspective.</h1>
          <p className="lede">
            When you run a business every day, it's hard to step back and see where time, money, and effort are
            slipping away. Monetira exists to provide that view.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Built on real operating experience.</h2>
            <p>
              Monetira is founded on years of professional experience in business operations, client engagement, and
              vendor management, coordinating complex programs where budgets, timelines, and details all had to work.
            </p>
            <p>
              That experience is now focused on helping small business owners look at their costs, processes, vendors,
              and customer follow-up with fresh eyes, then decide what to fix first.
            </p>
          </div>
          <div>
            <h2>How we work.</h2>
            <ul className="receive-list">
              <li><span className="k">01</span><div><h3>Independent</h3><p>We don't sell software or take commissions from vendors.</p></div></li>
              <li><span className="k">02</span><div><h3>Practical</h3><p>Every recommendation comes with a realistic next step.</p></div></li>
              <li><span className="k">03</span><div><h3>Honest</h3><p>We separate what you told us from what we verified, and we don't promise results we can't support.</p></div></li>
              <li><span className="k">04</span><div><h3>Focused</h3><p>Each review covers up to three areas you choose, so the advice stays specific.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>Ready for a clear view of your business?</h2>
          <p>Start with a short inquiry. We'll reply with next steps for your review.</p>
          <div className="cta-row"><Link className="btn btn-white" to="/contact">Request a Business Review</Link></div>
        </div>
      </section>
    </>
  )
}
