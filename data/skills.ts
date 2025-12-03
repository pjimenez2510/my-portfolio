/**
 * Skills and technologies data
 */

import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Java (Spring Boot)", level: 90, category: "backend" },
      { name: ".NET", level: 85, category: "backend" },
      { name: "Node.js (NestJS)", level: 85, category: "backend" },
      { name: "API REST", level: 90, category: "backend" },
      { name: "Microservicios", level: 75, category: "backend" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 90, category: "frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "React", level: 85, category: "frontend" },
      { name: "Expo (React Native)", level: 75, category: "frontend" },
      { name: "TypeScript", level: 90, category: "frontend" },
      { name: "Tailwind CSS", level: 85, category: "frontend" },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "PostgreSQL", level: 90, category: "database" },
      { name: "Oracle", level: 80, category: "database" },
      { name: "MySQL", level: 80, category: "database" },
      { name: "MongoDB", level: 70, category: "database" },
    ],
  },
  {
    title: "Herramientas y Metodologías",
    skills: [
      { name: "Git / GitHub", level: 90, category: "tools" },
      { name: "Clean Architecture", level: 85, category: "tools" },
      { name: "Metodologías Ágiles", level: 80, category: "tools" },
      { name: "Docker", level: 70, category: "tools" },
      { name: "CI/CD", level: 70, category: "tools" },
    ],
  },
];

export const currentlyLearning = [
  "Arquitecturas de Microservicios Avanzadas",
  "Testing Avanzado (Jest, Cypress)",
  "Cloud Computing (AWS, Azure)",
  "DevOps y CI/CD",
];
