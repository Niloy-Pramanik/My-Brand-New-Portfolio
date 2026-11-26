import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';
import { PROJECTS } from '@/lib/data';

export const metadata = pageMetadata('Projects — Niloy Pramanik', 'Seven projects spanning software engineering, applied AI, browser integration and reinforcement learning research.', '/projects');

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader
        line1="ALL"
        line2="PROJECTS"
        description="Seven projects spanning software engineering, applied AI, browser integration and reinforcement learning research."
      />

      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-sawad-accent/25 bg-sawad-accent/10 text-xs font-bold tracking-widest text-sawad-accent">
          {PROJECTS.length} PROJECTS
        </span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-sawad-border bg-white/[0.03] text-xs font-bold tracking-widest text-sawad-muted-strong">
          OPEN SOURCE · RESEARCH · PRODUCTION
        </span>
      </div>

      <div className="mt-8">
        <ProjectsGrid variant="cards" />
      </div>
    </div>
  );
}
