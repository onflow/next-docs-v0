const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  important: "#app",
  theme: {
    ...defaultTheme,
    extend: {
      colors,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui")],
  xwind: {
    mode: "objectstyles",
  },
  purge: ["./components/**/*.{js}", "./pages/**/*.{js}", "./layouts/**/*.{js}"],
};
