'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function ProjectsGrid({ limit }: { limit?: number }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const hasMore = limit && PROJECTS.length > limit;
  const { revealVariants } = useReveal();

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.link}
          target={project.linkExternal ? '_blank' : undefined}
          rel="noopener noreferrer"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="group flex items-center gap-5 md:gap-8 py-8 border-b border-sawad-border last:border-none hover:bg-white/[0.02] transition-colors duration-300 rounded-2xl px-2 md:px-4 -mx-2 md:-mx-4"
        >
          {/* Project Image Thumbnail */}
          <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-sawad-accent/30 transition-colors">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            ) : (
              <div className="w-full h-full bg-sawad-surface flex items-center justify-center">
                <span className="font-display font-black text-2xl text-sawad-muted group-hover:text-sawad-accent transition-colors">
                  {project.id}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Title, Description & Tech */}
          <div className="flex-1 min-w-0 py-2">
            <h3 className="font-display font-bold text-xl md:text-3xl text-white group-hover:text-sawad-accent transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-sawad-muted mb-4 line-clamp-2 pr-4 md:pr-12">
              {project.description}
            </p>
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-[10px] md:text-xs font-medium bg-white/5 border border-white/10 rounded-full text-sawad-muted group-hover:border-sawad-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <ArrowUpRight
            size={24}
            className="text-sawad-muted group-hover:text-sawad-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-auto hidden md:block"
          />
        </motion.a>
      ))}

      {hasMore && (
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="group/btn inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold tracking-wide
                       border border-sawad-border rounded-full bg-transparent text-sawad-muted
                       hover:border-sawad-accent/50 hover:text-sawad-accent hover:bg-sawad-accent/5
                       hover:shadow-[0_0_20px_rgba(232,98,44,0.1)]
                       transition-all duration-300"
          >
            View More
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
