'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import ProductImage from '@/components/ui/ProductImage'  // ← ДОБАВЛЕНО

interface ProductCardProps {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: number
}

export default function ProductCard({ id, name, price, oldPrice, image, rating }: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(addToCart({
      id,
      name,
      price,
      image
    }))
    alert('✅ Товар добавлен в корзину!')
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition group">
      <Link href={`/product/${id}`} className="block">
        {/* ИСПРАВЛЕНО: теперь используем ProductImage вместо эмодзи */}
        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
          <ProductImage 
            src={image} 
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="mt-4 font-medium text-lg">{name}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-rose-400">{price} ₽</span>
            {oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">{oldPrice} ₽</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-rose-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-rose-500"
          >
            В корзину
          </button>
        </div>
      </Link>
    </div>
  )
}