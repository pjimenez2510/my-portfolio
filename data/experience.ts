/**
 * Professional experience data
 * Based on CV - accurate descriptions
 */

import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "PROCONTY – FIDEVAL",
    position: "Full Stack Developer",
    location: "Quito, Ecuador",
    startDate: "Mayo 2025",
    endDate: "",
    current: true,
    description: [
      "Módulo end-to-end de venta de seguros, desde administración hasta emisión de pólizas, cubriendo el ciclo completo de productos de fondos y seguros con .NET, NodeJs, Angular, Oracle Forms y PL/SQL.",
      "Rediseño del motor de débito automático para 20,000+ asegurados, habilitando configuraciones flexibles de pago.",
      "Refactorización de lógica de cálculo de primas separando responsabilidades en paquetes PL/SQL independientes.",
      "Utilidades de procesamiento masivo de archivos para operaciones de datos a gran escala.",
    ],
    technologies: [".NET", "Node.js", "Angular", "Oracle Forms", "PL/SQL"],
    type: "empresa",
  },
  {
    id: "exp-2",
    company: "DIZASA",
    position: "Frontend Developer",
    location: "Ambato, Ecuador",
    startDate: "Febrero 2025",
    endDate: "Mayo 2025",
    current: false,
    description: [
      "Aplicación web y móvil multiplataforma para gestión de talleres diésel (Next.js 14, React, Expo Go, Clean Architecture) con captura fotográfica, firmas digitales, acceso basado en roles y portal de autoservicio para clientes.",
    ],
    technologies: ["Next.js", "React", "Expo Go", "Clean Architecture"],
    type: "empresa",
  },
  {
    id: "exp-3",
    company: "GITT – FISEI UTA",
    position: "Backend Developer",
    location: "Ambato, Ecuador",
    startDate: "Enero 2025",
    endDate: "Mayo 2025",
    current: false,
    description: [
      "Sistema de gestión de inventarios universitarios (NestJS, PostgreSQL, Clean Architecture) con seguimiento de préstamos/devoluciones de activos y pipeline de migración por lotes desde datos legacy en Excel con reporte de errores por registro.",
    ],
    technologies: ["NestJS", "PostgreSQL", "Clean Architecture"],
    type: "empresa",
  },
  {
    id: "exp-4",
    company: "SISAI – EEASA",
    position: "Full Stack Developer",
    location: "Ambato, Ecuador",
    startDate: "Agosto 2024",
    endDate: "Diciembre 2024",
    current: false,
    description: [
      "Sistema de gestión documental y contratación para infraestructura de ductos/postes (Spring Boot, Angular, Oracle) con motor de facturación configurable que soporta múltiples tipos de contrato con estructuras de costo y reglas de generación distintas.",
    ],
    technologies: ["Spring Boot", "Angular", "Oracle"],
    type: "empresa",
  },
  {
    id: "exp-5",
    company: "GAD MOTORS",
    position: "Frontend Developer",
    location: "Latacunga, Ecuador",
    startDate: "Junio 2024",
    endDate: "Julio 2024",
    current: false,
    description: [
      "Sistema de agendamiento en tiempo real para talleres mecánicos (Next.js 14, TanStack Query, WebSockets, Zustand) con calendario personalizado y seguimiento de disponibilidad en vivo.",
    ],
    technologies: ["Next.js", "TanStack Query", "WebSockets", "Zustand"],
    type: "empresa",
  },
  {
    id: "exp-6",
    company: "Sistema de Facturación Electrónica",
    position: "Backend Developer",
    location: "Ambato, Ecuador",
    startDate: "Diciembre 2023",
    endDate: "Mayo 2024",
    current: false,
    description: [
      "Backend para inventario, ventas y facturación electrónica con Java, Spring Boot y PostgreSQL, integrando con la autoridad tributaria de Ecuador (SRI) para generación automatizada de documentos fiscales.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    type: "freelance",
  },
];
