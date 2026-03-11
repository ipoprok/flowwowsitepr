'use client'

import ProductImage from '@/components/ui/ProductImage'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { products } from '@/data/products'

// Компонент для одного отзыва
function Review({ name, city, rating, text, image }: { name: string, city: string, rating: number, text: string, image: string }) {
  return (
    <div className="border-b pb-4 last:border-0">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-3 text-xl">
          {image}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">{city}</p>
          <div className="flex">
            {[...Array(5)].map((_, j) => (
              <span key={j} className={j < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm ml-14">
        {text}
      </p>
    </div>
  )
}

export default function ProductPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const [activeTab, setActiveTab] = useState('description')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Находим товар по id из URL
  const product = products.find(p => p.id === Number(params.id))

  // Если товар не найден
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl mb-4">Товар не найден</h1>
          <Link href="/catalog" className="text-rose-400 hover:underline">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }))
    }
    alert(`✅ ${quantity} ${quantity === 1 ? 'товар' : 'товаров'} добавлено в корзину!`)
  }

  // Похожие товары (из той же категории, но не текущий)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-rose-400">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/catalog" className="hover:text-rose-400">Каталог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Основная информация */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Галерея изображений с фото */}
          <div>
            <div className="bg-rose-50 rounded-3xl h-96 flex items-center justify-center overflow-hidden mb-4">
              <ProductImage 
                src={product.images?.[selectedImage] || product.image} 
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-rose-50 rounded-xl overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-rose-400' : ''
                  }`}
                >
                  <ProductImage 
                    src={img} 
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <h1 className="text-3xl md:text-4xl font-light mb-4">{product.name}</h1>
            
            {/* Рейтинг */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} из 5</span>
            </div>

            {/* Цена */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-rose-400">{product.price} ₽</span>
              {product.oldPrice && (
                <span className="ml-4 text-lg text-gray-400 line-through">{product.oldPrice} ₽</span>
              )}
            </div>

            {/* Характеристики */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Цвет</p>
                  <p className="font-medium">{product.color}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Категория</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Повод</p>
                  <p className="font-medium">{product.occasion.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Наличие</p>
                  <p className="text-green-600 font-medium">В наличии</p>
                </div>
              </div>
            </div>

            {/* Количество и кнопка */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-rose-400 text-white px-6 py-2 rounded-lg hover:bg-rose-500 transition"
              >
                Добавить в корзину
              </button>
            </div>

            {/* Дополнительная информация */}
            <div className="text-sm text-gray-500">
              <p className="mb-2">🚚 Бесплатная доставка от 3000 ₽</p>
              <p>💳 Оплата при получении или онлайн</p>
            </div>
          </div>
        </div>

        {/* Табы с информацией */}
        <div className="mb-16">
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-2 font-medium ${
                activeTab === 'description' 
                  ? 'text-rose-400 border-b-2 border-rose-400' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`px-6 py-2 font-medium ${
                activeTab === 'care' 
                  ? 'text-rose-400 border-b-2 border-rose-400' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Уход за цветами
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-2 font-medium ${
                activeTab === 'reviews' 
                  ? 'text-rose-400 border-b-2 border-rose-400' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Отзывы (12)
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-xl font-medium mb-4">Описание букета</h2>
                <p className="text-gray-600 mb-4">
                  Прекрасный букет из свежих цветов, который подарит радость и хорошее настроение. 
                  В составе: нежные розы, элегантные лилии и декоративная зелень.
                </p>
                <p className="text-gray-600 mb-4">
                  Букет упакован в крафтовую бумагу и перевязан атласной лентой.
                </p>
                <p className="text-gray-600">
                  ✨ Особенность букета: каждый цветок подобран вручную нашими флористами
                </p>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h2 className="text-xl font-medium mb-4">Как ухаживать за букетом</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-2">💧</span>
                    Меняйте воду каждый день
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-2">✂️</span>
                    Подрезайте стебли под углом 45 градусов
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-2">🌡️</span>
                    Держите в прохладном месте, избегайте прямых солнечных лучей
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-400 mr-2">💦</span>
                    Опрыскивайте листья водой
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-medium mb-4">Отзывы покупателей</h2>
                <div className="space-y-4">
                  {product.id === 1 && (
                    <>
                      <Review name="Екатерина" city="Москва" rating={5} text="Розы просто потрясающие! Стоят уже неделю и выглядят как свежие. Обязательно закажу еще!" image="👩" />
                      <Review name="Дмитрий" city="Санкт-Петербург" rating={5} text="Дарил жене на годовщину. Она в восторге! Букет шикарный, доставили вовремя." image="👨" />
                      <Review name="Анна" city="Казань" rating={4} text="Очень красивые розы, нежные и ароматные." image="👩‍🦰" />
                    </>
                  )}
                  {product.id === 2 && (
                    <>
                      <Review name="Ольга" city="Новосибирск" rating={5} text="Тюльпаны как из сказки! Яркие, сочные, настоящая весна в доме." image="👩‍🦱" />
                      <Review name="Сергей" city="Екатеринбург" rating={5} text="Заказывал для мамы на 8 марта. Она очень любит тюльпаны." image="👨‍🦰" />
                      <Review name="Марина" city="Краснодар" rating={4} text="Красивые тюльпаны, свежие." image="👩" />
                    </>
                  )}
                  {product.id === 3 && (
                    <>
                      <Review name="Александр" city="Москва" rating={5} text="Шикарный букет! Сочетание цветов идеальное." image="👨" />
                      <Review name="Татьяна" city="Ростов-на-Дону" rating={5} text="Заказываю не первый раз. Всегда свежие цветы." image="👩‍🦳" />
                      <Review name="Ирина" city="Самара" rating={5} text="Очень нежный букет, все цветы как на подбор." image="👩" />
                    </>
                  )}
                  {product.id === 4 && (
                    <>
                      <Review name="Елена" city="Москва" rating={5} text="Как влюбленная пара, мы оценили этот букет на все 100!" image="👩‍❤️‍👨" />
                      <Review name="Максим" city="Нижний Новгород" rating={4} text="Хороший букет, девушке понравился." image="👨" />
                      <Review name="Виктория" city="Воронеж" rating={5} text="Этот букет создан для свиданий!" image="👩‍🦰" />
                    </>
                  )}
                  {product.id === 5 && (
                    <>
                      <Review name="Наталья" city="Ярославль" rating={5} text="Обожаю полевые цветы! Такие милые и душевные." image="👩" />
                      <Review name="Андрей" city="Тула" rating={4} text="Приятный букет, напоминает о лете." image="👨" />
                      <Review name="Светлана" city="Белгород" rating={5} text="Очень трогательный букет." image="👩‍🦱" />
                    </>
                  )}
                  {product.id === 6 && (
                    <>
                      <Review name="Евгения" city="Москва" rating={5} text="Изысканный букет для ценителей красоты." image="👩" />
                      <Review name="Константин" city="Санкт-Петербург" rating={5} text="Заказывал для партнеров по бизнесу." image="👨" />
                      <Review name="Алиса" city="Казань" rating={5} text="Шикарный букет! Все цветы идеальные." image="👩‍🦰" />
                    </>
                  )}
                  {product.id === 7 && (
                    <>
                      <Review name="Екатерина" city="Москва" rating={5} text="Мой свадебный букет! Флористы учли все пожелания." image="👰" />
                      <Review name="Алексей" city="Сочи" rating={5} text="Заказывали букет для невесты. Очень красивая композиция." image="👨" />
                      <Review name="Мария" city="Красноярск" rating={5} text="Идеальный свадебный букет! Нежный, элегантный." image="👩" />
                    </>
                  )}
                  {product.id === 8 && (
                    <>
                      <Review name="Денис" city="Москва" rating={5} text="Девушка сказала, что это лучший подарок!" image="👨" />
                      <Review name="Анастасия" city="Уфа" rating={5} text="Мой молодой человек заказал этот букет. Я в восторге!" image="👩" />
                      <Review name="Павел" city="Пермь" rating={4} text="Хороший букет, жене понравился." image="👨‍🦰" />
                    </>
                  )}
                  {product.id === 9 && (
                    <>
                      <Review name="Ксения" city="Москва" rating={5} text="Фиолетовый - мой любимый цвет. Букет превзошел ожидания!" image="👩" />
                      <Review name="Виктор" city="Омск" rating={5} text="Необычный цвет, очень стильно смотрится." image="👨" />
                      <Review name="Лариса" city="Волгоград" rating={5} text="Нежные фиолетовые оттенки, очень красивая композиция." image="👩‍🦳" />
                    </>
                  )}
                  {product.id === 10 && (
                    <>
                      <Review name="Михаил" city="Москва" rating={5} text="Редкие цветы, очень красивые! Девушка в восторге." image="👨" />
                      <Review name="Тамара" city="Ижевск" rating={5} text="Синие цветы - это что-то невероятное!" image="👩" />
                      <Review name="Роман" city="Тверь" rating={4} text="Интересный букет, все понравилось." image="👨" />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Похожие товары с фото */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-light mb-8 text-center">
              Похожие
              <span className="block font-medium text-rose-400">товары</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {similarProducts.map(item => (
                <Link key={item.id} href={`/product/${item.id}`} className="group">
                  <div className="bg-rose-50 h-48 rounded-xl overflow-hidden mb-4">
                    <ProductImage 
                      src={item.image} 
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-center">{item.name}</h3>
                  <p className="text-center text-rose-400 font-bold mt-2">{item.price} ₽</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}