import { Hero } from '@/components/home/Hero';
import { StatsStrip } from '@/components/home/StatsStrip';
import { CapabilityTags } from '@/components/home/CapabilityTags';
import { HomeSection } from '@/components/home/HomeSection';
import { SubSectionHeading } from '@/components/shared/SectionHeading';
import { ToolsGrid } from '@/components/shared/ToolsGrid';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';
import { AchievementsTimeline } from '@/components/shared/AchievementsTimeline';
import { ResearchGrid } from '@/components/shared/ResearchGrid';
import { CertificatesGrid } from '@/components/shared/CertificatesGrid';
import { ContactForm } from '@/components/home/ContactForm';
import { AcademicBackground, CSMajor } from '@/components/shared/EducationBlock';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CapabilityTags />

      {/* 2. Skill */}
      <HomeSection id="skill" line1="TECH STACK" line2="HIGHLIGHT">
        <ToolsGrid />
      </HomeSection>

      {/* 3. Project */}
      <HomeSection id="projects" line1="RECENT" line2="PROJECTS">
        <ProjectsGrid limit={3} />
      </HomeSection>

      {/* Education */}
      <HomeSection id="education" line1="ACADEMIC" line2="BACKGROUND">
        <div className="flex flex-col gap-12 md:gap-16">
          <AcademicBackground />
          <div className="pt-8 md:pt-12 border-t border-sawad-border">
            <SubSectionHeading line1="CS" line2="MAJOR" />
            <CSMajor />
          </div>
        </div>
      </HomeSection>

      {/* Awards (Not in navbar) */}
      <HomeSection line1="RECORD &" line2="AWARDS">
        <AchievementsTimeline />
      </HomeSection>

      {/* 4. Research */}
      <HomeSection id="research" line1="RESEARCH" line2="AREAS">
        <ResearchGrid />
      </HomeSection>

      {/* 5. Certificates */}
      <HomeSection id="certificates" line1="VERIFIED" line2="LEARNING">
        <CertificatesGrid />
      </HomeSection>

      {/* 6. Contact */}
      <ContactForm />
    </>
  );
}
