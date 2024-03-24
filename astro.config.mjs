import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), sitemap(), robotsTxt()],
  site: "https://jsaimondev.github.io/"
});