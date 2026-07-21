'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Package, Car } from 'lucide-react'
import type { Product } from '@/lib/products-data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/urunler/${product.slug}`}>
      <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden flex flex-col">
        {/* Product Image Placeholder */}
        <div className="relative bg-gradient-to-br from-vag-light to-gray-100 p-8 flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Package className="text-vag-blue" size={40} />
          </div>
          
          {/* Brand Badge */}
          <Badge 
            className="absolute top-3 left-3 text-white font-semibold"
            style={{ backgroundColor: getBrandColor(product.brandSlug) }}
          >
            {product.brand}
          </Badge>
          
          {/* Category Badge */}
          <Badge variant="secondary" className="absolute top-3 right-3">
            {product.category}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className="p-5 flex-1 flex flex-col">
          {/* Product Name */}
          <h3 className="font-bold text-lg text-vag-navy mb-2 group-hover:text-vag-blue transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
          
          {/* Features Preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-vag-light rounded-md text-vag-navy"
              >
                {feature.length > 25 ? feature.substring(0, 22) + '...' : feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs px-2 py-1 bg-vag-blue text-white rounded-md font-medium">
                +{product.features.length - 3}
              </span>
            )}
          </div>
          
          {/* Compatible Models */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Car size={14} />
            <span className="truncate">
              {product.compatibleModels.slice(0, 3).join(', ')}
              {product.compatibleModels.length > 3 ? ` +${product.compatibleModels.length - 3}` : ''}
            </span>
          </div>
          
          {/* Footer */}
          <div className="pt-4 border-t flex items-center justify-between">
            <span className="text-sm font-semibold text-vag-navy">Detayları Gör</span>
            <ChevronRight size={16} className="text-vag-blue group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
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

export default ProductCard
