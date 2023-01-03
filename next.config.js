/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
   images: {
     remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost'
        }
     ]
   },  
   env: {
      NEXT_PUBLIC_GRAPHQL_URL: "http://localhost/wordpress/graphql",
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
   }
}

module.exports = nextConfig

