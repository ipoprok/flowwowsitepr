'use client'

import { useState } from 'react'

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16">
          Наши
          <span className="block font-medium text-rose-400">контакты</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-medium mb-6">📍 Адрес</h2>
              <p className="text-gray-600 mb-2">ул. Цветочная, 1</p>
              <p className="text-gray-600">г. Москва, 123456</p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-medium mb-6">📞 Телефон</h2>
              <p className="text-gray-600 mb-2">+7 (999) 123-45-67</p>
              <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-medium mb-6">✉️ Email</h2>
              <p className="text-gray-600 mb-2">info@flowwow.ru</p>
              <p className="text-gray-600">zakaz@flowwow.ru</p>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-medium mb-6">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  required
                />
              </div>
              
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
                  Сообщение
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* Яндекс Карта */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1b2c3d4e5f6g7h8i9j0k&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            title="Карта FlowWow"
          ></iframe>
        </div>
      </div>
    </div>
  )
}