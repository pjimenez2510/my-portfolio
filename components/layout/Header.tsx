'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO, SYSTEM } from '@/lib/constants';
import { Uptime } from '@/components/shared/Uptime';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 130 && rect.bottom >= 130;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const raf = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const nav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-bg/90 backdrop-blur-md border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex h-12 items-center justify-between gap-4">
          {/* Identidad del sistema */}
          <a
            href="#hero"
            onClick={(e) => nav(e, '#hero')}
            className="flex items-center gap-2.5 font-mono text-xs text-text shrink-0"
          >
            <span className="status-dot" aria-hidden="true" />
            <span className="font-semibold tracking-tight">{SYSTEM.host}</span>
            <span className="hidden xl:inline text-text-muted">— operational</span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center">
            {NAV_ITEMS.map((item, i) => {
              const id = item.href.replace('#', '');
              const active = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => nav(e, item.href)}
                  aria-current={active ? 'true' : undefined}
                  className={`px-2.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors ${
                    active ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  <span className="opacity-50 mr-1" aria-hidden="true">
                    {String(i).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Derecha: uptime + CV + menú móvil */}
          <div className="flex items-center gap-3 shrink-0">
            <span
              className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-text-muted tabular-nums"
              title="uptime profesional — desde el primer deploy"
            >
              up <Uptime className="text-text-secondary" />
            </span>

            <a
              href={PERSONAL_INFO.resumeUrl}
              className="hidden md:inline-flex font-mono text-[11px] tracking-wide px-3 py-1.5 border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
            >
              GET /cv
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-log">
            <nav className="flex flex-col mb-4">
              {NAV_ITEMS.map((item, i) => {
                const id = item.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => nav(e, item.href)}
                    aria-current={active ? 'true' : undefined}
                    className={`px-2 py-3 font-mono text-sm tracking-wide border-b border-border/50 transition-colors ${
                      active ? 'text-accent' : 'text-text-secondary hover:text-text'
                    }`}
                  >
                    <span className="opacity-50 mr-2" aria-hidden="true">
                      {String(i).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="inline-flex font-mono text-xs tracking-wide px-4 py-3 border border-border-strong text-text"
            >
              GET /cv.pdf
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
