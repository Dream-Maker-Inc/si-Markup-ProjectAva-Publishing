/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "./",
    unoptimized: true,
  },
  assetPrefix: ".",
};

module.exports = nextConfig;
