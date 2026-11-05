'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, Wrench, MessageSquare, Microscope, Award, GraduationCap } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home', sectionId: null },
  { href: '/skill', icon: Wrench, label: 'Skill', sectionId: 'skill' },
  { href: '/projects', icon: FolderOpen, label: 'Project', sectionId: 'projects' },
  { href: '/#education', icon: GraduationCap, label: 'Education', sectionId: 'education' },
  { href: '/research', icon: Microscope, label: 'Research', sectionId: 'research' },
  { href: '/certificates', icon: Award, label: 'Certificates', sectionId: 'certificates' },
  { href: '/#contact', icon: MessageSquare, label: 'Contact', sectionId: 'contact' },
];

// Section IDs in DOM order (top to bottom) for scroll spy
const SECTION_IDS = ['skill', 'projects', 'education', 'research', 'certificates', 'contact'];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Track the last section above the reading line, including during upward scrolls.
  useEffect(() => {
    if (!isHome) return;

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    let frame: number | null = null;
    const updateActiveSection = () => {
      frame = null;
      let activeId: string | null = null;
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= window.innerHeight * 0.3) {
          activeId = element.id;
        }
      }
      setActiveSection(window.scrollY < 200 ? null : activeId);
    };
    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateActiveSection);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHome]);

  const handleNavigate = (event: { preventDefault: () => void }, href: string) => {
    // Same-page Home should include the profile card above the main content.
    if (isHome && href === '/') {
      event.preventDefault();
      if (window.location.hash) window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getIsActive = (item: typeof NAV_ITEMS[number]) => {
    if (isHome) {
      // Scroll-spy based active state on homepage
      if (item.href === '/') return activeSection === null;
      return item.sectionId === activeSection;
    }
    // Pathname-based active state on sub-pages
    if (item.href === '/') return false;
    if (item.href.startsWith('/#')) return false;
    return pathname.startsWith(item.href);
  };

  return (
    <>
      {/* Desktop: Site Logo & Centered Nav */}
      <nav className="hidden lg:block fixed top-4 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Centered Pill */}
          <div className="nav-pill flex items-center gap-1 mx-auto w-fit pointer-events-auto">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = getIsActive(item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onNavigate={(event) => handleNavigate(event, item.href)}
                  className={`nav-icon group ${isActive ? 'active' : ''}`}
                  aria-label={item.label}
                >
                  <Icon size={20} strokeWidth={1.8} />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-[10px] tracking-wide text-sawad-muted whitespace-nowrap opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150 ease-out pointer-events-none">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile: bottom-fixed icon bar */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-sawad-bg/95 backdrop-blur-xl border-t border-sawad-border"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="grid grid-cols-7 items-center px-1 py-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = getIsActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onNavigate={(event) => handleNavigate(event, item.href)}
                className={`relative flex flex-col items-center gap-0.5 py-1 text-[9px] leading-none ${
                  isActive ? 'text-white' : 'text-sawad-muted'
                }`}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-sawad-accent" />
                )}
                <Icon size={19} strokeWidth={1.8} />
                <span className="tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
