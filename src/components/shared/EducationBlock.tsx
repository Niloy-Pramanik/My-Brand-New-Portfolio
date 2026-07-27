'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { EDUCATION } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function AcademicBackground() {
  const { revealVariants } = useReveal();

  return (
    <motion.div 
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          {EDUCATION.logo ? (
            <div className="relative w-16 h-16 rounded-xl border border-sawad-border overflow-hidden bg-white/5 shrink-0 flex items-center justify-center p-2">
              <Image 
                src={EDUCATION.logo} 
                alt={EDUCATION.university} 
                fill 
                className="object-contain p-2"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-xl border border-sawad-border bg-white/5 shrink-0 flex items-center justify-center">
              <span className="font-display font-bold text-lg text-sawad-muted">
                {EDUCATION.university.substring(0, 3).toUpperCase()}
              </span>
            </div>
          )}
          
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm md:text-base text-sawad-muted">
              {EDUCATION.university}
            </p>
          </div>
        </div>
      </div>
      
      {EDUCATION.graduationEstimate && (
        <div>
          <span className="inline-flex px-3 py-1.5 text-xs font-bold tracking-widest text-sawad-accent border border-sawad-accent/20 bg-sawad-accent/10 rounded-full">
            {EDUCATION.graduationEstimate}
          </span>
        </div>
      )}

      {EDUCATION.journey && (
        <p className="text-sawad-muted text-sm md:text-base leading-relaxed mt-2 max-w-3xl">
          {EDUCATION.journey}
        </p>
      )}
    </motion.div>
  );
}

export function CSMajor() {
  const { revealVariants } = useReveal();

  if (!EDUCATION.courses || EDUCATION.courses.length === 0) return null;

  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
      className="border border-sawad-border rounded-2xl overflow-hidden bg-sawad-surface/50"
    >
      {EDUCATION.courses.map((course, idx) => (
        <div 
          key={idx}
          className="flex items-center gap-4 p-4 md:p-6 border-b border-sawad-border last:border-none hover:bg-white/[0.02] transition-colors"
        >
          <div className="w-[84px] shrink-0">
            {course.code && (
              <span className="inline-flex justify-center w-full px-2.5 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-sawad-muted">
                {course.code}
              </span>
            )}
          </div>
          <span className="font-display font-medium text-white text-sm md:text-base">
            {course.title}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
