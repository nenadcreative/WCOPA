/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Dm Sans Variable", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "3xs": ".75rem",
        "2xs": "0.875rem",
        xs: "1rem",
        sm: "1.125rem",
        md: "1.25rem",
        lg: "1.375rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.25rem",
        "7xl": "4rem",
      },
      colors: {
        dark: {
          1: "#050006",
          2: "#240727",
        },
        offwhite: "#F8F6F8",
        indigo: "#4E30C5",
        yellow: "#F4CA51",
        lavander: "#EDEAF9",
      },

      listStyleImage: {
        star: 'url("/icons/list-icon.svg")',
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
