/**
 * Skills and technologies data — manifiesto de dependencias
 * Sin niveles inventados: cada tecnología lista los sistemas
 * reales en producción que dependen de ella.
 */

import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    dir: "backend",
    skills: [
      { name: "java · spring-boot", usedIn: ["sisai", "sri-billing"], category: "backend" },
      { name: ".net", usedIn: ["fideval"], category: "backend" },
      { name: "node · nestjs", usedIn: ["gitt", "fideval"], category: "backend" },
      { name: "pl/sql", usedIn: ["fideval"], category: "backend" },
    ],
  },
  {
    title: "Frontend",
    dir: "frontend",
    skills: [
      { name: "angular", usedIn: ["sisai", "fideval"], category: "frontend" },
      { name: "next.js", usedIn: ["dizasa", "gad-motors"], category: "frontend" },
      { name: "react", usedIn: ["dizasa", "gad-motors"], category: "frontend" },
      { name: "expo · react-native", usedIn: ["dizasa"], category: "frontend" },
    ],
  },
  {
    title: "Bases de Datos",
    dir: "data",
    skills: [
      { name: "oracle", usedIn: ["fideval", "sisai"], category: "database" },
      { name: "postgresql", usedIn: ["gitt", "sri-billing"], category: "database" },
      { name: "mysql", usedIn: [], category: "database" },
    ],
  },
  {
    title: "Herramientas y Prácticas",
    dir: "tooling",
    skills: [
      { name: "git", usedIn: ["*"], category: "tools" },
      { name: "docker", usedIn: ["*"], category: "tools" },
      { name: "clean-architecture", usedIn: ["dizasa", "gitt"], category: "tools" },
      { name: "agile · scrum", usedIn: ["*"], category: "tools" },
    ],
  },
];
