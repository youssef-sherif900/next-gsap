"use client"
import Link from "next/link"
import { ShoppingCart, Search, Menu, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSection from "./components/hero-section"
import FeaturedProducts from "./components/featured-products"
import CategorySection from "./components/category-section"
import NewsletterSection from "./components/newsletter-section"
import Footer from "./components/footer"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from "react"

export default function Home() {


  
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="w-full border-b pt-8 bg-white text-black relative">

      <div className="lines w-full">
       <div className=" absolute h-[1px] w-[40%] left-[16px] bg-black left-line"></div>
       <div className=" absolute h-[1px] w-[40%] right-[16px] bg-black right-line"></div>
       <div className="logo-line absolute h-[1px] w-[10%]  bottom-[8px] bg-black"></div>
      </div>

        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center">
              <div className="p-2 font-bold text-xl rounded-xl logo px-6 text-black">LOGO</div>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">
                Shop
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">
                Categories
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">
                New Arrivals
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">
                Sale
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2 md:gap-4  mr-2">
            <Button variant="ghost" size="icon" className="text-black hover:text-amber-400">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-amber-400 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-amber-400 text-[10px] font-medium text-black flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
    </ReactLenis>
  )
}

