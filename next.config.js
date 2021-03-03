const withPlugins = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    dest: "public",
  },
});

const config = {
  async rewrites() {
    return [{}];
  },
};

module.exports = withPlugins([withPWA], {
  future: { webpack5: true },
});
