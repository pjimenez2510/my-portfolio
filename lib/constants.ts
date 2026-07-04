/**
 * Global constants for the portfolio
 */

import type { NavItem, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Patricio Jiménez',
  role: 'Full Stack Developer',
  bio: 'Construyo los sistemas que no pueden fallar: seguros, facturación electrónica, inventarios. Backend en JVM, .NET y Node; frontend en Angular, React y Next.',
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
  { label: 'inicio', href: '#hero' },
  { label: 'perfil', href: '#about' },
  { label: 'experiencia', href: '#experience' },
  { label: 'servicios', href: '#projects' },
  { label: 'stack', href: '#skills' },
  { label: 'contacto', href: '#contact' },
];

/** Metadatos del "sistema" — alimentan el concepto de observabilidad */
export const SYSTEM = {
  host: 'pjimenez.dev',
  version: 'v3.0',
  region: 'ambato-ec-1',
  tz: 'UTC-5',
  /** Primer deploy profesional — desde aquí corre el uptime */
  bootTime: '2023-12-01T00:00:00-05:00',
};

/** Cinta de métricas del hero — solo datos reales */
export const TICKER_ITEMS = [
  '20.000+ asegurados en producción',
  'motor de débitos automáticos',
  'facturación electrónica · SRI',
  '6 sistemas entregados',
  'clean architecture',
  'oracle · pl/sql · postgres',
  'jvm · .net · node',
];

export const SITE_CONFIG = {
  title: 'Patricio Jiménez | Full Stack Developer',
  description:
    'Portafolio de Patricio Jiménez — Full Stack Developer especializado en sistemas de misión crítica: seguros, facturación electrónica y plataformas empresariales con Spring Boot, .NET, NestJS, Angular, React y Next.js.',
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
