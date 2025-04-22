import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";


import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site: 'https://www.wcopa.com/',
  integrations: [

    react(),
    sanity({
      projectId: "s0esc5z3",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/admin",
    }),
    robotsTxt(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});