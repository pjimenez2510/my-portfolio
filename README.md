# Portafolio Profesional - Patricio Jiménez

Portafolio web profesional desarrollado con Next.js 16+, TypeScript y Tailwind CSS 4+. Diseño minimalista con efectos glassmorphism y arquitectura limpia.

## 🚀 Características

- **Next.js 16+** con App Router y React 19
- **TypeScript** estricto para type safety
- **Tailwind CSS 4+** con variables de tema personalizadas
- **Glassmorphism Design** - Estilo moderno con efectos de vidrio
- **Dark Mode** - Cambio de tema con persistencia en localStorage
- **Responsive Design** - Mobile-first, optimizado para todos los dispositivos
- **SEO Optimizado** - Metadata completa y Open Graph
- **Performance** - Optimizado para Lighthouse 90+
- **Animaciones Sutiles** - Transiciones y efectos con CSS y React
- **Clean Architecture** - Código organizado y mantenible

## 🎨 Paleta de Colores

### Light Mode
- **Primary**: `#F8FAFC`
- **Secondary**: `#F1F5F9`
- **Accent**: `#475569`
- **Text Primary**: `#0F172A`
- **Text Secondary**: `#64748B`
- **Glass**: `rgba(241, 245, 249, 0.7)`

### Dark Mode
- **Primary**: `#0A0E13`
- **Secondary**: `#141B23`
- **Accent**: `#94A3B8`
- **Text Primary**: `#F1F5F9`
- **Text Secondary**: `#64748B`
- **Glass**: `rgba(20, 27, 35, 0.6)`

## 📁 Estructura del Proyecto

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales y tema
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Header sticky con navegación
│   │   ├── Footer.tsx       # Footer con links
│   │   └── Navigation.tsx   # Menú de navegación
│   ├── sections/
│   │   ├── Hero.tsx         # Sección hero con intro
│   │   ├── About.tsx        # Sobre mí
│   │   ├── Experience.tsx   # Experiencia laboral
│   │   ├── Projects.tsx     # Proyectos con filtros
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   └── Contact.tsx      # Formulario de contacto
│   ├── ui/
│   │   ├── GlassCard.tsx    # Tarjeta con glassmorphism
│   │   ├── Button.tsx       # Botón con variantes
│   │   ├── Badge.tsx        # Badge para tags
│   │   ├── AnimatedText.tsx # Texto con animación typing
│   │   └── SectionHeading.tsx # Encabezados de sección
│   └── shared/
│       ├── SocialLinks.tsx  # Links de redes sociales
│       └── ScrollIndicator.tsx # Indicador de scroll
├── lib/
│   ├── constants.ts         # Constantes globales
│   ├── types.ts            # Tipos TypeScript
│   └── utils.ts            # Funciones utilitarias
├── data/
│   ├── experience.ts       # Datos de experiencia
│   ├── projects.ts         # Datos de proyectos
│   └── skills.ts           # Datos de habilidades
└── public/
    └── PATRICIO JIMENEZ CV.pdf # CV en PDF
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16.0.6
- **Lenguaje**: TypeScript 5+
- **Estilos**: Tailwind CSS 4+
- **UI/UX**: Glassmorphism, Animaciones CSS
- **Fuente**: Inter (Google Fonts)
- **Deploy**: Vercel (recomendado)

## 📦 Instalación y Configuración

### Requisitos Previos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd my-portfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno (opcional)**
```bash
cp .env.example .env.local
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📝 Personalización

### 1. Información Personal

Edita `/lib/constants.ts` para actualizar tu información:

```typescript
export const PERSONAL_INFO = {
  name: 'Tu Nombre',
  role: 'Tu Rol',
  bio: 'Tu biografía',
  resumeUrl: '/tu-cv.pdf',
  contact: {
    email: 'tu@email.com',
    phone: 'tu-teléfono',
    location: 'Tu ubicación',
    // ...
  }
};
```

### 2. Experiencia Laboral

Edita `/data/experience.ts` para añadir o modificar experiencias.

### 3. Proyectos

Edita `/data/projects.ts` para añadir tus proyectos.

### 4. Habilidades

Edita `/data/skills.ts` para actualizar tus habilidades.

### 5. Colores del Tema

Modifica `/app/globals.css` para cambiar la paleta de colores:

```css
:root {
  --bg-primary: #TuColor;
  /* ... más colores */
}
```

## 🎨 Componentes UI

### GlassCard
```tsx
<GlassCard variant="default" hover>
  {/* contenido */}
</GlassCard>
```

### Button
```tsx
<Button variant="primary" size="md" href="#contacto">
  Texto del botón
</Button>
```

### Badge
```tsx
<Badge variant="glass">
  React
</Badge>
```

### AnimatedText
```tsx
<AnimatedText texts={['Texto 1', 'Texto 2']} />
```

## 📱 Responsive Design

El diseño es completamente responsive con breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🌙 Dark Mode

El dark mode se implementa con:
- Detección automática de preferencia del sistema
- Toggle manual con persistencia en localStorage
- Transiciones suaves entre temas

## ⚡ Performance

- Lazy loading de componentes
- Optimización de imágenes con Next.js Image
- Code splitting automático
- Minificación de CSS y JS
- Fuentes optimizadas con `font-display: swap`

## 🔍 SEO

- Metadata completa en `layout.tsx`
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robots.txt

## 📧 Formulario de Contacto

El formulario de contacto está preparado para integrarse con:
- EmailJS
- SendGrid
- Nodemailer
- Cualquier servicio de email

Actualmente simula el envío. Descomentar e implementar tu servicio preferido en `/components/sections/Contact.tsx`.

## 🚀 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en Vercel
3. Deploy automático

### Otros Servicios

- **Netlify**: `npm run build` → Deploy carpeta `.next`
- **Railway**: Compatible con Node.js
- **DigitalOcean**: App Platform con Node.js

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Patricio Jiménez**
- Email: pjimenez2510@gmail.com
- GitHub: [@pjimenez2510](https://github.com/pjimenez2510)
- LinkedIn: [pjimenez2510](https://linkedin.com/in/pjimenez2510)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas

- Asegúrate de reemplazar el CV en `public/PATRICIO JIMENEZ CV.pdf` con tu propio CV
- Personaliza todos los textos y datos según tus necesidades
- Las imágenes de proyectos son placeholders, reemplázalas con tus capturas reales
- Considera añadir Google Analytics para tracking

## 🐛 Reporte de Bugs

Si encuentras algún bug, por favor abre un issue en GitHub con:
- Descripción del bug
- Pasos para reproducirlo
- Comportamiento esperado
- Screenshots (si aplica)

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2025

¡Gracias por usar este portafolio! 🚀
