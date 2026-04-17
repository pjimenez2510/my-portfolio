import { Server, Monitor, Database, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  Backend: Server,
  Frontend: Monitor,
  'Bases de Datos': Database,
  'Herramientas y Prácticas': Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-bg-alt grain">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Habilidades</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight mb-12">
          Stack tecnológico
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Wrench;

            return (
              <div key={category.title} className="p-6 border border-border rounded-sm bg-bg-elevated">
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-text text-sm tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-2 text-sm text-text border border-border rounded-sm hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
