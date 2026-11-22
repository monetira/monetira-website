import { StudioPageHeader, CtaBand, ProcessSteps, Eyebrow } from '../components/Studio'
import { PricingBlock } from '../components/Studio'
import { servicesPage, pricingSection, studioCta } from '../data/studio'

export default function Services() {
  return (
    <>
      <StudioPageHeader eyebrow={servicesPage.eyebrow} title={servicesPage.title}>
        <p>{servicesPage.intro}</p>
      </StudioPageHeader>

      <section className="bg-white py-24">
        <div className="mx-auto mb-14 max-w-7xl px-6">
          <Eyebrow>{pricingSection.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl font-normal leading-[1] md:text-6xl">
            {pricingSection.title} <em className="text-teal">{pricingSection.titleAccent}</em>
          </h2>
        </div>
        <PricingBlock showHeading={false} />
      </section>

      <section className="bg-teal py-24 text-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-[1]">{servicesPage.faqTitle}</h2>
          </div>
          <dl className="border-t border-charcoal">
            {servicesPage.faqs.map((f) => (
              <div key={f.q} className="border-b border-line py-6">
                <dt className="font-serif text-2xl">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand compact title={studioCta.title} accent={studioCta.titleAccent} supporting={studioCta.supporting} button={studioCta.button} />
    </>
  )
}
