'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add('dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const nav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-bg py-3' : 'py-5'
      } ${isScrolled && !isMobileMenuOpen ? 'glass-nav' : ''}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => nav(e, '#hero')}
            className="font-display text-lg font-bold text-text tracking-tight"
          >
            pj<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => nav(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wide transition-colors ${
                    active
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-[17px] h-[17px]" /> : <Moon className="w-[17px] h-[17px]" />}
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              className="hidden md:inline-flex font-mono text-xs tracking-wide px-4 py-2 border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
            >
              CV
            </a>

            <a
              href="#contact"
              onClick={(e) => nav(e, '#contact')}
              className="hidden md:inline-flex font-mono text-xs tracking-wide px-4 py-2 bg-accent text-[#0C0C0C] hover:bg-accent-hover transition-colors"
            >
              Contactar
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-reveal-in bg-bg">
            <nav className="flex flex-col gap-1 mb-4">
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => nav(e, item.href)}
                    className={`px-3 py-2.5 text-sm font-mono tracking-wide transition-colors ${
                      active ? 'text-accent' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="flex gap-2 pt-3 border-t border-border">
              <a
                href={PERSONAL_INFO.resumeUrl}
                className="flex-1 text-center font-mono text-xs tracking-wide px-4 py-3 border border-border-strong text-text"
              >
                CV
              </a>
              <a
                href="#contact"
                onClick={(e) => nav(e, '#contact')}
                className="flex-1 text-center font-mono text-xs tracking-wide px-4 py-3 bg-accent text-[#0C0C0C]"
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
