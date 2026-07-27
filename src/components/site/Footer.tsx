'use client';

import { PROFILE } from '@/lib/data';
import { motion } from 'framer-motion';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function Footer() {
  const { revealVariants } = useReveal();

  return (
    <motion.footer 
      className="py-10 mt-16 text-center text-sm text-sawad-muted"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
    >
      <p>
        Made by{' '}
        <span className="text-sawad-accent">{PROFILE.name}</span>
        {' | Powered by '}
        <span className="text-sawad-accent">Next.js</span>
      </p>
    </motion.footer>
  );
}
