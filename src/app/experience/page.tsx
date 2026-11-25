import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { AchievementsTimeline } from '@/components/shared/AchievementsTimeline';
import { ExperienceBlock } from '@/components/shared/ExperienceBlock';

export const metadata = pageMetadata('Experience — Niloy Pramanik', 'Ongoing remote internship at FlyRank AI and project achievements.', '/experience');

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="PROFESSIONAL" line2="EXPERIENCE" />
      <ExperienceBlock />
      
      {/* Achievements Section */}
      <div className="mt-12 md:mt-16 pt-12 md:pt-16">
        <AchievementsTimeline />
      </div>
    </div>
  );
}
