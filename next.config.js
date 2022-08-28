/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: "/tango-pentagono",
  assetPrefix: "/tango-pentagono/",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};
