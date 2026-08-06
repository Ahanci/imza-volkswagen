import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { ProductsExplorer } from '@/components/products/ProductsExplorer'
import { getAllProducts } from '@/lib/sanity/queries'
import { Package } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function UrunlerPage() {
  const products = await getAllProducts()

  // Marka/kategori filtrelerini Sanity ürünlerinden türet
  const brandMap = new Map<string, { name: string; slug: string; count: number }>()
  const categoryMap = new Map<string, { name: string; slug: string; count: number }>()

  for (const p of products) {
    if (p.brandSlug) {
      const existing = brandMap.get(p.brandSlug)
      if (existing) existing.count++
      else brandMap.set(p.brandSlug, { name: p.brand, slug: p.brandSlug, count: 1 })
    }
    if (p.categorySlug) {
      const existing = categoryMap.get(p.categorySlug)
      if (existing) existing.count++
      else categoryMap.set(p.categorySlug, { name: p.category, slug: p.categorySlug, count: 1 })
    }
  }

  const brands = Array.from(brandMap.values()).sort((a, b) => b.count - a.count)
  const categories = Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-vag-navy to-vag-blue text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Package size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Ürün Kataloğu
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Yedek Parça Ürünleri
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için kaliteli yedek parçalar.
                Aradığınız parçayı bulun veya bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <ProductsExplorer products={products} brands={brands} categories={categories} />

        {/* CTA Section */}
        <section className="bg-vag-navy py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Aradığınız Ürünü Bulamadınız mı?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Binlerce stoklu ürünümüz arasında aradığınız parça var. Bizimle iletişime geçerek
              fiyat ve stok durumu hakkında bilgi alabilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/905439792013" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  WhatsApp ile Sor
                </button>
              </a>
              <a href="tel:+905439792013">
                <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Hemen Ara
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  )
}
