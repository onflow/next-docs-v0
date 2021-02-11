const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
};

module.exports = {
  darkMode: "class",
  purge: {
    mode: "all",
    content: ["./**/*.js"],
  },
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: { css: disabledCss },
        override: {
          css: {
            ul: {
              listStyleType: "none",
            },
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
                color: theme("colors.white"),
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
      typography: ["dark", "override"],
    },
  },
  plugins: [require("@tailwindcss/ui")],
  xwind: {
    mode: "objectstyles",
  },
};
