import { ContactForm } from '@/components/home/ContactForm';
import { PageHeader } from '@/components/shared/SectionHeading';
import { PROFILE, SOCIALS } from '@/lib/data';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact — Niloy Pramanik', 'Contact Niloy Pramanik in Dhaka, Bangladesh about software engineering, applied AI, research and collaborative projects.', '/contact');

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <PageHeader line1="GET IN" line2="TOUCH" description="For opportunities, research discussions and collaborative projects." />
      <div className="text-sawad-muted space-y-4">
        <p>{PROFILE.location}</p>
        <a href={`mailto:${PROFILE.email}`} className="block text-sawad-accent break-all hover:text-white transition-colors">{PROFILE.email}</a>
        <div className="flex flex-wrap gap-6">
          {SOCIALS.filter((social) => social.label !== 'Email').map((social) => (
            <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-sawad-accent transition-colors">{social.label}</a>
          ))}
          <a href={PROFILE.website} className="hover:text-sawad-accent transition-colors">Portfolio</a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
