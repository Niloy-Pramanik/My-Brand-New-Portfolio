'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function MobilePageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const hasNavigated = previousPath.current !== pathname;
    previousPath.current = pathname;
    const main = mainRef.current;
    const motionAllowed = window.matchMedia(
      '(max-width: 1023px) and (prefers-reduced-motion: no-preference)'
    );
    if (!hasNavigated || !main || !motionAllowed.matches) return;

    const animation = main.animate(
      [
        { opacity: 0.6, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
    const stopAnimation = () => {
      if (!motionAllowed.matches) animation.cancel();
    };
    motionAllowed.addEventListener('change', stopAnimation);

    return () => {
      animation.cancel();
      motionAllowed.removeEventListener('change', stopAnimation);
    };
  }, [pathname]);

  return <main ref={mainRef}>{children}</main>;
}
