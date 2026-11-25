import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ToolsGrid } from '@/components/shared/ToolsGrid';

export const metadata = pageMetadata('Skills — Niloy Pramanik', 'Core programming, computer science foundations, AI and machine learning interests, and familiar project technologies.', '/skill');

export default function ToolsPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="TECHNICAL" line2="SKILLS" description="Core programming and academic foundations, alongside technologies explored through practical projects." />
      <div className="mt-12">
        <ToolsGrid />
      </div>
    </div>
  );
}
