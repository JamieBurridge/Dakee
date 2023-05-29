const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
});
