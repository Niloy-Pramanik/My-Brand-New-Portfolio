import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { PageHeader, SectionLabel } from '@/components/shared/SectionHeading';
import { ResearchGrid } from '@/components/shared/ResearchGrid';
import { RESEARCH, PROJECTS } from '@/lib/data';

export const metadata = pageMetadata('Research — Niloy Pramanik', 'MERIT-RP research contributions in Q-learning-based WSN relay planning. Conference submission 2217: submitted, acceptance not confirmed.', '/research');

export default function ResearchPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-4">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-sawad-accent shadow-[0_0_10px_rgba(232,98,44,0.8)]" />
          <h3 className="font-display text-sm tracking-widest text-sawad-accent uppercase">
            {RESEARCH.project}
          </h3>
        </div>
        <PageHeader 
          line1="RESEARCH" 
          line2="FOCUS" 
          description={RESEARCH.intro}
        />
      </div>

      <section className="max-w-4xl">
        <div className="relative rounded-2xl border border-sawad-border bg-sawad-surface/60 p-6 md:p-8 overflow-hidden">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-sawad-accent via-sawad-coral to-transparent" />
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug">{RESEARCH.title}</h2>
          <div className="flex items-center gap-3 mt-6 mb-3">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sawad-accent" />
            <h3 className="font-display font-bold text-xl">Research Contribution</h3>
          </div>
          <p className="text-sawad-muted leading-relaxed">{RESEARCH.contribution}</p>
          <Link href="/projects/merit-rp" className="group inline-flex items-center gap-1.5 mt-6 text-sawad-accent hover:text-white transition-colors">
            View MERIT-RP Project Details
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <SectionLabel>Research Domains</SectionLabel>
        <ResearchGrid />
      </section>

      <section className="mt-12">
        <SectionLabel>Technical Highlights</SectionLabel>
        <ul className="flex flex-wrap gap-2.5">
          {RESEARCH.highlights.map((highlight) => (
            <li
              key={highlight}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-sawad-border bg-white/[0.03] text-sm text-sawad-muted-strong
                         hover:border-sawad-accent/40 hover:text-white transition-colors duration-300"
            >
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sawad-accent/80" />
              {highlight}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-sawad-muted max-w-3xl">The default configuration uses 25 spatial cells × three energy buckets. Six forwarding heuristics and direct transmission form the action space, with decaying epsilon-greedy exploration during training.</p>
      </section>

      <section className="mt-12 pt-12 border-t border-sawad-border">
        <SectionLabel>Research Submissions</SectionLabel>
        <div className="rounded-2xl border border-sawad-border bg-sawad-surface max-w-4xl overflow-hidden">
          <div aria-hidden="true" className="h-[2px] bg-gradient-to-r from-sawad-accent via-sawad-coral to-transparent" />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-sawad-accent bg-sawad-accent/10 border border-sawad-accent/20">
                <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sawad-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sawad-accent" />
                </span>
                {RESEARCH.submission.status}
              </span>
              <span className="font-mono text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-sawad-border text-sawad-muted-strong">
                Submission ID · {RESEARCH.submission.id}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl leading-relaxed mt-5">{RESEARCH.submission.conference}</h3>
            <a href={PROJECTS.find((project) => project.slug === 'merit-rp')!.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mt-6 px-5 py-3 border border-sawad-border rounded-full hover:border-sawad-accent/50 hover:text-sawad-accent transition-colors">
              View Source Code
              <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
