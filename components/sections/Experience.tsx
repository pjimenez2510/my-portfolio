'use client';

import { useState } from 'react';
import { experiences } from '@/data/experience';
import { SectionRule } from '../shared/SectionRule';

/** YYYY-MM → índice de mes absoluto */
const monthIdx = (iso: string) => {
  const [y, m] = iso.split('-').map(Number);
  return y * 12 + (m - 1);
};

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(
    experiences.find((e) => e.current)?.id ?? null
  );

  // Dominio del trace: primer deploy → mes actual
  const now = new Date();
  const nowIdx = now.getFullYear() * 12 + now.getMonth();
  const domainStart = Math.min(...experiences.map((e) => monthIdx(e.startISO)));
  const domainEnd = nowIdx + 1;
  const domainSpan = domainEnd - domainStart;

  const spanOf = (startISO: string, endISO?: string) => {
    const s = monthIdx(startISO);
    const f = endISO ? monthIdx(endISO) + 1 : domainEnd;
    return {
      left: ((s - domainStart) / domainSpan) * 100,
      width: Math.max(((f - s) / domainSpan) * 100, 3),
      months: f - s,
    };
  };

  // Marcas de año (enero de cada año dentro del dominio)
  const yearTicks: { label: string; left: number }[] = [];
  for (let m = domainStart; m <= domainEnd; m++) {
    if (m % 12 === 0) {
      yearTicks.push({
        label: String(m / 12),
        left: ((m - domainStart) / domainSpan) * 100,
      });
    }
  }

  // Trace: cronológico, el span raíz arriba
  const sorted = [...experiences].sort(
    (a, b) => monthIdx(a.startISO) - monthIdx(b.startISO)
  );

  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <SectionRule index="02" title="Experiencia" code="TRACE/DEPLOYS" />

        <p className="font-mono text-xs text-text-muted mb-10">
          trace de despliegues profesionales · dic 2023 → hoy ·{' '}
          <span className="text-text-secondary">click en un span para ver los logs</span>
        </p>

        <div className="border border-border bg-panel overflow-hidden">
          {/* Eje temporal */}
          <div className="hidden md:grid md:grid-cols-[240px_1fr] border-b border-border">
            <div className="px-4 py-2.5 border-r border-border">
              <span className="label-mono">deploy</span>
            </div>
            <div className="relative h-8" aria-hidden="true">
              {yearTicks.map((tick) => (
                <span
                  key={tick.label}
                  className="absolute top-1/2 -translate-y-1/2 font-mono text-[10px] text-text-muted pl-1.5"
                  style={{ left: `${tick.left}%` }}
                >
                  {tick.label}
                </span>
              ))}
            </div>
          </div>

          {sorted.map((exp) => {
            const span = spanOf(exp.startISO, exp.endISO);
            const open = openId === exp.id;
            // si el span termina cerca del borde derecho, la duración va dentro de la barra
            const labelInside = span.left + span.width > 82;

            return (
              <div key={exp.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpenId(open ? null : exp.id)}
                  aria-expanded={open}
                  className="w-full grid md:grid-cols-[240px_1fr] text-left group hover:bg-elevated/60 transition-colors cursor-pointer"
                >
                  {/* Etiqueta del deploy */}
                  <div className="px-4 pt-3.5 md:py-3.5 md:border-r border-border min-w-0">
                    <span className="font-mono text-xs font-medium text-text block truncate">
                      {exp.company}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      {exp.position}
                    </span>
                  </div>

                  {/* Barra del span */}
                  <div className="relative h-12 md:h-auto md:min-h-[3.25rem] mx-4 md:mx-0">
                    {yearTicks.map((tick) => (
                      <span
                        key={tick.label}
                        aria-hidden="true"
                        className="hidden md:block absolute inset-y-0 w-px bg-border"
                        style={{ left: `${tick.left}%` }}
                      />
                    ))}

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-5 flex items-center justify-end px-1.5 transition-colors ${
                        exp.current
                          ? 'bg-accent/20 border border-accent'
                          : 'bg-accent-soft border border-accent/30 group-hover:border-accent/70'
                      }`}
                      style={{ left: `${span.left}%`, width: `${span.width}%` }}
                    >
                      {labelInside && (
                        <span className="font-mono text-[10px] text-accent whitespace-nowrap flex items-center gap-1.5">
                          {exp.current && <span className="status-dot scale-[0.6]" aria-hidden="true" />}
                          {span.months}m{exp.current ? ' ▸ now' : ''}
                        </span>
                      )}
                    </div>

                    {!labelInside && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 font-mono text-[10px] text-text-muted whitespace-nowrap"
                        style={{ left: `calc(${span.left + span.width}% + 8px)` }}
                      >
                        {span.months}m
                      </span>
                    )}
                  </div>
                </button>

                {/* Logs expandidos */}
                {open && (
                  <div className="md:grid md:grid-cols-[240px_1fr] animate-log">
                    <div className="hidden md:block md:border-r border-border" aria-hidden="true" />
                    <div className="px-4 md:px-6 pb-5 pt-1">
                      <p className="font-mono text-[11px] text-text-muted mb-3">
                        [{exp.startDate} → {exp.current ? 'presente' : exp.endDate}] ·{' '}
                        {exp.location} · {exp.type}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                          >
                            <span className="text-accent/70 shrink-0 font-mono text-[10px] mt-1.5" aria-hidden="true">
                              ▪
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-mono text-[11px] text-text-muted">
                        <span className="text-accent/70">deps:</span>{' '}
                        {exp.technologies.join(' · ').toLowerCase()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
