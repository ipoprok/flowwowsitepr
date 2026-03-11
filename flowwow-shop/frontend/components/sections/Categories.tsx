'use client'

import Link from 'next/link'

export default function Categories() {
  const categories = [
    { id: 1, name: 'Букеты', icon: '💐', count: 40, color: 'bg-rose-100' },
    { id: 2, name: 'Свадебные букеты', icon: '👰', count: 3, color: 'bg-purple-100' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center">
          Популярные
          <span className="block font-medium text-rose-400">категории</span>
        </h2>
        <div className="flex justify-center gap-16 mt-12">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/catalog?category=${cat.id}`}
              className="group text-center"
            >
              <div className={`${cat.color} w-32 h-32 mx-auto rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform shadow-md`}>
                {cat.icon}
              </div>
              <h3 className="mt-4 font-medium text-lg">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} товаров</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}