'use client'

import { useState, useEffect } from 'react'

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([])

  const colors = ['Красный', 'Розовый', 'Белый', 'Желтый', 'Фиолетовый', 'Синий']
  const occasions = ['День рождения', 'Свадьба', 'Юбилей', 'Любовь', 'Просто так', 'Свидание']
  
  // Когда меняются фильтры, сообщаем об этом родительскому компоненту
  useEffect(() => {
    onFilterChange({
      priceRange,
      selectedColors,
      selectedOccasions
    })
  }, [priceRange, selectedColors, selectedOccasions])

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions(prev =>
      prev.includes(occasion) ? prev.filter(o => o !== occasion) : [...prev, occasion]
    )
  }

  const resetFilters = () => {
    setPriceRange([0, 10000])
    setSelectedColors([])
    setSelectedOccasions([])
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-medium text-lg mb-4">Фильтры</h3>
      
      {/* Цена */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Цена</h4>
        <div className="space-y-2">
          <input 
            type="range" 
            min="0" 
            max="10000" 
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-rose-400"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0 ₽</span>
            <span>{priceRange[1]} ₽</span>
          </div>
        </div>
      </div>

      {/* Цвет */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Цвет</h4>
        <div className="space-y-2">
          {colors.map(color => (
            <label key={color} className="flex items-center">
              <input 
                type="checkbox" 
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}
                className="rounded border-gray-300 text-rose-400 focus:ring-rose-400"
              />
              <span className="ml-2 text-sm text-gray-600">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Повод */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Повод</h4>
        <div className="space-y-2">
          {occasions.map(occasion => (
            <label key={occasion} className="flex items-center">
              <input 
                type="checkbox" 
                checked={selectedOccasions.includes(occasion)}
                onChange={() => toggleOccasion(occasion)}
                className="rounded border-gray-300 text-rose-400 focus:ring-rose-400"
              />
              <span className="ml-2 text-sm text-gray-600">{occasion}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Активные фильтры */}
      {(selectedColors.length > 0 || selectedOccasions.length > 0 || priceRange[1] < 10000) && (
        <div className="mb-4 p-3 bg-rose-50 rounded-lg">
          <p className="text-sm font-medium text-rose-400 mb-2">Активные фильтры:</p>
          <div className="space-y-1">
            {priceRange[1] < 10000 && (
              <p className="text-xs text-gray-600">Цена до {priceRange[1]} ₽</p>
            )}
            {selectedColors.map(color => (
              <p key={color} className="text-xs text-gray-600">Цвет: {color}</p>
            ))}
            {selectedOccasions.map(occasion => (
              <p key={occasion} className="text-xs text-gray-600">Повод: {occasion}</p>
            ))}
          </div>
        </div>
      )}

      {/* Кнопка сброса */}
      <button 
        onClick={resetFilters}
        className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Сбросить все фильтры
      </button>
    </div>
  )
}