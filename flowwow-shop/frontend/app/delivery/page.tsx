'use client'

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16">
          Доставка и
          <span className="block font-medium text-rose-400">оплата</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Доставка */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-medium mb-6">🚚 Доставка</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Стоимость доставки</h3>
                <p className="text-gray-600">При заказе от 3000 ₽ - бесплатно</p>
                <p className="text-gray-600">При заказе до 3000 ₽ - 300 ₽</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Время доставки</h3>
                <p className="text-gray-600">Ежедневно с 9:00 до 22:00</p>
                <p className="text-gray-600">Доставка в течение 2 часов</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Зоны доставки</h3>
                <p className="text-gray-600">По всему городу и пригороду до 10 км</p>
              </div>
            </div>
          </div>

          {/* Оплата */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-medium mb-6">💳 Оплата</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Наличными</h3>
                <p className="text-gray-600">Оплата курьеру при получении</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Банковской картой</h3>
                <p className="text-gray-600">Онлайн на сайте или курьеру</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Переводом</h3>
                <p className="text-gray-600">На карту Сбер, Тинькофф</p>
              </div>
            </div>
          </div>
        </div>

        {/* Часто задаваемые вопросы */}
        <h2 className="text-2xl font-medium text-center mb-8">Часто задаваемые вопросы</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'Как долго ждать доставку?', a: 'Обычно доставка занимает 1-2 часа. В праздничные дни может быть дольше.' },
            { q: 'Можно ли заказать доставку к определенному времени?', a: 'Да, вы можете указать удобное время в комментарии к заказу.' },
            { q: 'Что делать, если цветы не понравились?', a: 'Мы всегда идем навстречу и можем заменить букет или вернуть деньги.' },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}