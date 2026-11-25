import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/data';
import { PageHeader } from '@/components/shared/SectionHeading';

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="py-12 md:py-16">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-sawad-muted hover:text-sawad-accent transition-colors">
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      <PageHeader line1={project.title} line2="PROJECT DETAILS" description={project.subtitle} />
      <p className="text-sm text-sawad-accent mb-6">{project.category}</p>
      <div className="flex flex-wrap gap-3 mb-10">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sawad-accent hover:bg-sawad-accent/90 transition-colors">
          GitHub Repository <ArrowUpRight size={16} />
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sawad-border hover:border-sawad-accent/50 hover:text-sawad-accent transition-colors">
            Live Website <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      {project.image && (
        <figure className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-sawad-surface border border-sawad-border">
            <Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1440px) 100vw, 1360px" className="object-contain" />
          </div>
          {project.imageCaption && <figcaption className="text-xs text-sawad-muted mt-3">{project.imageCaption}</figcaption>}
        </figure>
      )}
      <div className="space-y-10 max-w-4xl">
        {[
          { title: 'Project Overview', text: project.overview },
          { title: 'Problem Statement', text: project.problem },
          { title: 'Proposed Solution', text: project.solution },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="font-display font-bold text-2xl mb-4">{section.title}</h2>
            <p className="text-sawad-muted leading-relaxed">{section.text}</p>
          </section>
        ))}
        {[
          { title: 'Key Features', items: project.features },
          { title: 'Technical Implementation', items: project.implementation },
          { title: 'My Contributions', items: project.contributions },
          { title: 'Engineering Considerations and Limitations', items: project.considerations },
        ].filter((section) => section.items?.length).map((section) => (
          <section key={section.title}>
            <h2 className="font-display font-bold text-2xl mb-4">{section.title}</h2>
            <ul className="list-disc pl-5 space-y-3 text-sawad-muted leading-relaxed marker:text-sawad-accent">
              {section.items?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
        <section>
          <h2 className="font-display font-bold text-2xl mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => <span key={tech} className="px-3 py-1.5 text-sm rounded-full border border-sawad-border bg-white/5 text-sawad-muted-strong">{tech}</span>)}
          </div>
        </section>
        {project.slug === 'merit-rp' && (
          <Link href="/research" className="inline-flex text-sawad-accent hover:text-white transition-colors">Research contribution and submission status →</Link>
        )}
      </div>
    </article>
  );
}
