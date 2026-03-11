'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function ProductImage({ src, alt, width = 300, height = 300, className = '' }: ProductImageProps) {
  const [error, setError] = useState(false)

  // Если изображение не загрузилось или его нет, показываем эмодзи
  if (error || !src || src.includes('undefined')) {
    return (
      <div className={`bg-rose-50 flex items-center justify-center ${className}`}>
        <span className="text-6xl">🌸</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  )
}