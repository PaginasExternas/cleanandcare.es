import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Detectar si es build para GitHub Pages
const isGitHubPages = process.env.BUILD_FOR_GHPAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://paginasexternas.github.io' : 'https://cleanandcare.es',
  base: isGitHubPages ? '/cleanandcare.es' : '/',
  integrations: [tailwind()],
  experimental: {
    viewTransitions: true
  },
  build: {
    assets: '_astro'
  },
  // Configuración adicional para mejorar la compatibilidad con GitHub Pages
  output: 'static',
  trailingSlash: 'ignore'
});