const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily: {
        display: ["Overpass", "sans-serif"],
        body: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: (theme) => ({
        aside: "18rem",
        main: "calc(-18rem + 100vw)",
        header: "9rem",
      }),
      height: (theme) => ({
        header: "9rem",
      }),
      typography: (theme) => ({
        override: {
          css: {
            pre: {
              backgroundColor: theme("colors.gray.100"),
            },
            code: {
              borderRadius: 2,
              backgroundColor: theme("colors.gray.100"),
              padding: 2,
              "&:before, &:after": {
                display: "none",
              },
            },
            strong: {
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
            },
            h1: {
              color: theme("colors.gray.900"),
            },
            h2: {
              color: theme("colors.gray.900"),
            },
            h3: {
              color: theme("colors.gray.900"),
            },
            h4: {
              color: theme("colors.gray.900"),
            },
          },
        },
        light: {
          css: [
            {
              color: theme("colors.gray.300"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.gray.100"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      typography: ["responsive", "dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  xwind: {
    mode: "objectstyles",
  },
};
