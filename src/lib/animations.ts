import { useReducedMotion } from 'framer-motion';

export const VIEWPORT_OFFSET = { once: true, margin: '-10% 0px' };

export function useReveal() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  return { revealVariants, containerVariants };
}
