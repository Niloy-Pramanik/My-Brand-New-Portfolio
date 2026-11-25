import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';

export const metadata = pageMetadata('Projects — Niloy Pramanik', 'Seven projects spanning software engineering, applied AI, browser integration and reinforcement learning research.', '/projects');

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="ALL" line2="PROJECTS" />
      <div className="mt-12">
        <ProjectsGrid />
      </div>
    </div>
  );
}
