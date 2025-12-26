import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import partytown from '@astrojs/partytown'; // <--- Check this is here

import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://thetimesclock.com',
  output: 'server', // 👈 THIS IS THE SECRET TO SPEED

  devToolbar: {
    enabled: false
  },

  integrations: [partytown({
    config: { forward: ['dataLayer.push'] }, // Allow Google events
  }), tailwind(), react(), sitemap(), keystatic()],

  adapter: cloudflare(),

  // Let's keep images simple for now to stop the crashing
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});