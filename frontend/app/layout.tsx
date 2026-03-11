import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { Providers } from '@/store/provider'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'FlowWow - Цветочный магазин',
  description: 'Свежие цветы с доставкой по городу',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}