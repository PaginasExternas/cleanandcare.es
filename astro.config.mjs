import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cleanandcare.es',
  title: 'Clean and Care - Professional Cleaning Services',
  description: 'Your trusted partner for all cleaning needs.',
  server: {
    port: 4321
  },
  integrations: [tailwind()],
  experimental: {
    viewTransitions: true
  },
  markdown: {
    // Markdown options can be specified here
  },
  build: {
    // Build options can be specified here
  },
});