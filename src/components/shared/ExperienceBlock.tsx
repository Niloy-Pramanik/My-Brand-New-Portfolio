import { EXPERIENCE } from '@/lib/data';

export function ExperienceBlock() {
  return (
    <div className="p-6 rounded-2xl bg-sawad-surface border border-sawad-border">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-2xl">{EXPERIENCE.company}</h3>
          <p className="text-sawad-muted mt-2">{EXPERIENCE.position} · {EXPERIENCE.arrangement}</p>
        </div>
        <span className="px-3 py-1.5 rounded-full text-sm text-sawad-accent bg-sawad-accent/10">{EXPERIENCE.status}</span>
      </div>
    </div>
  );
}
