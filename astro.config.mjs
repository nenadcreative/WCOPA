import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.wcopa.com/",
  integrations: [
    tailwind(),
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
    optimizeDeps: {
      exclude: ["@sanity/client", "@sanity/image-url"],
    },
    build: {
      rollupOptions: {
        external: ["@rollup/rollup-linux-x64-gnu"],
      },
    },
  },
  output: "server",
  adapter: vercel(),
});
