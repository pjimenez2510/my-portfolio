# Guía de Configuración Inicial

Esta guía te ayudará a personalizar el portafolio con tu información.

## ✅ Checklist de Personalización

### 1. Información Personal

**Archivo**: `lib/constants.ts`

- [ ] Actualizar nombre completo
- [ ] Actualizar rol/título profesional
- [ ] Modificar biografía
- [ ] Cambiar email de contacto
- [ ] Actualizar número de teléfono
- [ ] Cambiar ubicación
- [ ] Actualizar enlaces de GitHub y LinkedIn
- [ ] Modificar URL del sitio web

### 2. Experiencia Laboral

**Archivo**: `data/experience.ts`

- [ ] Añadir/actualizar experiencias laborales
- [ ] Verificar fechas y duración
- [ ] Actualizar descripciones de responsabilidades
- [ ] Revisar tecnologías utilizadas
- [ ] Marcar trabajo actual como `current: true`

### 3. Proyectos

**Archivo**: `data/projects.ts`

- [ ] Añadir tus proyectos
- [ ] Añadir descripciones detalladas
- [ ] Actualizar tecnologías usadas
- [ ] Añadir enlaces de GitHub/Demo (si aplica)
- [ ] Marcar proyectos destacados como `featured: true`
- [ ] Añadir imágenes en `/public/projects/`

### 4. Habilidades

**Archivo**: `data/skills.ts`

- [ ] Actualizar lista de habilidades backend
- [ ] Actualizar lista de habilidades frontend
- [ ] Actualizar bases de datos conocidas
- [ ] Actualizar herramientas y metodologías
- [ ] Ajustar niveles de competencia (1-100)
- [ ] Actualizar "Actualmente Aprendiendo"

### 5. Archivos Estáticos

**Carpeta**: `public/`

- [ ] Reemplazar CV: `public/PATRICIO JIMENEZ CV.pdf` con tu CV
- [ ] Añadir imágenes de proyectos en `public/projects/`
- [ ] Añadir tu foto (opcional) en `public/`
- [ ] Actualizar favicon si deseas (app/favicon.ico)

### 6. SEO y Metadata

**Archivo**: `lib/constants.ts` - Sección `SITE_CONFIG`

- [ ] Actualizar título del sitio
- [ ] Modificar descripción
- [ ] Añadir/modificar keywords
- [ ] Actualizar URL del sitio
- [ ] Verificar información de autor

### 7. Colores del Tema (Opcional)

**Archivo**: `app/globals.css`

Si deseas cambiar la paleta de colores:

- [ ] Modificar colores en `:root` (light mode)
- [ ] Modificar colores en `:root.dark` (dark mode)
- [ ] Actualizar variables de Tailwind en `@theme`

### 8. Integración de Formulario de Contacto

**Archivo**: `components/sections/Contact.tsx`

Opciones:
- [ ] **EmailJS**: Configurar variables en `.env.local`
- [ ] **SendGrid**: Implementar endpoint API
- [ ] **Nodemailer**: Crear API route en Next.js
- [ ] Otro servicio de email

### 9. Analytics (Opcional)

Si deseas añadir Google Analytics:

1. [ ] Crear cuenta de Google Analytics
2. [ ] Obtener Measurement ID
3. [ ] Añadir en `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. [ ] Implementar en `app/layout.tsx`

### 10. Variables de Entorno

**Archivo**: `.env.local` (crear desde `.env.example`)

```bash
cp .env.example .env.local
```

- [ ] Configurar URL del sitio
- [ ] Configurar claves de servicios (si aplica)
- [ ] Verificar que `.env.local` está en `.gitignore`

## 🚀 Pasos Después de Personalizar

1. **Probar localmente**
```bash
npm run dev
```

2. **Verificar cada sección**
   - [ ] Hero muestra tu información correctamente
   - [ ] About tiene tu biografía
   - [ ] Experience lista tus trabajos
   - [ ] Projects muestra tus proyectos
   - [ ] Skills refleja tus habilidades
   - [ ] Contact tiene tu información correcta

3. **Verificar responsive design**
   - [ ] Mobile (< 768px)
   - [ ] Tablet (768px - 1024px)
   - [ ] Desktop (> 1024px)

4. **Probar dark mode**
   - [ ] Cambio de tema funciona
   - [ ] Colores se ven bien en ambos modos
   - [ ] Persistencia en localStorage

5. **Build de producción**
```bash
npm run build
npm start
```

6. **Verificar performance**
   - [ ] Lighthouse score > 90
   - [ ] Imágenes optimizadas
   - [ ] Sin errores en consola

## 📝 Personalización Avanzada

### Añadir Nuevas Secciones

1. Crear componente en `components/sections/`
2. Importar en `app/page.tsx`
3. Añadir al menú de navegación en `lib/constants.ts`

### Modificar Componentes UI

Los componentes en `components/ui/` son reutilizables y pueden modificarse:
- `GlassCard.tsx` - Tarjetas con glassmorphism
- `Button.tsx` - Botones con variantes
- `Badge.tsx` - Tags y badges
- `AnimatedText.tsx` - Texto con animación

### Añadir Animaciones

Considera usar librerías como:
- Framer Motion
- React Spring
- AOS (Animate On Scroll)

## 🐛 Troubleshooting

### Error: Module not found

```bash
# Limpiar cache y reinstalar
rm -rf node_modules .next
npm install
```

### Errores de TypeScript

```bash
# Verificar tipos
npm run type-check
```

### Problemas con Tailwind

```bash
# Reconstruir Tailwind
npm run build
```

## 📞 Soporte

Si tienes problemas, verifica:
1. Versión de Node.js >= 18
2. Todas las dependencias instaladas
3. Variables de entorno configuradas
4. Archivos de datos sin errores de sintaxis

## 🎉 ¡Listo!

Una vez completados estos pasos, tu portafolio estará personalizado y listo para deploy.

Para hacer deploy en Vercel:
1. Push a GitHub
2. Importar en Vercel
3. Deploy automático

¡Buena suerte! 🚀

