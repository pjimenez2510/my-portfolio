'use client';

import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';
import { formatDateRange } from '@/lib/utils';

export function Experience() {
  const [filter, setFilter] = useState<'all' | 'empresa' | 'freelance'>('all');

  const filtered = experiences.filter(
    (exp) => filter === 'all' || exp.type === filter
  );

  const filters: { key: typeof filter; label: string }[] = [
    { key: 'all', label: 'Todo' },
    { key: 'empresa', label: 'Empresa' },
    { key: 'freelance', label: 'Freelance' },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-bg-alt grain">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Experiencia</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Trayectoria
          </h2>

          {/* Filters */}
          <div className="flex gap-1 p-1 bg-bg border border-border rounded-sm">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 text-xs font-mono tracking-wide transition-colors rounded-sm ${
                  filter === f.key
                    ? 'bg-accent text-[#0C0C0C] font-medium'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience cards with left accent border */}
        <div className="space-y-4">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className={`group border-l-2 pl-6 sm:pl-8 py-6 pr-6 bg-bg-elevated border border-border rounded-sm transition-colors ${
                exp.current ? 'border-l-accent' : 'border-l-border-strong hover:border-l-accent/50'
              }`}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  {exp.current && (
                    <span className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
                      Actual
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-text">
                    {exp.position}
                  </h3>
                  <p className="text-accent text-sm font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-xs text-text-muted font-mono shrink-0">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="text-accent/60 mt-1.5 shrink-0 text-[8px]">&#9632;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 text-text-muted border border-border rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
