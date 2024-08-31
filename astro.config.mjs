import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import htmx from "astro-htmx";

// https://astro.build/config
export default defineConfig({
	site: "https://hserrano.me",
	integrations: [mdx(), sitemap(), tailwind(), htmx()],
});
