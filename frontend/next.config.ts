import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // ← Обязательно для GitHub Pages!
  images: {
    unoptimized: true,     // ← Обязательно!
  },
  // Если сайт будет по адресу: username.github.io/flowwowsitepr/
  basePath: '/flowwowsitepr',  // ← Имя вашего репозитория
};

export default nextConfig;