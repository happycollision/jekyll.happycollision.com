/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".link": {
          color: theme("colors.blue.500"),
          textDecoration: "underline",
        },
      })
    },
  ],
}
