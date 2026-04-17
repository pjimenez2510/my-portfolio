'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, Server, Layout, Smartphone, Layers } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/lib/types';

type FilterCategory = 'all' | 'backend' | 'frontend' | 'fullstack' | 'mobile';

const categoryLabels: Record<string, string> = {
  all: 'Todos',
  fullstack: 'Full Stack',
  backend: 'Backend',
  frontend: 'Frontend',
  mobile: 'Mobile',
};

const categoryIcons: Record<string, React.ElementType> = {
  fullstack: Layers,
  backend: Server,
  frontend: Layout,
  mobile: Smartphone,
};

export function Projects() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filtered = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  // First featured project gets a large card
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Proyectos</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Trabajo seleccionado
          </h2>

          <div className="flex gap-1 p-1 bg-bg-alt border border-border rounded-sm">
            {(['all', 'fullstack', 'backend', 'frontend', 'mobile'] as FilterCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wide transition-colors rounded-sm ${
                  filter === cat
                    ? 'bg-accent text-[#0C0C0C] font-medium'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured project - large card */}
        {featured && (
          <div className="mb-6">
            <FeaturedCard project={featured} />
          </div>
        )}

        {/* Rest - smaller grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden bg-bg-elevated group">
      {/* Image */}
      <div className="relative aspect-video md:aspect-auto bg-bg-alt overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers className="w-16 h-16 text-text-muted/20" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-3">
          Destacado &middot; {project.year}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-text mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.longDescription || project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-[11px] px-2.5 py-1 text-text-muted border border-border rounded-sm">
              {tech}
            </span>
          ))}
        </div>
        {(project.links.github || project.links.demo) && (
          <div className="flex gap-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent transition-colors">
                Código <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent transition-colors">
                Demo <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CompactCard({ project }: { project: Project }) {
  const Icon = categoryIcons[project.category] || Layers;

  return (
    <div className="border border-border rounded-sm bg-bg-elevated overflow-hidden group hover:border-accent/30 transition-colors">
      {/* Image */}
      <div className="relative aspect-video bg-bg-alt overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-10 h-10 text-text-muted/20" />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-3.5 h-3.5 text-text-muted" />
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
            {project.category} &middot; {project.year}
          </span>
        </div>
        <h3 className="font-display text-base font-bold text-text mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-[10px] px-2 py-0.5 text-text-muted border border-border rounded-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
