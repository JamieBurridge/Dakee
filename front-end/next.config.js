const withOffline = require("next-offline");

const nextConfig = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

module.exports = withOffline(nextConfig);
