'use client';

import { motion } from 'framer-motion';
import { TOOLS, slugify } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiFlask, SiDjango,
  SiMysql, SiSqlite, SiMongodb,
  SiScikitlearn, SiTensorflow, SiPytorch, SiLangchain,
  SiPycharm, SiGithub, SiJira, SiN8N, SiCursor, SiDocker,
  SiTailwindcss, SiHtmx, SiAlpinedotjs, SiPostgresql, SiNodedotjs,
  SiSpringboot, SiPreact, SiOpencv, SiVercel, SiOpenjdk
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Box } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'C': <SiC color="#A8B9CC" size={24} />,
  'C++': <SiCplusplus color="#00599C" size={24} />,
  'Python': <SiPython color="#3776AB" size={24} />,
  'JavaScript': <SiJavascript color="#F7DF1E" size={24} />,
  'TypeScript': <SiTypescript color="#3178C6" size={24} />,

  'React': <SiReact color="#61DAFB" size={24} />,
  'Next.js': <SiNextdotjs color="#000000" size={24} />,
  'Tailwind CSS': <SiTailwindcss color="#06B6D4" size={24} />,
  'HTMX': <SiHtmx color="#3D72D7" size={24} />,
  'Alpine.js': <SiAlpinedotjs color="#8BC0D0" size={24} />,

  'Flask': <SiFlask color="#000000" size={24} />,
  'Django': <SiDjango color="#092E20" size={24} />,
  'Java': <SiOpenjdk color="#241F21" size={24} />,

  'MySQL': <SiMysql color="#4479A1" size={24} />,
  'SQLite': <SiSqlite color="#003B57" size={24} />,
  'MongoDB': <SiMongodb color="#47A248" size={24} />,

  'Scikit-learn': <SiScikitlearn color="#F7931E" size={24} />,
  'PostgreSQL': <SiPostgresql color="#4169E1" size={24} />,
  'Node.js': <SiNodedotjs color="#339933" size={24} />,
  'Spring Boot': <SiSpringboot color="#6DB33F" size={24} />,
  'Preact': <SiPreact color="#673AB8" size={24} />,
  'OpenCV': <SiOpencv color="#5C3EE8" size={24} />,
  'Vercel': <SiVercel color="#000000" size={24} />,
  'TensorFlow': <SiTensorflow color="#FF6F00" size={24} />,
  'PyTorch': <SiPytorch color="#EE4C2C" size={24} />,
  'LangChain': <SiLangchain color="#1C3C3C" size={24} />,

  'VS Code': <TbBrandVscode color="#007ACC" size={24} />,
  'PyCharm': <SiPycharm color="#000000" size={24} />,
  'GitHub': <SiGithub color="#181717" size={24} />,
  'Jira': <SiJira color="#0052CC" size={24} />,
  'n8n': <SiN8N color="#FF6D5A" size={24} />,
  'Cursor': <SiCursor color="#000000" size={24} />,
  'Docker': <SiDocker color="#2496ED" size={24} />,
};

export function ToolsGrid({ only }: { only?: string[] }) {
  const { revealVariants, containerVariants } = useReveal();
  const groups = only ? TOOLS.filter((group) => only.includes(group.category)) : TOOLS;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
      className="flex flex-col gap-6 md:gap-8"
    >
      {groups.map((group) => (
        <motion.div
          key={group.category}
          id={slugify(group.category)}
          variants={revealVariants}
          className="scroll-mt-28 rounded-2xl border border-sawad-border bg-sawad-surface/40 p-6 md:p-8
                     hover:border-sawad-accent/25 transition-colors duration-300"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span aria-hidden="true" className="w-8 h-px bg-gradient-to-r from-sawad-accent to-transparent shrink-0" />
              <h4 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight truncate">
                {group.category}
              </h4>
            </div>
            <span className="shrink-0 inline-flex px-2.5 py-1 text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 rounded-full text-sawad-muted">
              {group.items.length} {group.items.length === 1 ? 'SKILL' : 'SKILLS'}
            </span>
          </div>

          {group.description && (
            <p className="text-sm text-sawad-muted mt-2 md:pl-11">{group.description}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-6">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-5 group cursor-default"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-transparent flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sawad-accent group-hover:shadow-[0_8px_30px_rgba(232,98,44,0.25)]">
                  {iconMap[item.name] || <Box color="#000000" size={24} />}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-xl text-sawad-text tracking-tight group-hover:text-sawad-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-sawad-muted mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
