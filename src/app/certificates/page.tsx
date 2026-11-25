import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { CertificatesGrid } from '@/components/shared/CertificatesGrid';
import { AchievementsTimeline } from '@/components/shared/AchievementsTimeline';
import { ACADEMIC_ACHIEVEMENTS } from '@/lib/data';

export const metadata = pageMetadata('Certificates and Achievements — Niloy Pramanik', 'Academic growth, consecutive scholarships, project awards and certifications in Python and professional communication.', '/certificates');

export default function CertificatesPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="LEARNING &" line2="ACHIEVEMENTS" />
      <section className="mt-8">
        <h2 className="font-display font-bold text-2xl mb-6">Academic Achievements</h2>
        <ul className="grid md:grid-cols-3 gap-5">
          {ACADEMIC_ACHIEVEMENTS.map((achievement) => <li key={achievement} className="p-6 rounded-2xl bg-sawad-surface border border-sawad-border text-sawad-muted-strong leading-relaxed">{achievement}</li>)}
        </ul>
      </section>
      <section className="mt-16 pt-12 border-t border-sawad-border">
        <h2 className="font-display font-bold text-2xl mb-8">Project Awards</h2>
        <AchievementsTimeline />
      </section>
      <section className="mt-16 pt-12 border-t border-sawad-border">
        <h2 className="font-display font-bold text-2xl mb-8">Certifications</h2>
        <CertificatesGrid />
      </section>
    </div>
  );
}
