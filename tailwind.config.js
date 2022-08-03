const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["14px", { lineHeight: "20px", letterSpacing: "0.04em" }],
        sm: ["16px", { lineHeight: "22px", letterSpacing: "0.04em" }],
        lg: ["18px", { lineHeight: "24px", letterSpacing: "0.04em" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "0.04em" }],
        h3: ["24px", { lineHeight: "32px", letterSpacing: "0.04em" }],
        h2: ["28px", { lineHeight: "36px", letterSpacing: "0.04em" }],
        h1: ["32px", { lineHeight: "40px", letterSpacing: "0.04em" }],
      },

      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      fontFamily: {
        typo: "'Exo 2'",
        title: "'Montserrat'",
        jet: "'JetBrains Mono'",
      },

      container: {
        padding: "1rem",
        center: true,
        screens: {
          xs: "320px",
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1312px",
        },
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#E2E5E6",
          DEFAULT: "	#E2E5E6",
          dark: "#c2c2c2",
        },
        secondary: {
          glass: "#000000ab",
          light: "#202020b9",
          DEFAULT: "#202020",
          dark: "#000000",
        },
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require('tailwind-scrollbar'),
  ],
};
