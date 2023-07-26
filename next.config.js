/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'camo.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
