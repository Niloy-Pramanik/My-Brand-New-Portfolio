'use client';

import { motion } from 'framer-motion';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

interface SectionHeadingProps {
  line1: string;
  line2: string;
}

export function SectionHeading({ line1, line2 }: SectionHeadingProps) {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.div 
      className="mb-8 md:mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
    >
      <motion.div variants={revealVariants}>
        <h2 className="heading-primary text-[clamp(2.25rem,5.5vw,4.5rem)]">{line1}</h2>
        <h2 className="heading-ghost text-[clamp(2.25rem,5.5vw,4.5rem)]">{line2}</h2>
      </motion.div>
    </motion.div>
  );
}

export function SubSectionHeading({ line1, line2 }: SectionHeadingProps) {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.div 
      className="mb-4 md:mb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
    >
      <motion.div variants={revealVariants}>
        <h3 className="heading-primary text-[clamp(2.25rem,5.5vw,4.5rem)]">{line1}</h3>
        <h3 className="heading-ghost text-[clamp(2.25rem,5.5vw,4.5rem)]">{line2}</h3>
      </motion.div>
    </motion.div>
  );
}

interface PageHeaderProps {
  line1: string;
  line2: string;
  description?: string;
}

export function PageHeader({ line1, line2, description }: PageHeaderProps) {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.div 
      className="pt-8 md:pt-12 pb-8 md:pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={revealVariants}>
        <h1 className="heading-primary text-[clamp(2.25rem,6vw,4.5rem)]">{line1}</h1>
        <h1 className="heading-ghost text-[clamp(2.25rem,6vw,4.5rem)]">{line2}</h1>
      </motion.div>
      {description && (
        <motion.p 
          variants={revealVariants}
          className="text-sawad-muted text-base md:text-lg max-w-lg leading-relaxed mt-6"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
