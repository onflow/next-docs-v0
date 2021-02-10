const path = require("path");

const withPlugins = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    dest: "public",
  },
});

// const withMDX = require("next-mdx-enhanced")({
//   layoutPath: "layouts",
//   defaultLayout: true,
//   fileExtensions: ["mdx", "md"],
//   remarkPlugins: [require(path.resolve(__dirname, "./lib/remark-vscode-flow"))],
//   rehypePlugins: [],
//   usesSrc: false,
//   reExportDataFetching: false,
// });

const config = {
  async rewrites() {
    return [{}];
  },
};

module.exports = withPlugins([withPWA]);
