/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#F1E9C9",
          400: "#DBAC2C",
          700: "#C47F17",
        },
        purple: {
          100: "#EBE5F9",
          400: "#8047F8",
          700: "#4B2995",
        },
        base: {
          100: "#F3F2F2",
          200: "#EDEDED",
          300: "#E6E5E5",
          400: "#D7D5D5",
          500: "#8D8686",
          600: "#574F4D",
          700: "#403937",
          800: "#272221",
        },
        background: "#FAFAFA",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      cursive: ["Baloo 2", "cursive"],
    },
  },
  plugins: [],
};
