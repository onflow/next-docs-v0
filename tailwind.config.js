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
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
          },
        },
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
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
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
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
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["responsive", "dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  xwind: {
    mode: "objectstyles",
  },
};
