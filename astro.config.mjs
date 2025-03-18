// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
  site: "https://shawn-mcgee.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [expressiveCode({    
    themes: ["github-dark", "github-light"],
    useDarkModeMediaQuery: false,    
    themeCssSelector: (theme) => {
      switch (theme.name) {
        case "github-dark" : return "[data-theme=dracula]";
        case "github-light": return "[data-theme=valentine]";
        default: return false;
      }
    },
    plugins: [ pluginLineNumbers() ],
    defaultProps: {
      showLineNumbers: false
    }
  }), react(), mdx()],
});