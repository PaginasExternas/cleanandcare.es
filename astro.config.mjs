import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paginasexternas.github.io',
  base: '/cleanandcare.es',
  integrations: [tailwind()],
  experimental: {
    viewTransitions: true
  },
  build: {
    assets: '_astro'
  }
});