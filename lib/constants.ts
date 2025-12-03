/**
 * Global constants for the portfolio
 */

import type { NavItem, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Patricio Jiménez',
  role: 'Desarrollador Full Stack',
  bio: 'Desarrollador Full Stack especializado en arquitecturas limpias y metodologías ágiles. Experiencia en desarrollo backend con Java/Spring Boot, .NET y Node.js/NestJS, y frontend con Angular, React y Next.js. Apasionado por crear soluciones eficientes y escalables.',
  resumeUrl: '/PATRICIO JIMENEZ CV.pdf',
  contact: {
    email: 'pjimenez2510@gmail.com',
    phone: '0990862306',
    location: 'Ambato, Ecuador',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/pjimenez2510',
        icon: 'github',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/pjimenez2510',
        icon: 'linkedin',
      },
    ],
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

export const SITE_CONFIG = {
  title: 'Patricio Jiménez | Desarrollador Full Stack',
  description: 'Portafolio profesional de Patricio Jiménez - Desarrollador Full Stack especializado en .NET, Angular, React, Next.js y arquitecturas limpias.',
  keywords: ['Desarrollador Full Stack', 'Next.js', 'React', 'Angular', '.NET', 'Java', 'Spring Boot', 'NestJS', 'Clean Architecture'],
  author: 'Patricio Jiménez',
  siteUrl: 'https://pjimenez.dev', // Actualizar con tu dominio real
  version: '1.0.0',
};

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

