import { Layers, Code2, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Layers,
      label: 'Clean Architecture',
      desc: 'Estructuras escalables que separan responsabilidades.',
    },
    {
      icon: Code2,
      label: 'Full Stack',
      desc: 'Backend robusto + frontend moderno.',
    },
    {
      icon: Users,
      label: 'Agile / Scrum',
      desc: 'Entregas iterativas y de calidad.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 grain">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Sobre Mí</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Editorial text */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-8">
              Construyo software que
              <br className="hidden sm:block" />
              <span className="text-accent"> resuelve problemas reales</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                +2 años de experiencia creando soluciones web y móviles para empresas
                e instituciones. Actualmente en <strong className="text-text font-medium">PROCONTY</strong>,
                desarrollando FIDEVAL — un sistema de venta de seguros para 20,000+ asegurados.
              </p>
              <p>
                Estudio Ingeniería en Software en la Universidad Técnica de Ambato (8vo semestre).
                Mi enfoque: arquitecturas limpias, código que otros puedan mantener, y soluciones
                que escalen.
              </p>
            </div>

            {/* Stats - horizontal, editorial */}
            <div className="flex gap-10 mt-10 pt-8 border-t border-border">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-text">2+</span>
                <p className="text-xs text-text-muted mt-1 tracking-wide uppercase">Años exp.</p>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-text">6</span>
                <p className="text-xs text-text-muted mt-1 tracking-wide uppercase">Proyectos</p>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-text">8vo</span>
                <p className="text-xs text-text-muted mt-1 tracking-wide uppercase">Semestre</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="lg:col-span-5 space-y-4 lg:pt-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="group p-5 border border-border rounded-sm hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-text text-sm mb-1">{h.label}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
