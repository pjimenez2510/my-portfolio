/**
 * Skills and technologies data
 * Based strictly on CV technical skills
 */

import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Java (Spring Boot)", level: 90, category: "backend" },
      { name: ".NET", level: 85, category: "backend" },
      { name: "Node.js (NestJS)", level: 85, category: "backend" },
      { name: "PL/SQL", level: 80, category: "backend" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 90, category: "frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "React", level: 85, category: "frontend" },
      { name: "Expo (React Native)", level: 75, category: "frontend" },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "Oracle", level: 85, category: "database" },
      { name: "PostgreSQL", level: 85, category: "database" },
      { name: "MySQL", level: 80, category: "database" },
    ],
  },
  {
    title: "Herramientas y Prácticas",
    skills: [
      { name: "Git", level: 90, category: "tools" },
      { name: "Docker", level: 70, category: "tools" },
      { name: "Clean Architecture", level: 85, category: "tools" },
      { name: "Agile / Scrum", level: 80, category: "tools" },
    ],
  },
];
