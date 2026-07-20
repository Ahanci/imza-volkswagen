'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Heart, 
  Eye, 
  Star, 
  Truck, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

interface Product {
  id: string
  name: string
  oemCode: string
  price: number
  originalPrice?: number
  image: string
  brand: string
  category: string
  inStock: boolean
  rating: number
  reviews: number
  badge?: 'new' | 'sale' | 'bestseller' | 'popular'
}

const products: Product[] = [
  {
    id: '1',
    name: 'Fren Balatası Ön - VW Golf 7 / Audi A3',
    oemCode: '1J0 698 151 D',
    price: 489,
    originalPrice: 620,
    image: '/images/products/brake-pads.jpg',
    brand: 'Volkswagen',
    category: 'Fren Sistemi',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    badge: 'bestseller'
  },
  {
    id: '2',
    name: 'Amortisör Ön - Seat Leon / Skoda Octavia',
    oemCode: '5Q0 413 031 AB',
    price: 1250,
    image: '/images/products/shock-absorber.jpg',
    brand: 'Seat',
    category: 'Süspansiyon',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    badge: 'popular'
  },
  {
    id: '3',
    name: 'Motor Yağı Filtresi - VAG Grup Ortak',
    oemCode: '04E 115 561 B',
    price: 145,
    originalPrice: 180,
    image: '/images/products/oil-filter.jpg',
    brand: 'Audi',
    category: 'Filtre & Bakım',
    inStock: true,
    rating: 4.7,
    reviews: 256,
    badge: 'sale'
  },
  {
    id: '4',
    name: 'Debriyak Seti Komple - VW Passat B8',
    oemCode: '5Q0 141 671 E',
    price: 2450,
    image: '/images/products/clutch-kit.jpg',
    brand: 'Volkswagen',
    category: 'Şanzıman',
    inStock: true,
    rating: 4.9,
    reviews: 45,
    badge: 'new'
  },
  {
    id: '5',
    name: 'Hava Filtresi - Audi Q5 / Skoda Superb',
    oemCode: '8W0 129 620 C',
    price: 189,
    image: '/images/products/air-filter.jpg',
    brand: 'Audi',
    category: 'Filtre & Bakım',
    inStock: true,
    rating: 4.6,
    reviews: 178,
    badge: 'popular'
  },
  {
    id: '6',
    name: 'Fren Diski Arka Ventilli - VW Tiguan',
    oemCode: '5N0 615 601 N',
    price: 780,
    originalPrice: 950,
    image: '/images/products/brake-disc.jpg',
    brand: 'Volkswagen',
    category: 'Fren Sistemi',
    inStock: false,
    rating: 4.8,
    reviews: 92,
    badge: 'sale'
  },
  {
    id: '7',
    name: 'Far Ampulü LED Xenon - Audi A4 B9',
    oemCode: '8K0 941 004 B',
    price: 320,
    image: '/images/products/headlight-bulb.jpg',
    brand: 'Audi',
    category: 'Elektrik Sistemi',
    inStock: true,
    rating: 4.7,
    reviews: 67,
    badge: 'new'
  },
  {
    id: '8',
    name: 'Su Pompası - Skoda Octavia / VW Golf',
    oemCode: '06H 121 026 L',
    price: 650,
    image: '/images/products/water-pump.jpg',
    brand: 'Skoda',
    category: 'Motor Parçaları',
    inStock: true,
    rating: 4.9,
    reviews: 134,
    badge: 'bestseller'
  }
]

const badgeConfig = {
  new: { label: 'Yeni', className: 'bg-blue-500 text-white' },
  sale: { label: 'İndirim', className: 'bg-vag-red text-white' },
  bestseller: { label: 'Çok Satan', className: 'bg-amber-500 text-white' },
  popular: { label: 'Popüler', className: 'bg-green-500 text-white' }
}

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
              En Çok Satanlar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-vag-navy">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Müşterilerimizin en çok tercih ettiği yedek parçalar
            </p>
          </div>
          <Link href="/urunler?sort=popularity">
            <Button variant="outline" size="lg" className="border-vag-blue text-vag-blue hover:bg-vag-blue hover:text-white gap-2">
              Tümünü Gör
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group card-hover cursor-pointer border border-gray-100 overflow-hidden h-full flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-50 p-4 overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 z-10 ${badgeConfig[product.badge].className}`}
                  >
                    {badgeConfig[product.badge].label}
                  </Badge>
                )}

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant="destructive" className="bg-gray-500">
                      Stokta Yok
                    </Badge>
                  </div>
                )}

                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-vag-navy/10 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-vag-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">Ürün Görseli</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white shadow-md">
                    <Eye size={14} className="mr-1" />
                    Hızlı Bakış
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-md px-3">
                    <Heart size={14} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-4 flex-1 flex flex-col">
                {/* Brand & Category */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-vag-blue">{product.brand}</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-vag-navy mb-1 line-clamp-2 group-hover:text-vag-blue transition-colors leading-snug">
                  {product.name}
                </h3>

                {/* OEM Code */}
                <p className="text-xs text-muted-foreground font-mono mb-3">
                  OEM: {product.oemCode}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price & Add to Cart */}
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-end justify-between">
                    <div>
                      {product.originalPrice && (
                        <p className="text-xs text-muted-foreground line-through">
                          ₺{product.originalPrice.toLocaleString('tr-TR')}
                        </p>
                      )}
                      <p className="text-xl font-bold text-vag-navy">
                        ₺{product.price.toLocaleString('tr-TR')}
                        <span className="text-xs font-normal text-muted-foreground ml-1">KDV Dahil</span>
                      </p>
                    </div>
                    <Button 
                      size="sm"
                      disabled={!product.inStock}
                      className={`${product.inStock ? 'bg-vag-red hover:bg-red-700' : ''} text-white`}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>

                  {/* Shipping Info */}
                  {product.inStock && (
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Truck size={12} />
                        Kargo Bedava
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield size={12} />
                        Garantili
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
