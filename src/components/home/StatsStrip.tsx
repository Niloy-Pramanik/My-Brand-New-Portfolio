'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function StatsStrip() {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.section 
      className="py-8 flex flex-wrap gap-8 md:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
    >
      {STATS.map((stat) => (
        <motion.div
          key={stat.label}
          variants={revealVariants}
        >
          <p className="font-display font-black text-4xl md:text-5xl tracking-tightest text-white">
            +{stat.value}
          </p>
          <p className="text-xs uppercase tracking-widest text-sawad-muted mt-2">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
