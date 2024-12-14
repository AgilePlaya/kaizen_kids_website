import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  output: 'export',
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

// module.exports = {
//   /* config options here */
//   distDir: "build",
//   output: 'export',
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [{
//       'hostname': 'images.unsplash.com',
//     }]
//   }
// }
