export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  images?: string[]
  rating: number
  color: string
  occasion: string[]
  category: string
  description?: string
  care?: string[]
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Нежность роз', 
    price: 2990, 
    oldPrice: 3990, 
    image: '/images/products/rose.jpg',
    images: [
      '/images/products/rose.jpg',
      '/images/products/rose-2.jpg',
      '/images/products/rose-3.jpg'
    ],
    rating: 5,
    color: 'Красный, Розовый, Белый',
    occasion: ['Любовь', 'День рождения'],
    category: 'Букеты'
  },
  { 
    id: 2, 
    name: 'Весенний тюльпан', 
    price: 2490, 
    image: '/images/products/tulip.jpg',
    images: [
      '/images/products/tulip.jpg',
      '/images/products/tulip-2.jpg',
      '/images/products/tulip-3.jpg'
    ],
    rating: 4,
    color: 'Розовый, Белый, Фиолетовый',
    occasion: ['Просто так', 'День рождения'],
    category: 'Букеты'
  },
  { 
    id: 3, 
    name: 'Классический букет', 
    price: 3490, 
    oldPrice: 3990, 
    image: '/images/products/bouquet.jpg',
    images: [
      '/images/products/bouquet.jpg',
      '/images/products/bouquet-2.jpg',
      '/images/products/bouquet-3.jpg'
    ],
    rating: 5,
    color: 'Нежно-розовый',
    occasion: ['Свадьба', 'Юбилей'],
    category: 'Букеты'
  },
  { 
    id: 4, 
    name: 'Романтичный', 
    price: 3990, 
    image: '/images/products/romantic.jpg',
    images: [
      '/images/products/romantic.jpg',
      '/images/products/romantic-2.jpg',
      '/images/products/romantic-3.jpg'
    ],
    rating: 5,
    color: 'Розовый',
    occasion: ['Любовь', 'Свидание'],
    category: 'Букеты'
  },
  { 
    id: 5, 
    name: 'Полевые цветы', 
    price: 1990, 
    image: '/images/products/wild.jpg',
    images: [
      '/images/products/wild.jpg',
      '/images/products/wild-2.jpg',
      '/images/products/wild-3.jpg'
    ],
    rating: 4,
    color: 'Желтый',
    occasion: ['Просто так', 'День рождения'],
    category: 'Букеты'
  },
  { 
    id: 6, 
    name: 'Элегантность', 
    price: 4590, 
    image: '/images/products/elegant.jpg',
    images: [
      '/images/products/elegant.jpg',
      '/images/products/elegant-2.jpg',
      '/images/products/elegant-3.jpg'
    ],
    rating: 5,
    color: 'Нежно-розовый',
    occasion: ['Юбилей', 'Свадьба'],
    category: 'Букеты'
  },
  { 
    id: 7, 
    name: 'Свадебный', 
    price: 5990, 
    oldPrice: 6990, 
    image: '/images/products/wedding.jpg',
    images: [
      '/images/products/wedding.jpg',
      '/images/products/wedding-2.jpg',
      '/images/products/wedding-3.jpg'
    ],
    rating: 5,
    color: 'Белый',
    occasion: ['Свадьба'],
    category: 'Свадебные'
  },
  { 
    id: 8, 
    name: 'Для любимой', 
    price: 3290, 
    image: '/images/products/love.jpg',
    images: [
      '/images/products/love.jpg',
      '/images/products/love-2.jpg',
      '/images/products/love-3.jpg'
    ],
    rating: 4,
    color: 'Розовый',
    occasion: ['Любовь', 'День рождения'],
    category: 'Букеты'
  },
  { 
    id: 9, 
    name: 'Фиолетовая нежность', 
    price: 2790, 
    image: '/images/products/purple.jpg',
    images: [
      '/images/products/purple.jpg',
      '/images/products/purple-2.jpg',
      '/images/products/purple-3.jpg'
    ],
    rating: 5,
    color: 'Фиолетовый',
    occasion: ['Просто так', 'Свидание'],
    category: 'Букеты'
  },
  { 
    id: 10, 
    name: 'Синяя птица', 
    price: 3890, 
    image: '/images/products/blue.jpg',
    images: [
      '/images/products/blue.jpg',
      '/images/products/blue-2.jpg',
      '/images/products/blue-3.jpg'
    ],
    rating: 4,
    color: 'Синий',
    occasion: ['Юбилей', 'День рождения'],
    category: 'Букеты'
  },
]