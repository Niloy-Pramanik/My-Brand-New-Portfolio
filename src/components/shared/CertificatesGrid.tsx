'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Award } from 'lucide-react';
import { CERTIFICATES } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function CertificatesGrid() {
  const { revealVariants } = useReveal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CERTIFICATES.map((cert) => (
        <motion.article
          key={cert.id}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="group relative block rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
        >
          <div className="relative w-full aspect-video bg-black/50 overflow-hidden">
            {cert.image ? <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            /> : <div className="flex h-full items-center justify-center text-sawad-accent"><Award size={40} strokeWidth={1.5} aria-hidden="true" /></div>}
          </div>

          <div className="p-6 relative">
            <h3 className="font-archivo font-bold text-lg text-sawad-text mb-2 pr-8 leading-tight">
              {cert.title}
            </h3>

            <div className="flex items-center justify-between mt-6">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-sawad-accent font-bold mb-1">
                  {cert.issuer}
                </span>
                <span className="text-sm text-sawad-muted">
                  {cert.date}
                </span>
              </div>

              {cert.credentialUrl && <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sawad-text transition-colors duration-300 group-hover:bg-sawad-accent group-hover:border-sawad-accent group-hover:text-white">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>}
            </div>
          </div>
          {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-2xl" aria-label={`View ${cert.title} credential`} />}
        </motion.article>
      ))}
    </div>
  );
}
