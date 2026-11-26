import { ProjectFeature } from '../components/ProjectShowcase'
import { StudioPageHeader, CtaBand } from '../components/Studio'
import { publishedProjects } from '../data/projects'
import { workPage, workCta, workPageOrder } from '../data/studio'

export default function Work() {
  const rank = (slug: string) => {
    const i = workPageOrder.indexOf(slug)
    return i === -1 ? 99 : i
  }
  const ordered = [...publishedProjects].sort((a, b) => rank(a.slug) - rank(b.slug))
  return (
    <>
      <StudioPageHeader eyebrow={workPage.eyebrow} title={workPage.title}>
        <p>{workPage.intro}</p>
      </StudioPageHeader>
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {ordered.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} flip={i % 2 === 1} />
          ))}
        </div>
      </section>
      <CtaBand compact title={workCta.title} supporting={workCta.supporting} button={workCta.button} />
    </>
  )
}
