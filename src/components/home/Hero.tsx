'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/lib/data';
import { useReveal } from '@/lib/animations';
import { Download } from 'lucide-react';

export function Hero() {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.section 
      className="pt-8 md:pt-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={revealVariants}
        className="mb-6"
      >
        <span className="heading-primary text-[clamp(3rem,8vw,6.5rem)] block">
          {PROFILE.heroLines[0]}
        </span>
        <span className="heading-ghost text-[clamp(3rem,8vw,6.5rem)] block">
          {PROFILE.heroLines[1]}
        </span>
      </motion.h1>

      <motion.p
        variants={revealVariants}
        className="text-sawad-muted text-base md:text-lg max-w-lg leading-relaxed mb-8"
      >
        {PROFILE.tagline}
      </motion.p>

      <motion.blockquote
        variants={revealVariants}
        className="border-l border-sawad-border pl-4 mb-10"
      >
        <p className="text-sawad-muted/80 text-sm md:text-base italic mb-1.5">
          &quot;Stay hungry, stay foolish.&quot;
        </p>
        <footer className="text-[10px] text-sawad-muted uppercase tracking-widest font-bold">
          — Steve Jobs
        </footer>
      </motion.blockquote>

      <motion.div variants={revealVariants}>
        <a
          href={PROFILE.cvUrl || '#'}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-sawad-accent text-white rounded-full font-medium hover:bg-sawad-accent/90 transition-colors"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>
      </motion.div>
    </motion.section>
  );
}
