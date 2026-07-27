'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function AchievementsTimeline() {
  const { revealVariants } = useReveal();

  return (
    <div className="flex flex-col relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-white/10 ml-2 md:ml-0">
      {ACHIEVEMENTS.map((item) => (
        <motion.div
          key={item.id}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="relative pl-12 md:pl-16 py-8 first:pt-0 last:pb-0"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[15px] top-9 md:top-10 w-[10px] h-[10px] rounded-full bg-sawad-accent ring-4 ring-sawad-bg" />

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-start">
            {/* Image Thumbnail */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-sawad-accent bg-sawad-accent/10 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-archivo font-bold text-2xl md:text-3xl text-sawad-text tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sawad-muted leading-relaxed">
                {item.description}
              </p>
              {item.title.includes('FYDP') && (
                <Link href="/research" className="inline-flex items-center gap-2 mt-4 text-sm font-bold tracking-widest text-sawad-accent hover:text-white transition-colors uppercase">
                  Related research <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
