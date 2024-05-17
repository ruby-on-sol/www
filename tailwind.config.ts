import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgb(219, 158, 113)",
        sub: "rgb(43, 28, 17)",
      },
      fontFamily: {
        sans: [
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        tokens: "repeat(1, minmax(0, 1fr))",
        "tokens-md": "repeat(2, minmax(0, 330px))",
        "tokens-lg": "repeat(3, minmax(0, 330px))",
      },
      borderRadius: {
        "4.5xl": "4.5rem",
      },
      fontSize: {
        "5.5xl": "5.5rem", // Custom font size for h1
        "4.5xl": "4.5rem", // Custom font size for h1 on smaller screens
        "3xl": "3rem", // Custom font size for h1 on even smaller screens
        "2.5xl": "2.5rem", // Custom font size for h1 and h2 on small screens
        "4.12xl": "4.12rem", // Custom font size for h2
        "2xl": "2rem", // Custom font size for h2 on the smallest screens
      },
      lineHeight: {
        "104": "1.04", // Custom line height for h1
        initial: "initial", // Initial line height for responsive styles
      },
      screens: {
        "2xl": { min: "1200px" }, // Media query for max-width 1200px
        xl: { min: "960px" }, // Media query for max-width 960px
        md: { min: "480px" }, // Media query for max-width 480px
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0) rotate(0)" },
          "2%": { transform: "translate(-.5px,-1.5px) rotate(.5deg)" },
          // Add all the other keyframes...
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        scrollLeft: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-50%)" },
        },
      },
      animation: {
        shake: "shake 0.1s ease-in-out infinite",
        fadeInOut: "fadeInOut 1s infinite",
        scrollLeft: "scrollLeft 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
