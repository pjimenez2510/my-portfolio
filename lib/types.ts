/**
 * Type definitions for portfolio data structures
 */

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  /** YYYY-MM — posiciona el span en el trace timeline */
  startISO: string;
  /** YYYY-MM — vacío si current */
  endISO?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  type: "empresa" | "freelance";
  logo?: string;
}

export interface Project {
  id: string;
  /** identificador de servicio: svc/<slug> */
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  technologies: string[];
  category: "backend" | "frontend" | "fullstack" | "mobile";
  /** prod = sigue vivo en producción · stable = entregado y operando */
  status: "prod" | "stable";
  /** métrica real destacable del sistema */
  metric?: string;
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  /** slugs de los sistemas reales que dependen de esta tecnología; ['*'] = transversal */
  usedIn: string[];
  category: "backend" | "frontend" | "database" | "tools";
}

export interface SkillCategory {
  title: string;
  /** nombre de "directorio" en el manifiesto de dependencias */
  dir: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  social: SocialLink[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  resumeUrl: string;
  contact: ContactInfo;
}
