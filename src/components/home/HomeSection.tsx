'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

interface HomeSectionProps {
  id?: string;
  line1: string;
  line2: string;
  children: React.ReactNode;
}

export function HomeSection({ id, line1, line2, children }: HomeSectionProps) {
  const { revealVariants } = useReveal();

  return (
    <section id={id} className="py-10 md:py-14">
      <motion.div 
        variants={revealVariants} 
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OFFSET}
        className="mb-8 md:mb-12"
      >
        <h2 className="heading-primary text-[clamp(2.25rem,5.5vw,4.5rem)]">{line1}</h2>
        <h2 className="heading-ghost text-[clamp(2.25rem,5.5vw,4.5rem)]">{line2}</h2>
      </motion.div>
      {children}
    </section>
  );
}
