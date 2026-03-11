'use client'

import ProductImage from '@/components/ui/ProductImage'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { removeFromCart, updateQuantity, clearCart } from '@/store/cartSlice'

export default function CartPage() {
  const dispatch = useAppDispatch()
  const { items, totalQuantity, totalPrice } = useAppSelector((state: any) => state.cart)

  // Если корзина пуста
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 max-w-md mx-auto">
            <span className="text-8xl mb-4 block">🛒</span>
            <h1 className="text-2xl font-light mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Link 
              href="/catalog" 
              className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 inline-block"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">
          Корзина
          <span className="block font-medium text-rose-400">({totalQuantity} товаров)</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Список товаров */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6">
              {items.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b last:border-0">
                  {/* Картинка — ИСПРАВЛЕНО */}
                  <div className="w-20 h-20 bg-rose-50 rounded-xl overflow-hidden flex-shrink-0">
                    <ProductImage
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Название и цена */}
                  <div className="flex-1">
                    <Link href={`/product/${item.id}`} className="font-medium hover:text-rose-400">
                      {item.name}
                    </Link>
                    <p className="text-rose-400 font-bold mt-1">{item.price} ₽</p>
                  </div>

                  {/* Количество */}
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: Math.max(1, item.quantity - 1) 
                      }))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button 
                      onClick={() => dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: item.quantity + 1 
                      }))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Цена за все */}
                  <div className="w-24 text-right font-medium">
                    {item.price * item.quantity} ₽
                  </div>

                  {/* Кнопка удалить */}
                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-gray-400 hover:text-red-500 text-xl"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Блок итого */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-4">Ваш заказ</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары ({totalQuantity})</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка</span>
                  <span>Бесплатно</span>
                </div>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between font-bold text-lg">
                <span>Итого</span>
                <span className="text-rose-400">{totalPrice} ₽</span>
              </div>

              <Link 
                href="/checkout" 
                className="block w-full bg-rose-400 text-white py-3 rounded-xl mt-6 hover:bg-rose-500 text-center"
              >
                Оформить заказ
              </Link>

              <button 
                onClick={() => dispatch(clearCart())}
                className="w-full text-gray-400 text-sm mt-4 hover:text-gray-600"
              >
                Очистить корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}