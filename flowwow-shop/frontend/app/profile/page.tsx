'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [orders] = useState([
    { id: 1, date: '15 марта 2024', total: 2990, status: 'Доставлен' },
    { id: 2, date: '10 марта 2024', total: 2490, status: 'В пути' },
    { id: 3, date: '5 марта 2024', total: 3990, status: 'Доставлен' },
  ])

  useEffect(() => {
    // Проверяем, залогинен ли пользователь
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          Загрузка...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-light mb-8">
          Личный кабинет
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Боковая панель */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  👤
                </div>
                <h2 className="text-xl font-medium">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Бонусные баллы:</span>
                  <span className="font-bold text-rose-400">150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Всего заказов:</span>
                  <span className="font-bold">{orders.length}</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg mt-6 hover:bg-gray-200 transition"
              >
                Выйти
              </button>
            </div>
          </div>

          {/* Основной контент */}
          <div className="md:col-span-2">
            {/* История заказов */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <h2 className="text-xl font-medium mb-4">История заказов</h2>
              
              <div className="space-y-3">
                {orders.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Заказ №{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-rose-400">{order.total} ₽</p>
                      <p className={`text-xs ${
                        order.status === 'Доставлен' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Избранное */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-4">Избранное</h2>
              <p className="text-gray-500 text-center py-8">
                У вас пока нет избранных товаров
              </p>
              <Link 
                href="/catalog"
                className="block text-center text-rose-400 hover:underline"
              >
                Перейти в каталог
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}