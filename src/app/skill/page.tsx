import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ToolsGrid } from '@/components/shared/ToolsGrid';
import { TOOLS, slugify } from '@/lib/data';

export const metadata = pageMetadata('Skills — Niloy Pramanik', 'Core programming, computer science foundations, AI and machine learning interests, and familiar project technologies.', '/skill');

export default function ToolsPage() {
  const totalSkills = TOOLS.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="TECHNICAL" line2="SKILLS" description="Core programming and academic foundations, alongside technologies explored through practical projects." />

      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-sawad-accent/25 bg-sawad-accent/10 text-xs font-bold tracking-widest text-sawad-accent">
          {TOOLS.length} CATEGORIES
        </span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-sawad-border bg-white/[0.03] text-xs font-bold tracking-widest text-sawad-muted-strong">
          {totalSkills} SKILLS
        </span>
      </div>

      <nav aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 mt-5 -mx-4 px-4 sm:mx-0 sm:px-0">
        {TOOLS.map((group) => (
          <a
            key={group.category}
            href={`#${slugify(group.category)}`}
            className="shrink-0 px-3.5 py-1.5 rounded-full border border-sawad-border bg-white/[0.03] text-xs font-semibold text-sawad-muted-strong
                       hover:border-sawad-accent/40 hover:text-white transition-colors duration-200"
          >
            {group.category}
          </a>
        ))}
      </nav>

      <div className="mt-8">
        <ToolsGrid />
      </div>
    </div>
  );
}
