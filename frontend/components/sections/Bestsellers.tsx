'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { useState } from 'react'

export default function Bestsellers() {
  const dispatch = useAppDispatch()

  const products = [
    {
      id: 1,
      name: 'Нежность',
      price: 2990,
      oldPrice: 3990,
      image: 'https://i.pinimg.com/736x/91/2c/ab/912cab7e0b31dadd769462fd55fefc46.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Весенний',
      price: 2490,
      image: 'https://i.pinimg.com/736x/f7/58/12/f758121270349eccd3442b63963f89a6.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Классика',
      price: 3490,
      oldPrice: 3990,
      image: 'https://i.pinimg.com/1200x/4d/1c/03/4d1c03b826536c09cac146c0abe92f90.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Романтика',
      price: 3990,
      image: 'https://i.pinimg.com/736x/5f/71/c6/5f71c6fd95e7a01b9ca5be22cdc09c25.jpg',
      rating: 5
    },
  ]

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }))
    alert('✅ Товар добавлен в корзину!')
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">
          Хиты
          <span className="block font-medium text-rose-400">продаж</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Компонент для одной карточки товара с обработкой ошибок загрузки изображения
function ProductCard({ product, onAddToCart }: { product: any, onAddToCart: any }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-rose-50">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            // Запасной вариант, если фото не загрузится
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">
                {product.id === 1 && '🌹'}
                {product.id === 2 && '🌷'}
                {product.id === 3 && '💐'}
                {product.id === 4 && '🌸'}
              </span>
            </div>
          )}
        </div>
        <h3 className="font-medium text-lg">{product.name}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-rose-400">{product.price} ₽</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">{product.oldPrice} ₽</span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart(product)
            }}
            className="bg-rose-400 text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-500"
          >
            В корзину
          </button>
        </div>
      </Link>
    </div>
  )
}