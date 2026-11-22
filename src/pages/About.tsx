import { StudioPageHeader, CtaBand, Eyebrow } from '../components/Studio'
import { aboutStudio, workCta } from '../data/studio'

export default function About() {
  return (
    <>
      <StudioPageHeader eyebrow={aboutStudio.eyebrow} title={aboutStudio.title} accent={aboutStudio.titleAccent}>
        <p>{aboutStudio.intro}</p>
      </StudioPageHeader>

      <section className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-[1]">{aboutStudio.storyTitle}</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {aboutStudio.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl font-normal leading-[1]">{aboutStudio.valuesTitle}</h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {aboutStudio.values.map((v) => (
              <li key={v.title} className="border-t border-charcoal pt-6">
                <h3 className="font-serif text-3xl font-normal">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand compact title={workCta.title} supporting={workCta.supporting} button={workCta.button} />
    </>
  )
}
