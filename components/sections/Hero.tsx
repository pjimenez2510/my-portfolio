'use client';

/**
 * Hero Section
 * Main landing section with introduction and CTA
 */

import React from 'react';
import { Button } from '../ui/Button';
import { AnimatedText } from '../ui/AnimatedText';
import { SocialLinks } from '../shared/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

export function Hero() {
  const roles = [
    'Desarrollador Full Stack',
    'Especialista en .NET & Angular',
    'Arquitecto de Software',
    'Backend Developer',
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-text-secondary dark:text-text-secondary text-lg mb-4 animate-fade-in">
            👋 Hola, soy
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary dark:text-text-primary-dark mb-6 animate-fade-in-up">
            {PERSONAL_INFO.name}
          </h1>

          {/* Animated Role */}
          <div className="text-2xl md:text-3xl text-accent dark:text-accent-dark font-semibold mb-8 h-12 flex items-center">
            <AnimatedText texts={roles} />
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary max-w-2xl mb-12 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg" href="#contact">
              Hablemos
            </Button>
            <Button variant="secondary" size="lg" href={PERSONAL_INFO.resumeUrl}>
              Ver CV
            </Button>
          </div>

          {/* Social Links */}
          <SocialLinks iconSize="lg" />

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center text-text-secondary hover:text-accent dark:hover:text-accent-dark transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm mb-2">Scroll</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

