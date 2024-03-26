/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-grey": "#252525",
      "medium-grey": "#848484",
      "medium-light-grey": "#A9A9A9",
      "light-grey": "#E9E9E9",
      "ligther-grey": "#F1F1F1",
      orange: "#D95613",
      green: "#46a019",
      transparent: "rgba(0, 0, 0, 0)",
      blue: "#2274a5",
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
