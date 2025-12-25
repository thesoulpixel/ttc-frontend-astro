import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://thetimesclock.com',
  output: 'static', // 👈 THIS IS THE SECRET TO SPEED

  devToolbar: {
    enabled: false
  },

  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],

  adapter: cloudflare(),

  // Let's keep images simple for now to stop the crashing
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});