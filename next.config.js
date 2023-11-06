/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'avatars.githubusercontent.com',
      'camo.githubusercontent.com',
      'user-images.githubusercontent.com',
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
