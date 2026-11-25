import { PageHeader, SubSectionHeading } from '@/components/shared/SectionHeading';
import { AcademicBackground, CSMajor, CSFundamentals } from '@/components/shared/EducationBlock';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Education — Niloy Pramanik', 'Final-year CSE student at UIU, majoring in Data Science. University background, specialization courses and computer science fundamentals.', '/education');

export default function EducationPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="ACADEMIC" line2="BACKGROUND" />
      <AcademicBackground />
      <section className="mt-16 pt-12 border-t border-sawad-border">
        <SubSectionHeading line1="DATA SCIENCE" line2="MAJOR" />
        <p className="text-sawad-muted">Academic specialization coursework.</p>
        <CSMajor />
      </section>
      <section className="mt-16 pt-12 border-t border-sawad-border">
        <SubSectionHeading line1="CS" line2="FUNDAMENTALS" />
        <p className="text-sawad-muted mb-8">Foundational knowledge developed through university coursework.</p>
        <CSFundamentals />
      </section>
    </div>
  );
}
