export interface BlogPost {
  id: number
  title: string
  description: string
  content: string
  image: string
  date: string
  author: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Как ухаживать за розами, чтобы они стояли долго',
    description: 'Секреты правильного ухода за срезанными розами',
    content: '<p>Текст статьи...</p>',
    image: '🌹',
    date: '15 марта 2024',
    author: 'Анна, ведущий флорист',
    readTime: '5 мин',
    category: 'Уход за цветами'
  },
  {
    id: 2,
    title: 'Значение цветов: что сказать букетом',
    description: 'Язык цветов: как подобрать букет по значению',
    content: '<p>Текст статьи...</p>',
    image: '📚',
    date: '10 марта 2024',
    author: 'Елена, флорист-консультант',
    readTime: '7 мин',
    category: 'Интересное'
  },
  {
    id: 3,
    title: 'Тренды флористики 2024 года',
    description: 'Самые модные тенденции в мире цветов',
    content: '<p>Текст статьи...</p>',
    image: '✨',
    date: '5 марта 2024',
    author: 'Мария, флорист-менеджер',
    readTime: '6 мин',
    category: 'Тренды'
  }
]