/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exlint: {
    dirs: ['src',]
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
