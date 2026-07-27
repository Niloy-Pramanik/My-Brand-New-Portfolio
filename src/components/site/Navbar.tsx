'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, Wrench, MessageSquare, Microscope, Award, GraduationCap } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/skill', icon: Wrench, label: 'Skill' },
  { href: '/projects', icon: FolderOpen, label: 'Project' },
  { href: '/research', icon: Microscope, label: 'Research' },
  { href: '/#education', icon: GraduationCap, label: 'Education' },
  { href: '/certificates', icon: Award, label: 'Certificates' },
  { href: '/#contact', icon: MessageSquare, label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: Site Logo & Centered Nav */}
      <nav className="hidden lg:block absolute top-8 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 relative">

          
          {/* Centered Pill */}
          <div className="nav-pill flex items-center gap-1 mx-auto w-fit">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : item.href.startsWith('/#')
                  ? false
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-sawad-bg/90 backdrop-blur-xl border-t border-sawad-border overflow-x-auto">
        <div className="flex items-center justify-start min-w-max py-3 px-4 gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : item.href.startsWith('/#')
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
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
