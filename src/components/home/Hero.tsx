'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/lib/data';
import { useReveal } from '@/lib/animations';

export function Hero() {
  const { revealVariants, containerVariants } = useReveal();

  // Split role into two words for two-tone heading
  const words = PROFILE.role.split(/[\s-]+/);
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const line2 = words.slice(Math.ceil(words.length / 2)).join(' ');

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
          {line1}
        </span>
        <span className="heading-ghost text-[clamp(3rem,8vw,6.5rem)] block">
          {line2}
        </span>
      </motion.h1>

      <motion.p
        variants={revealVariants}
        className="text-sawad-muted text-base md:text-lg max-w-lg leading-relaxed mb-8"
      >
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>

      <motion.blockquote
        variants={revealVariants}
        className="border-l border-sawad-border pl-4 mb-10"
      >
        <p className="text-sawad-muted/80 text-sm md:text-base italic mb-1.5">
          "Stay hungry, stay foolish."
        </p>
        <footer className="text-[10px] text-sawad-muted uppercase tracking-widest font-bold">
          — Steve Jobs
        </footer>
      </motion.blockquote>
    </motion.section>
  );
}
