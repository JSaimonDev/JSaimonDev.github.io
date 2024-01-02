/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-grey": "#252525",
      "medium-grey": "#848484",
      "light-grey": "#E9E9E9",
      orange: "#D95613",
      green: "#52BD1E",
      transparent: "rgba(0, 0, 0, 0)",
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
  plugins: [],
};
