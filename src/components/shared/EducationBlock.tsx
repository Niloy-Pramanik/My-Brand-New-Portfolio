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

const COURSE_ICONS: Record<string, React.ReactNode> = {
  ml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
      <path d="M8 6a4 4 0 0 1 7.25 1.93" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 13.5V22" />
      <path d="M7 17l5-3.5L17 17" />
      <path d="M4.5 20l7.5-5 7.5 5" />
    </svg>
  ),
  dip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="2" />
      <path d="M21 15l-5-5L5 21" />
      <path d="M14 14l3-3 4 4" />
    </svg>
  ),
  dm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 3v18h18" />
      <circle cx="9" cy="13" r="1.5" />
      <circle cx="14" cy="9" r="1.5" />
      <circle cx="19" cy="5" r="1.5" />
      <path d="M10.2 11.8L12.8 10.2" />
      <path d="M15.3 7.8L17.7 6.2" />
      <circle cx="7" cy="7" r="1" />
      <circle cx="17" cy="13" r="1" />
    </svg>
  ),
};

export function CSMajor() {
  const { revealVariants, containerVariants } = useReveal();

  if (!EDUCATION.courses || EDUCATION.courses.length === 0) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
      className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"
    >
      {EDUCATION.courses.map((course, idx) => (
        <motion.div
          key={idx}
          variants={revealVariants}
          className="group relative rounded-2xl border border-sawad-border bg-sawad-surface/50 p-6 md:p-7 flex flex-col gap-4 cursor-default
                     hover:border-sawad-accent/40 hover:bg-sawad-surface
                     transition-[border-color,background-color,translate,box-shadow] duration-300 ease-out
                     hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,98,44,0.08)]"
        >
          {/* Accent top bar — revealed on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-sawad-accent/0 via-sawad-accent to-sawad-accent/0
                       scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          />

          {/* Icon + code badge row */}
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-sawad-accent/10 border border-sawad-accent/20 flex items-center justify-center
                            text-sawad-accent/70 group-hover:text-sawad-accent group-hover:bg-sawad-accent/15
                            transition-colors duration-300">
              {COURSE_ICONS[(course as { icon?: string }).icon ?? ''] ?? null}
            </div>

            {course.code && (
              <span className="inline-flex px-2.5 py-1 text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 rounded-full text-sawad-muted
                               group-hover:border-sawad-accent/20 group-hover:text-sawad-muted-strong transition-colors duration-300">
                {course.code}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-sawad-accent transition-colors duration-300">
            {course.title}
          </h4>

          {/* Description */}
          {(course as { description?: string }).description && (
            <p className="text-sm leading-relaxed text-sawad-muted group-hover:text-sawad-muted-strong transition-colors duration-300">
              {(course as { description?: string }).description}
            </p>
          )}

          {/* Credits badge */}
          {course.credits && (
            <div className="mt-auto pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-sawad-muted">
                <span className="w-1 h-1 rounded-full bg-sawad-accent/50" />
                {course.credits} Credits
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
