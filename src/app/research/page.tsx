import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/shared/SectionHeading';
import { ResearchGrid } from '@/components/shared/ResearchGrid';
import { RESEARCH, PROJECTS } from '@/lib/data';

export const metadata = pageMetadata('Research — Niloy Pramanik', 'MERIT-RP research contributions in Q-learning-based WSN relay planning. Conference submission 2217: submitted, acceptance not confirmed.', '/research');

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
      <section className="max-w-4xl space-y-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug">{RESEARCH.title}</h2>
        <h3 className="font-display font-bold text-xl">Research Contribution</h3>
        <p className="text-sawad-muted leading-relaxed">{RESEARCH.contribution}</p>
        <Link href="/projects/merit-rp" className="inline-flex text-sawad-accent hover:text-white transition-colors">View MERIT-RP Project Details →</Link>
      </section>
      <section className="mt-12">
        <h2 className="font-display font-bold text-2xl mb-6">Research Domains</h2>
        <ResearchGrid />
      </section>
      <section className="mt-12">
        <h2 className="font-display font-bold text-2xl mb-6">Technical Highlights</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {RESEARCH.highlights.map((highlight) => <li key={highlight} className="p-4 rounded-2xl border border-sawad-border bg-sawad-surface text-sm text-sawad-muted-strong">{highlight}</li>)}
        </ul>
        <p className="mt-6 text-sm text-sawad-muted max-w-3xl">The default configuration uses 25 spatial cells × three energy buckets. Six forwarding heuristics and direct transmission form the action space, with decaying epsilon-greedy exploration during training.</p>
      </section>
      <section className="mt-12 pt-12 border-t border-sawad-border">
        <h2 className="font-display font-bold text-2xl mb-6">Research Submissions</h2>
        <div className="p-6 rounded-2xl border border-sawad-border bg-sawad-surface max-w-4xl">
          <h3 className="font-display font-bold text-xl leading-relaxed">{RESEARCH.submission.conference}</h3>
          <p className="text-sawad-muted mt-4">Submission ID: {RESEARCH.submission.id}</p>
          <p className="text-sawad-accent mt-3">{RESEARCH.submission.status}</p>
          <a href={PROJECTS.find((project) => project.slug === 'merit-rp')!.link} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 px-5 py-3 border border-sawad-border rounded-full hover:border-sawad-accent/50 hover:text-sawad-accent transition-colors">View Source Code ↗</a>
        </div>
      </section>
    </div>
  );
}
