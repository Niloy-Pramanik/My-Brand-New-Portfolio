'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, Wrench, MessageSquare, Microscope, Award, GraduationCap } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/skill', icon: Wrench, label: 'Skills' },
  { href: '/projects', icon: FolderOpen, label: 'Projects' },
  { href: '/education', icon: GraduationCap, label: 'Education' },
  { href: '/research', icon: Microscope, label: 'Research' },
  { href: '/certificates', icon: Award, label: 'Certificates' },
  { href: '/contact', icon: MessageSquare, label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleNavigate = (event: { preventDefault: () => void }, href: string) => {
    // Same-page Home should include the profile card above the main content.
    if (isHome && href === '/') {
      event.preventDefault();
      if (window.location.hash) window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  const getIsActive = (item: typeof NAV_ITEMS[number]) => {
    if (item.href === '/') return isHome;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  const activeMobileIndex = NAV_ITEMS.findIndex(getIsActive);

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
                  aria-label={item.href === '/certificates' ? 'Certificates and Achievements' : item.label}
                  aria-current={isActive ? 'page' : undefined}
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
        className="mobile-bottom-nav lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-sawad-bg/95 backdrop-blur-xl border-t border-sawad-border"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-1 py-2">
          <div className="relative grid grid-cols-7 items-center">
            <span
              aria-hidden="true"
              className="mobile-nav-indicator pointer-events-none absolute inset-y-0 left-0 w-[calc(100%/7)] px-0.5"
              style={{
                transform: `translateX(${Math.max(activeMobileIndex, 0) * 100}%)`,
                opacity: activeMobileIndex < 0 ? 0 : 1,
              }}
            >
              <span className="block h-full rounded-2xl bg-sawad-accent/12 border border-sawad-accent/15" />
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-sawad-accent" />
            </span>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = getIsActive(item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onNavigate={(event) => handleNavigate(event, item.href)}
                  className={`mobile-nav-link relative flex min-h-12 flex-col items-center justify-center gap-1 py-1 text-[9px] leading-none ${
                    isActive ? 'text-white' : 'text-sawad-muted'
                  }`}
                  aria-label={item.href === '/certificates' ? 'Certificates and Achievements' : item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="mobile-nav-icon" size={19} strokeWidth={1.8} />
                  <span className="tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
