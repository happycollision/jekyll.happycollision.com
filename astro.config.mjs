import { defineConfig } from "astro/config"

// https://astro.build/config
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://happycollision.com",
  integrations: [mdx(), tailwind()],
})
