import { Hero } from '@/components/home/Hero';
import { StatsStrip } from '@/components/home/StatsStrip';
import { CapabilityTags } from '@/components/home/CapabilityTags';
import { HomeSection } from '@/components/home/HomeSection';
import Link from 'next/link';
import { ToolsGrid } from '@/components/shared/ToolsGrid';
import { ProjectsGrid } from '@/components/shared/ProjectsGrid';
import { AchievementsTimeline } from '@/components/shared/AchievementsTimeline';
import { ResearchGrid } from '@/components/shared/ResearchGrid';
import { CertificatesGrid } from '@/components/shared/CertificatesGrid';
import { ContactForm } from '@/components/home/ContactForm';
import { AcademicBackground } from '@/components/shared/EducationBlock';
import { ExperienceBlock } from '@/components/shared/ExperienceBlock';
import { PROFILE, CAREER_INTERESTS } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CapabilityTags />

      <HomeSection id="about" line1="ABOUT" line2="ME">
        <div className="space-y-5 text-sawad-muted leading-relaxed max-w-3xl">
          {PROFILE.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <h3 className="font-display font-bold text-xl mt-8 mb-4">Career Interests</h3>
        <div className="flex flex-wrap gap-2">
          {CAREER_INTERESTS.map((interest) => <span key={interest} className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-sawad-border text-sawad-muted-strong">{interest}</span>)}
        </div>
      </HomeSection>

      {/* 2. Skill */}
      <HomeSection id="skill" line1="TECH STACK" line2="HIGHLIGHT">
        <ToolsGrid only={['Core Programming', 'Backend', 'Databases and APIs']} />
        <Link href="/skill" className="inline-flex mt-8 text-sawad-accent hover:text-white transition-colors">View All Skills →</Link>
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
            <Link href="/education" className="text-sawad-accent hover:text-white transition-colors">Explore Data Science and CS Coursework →</Link>
          </div>
        </div>
      </HomeSection>

      <HomeSection line1="PROFESSIONAL" line2="EXPERIENCE">
        <ExperienceBlock />
      </HomeSection>

      {/* Awards (Not in navbar) */}
      <HomeSection line1="RECORD &" line2="AWARDS">
        <AchievementsTimeline />
      </HomeSection>

      {/* 4. Research */}
      <HomeSection id="research" line1="RESEARCH" line2="AREAS">
        <ResearchGrid limit={2} />
        <Link href="/research" className="inline-flex mt-8 text-sawad-accent hover:text-white transition-colors">Explore MERIT-RP Research →</Link>
      </HomeSection>

      {/* 5. Certificates */}
      <HomeSection id="certificates" line1="VERIFIED" line2="LEARNING">
        <CertificatesGrid />
        <Link href="/certificates" className="inline-flex mt-8 text-sawad-accent hover:text-white transition-colors">View All Certificates and Achievements →</Link>
      </HomeSection>

      {/* 6. Contact */}
      <ContactForm />
    </>
  );
}
