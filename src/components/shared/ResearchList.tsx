'use client';

import { motion } from 'framer-motion';
import { RESEARCH } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function ResearchList() {
  const { revealVariants } = useReveal();

  return (
    <div className="flex flex-col border-t border-sawad-border">
      {RESEARCH.areas.map((area) => (
        <motion.div
          key={area.id}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="border-b border-sawad-border py-8 md:py-10 group hover:bg-sawad-surface transition-colors cursor-default px-4 -mx-4 md:px-6 md:-mx-6 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div className="col-span-1 md:col-span-1">
              <span className="font-display text-sm tracking-widest text-sawad-muted group-hover:text-sawad-accent transition-colors">
                {area.id}
              </span>
            </div>
            
            <div className="col-span-1 md:col-span-5">
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tightest text-white group-hover:text-sawad-accent transition-colors">
                {area.title}
              </h3>
            </div>
            
            <div className="col-span-1 md:col-span-6">
              <p className="text-base text-sawad-muted transition-colors max-w-xl">
                {area.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
