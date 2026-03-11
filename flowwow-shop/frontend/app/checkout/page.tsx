'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { clearCart } from '@/store/cartSlice'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { items, totalPrice } = useAppSelector((state: any) => state.cart)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    paymentMethod: 'card',
    comment: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Если корзина пуста - перенаправляем в каталог
  if (items.length === 0) {
    router.push('/catalog')
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Имитация отправки заказа
    setTimeout(() => {
      alert('✅ Заказ успешно оформлен! Мы свяжемся с вами для подтверждения.')
      dispatch(clearCart())
      router.push('/')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Доступные даты (сегодня + 7 дней)
  const getDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const formatted = date.toISOString().split('T')[0]
      dates.push(formatted)
    }
    return dates
  }

  // Доступное время
  const timeSlots = [
    '9:00-12:00',
    '12:00-15:00', 
    '15:00-18:00',
    '18:00-21:00'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">
          Оформление
          <span className="block font-medium text-rose-400">заказа</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Форма оформления */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Контактные данные */}
                <div>
                  <h2 className="text-lg font-medium mb-4">1. Контактные данные</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Адрес доставки */}
                <div>
                  <h2 className="text-lg font-medium mb-4">2. Адрес доставки</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Улица, дом, квартира"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>
                </div>

                {/* Дата и время */}
                <div>
                  <h2 className="text-lg font-medium mb-4">3. Дата и время доставки</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Дата *
                      </label>
                      <select
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                      >
                        <option value="">Выберите дату</option>
                        {getDates().map(date => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('ru-RU', { 
                              day: 'numeric', 
                              month: 'long' 
                            })}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Время *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                      >
                        <option value="">Выберите время</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Способ оплаты */}
                <div>
                  <h2 className="text-lg font-medium mb-4">4. Способ оплаты</h2>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="text-rose-400 focus:ring-rose-400"
                      />
                      <span className="ml-2">Банковской картой онлайн</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleChange}
                        className="text-rose-400 focus:ring-rose-400"
                      />
                      <span className="ml-2">Наличными при получении</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === 'transfer'}
                        onChange={handleChange}
                        className="text-rose-400 focus:ring-rose-400"
                      />
                      <span className="ml-2">Перевод на карту</span>
                    </label>
                  </div>
                </div>

                {/* Комментарий */}
                <div>
                  <h2 className="text-lg font-medium mb-4">5. Комментарий к заказу</h2>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Например: код домофона, пожелания к букету"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  ></textarea>
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-rose-400 text-white py-3 rounded-xl text-lg font-medium transition ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-rose-500'
                  }`}
                >
                  {isSubmitting ? 'Оформление...' : 'Подтвердить заказ'}
                </button>
              </form>
            </div>
          </div>

          {/* Блок с заказом */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-4">Ваш заказ</h2>
              
              {/* Список товаров */}
              <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
                {items.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.quantity} x {item.price} ₽</p>
                    </div>
                    <p className="font-medium">{item.price * item.quantity} ₽</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары:</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span className="text-rose-400">{totalPrice} ₽</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/cart" 
                className="block text-center text-gray-500 text-sm mt-4 hover:text-rose-400"
              >
                Вернуться в корзину
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}