/**
 * Skills Section
 * Technical skills organized by categories
 */

import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories, currentlyLearning } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Habilidades"
          subtitle="Tecnologías y herramientas que domino"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} hover>
              <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary dark:text-text-primary-dark font-medium">
                        {skill.name}
                      </span>
                      <span className="text-text-secondary dark:text-text-secondary text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 glass rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent dark:bg-accent-dark transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Currently Learning */}
        <GlassCard className="text-center">
          <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            📚 Actualmente Aprendiendo
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((item) => (
              <Badge key={item} variant="glass">
                {item}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

