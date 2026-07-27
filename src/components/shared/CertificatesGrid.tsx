'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATES } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function CertificatesGrid({ limit }: { limit?: number }) {
  const [showAll, setShowAll] = useState(false);
  const { revealVariants } = useReveal();
  
  const initialLimit = limit || 6;
  const displayLimit = showAll ? CERTIFICATES.length : initialLimit;
  const certs = CERTIFICATES.slice(0, displayLimit);
  const hasMore = CERTIFICATES.length > initialLimit;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OFFSET}
            className="group block rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
          >
            <div className="relative w-full aspect-video bg-black/50 overflow-hidden">
              <Image 
                src={cert.image} 
                alt={cert.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
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
                
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sawad-text transition-colors duration-300 group-hover:bg-sawad-accent group-hover:border-sawad-accent group-hover:text-white">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {!limit && hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="nav-pill text-sawad-text font-bold text-sm hover:bg-white/10 transition-colors cursor-pointer"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
}
