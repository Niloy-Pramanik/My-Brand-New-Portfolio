'use client';

import { PROFILE, SOCIALS } from '@/lib/data';
import { motion } from 'framer-motion';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#0A66C2]">
      <FaLinkedinIn className="h-3 w-3 text-white" />
    </span>
  ),
  GitHub: <FaGithub className="h-5 w-5 text-white" />,
  Email: <Mail className="h-5 w-5 text-[#22c55e]" />,
  Phone: <Phone className="h-5 w-5 text-sawad-accent" />,
};

const PADDING = 'px-4 sm:px-6 lg:px-8 xl:px-10';

export function Footer() {
  const { revealVariants } = useReveal();

  return (
    <motion.footer
      className="mt-16 w-full pb-24 lg:pb-0"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OFFSET}
    >
      <div className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-4 ${PADDING}`}>
        <div className="flex items-center gap-5 text-sm sm:gap-6">
          <span className="text-sawad-muted-strong">
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <a href="#" className="text-white/90 transition-colors hover:text-sawad-accent">
            Privacy
          </a>
          <a href="#" className="text-white/90 transition-colors hover:text-sawad-accent">
            Terms
          </a>
        </div>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-opacity hover:opacity-70"
            >
              {socialIcons[s.label] ?? <Mail className="h-5 w-5 text-[#22c55e]" />}
            </a>
          ))}
        </div>
      </div>

      <div className={`pt-8 sm:pt-10 ${PADDING}`}>
        <svg
          viewBox="0 0 1000 123"
          className="block w-full overflow-hidden"
          role="img"
          aria-label={PROFILE.name}
        >
          <defs>
            <linearGradient id="footer-wordmark-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a3a3a3" />
              <stop offset="100%" stopColor="#161616" />
            </linearGradient>
          </defs>
          <text
            x="500"
            y="98"
            textAnchor="middle"
            textLength="686"
            lengthAdjust="spacingAndGlyphs"
            fontSize="105"
            className="font-display font-black"
            fill="url(#footer-wordmark-gradient)"
          >
            {PROFILE.name}
          </text>
        </svg>
      </div>
    </motion.footer>
  );
}
