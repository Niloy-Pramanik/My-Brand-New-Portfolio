import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ResearchList } from '@/components/shared/ResearchList';
import { RESEARCH } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research — Niloy Pramanik',
  description: 'Research focus and academic projects by Niloy Pramanik.',
};

export default function ResearchPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mb-8">
        <h3 className="font-display text-sm tracking-widest text-sawad-accent mb-4 uppercase">
          {RESEARCH.project}
        </h3>
        <PageHeader 
          line1="RESEARCH" 
          line2="FOCUS" 
          description={RESEARCH.intro}
        />
      </div>
      <div className="mt-12">
        <ResearchList />
      </div>
    </div>
  );
}
