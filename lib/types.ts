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
  current: boolean;
  description: string[];
  technologies: string[];
  type: "empresa" | "freelance";
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  technologies: string[];
  category: "backend" | "frontend" | "fullstack" | "mobile";
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
  category: "backend" | "frontend" | "database" | "tools";
}

export interface SkillCategory {
  title: string;
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
  subject: string;
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
