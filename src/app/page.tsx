import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import BrandSection from '@/components/home/BrandSection'
import CategorySection from '@/components/home/CategorySection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TrustSection from '@/components/home/TrustSection'
import BlogSection from '@/components/home/BlogSection'
import { FloatingCTA } from '@/components/home/FloatingCTA'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Porsche Image */}
        <HeroSection />

        {/* VAG Brands Section */}
        <BrandSection />

        {/* Services / Categories Section */}
        <CategorySection />

        {/* How It Works — Kullanım Rehberi */}
        <HowItWorksSection />

        {/* Why Us / Trust Section */}
        <TrustSection />

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Buttons (Sticky) */}
      <FloatingCTA />
    </div>
  )
}
