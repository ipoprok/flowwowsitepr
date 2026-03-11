'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Закрывать поиск при клике вне области
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Поиск при изменении запроса
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const searchResults = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.color.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.occasion.some(occ => occ.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 5) // Показываем только первые 5 результатов

    setResults(searchResults)
    setIsOpen(true)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      {/* Форма поиска */}
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск товаров..."
          className="w-64 px-4 py-2 pr-10 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-400"
        >
          🔍
        </button>
      </form>

      {/* Выпадающие результаты */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
              className="flex items-center gap-3 p-3 hover:bg-rose-50 transition group"
            >
              <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-2xl">
                {product.image}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm group-hover:text-rose-400">{product.name}</h4>
                <p className="text-xs text-gray-500">{product.price} ₽</p>
              </div>
            </Link>
          ))}
          
          {/* Кнопка "Все результаты" */}
          {results.length > 0 && (
            <button
              onClick={handleSearch}
              className="w-full p-3 text-center text-sm text-rose-400 hover:bg-rose-50 border-t"
            >
              Все результаты ({results.length})
            </button>
          )}
        </div>
      )}

      {/* Сообщение "Ничего не найдено" */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 text-center z-50">
          <p className="text-gray-500 text-sm">Ничего не найдено</p>
        </div>
      )}
    </div>
  )
}