/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
   deviceSizes: [320, 768, 1200],
   formats: ['image/avif', 'image/webp'],
   remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
   ]
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' ? 'https://www.spligetsw.com' : 'http://localhost:3000',
  }
}

module.exports = withExportImages(nextConfig);

