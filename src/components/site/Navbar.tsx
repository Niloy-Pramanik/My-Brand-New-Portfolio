'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, Wrench, MessageSquare, Microscope, Award, GraduationCap } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home', sectionId: null },
  { href: '/skill', icon: Wrench, label: 'Skill', sectionId: 'skill' },
  { href: '/projects', icon: FolderOpen, label: 'Project', sectionId: 'projects' },
  { href: '/research', icon: Microscope, label: 'Research', sectionId: 'research' },
  { href: '/#education', icon: GraduationCap, label: 'Education', sectionId: 'education' },
  { href: '/certificates', icon: Award, label: 'Certificates', sectionId: 'certificates' },
  { href: '/#contact', icon: MessageSquare, label: 'Contact', sectionId: 'contact' },
];

// Section IDs in DOM order (top to bottom) for scroll spy
const SECTION_IDS = ['skill', 'projects', 'education', 'research', 'certificates', 'contact'];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll spy: observe homepage sections with IntersectionObserver
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all currently intersecting sections
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else {
          // If nothing is intersecting, check if we're at the very top
          if (window.scrollY < 200) {
            setActiveSection(null); // Home
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section enters top 20-40% of viewport
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Also listen for scroll to detect "at top" for Home highlight
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href === '/' && pathname === '/') {
      e.preventDefault();
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
      <nav className="hidden lg:block absolute top-8 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Centered Pill */}
          <div className="nav-pill flex items-center gap-1 mx-auto w-fit">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = getIsActive(item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
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
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-sawad-bg/90 backdrop-blur-xl border-t border-sawad-border">
        <div className="flex items-center justify-around py-3 px-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = getIsActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`flex flex-col items-center gap-1 min-w-[48px] ${
                  isActive ? 'text-white' : 'text-sawad-muted'
                }`}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span className="text-[10px] tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
