/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
   remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
   ]
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' ? 'https://spligetsw.com' : 'http://localhost:3000',
  }
}

module.exports = withExportImages(nextConfig);

