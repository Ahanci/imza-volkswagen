'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/products/ProductCard'
import { getProductBySlug, getProductsByBrand, products } from '@/lib/products-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { 
  ArrowLeft, 
  Package, 
  Car, 
  CheckCircle2, 
  Phone,
  MessageCircle,
  Share2,
  Printer,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Package size={64} className="mx-auto text-muted-foreground/30 mb-4" />
            <h1 className="text-2xl font-bold text-vag-navy mb-2">Ürün Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız ürün mevcut değil veya kaldırılmış.</p>
            <Link href="/urunler">
              <Button>Ürünlere Dön</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    )
  }

  // Get related products (same brand, different product)
  const relatedProducts = products
    .filter(p => p.brandSlug === product.brandSlug && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-vag-blue transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link href="/urunler" className="text-muted-foreground hover:text-vag-blue transition-colors">
                Ürünler
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link 
                href={`/markalar/${product.brandSlug}`} 
                className="text-muted-foreground hover:text-vag-blue transition-colors"
              >
                {product.brand}
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <span className="font-medium text-vag-navy">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Back Button */}
                <Link 
                  href="/urunler"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-vag-blue transition-colors mb-4"
                >
                  <ArrowLeft size={16} />
                  Ürünlere Dön
                </Link>

                {/* Product Header Card */}
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-br from-vag-light to-gray-100 p-8 md:p-12 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-3xl bg-white shadow-xl flex items-center justify-center">
                      <Package className="text-vag-blue" size={80} />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 md:p-8">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge 
                        className="text-white"
                        style={{ backgroundColor: getBrandColor(product.brandSlug) }}
                      >
                        {product.brand}
                      </Badge>
                      <Badge variant="secondary">{product.category}</Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        ✓ Stokta
                      </Badge>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-bold text-vag-navy mb-4">
                      {product.name}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <a href="https://wa.me/9054349792013?text=Merhaba, bu ürün hakkında bilgi almak istiyorum: %0A%0A{encodeURIComponent(product.name)}" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 gap-2">
                          <MessageCircle size={20} />
                          WhatsApp ile Sor
                        </Button>
                      </a>
                      <a href="tel:+9054349792013">
                        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 gap-2">
                          <Phone size={20} />
                          Hemen Ara
                        </Button>
                      </a>
                      <Button size="lg" variant="outline" className="gap-2">
                        <Share2 size={20} />
                        Paylaş
                      </Button>
                      <Button size="lg" variant="outline" className="gap-2">
                        <Printer size={20} />
                        Yazdır
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-bold text-vag-navy mb-4">Özellikler</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Specifications Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-vag-navy mb-4 flex items-center gap-2">
                      <Package size={20} className="text-vag-blue" />
                      Teknik Özellikler
                    </h3>
                    
                    <dl className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-dashed last:border-0">
                          <dt className="text-sm text-muted-foreground font-medium">{key}</dt>
                          <dd className="text-sm font-semibold text-vag-navy">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* OEM Numbers */}
                    {product.oemNumbers && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium text-muted-foreground mb-2">OE Numaraları:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.oemNumbers.map((oem) => (
                            <code key={oem} className="px-2 py-1 bg-vag-light rounded text-xs font-mono">
                              {oem}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Compatible Models Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-vag-navy mb-4 flex items-center gap-2">
                      <Car size={20} className="text-vag-blue" />
                      Uyumlu Araçlar
                    </h3>
                    
                    <div className="space-y-2">
                      {product.compatibleModels.map((model) => (
                        <div 
                          key={model}
                          className="flex items-center gap-3 p-3 bg-vag-light rounded-lg"
                        >
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span className="font-medium text-vag-navy">{model}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA Card */}
                <Card className="bg-gradient-to-br from-vag-navy to-vag-blue text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">Fiyat Bilgisi İçin</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Güncel fiyat ve stok durumu için bizimle iletişime geçin.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href={`https://wa.me/9054349792013?text=Merhaba, ${product.name} için fiyat bilgisi almak istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          <MessageCircle size={18} />
                          WhatsApp ile Yazın
                        </button>
                      </a>
                      <a href="tel:+9054349792013" className="block w-full">
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          <Phone size={18} />
                          +90 543 979 20 13
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-12 pt-12 border-t">
                <h2 className="text-2xl font-bold text-vag-navy mb-6">
                  Diğer {product.brand} Ürünleri
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
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

// Brand color helper
function getBrandColor(slug: string): string {
  const colors: Record<string, string> = {
    volkswagen: '#001E50',
    audi: '#BB0A30',
    seat: '#F0CD00',
    skoda: '#4FBA2F',
    cupra: '#E5801B'
  }
  return colors[slug] || '#001E50'
}
