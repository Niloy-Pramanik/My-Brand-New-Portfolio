import { ContactForm } from '@/components/home/ContactForm';
import { PageHeader } from '@/components/shared/SectionHeading';
import { PROFILE, SOCIALS } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <LinkedinIcon />,
  GitHub: <GithubIcon />,
  Email: <Mail size={18} />,
  Phone: <Phone size={18} />,
};

const cardClass =
  'group flex items-start gap-4 rounded-2xl border border-sawad-border bg-sawad-surface/40 p-5 hover:border-sawad-accent/40 transition-all duration-300 hover:-translate-y-0.5';
const iconBoxClass =
  'w-11 h-11 rounded-xl bg-sawad-accent/10 border border-sawad-accent/20 text-sawad-accent flex items-center justify-center shrink-0 group-hover:bg-sawad-accent group-hover:text-white group-hover:border-sawad-accent transition-colors duration-300';

export const metadata = pageMetadata('Contact — Niloy Pramanik', 'Contact Niloy Pramanik in Dhaka, Bangladesh about software engineering, applied AI, research and collaborative projects.', '/contact');

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="GET IN" line2="TOUCH" description="For opportunities, research discussions and collaborative projects." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <div className={cardClass}>
          <span className={iconBoxClass}><MapPin size={20} /></span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted">Location</span>
            <span className="block text-white font-medium mt-1 text-sm">{PROFILE.location}</span>
          </span>
        </div>

        <a href={`mailto:${PROFILE.email}`} className={cardClass}>
          <span className={iconBoxClass}><Mail size={20} /></span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted">Email</span>
            <span className="block text-white font-medium mt-1 text-sm break-all">{PROFILE.email}</span>
          </span>
        </a>

        <a href={PROFILE.phoneHref} className={cardClass}>
          <span className={iconBoxClass}><Phone size={20} /></span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted">Phone</span>
            <span className="block text-white font-medium mt-1 text-sm">{PROFILE.phone}</span>
          </span>
        </a>

        <a href={PROFILE.website} target="_blank" rel="noopener noreferrer" className={cardClass}>
          <span className={iconBoxClass}><Globe size={20} /></span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted">Portfolio</span>
            <span className="block text-white font-medium mt-1 text-sm break-all">niloypramanik.me</span>
          </span>
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-6">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-sawad-muted mr-1">Connect</span>
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-11 h-11 rounded-xl border border-sawad-border bg-white/[0.03] flex items-center justify-center text-sawad-muted-strong
                       hover:text-sawad-accent hover:border-sawad-accent/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {socialIcons[social.label] ?? <Mail size={18} />}
          </a>
        ))}
      </div>

      <ContactForm />
    </div>
  );
}
