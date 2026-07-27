'use client';

import { motion } from 'framer-motion';
import { TOOLS } from '@/lib/data';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiFlask, SiDjango,
  SiMysql, SiSqlite, SiMongodb,
  SiScikitlearn, SiTensorflow, SiPytorch, SiLangchain,
  SiPycharm, SiGithub, SiJira, SiN8N, SiCursor, SiDocker,
  SiTailwindcss, SiHtmx, SiAlpinedotjs
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

  'MySQL': <SiMysql color="#4479A1" size={24} />,
  'SQLite': <SiSqlite color="#003B57" size={24} />,
  'MongoDB': <SiMongodb color="#47A248" size={24} />,

  'Scikit-Learn': <SiScikitlearn color="#F7931E" size={24} />,
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

export function ToolsGrid() {
  const { revealVariants } = useReveal();

  return (
    <div className="flex flex-col gap-12">
      {TOOLS.map((group) => (
        <motion.div
          key={group.category}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OFFSET}
          className="flex flex-col gap-6"
        >
          <h4 className="font-display font-bold text-2xl text-white">
            {group.category}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
            {group.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-5 group cursor-pointer"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-1 shadow-lg group-hover:shadow-sawad-accent/20">
                  {iconMap[item] || <Box color="#000000" size={24} />}
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-xl text-sawad-text tracking-tight group-hover:text-sawad-accent transition-colors">
                    {item}
                  </h3>
                  <p className="text-sm text-sawad-muted mt-1">
                    {group.category.replace('Tools & Platforms', 'Platform')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
