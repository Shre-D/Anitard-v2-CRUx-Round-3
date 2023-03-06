// /** @type {import('next').NextConfig} */

module.exports = {

  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3000/:path*',
  //     },
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}