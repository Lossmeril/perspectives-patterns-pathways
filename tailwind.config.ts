import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "var(--beige)",
        grass: "var(--grass)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        red: "var(--red)",
        blue: "var(--blue",
        black: "var(--black)"
      },
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      "2xl": "1530px"
    }
  },
  plugins: [],
} satisfies Config;
