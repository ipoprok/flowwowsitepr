import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // ← САМОЕ ГЛАВНОЕ! Экспорт в статику
  images: {
    unoptimized: true,        // ← Обязательно для GitHub Pages!
  },
  // Если сайт будет по адресу: username.github.io/flowwowsitepr/
  basePath: '/flowwowsitepr', // ← Имя вашего репозитория (без .git)
  trailingSlash: true,        // ← Важно для GitHub Pages
};

export default nextConfig;