'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Цветы для ваших
              <span className="block font-medium text-rose-400">особенных моментов</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Свежие цветы с доставкой по городу. Создайте настроение с FlowWow
            </p>
            <div className="mt-8">
              <Link
                href="/catalog"
                className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 inline-block transition duration-300 shadow-lg hover:shadow-rose-200"
              >
                Выбрать букет
              </Link>
            </div>
          </div>

          {/* Блок с картинкой */}
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-rose-100">
            {!imageError ? (
              <img
                // ВАША ССЫЛКА ЗДЕСЬ
                src="https://i.pinimg.com/736x/46/12/1b/46121bcddadd6c090b71ac9a57d872bf.jpg"
                alt="Красивый букет цветов"
                className="w-full h-full object-cover"
                // Если картинка не загрузится, сработает этот обработчик
                onError={() => setImageError(true)}
              />
            ) : (
              // Запасной вариант, если картинка не загрузится
              <div className="w-full h-full flex flex-col items-center justify-center text-rose-400">
                <span className="text-9xl mb-4">💐</span>
                <p className="text-lg">Букет цветов</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}