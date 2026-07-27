'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers, Layout } from 'lucide-react';
import Link from 'next/link';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

const EXPERTISE = [
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: 'WSN, REINFORCEMENT LEARNING, SECURITY',
    href: '/research',
    variant: 'coral' as const,
  },
  {
    icon: <Layout size={28} strokeWidth={1.5} />,
    title: 'REACT, TAILWIND CSS, HTMX, FLASK / DJANGO',
    href: '/skill',
    variant: 'lime' as const,
  },
];

const MotionLink = motion.create(Link);

export function CapabilityTags() {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <section className="py-6">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OFFSET}
      >
        {EXPERTISE.map((item) => (
          <MotionLink
            key={item.title}
            href={item.href}
            variants={revealVariants}
            className={`expertise-card-${item.variant} p-6 md:p-8 min-h-[180px] flex flex-col justify-between group`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-black/10 mb-8">
              {item.icon}
            </div>
            <div className="flex items-end justify-between">
              <h3 className="font-display font-bold text-sm md:text-base tracking-wide max-w-[80%]">
                {item.title}
              </h3>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/20 hover:bg-black/10 transition-colors shrink-0">
                <ArrowRight size={18} />
              </button>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}
