/**
 * Projects portfolio data
 */

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "FIDEVAL - Sistema de Venta de Seguros",
    description:
      "Sistema completo para gestión y venta de seguros desarrollado con .NET, Angular y Oracle.",
    longDescription:
      "Plataforma integral para la gestión de pólizas de seguros, incluyendo módulos de cotización, emisión, cobro y reportería. Implementa arquitectura limpia y patrones de diseño robustos.",
    thumbnail: "/fideval.png",
    technologies: [".NET", "Angular", "Oracle", "TypeScript"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-2",
    title: "DIZASA - Gestión de Talleres Diésel",
    description:
      "Sistema de gestión para talleres mecánicos con solución mobile-first y captura de evidencias.",
    longDescription:
      "Aplicación móvil y web para gestión integral de talleres mecánicos diésel, con funcionalidades de órdenes de trabajo, captura fotográfica, firmas digitales y portal para clientes. Desarrollado con Clean Architecture.",
    thumbnail: "/dizasa.png",
    technologies: ["Next.js 14", "React", "Expo Go", "TypeScript"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-3",
    title: "GITT - Sistema de Inventarios",
    description:
      "Sistema de gestión de inventarios para FISEI-UTA con módulos de préstamos y control de ubicaciones.",
    longDescription:
      "Backend robusto con NestJS para gestión de inventarios universitarios, incluyendo préstamos, devoluciones, control de ubicaciones y migración automatizada de datos desde Excel.",
    thumbnail: "/gitt.png",
    technologies: ["NestJS", "PostgreSQL", "TypeScript", "Clean Architecture"],
    category: "backend",
    links: {},
    featured: true,
    year: 2025,
  },
  {
    id: "project-4",
    title: "SISAI - Gestión de Ductos y Postes",
    description:
      "Sistema para EEASA de contratación de ductos y postes con generación automática de planillas.",
    longDescription:
      "Plataforma completa para gestión de contratación de infraestructura eléctrica, con módulos de usuarios, roles, ubicaciones geográficas y generación automática de documentos.",
    thumbnail: "/sisai.jpeg",
    technologies: ["Spring Boot", "Angular", "Oracle", "Java"],
    category: "fullstack",
    links: {},
    featured: true,
    year: 2024,
  },
  {
    id: "project-5",
    title: "GAD MOTORS - Sistema de Agenda",
    description:
      "Aplicación web de agendamiento para talleres mecánicos con calendario personalizado.",
    longDescription:
      "Sistema de gestión de citas y agenda para talleres mecánicos, con calendario interactivo, control de disponibilidad de mecánicos y comunicación en tiempo real con WebSockets.",
    thumbnail: "/gab-motors.png",
    technologies: ["Next.js 14", "TanStack Query", "Sockets", "Zustand"],
    category: "frontend",
    links: {},
    featured: false,
    year: 2024,
  },
  {
    id: "project-6",
    title: "Sistema de Facturación Electrónica",
    description:
      "Backend para gestión de inventario, ventas y facturación electrónica con integración SRI.",
    longDescription:
      "API REST completa para sistema de facturación electrónica con integración al SRI ecuatoriano, gestión de inventario y módulo de ventas.",
    thumbnail: "",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    category: "backend",
    links: {},
    featured: false,
    year: 2024,
  },
];
