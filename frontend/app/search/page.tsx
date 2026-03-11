'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { products } from '@/data/products'
import ProductCard from '@/components/catalog/ProductCard'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [sortBy, setSortBy] = useState('popular')

  // Поиск товаров
  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.color.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.occasion.some(occ => occ.toLowerCase().includes(query.toLowerCase()))
  )

  // Сортировка результатов
  const sortedResults = [...searchResults].sort((a, b) => {
    if (sortBy === 'cheap') return a.price - b.price
    if (sortBy === 'expensive') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0 // популярность
  })

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-3xl font-light mb-4">
          Поиск
          <span className="block font-medium text-rose-400">"{query}"</span>
        </h1>

        {/* Количество результатов */}
        <p className="text-gray-600 mb-8">
          Найдено: {searchResults.length} товаров
        </p>

        {searchResults.length > 0 ? (
          <>
            {/* Сортировка */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex justify-between items-center">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="popular">По популярности</option>
                <option value="cheap">Сначала дешевле</option>
                <option value="expensive">Сначала дороже</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>

            {/* Сетка товаров */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedResults.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          // Ничего не найдено
          <div className="bg-white rounded-2xl p-12 text-center">
            <span className="text-6xl mb-4 block">😢</span>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Ничего не найдено</h2>
            <p className="text-gray-500 mb-6">Попробуйте изменить поисковый запрос</p>
            <Link 
              href="/catalog" 
              className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500 inline-block"
            >
              Перейти в каталог
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}