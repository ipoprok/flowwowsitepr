'use client'

import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export default function Blog() {
  // Берем только первые 3 статьи для главной
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light">
            Полезные
            <span className="block font-medium text-rose-400">статьи</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Советы флористов, тренды и секреты ухода за цветами
          </p>
        </div>

        {/* Сетка статей - только 3 штуки */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Изображение */}
                <div className="h-48 bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl transform group-hover:scale-110 transition duration-500">
                    {post.image}
                  </span>
                  {/* Категория */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-rose-400">
                    {post.category}
                  </span>
                </div>

                {/* Контент */}
                <div className="p-6">
                  {/* Дата и время чтения */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <span>📅</span> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⏱️</span> {post.readTime}
                    </span>
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-xl font-medium mb-3 group-hover:text-rose-400 transition line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  {/* Автор */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.author}</span>
                    <span className="text-rose-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Читать →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Кнопка УДАЛЕНА - теперь здесь ничего нет */}
      </div>
    </section>
  )
}