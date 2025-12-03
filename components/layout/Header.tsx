'use client';

/**
 * Header Component
 * Sticky header with navigation and theme toggle
 */

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Navigation } from './Navigation';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong shadow-lg py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
            {PERSONAL_INFO.name}
          </a>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="secondary" size="sm" href={PERSONAL_INFO.resumeUrl} className="text-sm">
                Descargar CV
              </Button>
              <Button variant="primary" size="sm" href="#contact" className="text-sm">
                Contactar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-xl p-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Sobre Mí', href: '#about' },
                { label: 'Experiencia', href: '#experience' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Contacto', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t border-accent/20 dark:border-accent-dark/20">
              <Button variant="secondary" size="sm" href={PERSONAL_INFO.resumeUrl}>
                Descargar CV
              </Button>
              <Button variant="primary" size="sm" href="#contact">
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

