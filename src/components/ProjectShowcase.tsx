import { ArrowUpRight } from 'lucide-react'
import { BrowserFrame, PhoneFrame } from './DeviceFrames'
import type { Project } from '../data/projects'

function Meta({ project, index, small = false }: { project: Project; index: number; small?: boolean }) {
  return (
    <div>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
        <span className="font-serif text-xl normal-case tracking-normal text-charcoal/70">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.category}
      </p>
      <h3 className={`mt-3 font-serif leading-none text-charcoal ${small ? 'text-4xl' : 'text-4xl md:text-5xl'}`}>{project.name}</h3>
      <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{project.description}</p>
      <p className="mt-5 text-sm text-charcoal/70">{project.features.join('  ·  ')}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        {project.portfolioProject && (
          <span className="rounded-full border border-charcoal/15 px-3 py-1 text-xs text-charcoal/70">Portfolio project</span>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-teal hover:text-teal-dark"
          >
            Visit live site <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

// Large layout: desktop and mobile screenshots side by side with details.
export function ProjectFeature({ project, index, flip = false }: { project: Project; index: number; flip?: boolean }) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
      <div className={`relative md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <BrowserFrame src={project.desktopImage} alt={`${project.name} website on desktop`} label={project.name} />
        {project.mobileImage && (
        <PhoneFrame
          src={project.mobileImage}
          alt={`${project.name} website on mobile`}
          label={project.name}
          className="absolute -bottom-8 right-4 w-[24%] md:-right-6"
        />
        )}
      </div>
      <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <Meta project={project} index={index} />
      </div>
    </article>
  )
}

// Compact layout: one browser frame above the details.
export function ProjectCompact({ project, index, small = false }: { project: Project; index: number; small?: boolean }) {
  return (
    <article>
      <BrowserFrame src={project.desktopImage} alt={`${project.name} website`} label={project.name} />
      <div className="mt-8">
        <Meta project={project} index={index} small={small} />
      </div>
    </article>
  )
}
