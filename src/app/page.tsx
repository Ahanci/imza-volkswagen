import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import BrandSection from '@/components/home/BrandSection'
import CategorySection from '@/components/home/CategorySection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrustSection from '@/components/home/TrustSection'
import BlogSection from '@/components/home/BlogSection'
import { ChatBot } from '@/components/home/ChatBot'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Brand Selection */}
        <BrandSection />
        
        {/* Categories */}
        <CategorySection />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Trust Section / Why Us */}
        <TrustSection />
        
        {/* Blog Section */}
        <BlogSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* AI Chat Bot */}
      <ChatBot />
    </div>
  )
}
