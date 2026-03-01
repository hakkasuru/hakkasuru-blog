// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hakkasuru.me",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/resume"),
    }),
    react(),
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
      },
    },
  },
});
