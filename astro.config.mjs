// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://shawn-mcgee.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), mdx(), react()]
});