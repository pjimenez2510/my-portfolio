/**
 * Global constants for the portfolio
 */

import type { NavItem, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Patricio Jiménez',
  role: 'Full Stack Developer',
  bio: 'Full Stack Developer con experiencia en Java/Spring Boot, .NET, Node.js/NestJS y frontend con Angular, React y Next.js. Enfocado en Clean Architecture y metodologías ágiles.',
  resumeUrl: '/PATRICIO JIMENEZ CV.pdf',
  contact: {
    email: 'pjimenez2510@gmail.com',
    phone: '+593 990862306',
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
  title: 'Patricio Jiménez | Full Stack Developer',
  description: 'Portafolio de Patricio Jiménez — Full Stack Developer especializado en Spring Boot, .NET, Angular, React, Next.js y Clean Architecture.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'Angular', '.NET', 'Java', 'Spring Boot', 'NestJS', 'Clean Architecture'],
  author: 'Patricio Jiménez',
  siteUrl: 'https://pjimenez.dev',
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
