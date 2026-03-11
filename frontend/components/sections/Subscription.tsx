'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: 'monthly',
      name: 'Месячная',
      price: 1990,
      oldPrice: 2990,
      description: 'Идеально для первого знакомства',
      features: [
        '4 букета в месяц',
        'Свежие цветы каждую неделю',
        'Скидка 20% на доп. заказы',
        'Бесплатная доставка'
      ],
      icon: '🌸',
      color: 'from-rose-400 to-pink-400',
      popular: false
    },
    {
      id: 'quarterly',
      name: '3 месяца',
      price: 5490,
      oldPrice: 8970,
      description: 'Самый популярный выбор',
      features: [
        '12 букетов за 3 месяца',
        'Экономия 35%',
        'Приоритетная доставка',
        'Подарок в каждом 3-м букете',
        'Личный флорист-консультант'
      ],
      icon: '💐',
      color: 'from-purple-400 to-rose-400',
      popular: true
    },
    {
      id: 'yearly',
      name: '6 месяцев',
      price: 9990,
      oldPrice: 17940,
      description: 'Максимальная выгода',
      features: [
        '24 букета за 6 месяцев',
        'Экономия 45%',
        'VIP доставка',
        'Эксклюзивные сорта цветов',
        'Сезонные композиции',
        'Консультация флориста 24/7'
      ],
      icon: '🌺',
      color: 'from-amber-400 to-rose-400',
      popular: false
    }
  ]

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    // Здесь можно добавить логику для оформления подписки
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light">
            Подписка на 
            <span className="block font-medium text-rose-400">свежие цветы</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Получайте красивые букеты регулярно с выгодой до 45%
          </p>
        </div>

        {/* Тарифы */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedPlan === plan.id ? 'ring-4 ring-rose-400 scale-105' : ''
              }`}
            >
              {/* Популярный ярлык */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Хит продаж
                </div>
              )}

              {/* Верхняя часть с градиентом */}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white text-center`}>
                <div className="text-6xl mb-3 animate-bounce">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </div>

              {/* Цена */}
              <div className="p-6 text-center border-b">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-gray-800">{plan.price} ₽</span>
                  <span className="text-sm text-gray-400 line-through">{plan.oldPrice} ₽</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">за весь период</p>
              </div>

              {/* Особенности */}
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold text-lg">✓</span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-rose-400 text-white shadow-lg'
                      : 'bg-rose-50 text-rose-400 hover:bg-rose-100'
                  }`}
                >
                  {selectedPlan === plan.id ? '✓ Выбрано' : 'Выбрать тариф'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества подписки */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">💐</div>
            <h4 className="font-medium text-sm mb-1">Свежие цветы</h4>
            <p className="text-xs text-gray-500">Только из лучших теплиц</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h4 className="font-medium text-sm mb-1">Бесплатно</h4>
            <p className="text-xs text-gray-500">Доставка в любой день</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-medium text-sm mb-1">Авторские букеты</h4>
            <p className="text-xs text-gray-500">Уникальные композиции</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎁</div>
            <h4 className="font-medium text-sm mb-1">Подарки</h4>
            <p className="text-xs text-gray-500">Сюрпризы к каждому букету</p>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Подпишитесь сейчас и получите первый букет со скидкой 20%!
          </p>
          <Link 
            href="/catalog"
            className="inline-block bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition shadow-lg hover:shadow-rose-200"
          >
            Посмотреть букеты
          </Link>
        </div>
      </div>
    </section>
  )
}