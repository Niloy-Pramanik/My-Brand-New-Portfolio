import type { Metadata } from 'next';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AchievementsTimeline } from '@/components/shared/AchievementsTimeline';

export const metadata: Metadata = {
  title: 'Experience — Niloy Pramanik',
  description: 'Awards and achievements earned by Niloy Pramanik.',
};

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading line1="RECORD &" line2="AWARDS" />
      
      {/* Achievements Section */}
      <div className="mt-12 md:mt-16 pt-12 md:pt-16">
        <AchievementsTimeline />
      </div>
    </div>
  );
}
