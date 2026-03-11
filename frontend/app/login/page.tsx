'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Имитация входа (пока просто сохраняем в localStorage)
    setTimeout(() => {
      if (formData.email && formData.password) {
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          name: formData.email.split('@')[0],
          isLoggedIn: true
        }))
        router.push('/profile')
      } else {
        setError('Заполните все поля')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-light text-center mb-8">
            Вход в
            <span className="block font-medium text-rose-400">личный кабинет</span>
          </h1>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Пароль
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500 transition disabled:opacity-50"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Нет аккаунта?{' '}
              <Link href="/register" className="text-rose-400 hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>

          {/* Тестовые данные */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Тестовые данные:</p>
            <p className="text-xs">Любой email и пароль (минимум 1 символ)</p>
          </div>
        </div>
      </div>
    </div>
  )
}