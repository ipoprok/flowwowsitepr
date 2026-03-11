'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAppSelector } from '@/store/hooks'
import { usePathname } from 'next/navigation'
import Search from './Search'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const pathname = usePathname()
  const cartTotalQuantity = useAppSelector((state: any) => state.cart.totalQuantity)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Проверяем, залогинен ли пользователь
    const user = localStorage.getItem('user')
    setIsLoggedIn(!!user)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/catalog', label: 'Каталог' },
    { href: '/about', label: 'О нас' },
    { href: '/delivery', label: 'Доставка' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <Link href="/" className="text-2xl font-light">
              Flow<span className="font-medium text-rose-400">Wow</span>
            </Link>

            {/* Десктопная навигация */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-rose-400 ${
                    pathname === link.href ? 'text-rose-400' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Правая часть с иконками и поиском */}
            <div className="flex items-center space-x-4">
              {/* Поиск (десктоп) */}
              <div className="hidden md:block">
                <Search />
              </div>

              {/* Иконки */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <span className="text-xl">❤️</span>
              </button>

              <Link href={isLoggedIn ? "/profile" : "/login"} className="p-2 hover:bg-gray-100 rounded-full transition">
                <span className="text-xl">👤</span>
              </Link>

              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <span className="text-xl">🛒</span>
                {cartTotalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                )}
              </Link>

              {/* Мобильное меню */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
              >
                <span className="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>

          {/* Мобильное меню */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {/* Поиск для мобильных */}
              <div className="px-2">
                <Search />
              </div>
              
              {/* Навигация для мобильных */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition ${
                      pathname === link.href 
                        ? 'bg-rose-50 text-rose-400' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Отступ, чтобы контент не прятался под шапку */}
      <div className="h-20"></div>
    </>
  )
}