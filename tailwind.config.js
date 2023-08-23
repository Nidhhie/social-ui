/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-gray-light": "#C5C7CA",
        "font-gray-dark": "#6B6C70",
        "gray-light": "#35373B",
        "gray-dark": "#131319",
        blue: "#4A96FF",
      },
      blur: {
        xs: "2px",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
