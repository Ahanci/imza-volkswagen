'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getAllBrands } from '@/lib/brands-data'
import { getProductsByBrand } from '@/lib/products-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Car, ChevronRight, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function MarkalarPage() {
  const brands = getAllBrands()

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
                <Car size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Markalar
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                VAG Grubu Markaları
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Volkswagen, Audi, Seat, Skoda ve Cupra marka araçlarınız için 
                geniş yedek parça portföyümüzle hizmetinizdeyiz.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => {
                const productCount = getProductsByBrand(brand.slug).length
                return (
                  <Link key={brand.slug} href={`/markalar/${brand.slug}`}>
                    <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden">
                      {/* Brand Header */}
                      <div 
                        className="p-8 pb-6 transition-colors"
                        style={{ backgroundColor: `${brand.bgColor}08` }}
                      >
                        <div className="flex items-center gap-5 mb-5">
                          {/* Logo Circle */}
                          <div 
                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: brand.bgColor }}
                          >
                            {brand.logo}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-vag-navy group-hover:text-vag-blue transition-colors">
                              {brand.name}
                            </h2>
                            <p className="text-sm text-muted-foreground font-medium">
                              VAG Grubu
                            </p>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {brand.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Package size={16} className="text-vag-blue" />
                            <span className="font-semibold text-vag-navy">{productCount}+ Ürün</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Car size={16} className="text-vag-blue" />
                            <span className="font-semibold text-vag-navy">{brand.models.length} Model</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <CardContent className="px-8 py-4 bg-vag-light/50 border-t flex items-center justify-between">
                        <span className="font-medium text-vag-navy">Detaylı Bilgi</span>
                        <ChevronRight size={18} className="text-vag-blue group-hover:translate-x-1 transition-transform" />
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 text-center shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-4">
                Aradığınız Parçayı Bulamadınız mı?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Binlerce stoklu ürünümüz arasında aradığınız parça var. 
                Bizimle iletişime geçerek fiyat ve stok durumu hakkında bilgi alabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                    WhatsApp ile Sor
                  </button>
                </a>
                <Link href="/urunler">
                  <button className="inline-flex items-center gap-2 bg-vag-navy hover:bg-vag-blue text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                    Tüm Ürünleri Gör
                  </button>
                </Link>
              </div>
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
