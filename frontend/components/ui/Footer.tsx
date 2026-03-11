'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-light">Flow<span className="text-rose-400">Wow</span></h3>
            <p className="mt-4 text-gray-400 text-sm">Свежие цветы с доставкой по городу</p>
          </div>
          <div>
            <h4 className="font-medium">Навигация</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><Link href="/catalog" className="hover:text-rose-400">Каталог</Link></li>
              <li><Link href="/about" className="hover:text-rose-400">О нас</Link></li>
              <li><Link href="/delivery" className="hover:text-rose-400">Доставка</Link></li>
              <li><Link href="/contacts" className="hover:text-rose-400">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Контакты</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>+7 (999) 123-45-67</li>
              <li>info@flowwow.ru</li>
              <li>ул. Цветочная, 1</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Мы в соцсетях</h4>
            <div className="mt-4 flex space-x-4">
              <span className="text-2xl hover:text-rose-400 cursor-pointer">📷</span>
              <span className="text-2xl hover:text-rose-400 cursor-pointer">📱</span>
              <span className="text-2xl hover:text-rose-400 cursor-pointer">💬</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 FlowWow. Все права защищены
        </div>
      </div>
    </footer>
  )
}