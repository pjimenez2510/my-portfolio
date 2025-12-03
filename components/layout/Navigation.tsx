'use client';

/**
 * Navigation Component
 * Main navigation menu with active section highlighting
 */

import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={cn(
            'text-sm font-medium transition-colors duration-300 relative',
            activeSection === item.href.replace('#', '')
              ? 'text-accent dark:text-accent-dark'
              : 'text-text-secondary hover:text-text-primary dark:hover:text-text-primary-dark'
          )}
        >
          {item.label}
          {activeSection === item.href.replace('#', '') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent dark:bg-accent-dark" />
          )}
        </a>
      ))}
    </nav>
  );
}

