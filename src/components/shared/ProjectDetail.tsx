import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/data';
import { PageHeader, SectionLabel } from '@/components/shared/SectionHeading';

function buildToc(project: Project) {
  const items: { id: string; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem-solution', label: 'Problem & Solution' },
  ];
  if (project.features?.length) items.push({ id: 'features', label: 'Features' });
  if (project.implementation?.length) items.push({ id: 'implementation', label: 'Implementation' });
  if (project.contributions?.length) items.push({ id: 'contributions', label: 'Contributions' });
  if (project.considerations?.length) items.push({ id: 'considerations', label: 'Considerations' });
  items.push({ id: 'stack', label: 'Tech Stack' });
  return items;
}

export function ProjectDetail({ project }: { project: Project }) {
  const toc = buildToc(project);

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

      {/* On-this-page jump links */}
      <nav aria-label="On this page" className="flex gap-2 overflow-x-auto pb-2 mb-10 -mx-4 px-4 md:mx-0 md:px-0">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 px-3.5 py-1.5 rounded-full border border-sawad-border bg-white/[0.03] text-xs font-semibold text-sawad-muted-strong
                       hover:border-sawad-accent/40 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {project.image && (
        <figure className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-sawad-surface border border-sawad-border">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] z-10 bg-gradient-to-r from-sawad-accent via-sawad-coral to-transparent" />
            <Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 1440px) 100vw, 1360px" className="object-contain" />
          </div>
          {project.imageCaption && <figcaption className="text-xs text-sawad-muted mt-3">{project.imageCaption}</figcaption>}
        </figure>
      )}

      <div className="max-w-4xl">
        {/* Overview */}
        <section id="overview" className="mb-10">
          <SectionLabel>Project Overview</SectionLabel>
          <p className="text-sawad-muted leading-relaxed">{project.overview}</p>
        </section>

        {/* Problem & Solution — two-column cards */}
        <section id="problem-solution" className="mb-10">
          <SectionLabel>Problem &amp; Solution</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-sawad-border bg-sawad-surface/40 p-6">
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted">Problem Statement</span>
              <p className="text-sm text-sawad-muted leading-relaxed mt-3">{project.problem}</p>
            </div>
            <div className="relative rounded-2xl border border-sawad-border bg-sawad-surface/40 p-6 overflow-hidden">
              <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-sawad-accent via-sawad-coral to-transparent" />
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-accent">Proposed Solution</span>
              <p className="text-sm text-sawad-muted-strong leading-relaxed mt-3">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Key Features — pill chips */}
        {Boolean(project.features?.length) && (
          <section id="features" className="mb-10">
            <SectionLabel>Key Features</SectionLabel>
            <ul className="flex flex-wrap gap-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-sawad-border bg-white/[0.03] text-sm text-sawad-muted-strong
                             hover:border-sawad-accent/40 hover:text-white transition-colors duration-300"
                >
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sawad-accent/80" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical Implementation — numbered steps */}
        {Boolean(project.implementation?.length) && (
          <section id="implementation" className="mb-10">
            <SectionLabel>Technical Implementation</SectionLabel>
            <div className="rounded-2xl border border-sawad-border bg-sawad-surface/40 divide-y divide-sawad-border">
              {project.implementation.map((step, index) => (
                <div key={step} className="flex gap-4 p-5">
                  <span className="font-display font-black text-sm text-sawad-accent w-7 shrink-0 pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-sawad-muted leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contributions — accent card */}
        {project.contributions && project.contributions.length > 0 && (
          <section id="contributions" className="mb-10">
            <SectionLabel>My Contributions</SectionLabel>
            <div className="relative rounded-2xl border border-sawad-border bg-sawad-surface/40 p-6 overflow-hidden">
              <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-sawad-accent via-sawad-coral to-transparent" />
              <ul className="space-y-3">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sawad-muted-strong leading-relaxed">
                    <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sawad-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Considerations — dashed card */}
        {project.considerations && project.considerations.length > 0 && (
          <section id="considerations" className="mb-10">
            <SectionLabel>Engineering Considerations and Limitations</SectionLabel>
            <div className="rounded-2xl border border-dashed border-sawad-border bg-sawad-surface/30 p-6">
              <ul className="space-y-3">
                {project.considerations.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sawad-muted leading-relaxed">
                    <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sawad-muted/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Technology Stack */}
        <section id="stack">
          <SectionLabel>Technology Stack</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm rounded-full border border-sawad-border bg-white/5 text-sawad-muted-strong hover:border-sawad-accent/40 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          {project.slug === 'merit-rp' && (
            <Link href="/research" className="group inline-flex items-center gap-1.5 mt-8 text-sawad-accent hover:text-white transition-colors">
              Research contribution and submission status
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          )}
        </section>
      </div>
    </article>
  );
}
