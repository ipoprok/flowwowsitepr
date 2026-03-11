'use client'

import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { useState } from 'react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('все')

  // Получаем все категории
  const categories = ['все', ...new Set(blogPosts.map(post => post.category))]

  // Фильтруем статьи по категории
  const filteredPosts = selectedCategory === 'все' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Блог
            <span className="block font-medium text-rose-400">FlowWow</span>
          </h1>
          <p className="text-gray-600">
            Полезные статьи о цветах, советы флористов и последние тренды
          </p>
        </div>

        {/* Фильтр по категориям */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-rose-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-400'
              }`}
            >
              {category === 'все' ? 'Все статьи' : category}
            </button>
          ))}
        </div>

        {/* Сетка статей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
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
                <div className="p-6 flex-1 flex flex-col">
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
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  {/* Автор */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
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

        {/* Если статей нет */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">😢</span>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Статей не найдено</h3>
            <p className="text-gray-500">Попробуйте выбрать другую категорию</p>
          </div>
        )}
      </div>
    </div>
  )
}