import type { Metadata } from 'next';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects — Niloy Pramanik',
  description: 'Selected projects and case studies by Niloy Pramanik.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading line1="ALL" line2="PROJECTS" />
      <div className="mt-12">
        <ProjectsGrid />
      </div>
    </div>
  );
}
