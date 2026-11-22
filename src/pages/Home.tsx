import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HomeHero from '../components/HomeHero'
import { ProjectCompact } from '../components/ProjectShowcase'
import { Eyebrow, CtaBand, PricingBlock, ProcessSteps } from '../components/Studio'
import { publishedProjects as projects } from '../data/projects'
import { workSection, experienceSection, studioCta } from '../data/studio'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* 1. HERO */}
      <HomeHero />

      {/* 2. SELECTED WORK */}
      <section id="work" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{workSection.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-5xl font-normal leading-[1] md:text-7xl">
                {workSection.title}
                <br />
                <em className="text-teal">{workSection.titleAccent}</em>
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 font-semibold text-charcoal hover:text-teal">
              {workSection.link} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCompact key={p.slug} project={p} index={i} small />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES & PRICING */}
      <section id="services" className="border-t border-line bg-white py-24 md:py-32">
        <PricingBlock />
        <div className="mx-auto mt-14 max-w-7xl px-6">
          <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-charcoal hover:text-teal">
            Service details and common questions <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4. PROCESS & EXPERIENCE */}
      <section id="about" className="relative overflow-hidden bg-teal py-24 text-ivory md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-charcoal/40 blur-[130px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <ProcessSteps />

          <div className="mt-24 grid gap-10 border-t border-ivory/20 pt-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow tone="teal">{experienceSection.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-5xl font-normal leading-[1] text-ivory md:text-6xl">
                {experienceSection.title}
                <br />
                <em className="text-gold-light">{experienceSection.titleAccent}</em>
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ivory/85">
              {experienceSection.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT INQUIRY CTA */}
      <CtaBand title={studioCta.title} accent={studioCta.titleAccent} supporting={studioCta.supporting} button={studioCta.button} />
    </>
  )
}
