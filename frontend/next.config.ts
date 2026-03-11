import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Включаем статический экспорт - это создаст папку out вместо _next */
  output: 'export',
  
  /* Отключаем оптимизацию изображений для GitHub Pages */
  images: {
    unoptimized: true,
  },
  
  /* Для проектов с подпапкой (например, username.github.io/flowwowsitepr/) 
     Раскомментируйте и укажите название вашего репозитория */
  // basePath: '/flowwowsitepr',
  // assetPrefix: '/flowwowsitepr',
};

export default nextConfig;
