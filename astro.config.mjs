import { defineConfig } from "astro/config"
import AstroPWA from "@vite-pwa/astro"

// https://astro.build/config
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://happycollision.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    tailwind(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Happy Collision", // Change this to your website's name.
        short_name: "Happy Collision", // Change this to your website's short name.
        description: "The not-really-a-blog for Happy Collision.", // Change this to your websites description.
        theme_color: "#df993a", // Change this to your primary color.
        background_color: "#ffffff", // Change this to your background color.
        display: "minimal-ui",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
})
