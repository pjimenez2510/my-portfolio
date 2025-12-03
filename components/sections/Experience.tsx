'use client';

/**
 * Experience Section
 * Professional experience timeline
 */

import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';
import { experiences } from '@/data/experience';
import { formatDateRange } from '@/lib/utils';

export function Experience() {
  const [filter, setFilter] = useState<'all' | 'empresa' | 'freelance'>('all');

  const filteredExperiences = experiences.filter(
    (exp) => filter === 'all' || exp.type === filter
  );

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experiencia Profesional"
          subtitle="Mi trayectoria en el desarrollo de software"
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'glass-strong text-accent dark:text-accent-dark'
                : 'glass text-text-secondary hover:text-text-primary dark:hover:text-text-primary-dark'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter('empresa')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'empresa'
                ? 'glass-strong text-accent dark:text-accent-dark'
                : 'glass text-text-secondary hover:text-text-primary dark:hover:text-text-primary-dark'
            }`}
          >
            Empresa
          </button>
          <button
            onClick={() => setFilter('freelance')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'freelance'
                ? 'glass-strong text-accent dark:text-accent-dark'
                : 'glass text-text-secondary hover:text-text-primary dark:hover:text-text-primary-dark'
            }`}
          >
            Freelance
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 dark:bg-accent-dark/20 -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent dark:bg-accent-dark rounded-full ring-4 ring-primary dark:ring-primary-dark" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Content */}
                <div className="flex-1">
                  <GlassCard hover>
                    {/* Current Badge */}
                    {exp.current && (
                      <Badge className="mb-4 bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark">
                        Actualidad
                      </Badge>
                    )}

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-accent dark:text-accent-dark font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-text-secondary dark:text-text-secondary">
                        {formatDateRange(exp.startDate, exp.endDate, exp.current)} • {exp.location}
                      </p>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-text-secondary dark:text-text-secondary flex gap-2"
                        >
                          <span className="text-accent dark:text-accent-dark mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

