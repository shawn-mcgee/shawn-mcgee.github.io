// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shawn-mcgee.github.io',
  integrations: [mdx(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
    },
    {
      provider: fontProviders.google(),
      name: 'Bungee',
      cssVariable: '--font-bungee',
    }
  ]
});