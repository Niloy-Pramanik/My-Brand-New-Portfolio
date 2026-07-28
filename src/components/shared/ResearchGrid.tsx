'use client';

import { motion } from 'framer-motion';
import { FOCUS_AREAS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function ResearchGrid() {
  const { revealVariants } = useReveal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {FOCUS_AREAS.map((area, index) => (
        <motion.div 
          key={index}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="p-6 rounded-2xl bg-sawad-surface border border-sawad-border hover:border-sawad-accent/50 transition-colors group cursor-pointer"
        >
          <h3 className="font-display font-bold text-xl text-white group-hover:text-sawad-accent transition-colors">
            {area.title}
          </h3>
          <p className="mt-2 text-sm text-sawad-muted">
            {area.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
