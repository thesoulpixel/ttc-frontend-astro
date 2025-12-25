import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://thetimesclock.com',
  prefetch: true,

  devToolbar: {
    enabled: false
  },

  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],

  adapter: cloudflare(),
  image: {
    domains: ['wp.thetimesclock.com', 'secure.gravatar.com', 'images.unsplash.com', 'i.pravatar.cc'],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});