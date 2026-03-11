'use client'

import { useState, useMemo } from 'react'
import FilterSidebar from '@/components/catalog/FilterSidebar'
import ProductCard from '@/components/catalog/ProductCard'
import { products } from '@/data/products'

// Определяем тип для товара
interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: number
  color: string
  occasion: string[]
  category: string
}

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState('popular')
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    selectedColors: [] as string[],
    selectedOccasions: [] as string[]
  })

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      // Фильтр по цене
      if (product.price > filters.priceRange[1]) return false

      // Фильтр по цвету
      if (filters.selectedColors.length > 0) {
        if (!filters.selectedColors.includes(product.color)) {
          return false
        }
      }

      // Фильтр по поводу
      if (filters.selectedOccasions.length > 0) {
        let hasOccasion = false
        for (let i = 0; i < product.occasion.length; i++) {
          if (filters.selectedOccasions.includes(product.occasion[i])) {
            hasOccasion = true
            break
          }
        }
        if (!hasOccasion) return false
      }

      return true
    })
  }, [filters])

  // Сортировка товаров
  const sortedAndFilteredProducts = useMemo(() => {
    let sorted = [...filteredProducts]

    if (sortBy === 'cheap') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'expensive') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
  }, [filteredProducts, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-3xl font-light mb-8">
          Каталог цветов
        </h1>

        <div className="flex gap-8">
          {/* Левая колонка с фильтрами */}
          <div className="w-80 flex-shrink-0">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Правая колонка с товарами */}
          <div className="flex-1">
            {/* Сортировка */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Найдено: {sortedAndFilteredProducts.length} товаров
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-4 py-2 text-gray-600"
              >
                <option value="popular">По популярности</option>
                <option value="cheap">Сначала дешевле</option>
                <option value="expensive">Сначала дороже</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>

            {/* Сетка товаров */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedAndFilteredProducts.map((product: Product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Если товаров не найдено */}
            {sortedAndFilteredProducts.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center">
                <span className="text-6xl mb-4 block">😢</span>
                <h3 className="text-xl font-medium text-gray-600">Ничего не найдено</h3>
                <p className="text-gray-500 mt-2">Попробуйте изменить фильтры</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}