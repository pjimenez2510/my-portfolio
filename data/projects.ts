/**
 * Projects portfolio data
 * Technologies match CV exactly
 */

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "FIDEVAL – Venta de Seguros",
    description:
      "Módulo end-to-end de venta de seguros con motor de débito automático para 20,000+ asegurados.",
    longDescription:
      "Plataforma integral para gestión de pólizas de seguros, incluyendo administración, emisión, débito automático con configuraciones flexibles y procesamiento masivo de archivos.",
    thumbnail: "/fideval.png",
    technologies: [".NET", "Node.js", "Angular", "Oracle Forms", "PL/SQL"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-2",
    title: "DIZASA – Gestión de Talleres",
    description:
      "Aplicación web y móvil para gestión de talleres diésel con captura de evidencias y portal de clientes.",
    longDescription:
      "Solución multiplataforma con captura fotográfica, firmas digitales, acceso basado en roles y portal de autoservicio para clientes.",
    thumbnail: "/dizasa.png",
    technologies: ["Next.js", "React", "Expo Go"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-3",
    title: "GITT – Inventarios Universitarios",
    description:
      "Sistema de inventarios para FISEI-UTA con seguimiento de préstamos y migración de datos legacy.",
    longDescription:
      "Backend con NestJS para gestión de inventarios universitarios, préstamos/devoluciones de activos y pipeline de migración por lotes desde Excel.",
    thumbnail: "/gitt.png",
    technologies: ["NestJS", "PostgreSQL"],
    category: "backend",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-4",
    title: "SISAI – Gestión de Ductos y Postes",
    description:
      "Sistema de contratación para EEASA con motor de facturación configurable para múltiples tipos de contrato.",
    longDescription:
      "Plataforma de gestión documental y contratación para infraestructura eléctrica con estructuras de costo y reglas de generación distintas.",
    thumbnail: "/sisai.jpeg",
    technologies: ["Spring Boot", "Angular", "Oracle"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2024,
  },
  {
    id: "project-5",
    title: "GAD MOTORS – Agendamiento",
    description:
      "Sistema de agendamiento en tiempo real para talleres mecánicos con calendario personalizado.",
    longDescription:
      "Aplicación web con calendario interactivo, seguimiento de disponibilidad en vivo y comunicación en tiempo real.",
    thumbnail: "/gab-motors.png",
    technologies: ["Next.js", "TanStack Query", "WebSockets", "Zustand"],
    category: "frontend",
    links: {},
    featured: false,
    year: 2024,
  },
  {
    id: "project-6",
    title: "Facturación Electrónica",
    description:
      "Backend para inventario, ventas y facturación electrónica con integración al SRI ecuatoriano.",
    longDescription:
      "API REST para sistema de facturación electrónica con integración a la autoridad tributaria de Ecuador para generación automatizada de documentos fiscales.",
    thumbnail: "",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    category: "backend",
    links: {},
    featured: false,
    year: 2024,
  },
];
