import { skillCategories } from '@/data/skills';
import { SectionRule } from '../shared/SectionRule';

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <SectionRule index="04" title="Stack" code="DEPS/MANIFEST" />

        <p className="font-mono text-xs text-text-muted mb-10 max-w-2xl">
          sin barras de progreso inventadas — cada dependencia lista los{' '}
          <span className="text-text-secondary">sistemas reales en producción</span> que la usan
        </p>

        {/* Manifiesto de dependencias — grid con hairlines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-panel p-5 sm:p-6">
              <h3 className="font-mono text-xs text-accent mb-5">{category.dir}/</h3>
              <ul className="space-y-3.5">
                {category.skills.map((skill, i) => {
                  const last = i === category.skills.length - 1;
                  return (
                    <li key={skill.name} className="font-mono text-xs leading-relaxed">
                      <span className="text-text-muted select-none" aria-hidden="true">
                        {last ? '└─ ' : '├─ '}
                      </span>
                      <span className="text-text">{skill.name}</span>
                      {skill.usedIn.length > 0 && (
                        <span className="block pl-6 text-[10px] text-text-muted mt-0.5">
                          ↳ {skill.usedIn[0] === '*' ? 'transversal' : skill.usedIn.join(' · ')}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
