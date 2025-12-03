/**
 * About Section
 * Professional biography and highlights
 */

import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const stats = [
    { label: 'Años de Experiencia', value: '2+' },
    { label: 'Proyectos Completados', value: '10+' },
    { label: 'Tecnologías', value: '15+' },
    { label: 'Clientes Satisfechos', value: '100%' },
  ];

  const highlights = [
    {
      icon: '🏗️',
      title: 'Clean Architecture',
      description: 'Especializado en arquitecturas limpias y escalables que facilitan el mantenimiento y evolución del código.',
    },
    {
      icon: '⚡',
      title: 'Full Stack',
      description: 'Dominio completo del stack tecnológico, desde backend robusto hasta interfaces de usuario modernas.',
    },
    {
      icon: '🎯',
      title: 'Metodologías Ágiles',
      description: 'Experiencia trabajando con Scrum y prácticas ágiles para entregas continuas y de calidad.',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sobre Mí"
          subtitle="Conoce más sobre mi trayectoria y enfoque profesional"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <GlassCard>
              <p className="text-lg text-text-secondary dark:text-text-secondary leading-relaxed mb-4">
                Soy un desarrollador Full Stack con más de 2 años de experiencia creando soluciones 
                web robustas y escalables. Mi pasión es transformar ideas complejas en aplicaciones 
                funcionales y eficientes.
              </p>
              <p className="text-lg text-text-secondary dark:text-text-secondary leading-relaxed mb-4">
                Actualmente trabajo en <strong className="text-text-primary dark:text-text-primary-dark">PROCONTY</strong>, 
                desarrollando el proyecto FIDEVAL con tecnologías como .NET, Angular y Oracle.
              </p>
              <p className="text-lg text-text-secondary dark:text-text-secondary leading-relaxed">
                Me especializo en arquitecturas limpias y metodologías ágiles, siempre buscando las 
                mejores prácticas y soluciones innovadoras para cada proyecto.
              </p>
            </GlassCard>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center" hover>
                  <div className="text-3xl font-bold text-accent dark:text-accent-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary dark:text-text-secondary">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight) => (
              <GlassCard key={highlight.title} hover>
                <div className="flex gap-4">
                  <div className="text-4xl">{highlight.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-text-secondary dark:text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

