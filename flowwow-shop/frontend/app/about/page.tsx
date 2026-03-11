'use client'

import { useState } from 'react'
import Link from 'next/link'

// Типы для пропсов команды
interface TeamMemberProps {
  name: string
  role: string
  experience: string
  image: string
  isLeader?: boolean
}

export default function AboutPage() {
  const [bouquetError, setBouquetError] = useState(false)

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16">
          О нашей
          <span className="block font-medium text-rose-400">студии цветов</span>
        </h1>

        {/* История с фото букета */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-medium mb-4">Наша история</h2>
            <p className="text-gray-600 mb-4">
              FlowWow родился из любви к цветам и желанию дарить людям радость. 
              Всё началось в 2020 году с маленькой мастерской, где мы создавали 
              букеты для друзей и знакомых.
            </p>
            <p className="text-gray-600 mb-4">
              Сегодня мы — команда профессиональных флористов, которые каждый день 
              создают красоту для наших клиентов. Мы верим, что цветы способны 
              менять настроение и делать мир лучше.
            </p>
            <p className="text-gray-600">
              Каждый букет мы собираем с душой, используя только самые свежие цветы 
              от проверенных поставщиков.
            </p>
          </div>
          
          {/* Фото букета по вашей ссылке */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-rose-50">
            {!bouquetError ? (
              <img 
                src="https://i.pinimg.com/1200x/81/72/47/817247efb32773f519e22c5bf186e0f4.jpg"
                alt="Красивый букет цветов"
                className="w-full h-full object-cover"
                onError={() => setBouquetError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl">💐</span>
              </div>
            )}
          </div>
        </div>

        {/* Ценности */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <h2 className="text-2xl font-medium text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-medium mb-2">Свежесть</h3>
              <p className="text-gray-600">Только свежие цветы, которые простоят долго</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-medium mb-2">Красота</h3>
              <p className="text-gray-600">Уникальные дизайны и сочетания цветов</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-medium mb-2">Любовь</h3>
              <p className="text-gray-600">Каждый букет создан с любовью к своему делу</p>
            </div>
          </div>
        </div>

        {/* Команда - Три разных флориста с фото */}
        <h2 className="text-2xl font-medium text-center mb-12">Наша команда</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Анна - Ведущий флорист */}
          <TeamMember
            name="Анна"
            role="Ведущий флорист"
            experience="Стаж 8 лет. Создает свадебные букеты и авторские композиции"
            image="https://i.pinimg.com/736x/dd/aa/55/ddaa55daaa0e6b786a92f27a232f747e.jpg"
            isLeader={true}
          />

          {/* Елена - Флорист-консультант */}
          <TeamMember
            name="Елена"
            role="Флорист-консультант"
            experience="Стаж 5 лет. Помогает подобрать идеальный букет для любого повода"
            image="https://i.pinimg.com/736x/a1/ac/70/a1ac70793f00e1ad3bd0a5f4690c6cab.jpg"
          />

          {/* Мария - Флорист-менеджер */}
          <TeamMember
            name="Мария"
            role="Флорист-менеджер"
            experience="Стаж 4 года. Координирует заказы и контролирует доставку"
            image="https://i.pinimg.com/736x/f9/17/9b/f9179bd075bc8bb3a8ab9c10bcae4fb7.jpg"
          />
        </div>

        {/* Дополнительная информация о команде */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">Вместе мы создаем красоту для вас каждый день! 🌸</p>
        </div>
      </div>
    </div>
  )
}

// Компонент для одного сотрудника с фото и запасным вариантом
function TeamMember({ name, role, experience, image, isLeader = false }: TeamMemberProps) {
  const [imageError, setImageError] = useState<boolean>(false)

  return (
    <div className={`text-center rounded-3xl p-6 transform hover:scale-105 transition ${
      isLeader ? 'bg-rose-50' : 'bg-gray-50'
    }`}>
      <div className={`w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden ${
        isLeader ? 'border-4 border-rose-400' : 'border-4 border-gray-300'
      }`}>
        {!imageError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-rose-100 flex items-center justify-center text-4xl">
            {isLeader ? '👩‍🎨' : '👩'}
          </div>
        )}
      </div>
      <h3 className="font-medium text-xl">{name}</h3>
      <p className="text-rose-400 font-medium text-sm mb-2">{role}</p>
      <p className="text-gray-500 text-sm">{experience}</p>
    </div>
  )
}