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
   }
}

module.exports = withExportImages(nextConfig);

