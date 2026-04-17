# Guía de Deployment

Esta guía te ayudará a hacer deploy de tu portafolio en diferentes plataformas.

## 🚀 Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y ofrece deploy gratuito con dominio incluido.

### Pasos:

1. **Push tu código a GitHub**
```bash
git add .
git commit -m "Initial commit - Portfolio"
git push origin main
```

2. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

3. **Importar Proyecto**
   - Click en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

4. **Configurar Variables de Entorno** (si aplica)
   - En Settings → Environment Variables
   - Añade tus variables de `.env.local`

5. **Deploy**
   - Click en "Deploy"
   - ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

### Dominio Personalizado

1. Ve a Settings → Domains
2. Añade tu dominio
3. Configura los DNS según las instrucciones

### Deploy Automático

- Cada push a `main` genera un nuevo deploy automático
- Los PRs generan previews automáticos

---

## 🌐 Netlify

### Pasos:

1. **Build Settings**
```
Build command: npm run build
Publish directory: .next
```

2. **Configuración adicional**

Crear `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

3. **Deploy**
   - Push a GitHub
   - Conecta repositorio en Netlify
   - Deploy automático

---

## 🐳 Docker

### Dockerfile

Crear `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Actualizar next.config.ts

```typescript
const nextConfig = {
  output: 'standalone',
};
```

### Build y Run

```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

---

## ☁️ Railway

### Pasos:

1. **Crear cuenta** en [railway.app](https://railway.app)
2. **New Project** → Deploy from GitHub
3. Railway detecta Next.js automáticamente
4. Deploy automático

### Variables de Entorno

Añadir en Settings → Variables

---

## 🌊 DigitalOcean App Platform

### Pasos:

1. **Crear App** en DigitalOcean
2. **Conectar GitHub**
3. **Configuración**:
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. **Deploy**

---

## 📦 Build Estático

Si prefieres hosting estático:

### 1. Configurar Next.js para export estático

`next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### 2. Build

```bash
npm run build
```

Esto genera la carpeta `out/`

### 3. Deploy en:

- **GitHub Pages**: Push carpeta `out` a `gh-pages` branch
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: Upload carpeta `out`
- **Cloudflare Pages**: Deploy carpeta `out`

---

## 🔧 Configuración Pre-Deploy

### Checklist

- [ ] Actualizar SITE_CONFIG.siteUrl con tu dominio
- [ ] Verificar que el CV esté en public/
- [ ] Probar build local: `npm run build`
- [ ] Verificar que no hay errores en consola
- [ ] Revisar Lighthouse score
- [ ] Configurar variables de entorno
- [ ] Añadir dominio personalizado (opcional)

### Build Local

```bash
# Build
npm run build

# Probar build
npm start

# Verificar en http://localhost:3000
```

### Optimización

```bash
# Analizar bundle
npm install -D @next/bundle-analyzer
```

Actualizar `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Analizar:
```bash
ANALYZE=true npm run build
```

---

## 🔒 Variables de Entorno en Producción

### Vercel
Settings → Environment Variables

### Netlify
Site settings → Build & deploy → Environment

### Railway
Settings → Variables

### Docker
```bash
docker run -e NEXT_PUBLIC_SITE_URL=https://... -p 3000:3000 my-portfolio
```

---

## 📊 Monitoreo

### Analytics

**Google Analytics**:
```typescript
// app/layout.tsx
import Script from 'next/script'

// Añadir en el layout
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
```

**Vercel Analytics**:
```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// Añadir en el layout
<Analytics />
```

---

## 🐛 Troubleshooting

### Error: Module not found

Verificar que todas las dependencias estén en `package.json`:
```bash
npm install
```

### Build fails

Verificar:
1. Node version >= 18
2. `npm run build` funciona localmente
3. Variables de entorno configuradas
4. Sin errores de TypeScript

### Imágenes no cargan

Si usas `next/image`:
- Vercel/Netlify: Funciona automáticamente
- Export estático: Usar `images: { unoptimized: true }`

### CSS no aplica

Verificar:
1. Tailwind configurado correctamente
2. `globals.css` importado en layout
3. Build fresh: `rm -rf .next && npm run build`

---

## 🎯 Post-Deploy

### Verificaciones

- [ ] Sitio carga correctamente
- [ ] Todas las secciones visibles
- [ ] Links funcionan
- [ ] Formulario de contacto funciona
- [ ] Dark mode funciona
- [ ] Responsive en mobile
- [ ] Performance > 90 en Lighthouse
- [ ] SEO optimizado
- [ ] CV descargable

### SEO

1. **Google Search Console**
   - Añadir sitio
   - Subir sitemap (`/sitemap.xml`)
   - Verificar indexación

2. **sitemap.xml**

Next.js genera automáticamente. Para personalizar:

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://tu-dominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

## 🚀 CI/CD Avanzado

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm test
```

---

## 💰 Costos

### Gratuito
- Vercel (Hobby plan)
- Netlify (Starter plan)
- Railway (Free tier - 500hrs/mes)
- GitHub Pages

### De Pago
- Vercel Pro: $20/mes
- Netlify Pro: $19/mes
- Railway: $5/mes por servicio
- DigitalOcean: Desde $5/mes

---

## 📝 Notas Finales

- **Vercel** es la opción más simple y recomendada para Next.js
- **Netlify** es buena alternativa con features similares
- **Docker** para más control y flexibilidad
- **Export estático** para hosting más económico

¡Tu portafolio está listo para ser desplegado! 🎉

---

**Última actualización**: Diciembre 2025

