'use client';

import { motion } from 'framer-motion';
import { FOCUS_AREAS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function ResearchGrid({ limit }: { limit?: number }) {
  const { revealVariants, containerVariants } = useReveal();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {FOCUS_AREAS.slice(0, limit).map((area, index) => (
        <motion.div
          key={index}
          variants={revealVariants}
          className="group relative p-6 rounded-2xl bg-sawad-surface border border-sawad-border overflow-hidden cursor-default
                     hover:border-sawad-accent/40 hover:bg-sawad-surface-hover
                     transition-[border-color,background-color,translate,box-shadow] duration-300 ease-out
                     hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,98,44,0.08)]"
        >
          {/* Accent top bar — revealed on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-sawad-accent/0 via-sawad-accent to-sawad-accent/0
                       scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          />

          {/* Ghost index number */}
          <span
            aria-hidden="true"
            className="absolute top-4 right-5 font-display font-black text-4xl leading-none text-white/[0.05] group-hover:text-sawad-accent/20 transition-colors duration-300"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-2.5 mb-3">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-sawad-accent/70 group-hover:bg-sawad-accent group-hover:shadow-[0_0_10px_rgba(232,98,44,0.6)] transition-all duration-300" />
            <h3 className="font-display font-bold text-xl text-white group-hover:text-sawad-accent transition-colors pr-12">
              {area.title}
            </h3>
          </div>
          <p className="text-sm text-sawad-muted group-hover:text-sawad-muted-strong transition-colors duration-300">
            {area.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
