'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/products/ProductCard'
import { getBrandBySlug, getAllBrands, brands as allBrands } from '@/lib/brands-data'
import { getProductsByBrand } from '@/lib/products-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import {
  ArrowLeft,
  Car,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronRight,
  Package,
  History,
  Star,
  Wrench,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function BrandPage() {
  const params = useParams()
  const slug = params.slug as string
  const brand = getBrandBySlug(slug)
  
  if (!brand) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Car size={64} className="mx-auto text-muted-foreground/30 mb-4" />
            <h1 className="text-2xl font-bold text-vag-navy mb-2">Marka Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız marka mevcut değil.</p>
            <Link href="/markalar">
              <Button>Markalara Dön</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    )
  }

  const brandProducts = getProductsByBrand(slug)
  const otherBrands = allBrands.filter(b => b.slug !== slug)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Hero Section with Brand Color */}
        <section 
          className="py-12 md:py-16 text-white relative overflow-hidden"
          style={{ backgroundColor: brand.bgColor }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <ChevronRight size={14} />
                <Link href="/markalar" className="hover:text-white transition-colors">Markalar</Link>
                <ChevronRight size={14} />
                <span className="text-white">{brand.name}</span>
              </nav>

              {/* Brand Logo & Name */}
              <div className="flex items-center gap-6 mb-6">
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
                >
                  {brand.logo}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{brand.name}</h1>
                  <p className="text-lg text-white/80">VAG Grubu Markası</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                {brand.longDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                  <CheckCircle2 size={18} />
                  <span className="font-semibold text-sm">Orijinal + Yan Sanayi</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                  <Star size={18} />
                  <span className="font-semibold text-sm">Şaşmaz Stoklu</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                  <Car size={18} />
                  <span className="font-semibold text-sm">Tüm {brand.name} Modelleri</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                  <Award size={18} />
                  <span className="font-semibold text-sm">20+ Yıl VAG Uzmanı</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content - Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Periyodik Bakım Paketleri — PARÇA SATIŞ ÖNE ÇIKAR */}
                <Card className="border-2 border-vag-blue/20 shadow-md">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-vag-blue flex items-center justify-center">
                        <Wrench size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-vag-navy">
                          {brand.name} Periyodik Bakım Paketleri
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Ankara Şaşmaz stoklu — parçaları bizde, WhatsApp'tan teklif al
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {brand.periyodikPaketleri.map((paket) => (
                        <div
                          key={paket.id}
                          className="border-2 border-gray-100 hover:border-vag-blue/40 rounded-xl p-4 transition-colors bg-white"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-vag-navy">{paket.ad}</h3>
                            <Badge variant="secondary" className="text-xs">{paket.etiket}</Badge>
                          </div>
                          <p className="text-xs text-vag-blue font-semibold mb-3">{paket.km} • {paket.tahminiSure}</p>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {paket.aciklama}
                          </p>
                          <ul className="space-y-1.5 mb-4 text-xs">
                            {paket.parcalar.slice(0, 5).map((parca, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-muted-foreground">
                                <CheckCircle2 size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span><span className="font-medium text-vag-navy">{parca.ad}</span> — {parca.marka}</span>
                              </li>
                            ))}
                            {paket.parcalar.length > 5 && (
                              <li className="text-xs text-muted-foreground pl-4">
                                +{paket.parcalar.length - 5} parça daha
                              </li>
                            )}
                          </ul>
                          <div className="flex gap-2">
                            <a
                              href={`https://wa.me/905321234567?text=Merhaba, ${encodeURIComponent(brand.name + ' ' + paket.ad)} paketi hakkında teklif almak istiyorum.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <button className="w-full inline-flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                                <MessageCircle size={14} />
                                WhatsApp Teklif
                              </button>
                            </a>
                            <a href="tel:+905321234567" className="flex-1">
                              <button className="w-full inline-flex items-center justify-center gap-1.5 bg-vag-blue hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                                <Phone size={14} />
                                Hemen Ara
                              </button>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-vag-light rounded-lg text-sm text-muted-foreground">
                      💡 <strong>İpucu:</strong> Her paketin içeriği aracınızın motor tipi ve kilometresine göre özelleştirilir. WhatsApp'tan VIN numaranızı gönderin, doğru paketi kuralım.
                    </div>
                  </CardContent>
                </Card>

                {/* Models Section */}
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-vag-navy mb-2 flex items-center gap-3">
                      <Car size={24} className="text-vag-blue" />
                      {brand.name} Modelleri
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Tüm {brand.name} modelleri için yedek parça tedariği yapıyoruz. Aşağıda başlıca modeller, listelenmemiş tüm jenerasyonlar için de stoklarımız mevcuttur.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {brand.models.map((model) => (
                        <div
                          key={model}
                          className="flex items-center gap-2 p-3 bg-vag-light rounded-lg hover:bg-vag-blue hover:text-white transition-colors"
                        >
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-vag-navy truncate">{model}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Products Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-vag-navy flex items-center gap-3">
                      <Package size={24} className="text-vag-blue" />
                      {brand.name} Ürünleri
                    </h2>
                    <Link href="/urunler">
                      <Button variant="outline">Tüm Ürünleri Gör</Button>
                    </Link>
                  </div>

                  {brandProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {brandProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Package size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                        <h3 className="text-lg font-bold text-vag-navy mb-2">Yakında Eklenecek</h3>
                        <p className="text-muted-foreground mb-4">
                          Bu marka için ürünler yakında eklenecektir.
                        </p>
                        <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-green-500 hover:bg-green-600">
                            İletişime Geç
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Sidebar - Right Column */}
              <div className="space-y-6">
                {/* Advantages Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-vag-navy mb-4 flex items-center gap-2">
                      <Star size={20} className="text-yellow-500" />
                      Neden {brand.name}?
                    </h3>
                    <ul className="space-y-3">
                      {brand.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* History Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-vag-navy mb-4 flex items-center gap-2">
                      <History size={20} className="text-vag-blue" />
                      Marka Tarihi
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {brand.history}
                    </p>
                  </CardContent>
                </Card>

                {/* Contact CTA Card */}
                <Card className="overflow-hidden">
                  <div 
                    className="p-6 text-white"
                    style={{ backgroundColor: brand.bgColor }}
                  >
                    <h3 className="font-bold text-lg mb-2">{brand.name} Parçası mı Arıyorsunuz?</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Stok ve fiyat bilgisi için hemen bizimle iletişime geçin.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href={`https://wa.me/905321234567?text=Merhaba, ${brand.name} parçası hakkında bilgi almak istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                          <MessageCircle size={18} />
                          WhatsApp ile Yazın
                        </button>
                      </a>
                      <a href="tel:+905321234567" className="block">
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                          <Phone size={18} />
                          Hemen Ara
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Other Brands */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-vag-navy mb-4">Diğer Markalar</h3>
                    <div className="space-y-2">
                      {otherBrands.map(b => (
                        <Link 
                          key={b.slug} 
                          href={`/markalar/${b.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-vag-light transition-colors group"
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: b.bgColor }}
                          >
                            {b.logo}
                          </div>
                          <span className="font-medium text-vag-navy group-hover:text-vag-blue transition-colors">
                            {b.name}
                          </span>
                          <ChevronRight size={16} className="ml-auto text-muted-foreground group-hover:text-vag-blue transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
