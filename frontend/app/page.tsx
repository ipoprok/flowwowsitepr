import Hero from '@/components/sections/Hero'
import Categories from '@/components/sections/Categories'
import Bestsellers from '@/components/sections/Bestsellers'
import FlowerZodiac from '@/components/sections/FlowerZodiac'
import Subscription from '@/components/sections/Subscription'
import Blog from '@/components/sections/Blog'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Bestsellers />
      <FlowerZodiac />
      <Subscription />
      <Blog />
    </>
  )
}