'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { SocialLinks } from '../shared/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

export function Hero() {
  const roles = ['Full Stack Developer', 'Backend Developer', 'Frontend Developer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = roles[currentRole];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayed === text) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? text.substring(0, displayed.length - 1)
            : text.substring(0, displayed.length + 1)
        );
      }, isDeleting ? 35 : 70);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole, roles]);

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-end sm:items-center relative overflow-hidden grain"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-px h-40 bg-accent/30 hidden lg:block" />
      <div className="absolute top-0 right-0 h-px w-40 bg-accent/30 hidden lg:block" />

      <div className="section-container relative z-10 pb-24 sm:pb-0 w-full">
        <div className="max-w-2xl stagger">

          {/* Mono greeting */}
          <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase mb-6 animate-reveal">
            // hola, soy
          </p>

          {/* Name - editorial typography */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] text-text mb-5 animate-reveal">
            Patricio
            <br />
            <span className="text-accent">Jiménez</span>
          </h1>

          {/* Accent line */}
          <div className="accent-line mb-6 animate-reveal" />

          {/* Typing role */}
          <div className="h-8 sm:h-10 flex items-center mb-6 animate-reveal">
            <span className="font-mono text-sm sm:text-base text-text-secondary tracking-wide">
              {'> '}{displayed}
              <span className="text-accent animate-pulse">_</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-10 animate-reveal">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 animate-reveal">
            <a
              href="#contact"
              className="px-7 py-3 bg-accent text-[#0C0C0C] rounded-none font-display font-semibold text-sm tracking-wide hover:bg-accent-hover transition-colors"
            >
              Hablemos
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="px-7 py-3 border border-border-strong text-text font-display font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
            >
              Ver CV
            </a>
          </div>

          {/* Social */}
          <div className="animate-reveal">
            <SocialLinks />
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className="absolute bottom-8 right-6 sm:right-0 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-6 hidden sm:block">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce sm:mt-12" />
        </a>
      </div>
    </section>
  );
}
