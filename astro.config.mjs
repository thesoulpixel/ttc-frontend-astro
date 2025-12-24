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
});