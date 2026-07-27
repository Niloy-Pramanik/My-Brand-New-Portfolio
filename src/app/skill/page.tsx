import type { Metadata } from 'next';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ToolsGrid } from '@/components/shared/ToolsGrid';

export const metadata: Metadata = {
  title: 'Tech Stack — Niloy Pramanik',
  description: 'Tech Stack Highlight and technologies used by Niloy Pramanik.',
};

export default function ToolsPage() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading line1="TECH STACK" line2="HIGHLIGHT" />
      <div className="mt-12">
        <ToolsGrid />
      </div>
    </div>
  );
}
