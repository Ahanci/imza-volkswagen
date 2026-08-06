import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/products/ProductCard'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { getProductBySlug, getProductsByBrand } from '@/lib/sanity/queries'
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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imzayedekparca.com";

export const dynamic = 'force-dynamic'

// Her ürün için benzersiz SEO meta verisi.
// Bu olmadan tüm ürün sayfaları anasayfaya canonical edip Google'da
// liste sayfasına yönlendiriliyordu.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
      robots: { index: false, follow: false },
    }
  }

  const title = `${product.name} | ${product.brand} ${product.category} Yedek Parça`
  const description =
    (product.description?.slice(0, 155)) ||
    `${product.brand} ${product.name} — orijinal ve yan sanayi yedek parça. Ankara İvedik stoklu, Türkiye geneli kargo.`
  const url = `${SITE_URL}/urunler/${product.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'İmza Volkswagen',
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

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

  // Aynı markanın diğer ürünleri
  const relatedProducts = (await getProductsByBrand(product.brandSlug))
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  // Product schema (JSON-LD) — Google zengin sonuçları için
  const productUrl = `${SITE_URL}/urunler/${product.slug}`
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `${product.brand} ${product.category} yedek parça`,
    category: product.category,
    brand: { '@type': 'Brand', name: product.brand },
    url: productUrl,
    sku: product.oemNumbers?.[0] || product.id,
    mpn: product.oemNumbers?.[0],
    ...(product.image ? { image: product.image } : {}),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
      url: productUrl,
      seller: { '@type': 'Organization', name: 'İmza Volkswagen' },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
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
                  {product.image ? (
                    <div className="relative aspect-[4/3] bg-vag-light overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative p-8 md:p-16 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${getBrandColor(product.brandSlug)}14 0%, ${getBrandColor(product.brandSlug)}05 100%)`,
                      }}
                    >
                      {/* Dekoratif daireler */}
                      <div
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10"
                        style={{ backgroundColor: getBrandColor(product.brandSlug) }}
                      />
                      <div
                        className="absolute -bottom-20 -left-12 w-48 h-48 rounded-full opacity-5"
                        style={{ backgroundColor: getBrandColor(product.brandSlug) }}
                      />
                      {/* İkon */}
                      <div className="relative w-44 h-44 rounded-3xl bg-white shadow-xl flex items-center justify-center">
                        <Package style={{ color: getBrandColor(product.brandSlug) }} size={84} />
                      </div>
                    </div>
                  )}

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
                      <a href={`https://wa.me/905439792013?text=Merhaba, bu ürün hakkında bilgi almak istiyorum: %0A%0A${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 gap-2">
                          <MessageCircle size={20} />
                          WhatsApp ile Sor
                        </Button>
                      </a>
                      <a href="tel:+905439792013">
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
                    {product.oemNumbers && product.oemNumbers.length > 0 && (
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
                        href={`https://wa.me/905439792013?text=Merhaba, ${product.name} için fiyat bilgisi almak istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          <MessageCircle size={18} />
                          WhatsApp ile Yazın
                        </button>
                      </a>
                      <a href="tel:+905439792013" className="block w-full">
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
