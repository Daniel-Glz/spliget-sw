/** @type {import('next').NextConfig} */
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
      NEXT_PUBLIC_GRAPHQL_URL: "http://localhost/wordpress/graphql"
   }
}

module.exports = nextConfig

