'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { SectionRule } from '../shared/SectionRule';
import type { Project } from '@/lib/types';

type FilterCategory = 'all' | 'fullstack' | 'backend' | 'frontend';

const CATEGORIES: FilterCategory[] = ['all', 'fullstack', 'backend', 'frontend'];

function StatusChip({ status }: { status: Project['status'] }) {
  if (status === 'prod') {
    return (
      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ok">
        <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" aria-hidden="true" />
        prod
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-muted">
      <span className="w-1.5 h-1.5 rounded-full border border-text-muted" aria-hidden="true" />
      stable
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const [preview, setPreview] = useState<Project | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);
  const inProd = projects.filter((p) => p.status === 'prod').length;

  // El preview flotante sigue al cursor sin re-renders (transform directo al DOM)
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    const y = Math.min(e.clientY - 90, window.innerHeight - 230);
    el.style.transform = `translate(${e.clientX + 28}px, ${Math.max(y, 12)}px)`;
  };

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <SectionRule index="03" title="Servicios" code="SVC/CATALOG" />

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`font-mono text-[11px] px-3 py-1.5 border transition-colors cursor-pointer ${
                filter === cat
                  ? 'border-accent text-accent bg-accent-soft'
                  : 'border-border text-text-muted hover:text-text hover:border-border-strong'
              }`}
            >
              --{cat === 'all' ? 'todos' : cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-text-muted hidden sm:block">
            {filtered.length} servicios · {inProd} en producción
          </span>
        </div>

        {/* Catálogo */}
        <div
          className="border border-border bg-panel"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPreview(null)}
        >
          {filtered.map((project) => {
            const open = openId === project.id;
            return (
              <div key={project.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpenId(open ? null : project.id)}
                  onMouseEnter={() => setPreview(project.thumbnail ? project : null)}
                  aria-expanded={open}
                  className="w-full text-left px-4 sm:px-6 py-5 hover:bg-elevated/60 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className="font-mono text-xs text-accent">svc/{project.slug}</span>
                    <span className="flex items-center gap-4 shrink-0">
                      <span className="font-mono text-[10px] text-text-muted">{project.year}</span>
                      <StatusChip status={project.status} />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1 max-w-2xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <span
                      className="hidden md:block font-mono text-[10px] text-text-muted whitespace-nowrap shrink-0"
                      aria-hidden="true"
                    >
                      {open ? '− cerrar' : '+ detalles'}
                    </span>
                  </div>
                </button>

                {/* Detalle expandido */}
                {open && (
                  <div className="px-4 sm:px-6 pb-6 animate-log">
                    <div className="grid md:grid-cols-2 gap-6 pt-2 border-t border-border/60">
                      <div className="pt-4">
                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                          {project.longDescription || project.description}
                        </p>
                        {project.metric && (
                          <p className="font-mono text-[11px] mb-4">
                            <span className="text-accent">metric:</span>{' '}
                            <span className="text-text-secondary">{project.metric}</span>
                          </p>
                        )}
                        <p className="font-mono text-[11px] text-text-muted">
                          <span className="text-accent/70">deps:</span>{' '}
                          {project.technologies.join(' · ').toLowerCase()}
                        </p>
                      </div>
                      {project.thumbnail && (
                        <div className="relative aspect-video border border-border bg-elevated overflow-hidden mt-4">
                          <Image
                            src={project.thumbnail}
                            alt={`Captura de ${project.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Preview flotante — solo desktop con puntero */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`fixed left-0 top-0 z-40 pointer-events-none hidden lg:block transition-opacity duration-150 ${
          preview ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {preview?.thumbnail && (
          <div className="w-[320px] aspect-video relative border border-border-strong bg-elevated overflow-hidden shadow-2xl shadow-black/60">
            <Image
              src={preview.thumbnail}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-x-0 bottom-0 font-mono text-[10px] px-2.5 py-1.5 bg-bg/90 text-accent border-t border-border">
              svc/{preview.slug}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
