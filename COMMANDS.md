# Comandos Útiles

Referencia rápida de comandos para el desarrollo y mantenimiento del portafolio.

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# O con yarn
yarn install

# O con pnpm
pnpm install
```

## 🔧 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Servidor en puerto específico
npm run dev -- -p 3001

# Abrir automáticamente en navegador
npm run dev -- -o
```

## 🏗️ Build

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Build y start en secuencia
npm run build && npm start
```

## 🧹 Limpieza

```bash
# Limpiar cache y builds
rm -rf .next

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpiar todo
rm -rf .next node_modules package-lock.json
npm install
```

## ✅ Linting y Formateo

```bash
# Ejecutar linter
npm run lint

# Fix automático de problemas
npm run lint -- --fix

# Verificar tipos TypeScript
npx tsc --noEmit
```

## 🧪 Testing (si se implementa)

```bash
# Ejecutar tests
npm test

# Tests en watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

## 📊 Análisis

```bash
# Analizar bundle size
npm install -D @next/bundle-analyzer
ANALYZE=true npm run build

# Ver estadísticas de build
npm run build -- --profile
```

## 🔍 Debugging

```bash
# Modo debug de Node.js
NODE_OPTIONS='--inspect' npm run dev

# Ver variables de entorno
npm run dev -- --debug

# Verbose output
npm run build -- --debug
```

## 📦 Gestión de Paquetes

```bash
# Ver paquetes outdated
npm outdated

# Actualizar paquetes
npm update

# Actualizar a latest
npx npm-check-updates -u
npm install

# Verificar vulnerabilidades
npm audit

# Fix vulnerabilidades
npm audit fix
```

## 🚀 Deployment

```bash
# Vercel
npm i -g vercel
vercel

# Vercel producción
vercel --prod

# Netlify
npm i -g netlify-cli
netlify deploy

# Netlify producción
netlify deploy --prod
```

## 🐳 Docker

```bash
# Build imagen
docker build -t my-portfolio .

# Run contenedor
docker run -p 3000:3000 my-portfolio

# Run con variables de entorno
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://... my-portfolio

# Docker Compose
docker-compose up

# Docker Compose en background
docker-compose up -d

# Ver logs
docker-compose logs -f
```

## 🔄 Git

```bash
# Commit inicial
git add .
git commit -m "Initial commit - Portfolio"
git push origin main

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Ver cambios
git status
git diff

# Stash cambios
git stash
git stash pop

# Reset a commit anterior
git reset --hard HEAD~1
```

## 📱 Testing Responsive

```bash
# Abrir en red local (encontrar IP)
npm run dev -- --hostname 0.0.0.0

# Luego acceder desde móvil a:
# http://[tu-ip]:3000
```

## 🌐 Variables de Entorno

```bash
# Copiar ejemplo
cp .env.example .env.local

# Editar variables
nano .env.local
# o
code .env.local

# Verificar que se cargan
npm run dev
# Verifica en consola o componente
```

## 📈 Performance

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:3000 --view

# Lighthouse en producción
lighthouse https://tu-sitio.com --view

# Webpack Bundle Analyzer
ANALYZE=true npm run build
```

## 🔧 Utilidades Next.js

```bash
# Limpiar cache de Next.js
rm -rf .next/cache

# Info sobre build
next info

# Verificar configuración
next lint

# Telemetría (opt-out)
npx next telemetry disable
```

## 📝 Scripts Personalizados

Añade estos a `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "clean": "rm -rf .next node_modules",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## 🐛 Troubleshooting Rápido

```bash
# Puerto ya en uso
# Matar proceso en puerto 3000
lsof -ti:3000 | xargs kill -9

# O usar otro puerto
npm run dev -- -p 3001

# Problemas con cache
rm -rf .next/cache
npm run dev

# Problemas con tipos
rm -rf node_modules/@types
npm install

# Rebuild completo
rm -rf .next node_modules
npm install
npm run build
```

## 🔐 Seguridad

```bash
# Audit de seguridad
npm audit

# Fix vulnerabilidades automático
npm audit fix

# Fix incluyendo breaking changes
npm audit fix --force

# Verificar licencias
npx license-checker
```

## 📦 Gestión de Cache

```bash
# Limpiar cache de npm
npm cache clean --force

# Verificar cache
npm cache verify

# Ver ubicación de cache
npm config get cache
```

## 🎨 Tailwind

```bash
# Verificar clases no usadas (instalar purgecss)
npm install -D purgecss
npx purgecss --css .next/**/*.css --content ./**/*.tsx

# Generar configuración de Tailwind
npx tailwindcss init
```

## 📊 Monitoring en Desarrollo

```bash
# Ver uso de memoria
node --max-old-space-size=4096 node_modules/.bin/next dev

# Profiling
NODE_ENV=production npm run build

# Ver logs detallados
DEBUG=* npm run dev
```

## 🔄 Hot Reload Issues

```bash
# Si hot reload no funciona
rm -rf .next
npm run dev

# O verificar watchman (macOS)
brew install watchman
```

## 📱 Testing en Dispositivos

```bash
# Encontrar IP local
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig

# Luego en móvil:
# http://[tu-ip]:3000
```

## 🚀 Quick Start

```bash
# Workflow típico de desarrollo
npm run dev          # Desarrollo
npm run build        # Build
npm start            # Probar producción local
git push             # Deploy automático (si configurado)
```

## 📚 Recursos Útiles

```bash
# Documentación Next.js
open https://nextjs.org/docs

# Documentación Tailwind
open https://tailwindcss.com/docs

# Buscar componentes
open https://ui.shadcn.com
```

---

**Tip**: Guarda estos comandos o crea aliases en tu `.bashrc` / `.zshrc`:

```bash
alias dev="npm run dev"
alias build="npm run build"
alias deploy="vercel --prod"
```

---

¡Happy Coding! 🚀

