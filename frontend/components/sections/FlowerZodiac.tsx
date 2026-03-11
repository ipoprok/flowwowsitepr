'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FlowerZodiac() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)

  // Данные для каждого знака зодиака
  const zodiacData = [
    { 
      sign: 'Овен', 
      flower: 'Герань', 
      description: 'Яркие и страстные, как вы! Герань приносит удачу и защищает дом.',
      emoji: '🌸',
      color: 'bg-red-100',
      borderColor: 'border-red-400'
    },
    { 
      sign: 'Телец', 
      flower: 'Роза', 
      description: 'Роскошные и чувственные розы идеально подходят для вас. Любовь и гармония.',
      emoji: '🌹',
      color: 'bg-pink-100',
      borderColor: 'border-pink-400'
    },
    { 
      sign: 'Близнецы', 
      flower: 'Лаванда', 
      description: 'Лёгкая и воздушная лаванда. Успокаивает и дарит вдохновение.',
      emoji: '💜',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400'
    },
    { 
      sign: 'Рак', 
      flower: 'Водяная лилия', 
      description: 'Нежная и загадочная лилия. Символ семейного уюта и тепла.',
      emoji: '🪷',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400'
    },
    { 
      sign: 'Лев', 
      flower: 'Подсолнух', 
      description: 'Яркий и солнечный подсолнух! Как и вы, всегда в центре внимания.',
      emoji: '🌻',
      color: 'bg-yellow-100',
      borderColor: 'border-yellow-400'
    },
    { 
      sign: 'Дева', 
      flower: 'Хризантема', 
      description: 'Изысканная хризантема. Символ чистоты и совершенства.',
      emoji: '🏵️',
      color: 'bg-green-100',
      borderColor: 'border-green-400'
    },
    { 
      sign: 'Весы', 
      flower: 'Гортензия', 
      description: 'Гармоничная гортензия. Идеальный баланс красоты и элегантности.',
      emoji: '💮',
      color: 'bg-indigo-100',
      borderColor: 'border-indigo-400'
    },
    { 
      sign: 'Скорпион', 
      flower: 'Пион', 
      description: 'Таинственный и страстный пион. Глубина чувств и эмоций.',
      emoji: '🌺',
      color: 'bg-red-100',
      borderColor: 'border-red-400'
    },
    { 
      sign: 'Стрелец', 
      flower: 'Гвоздика', 
      description: 'Яркая и энергичная гвоздика. Символ свободы и приключений.',
      emoji: '🌼',
      color: 'bg-orange-100',
      borderColor: 'border-orange-400'
    },
    { 
      sign: 'Козерог', 
      flower: 'Фиалка', 
      description: 'Скромная и благородная фиалка. Цените традиции и уют.',
      emoji: '🌸',
      color: 'bg-gray-100',
      borderColor: 'border-gray-400'
    },
    { 
      sign: 'Водолей', 
      flower: 'Орхидея', 
      description: 'Необычная и экзотическая орхидея. Как и вы — уникальны!',
      emoji: '🦋',
      color: 'bg-teal-100',
      borderColor: 'border-teal-400'
    },
    { 
      sign: 'Рыбы', 
      flower: 'Сирень', 
      description: 'Нежная и мечтательная сирень. Символ вдохновения и творчества.',
      emoji: '💐',
      color: 'bg-violet-100',
      borderColor: 'border-violet-400'
    },
  ]

  const handleSignClick = (sign: string) => {
    setSelectedSign(sign)
  }

  const selectedFlower = zodiacData.find(item => item.sign === selectedSign)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light">
            Цветочный
            <span className="block font-medium text-rose-400">гороскоп</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Узнайте, какой цветок подходит вашему знаку зодиака
          </p>
        </div>

        {/* Сетка знаков зодиака */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {zodiacData.map((item) => (
            <button
              key={item.sign}
              onClick={() => handleSignClick(item.sign)}
              className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                selectedSign === item.sign 
                  ? `${item.color} ${item.borderColor} shadow-lg scale-105` 
                  : 'bg-white border-gray-100 hover:border-rose-200'
              }`}
            >
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition">
                {item.emoji}
              </div>
              <div className="text-sm font-medium">{item.sign}</div>
            </button>
          ))}
        </div>

        {/* Результат */}
        {selectedFlower && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className={`${selectedFlower.color} rounded-3xl p-8 text-center border-2 ${selectedFlower.borderColor} shadow-xl animate-fadeIn`}>
              <div className="text-7xl mb-4 animate-bounce">
                {selectedFlower.emoji}
              </div>
              <h3 className="text-3xl font-light mb-3">
                Знак <span className="font-medium text-rose-400">{selectedFlower.sign}</span>
              </h3>
              <p className="text-2xl font-medium mb-4">
                {selectedFlower.flower}
              </p>
              <p className="text-gray-700 text-lg mb-6">
                {selectedFlower.description}
              </p>
              <Link 
                href={`/catalog?zodiac=${selectedFlower.sign}`}
                className="inline-block bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition shadow-lg hover:shadow-rose-200"
              >
                Выбрать букет
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Стили для анимации */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}