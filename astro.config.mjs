import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sanity({
      projectId: "g3tuqi0r",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/admin",
    }),
    robotsTxt(),
    sitemap(),
  ],

  output: "server",
  adapter: vercel(),
});
