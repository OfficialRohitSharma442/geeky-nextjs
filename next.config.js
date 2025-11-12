/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.canva.com', 'images.unsplash.com', 'cdn.pixabay.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
