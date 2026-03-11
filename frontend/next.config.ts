import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Если сайт будет в подпапке (username.github.io/flowwowsitepr/)
  // basePath: '/flowwowsitepr',
  // assetPrefix: '/flowwowsitepr',
};

export default nextConfig;
