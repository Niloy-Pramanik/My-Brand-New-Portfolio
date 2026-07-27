import type { Metadata } from 'next';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CertificatesGrid } from '@/components/shared/CertificatesGrid';

export const metadata: Metadata = {
  title: 'Certificates — Niloy Pramanik',
  description: 'Verified learning and certifications earned by Niloy Pramanik.',
};

export default function CertificatesPage() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading line1="VERIFIED" line2="LEARNING" />
      <div className="mt-12">
        <CertificatesGrid />
      </div>
    </div>
  );
}
