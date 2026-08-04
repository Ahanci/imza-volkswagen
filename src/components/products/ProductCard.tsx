'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Package, Car, CheckCircle2 } from 'lucide-react'
import type { Product } from '@/lib/products-data'

interface ProductCardProps {
  product: Product
}

// Marka renkleri (gerçek marka hex'leri)
const BRAND_COLORS: Record<string, string> = {
  volkswagen: '#001E50',
  audi: '#BB0A30',
  seat: '#F0CD00',
  skoda: '#4FBA2F',
  cupra: '#E5801B',
  porsche: '#B12B28',
}

function brandColor(slug: string): string {
  return BRAND_COLORS[slug] || '#1E3A5F'
}

/** Marka rengini rgba'ye çevir (opaklık ile). */
function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function ProductCard({ product }: ProductCardProps) {
  const color = brandColor(product.brandSlug)
  const firstOem = product.oemNumbers?.[0]

  return (
    <Link href={`/urunler/${product.slug}`} className="block h-full">
      <Card className="group card-hover cursor-pointer border border-border hover:border-vag-blue/40 h-full overflow-hidden flex flex-col shadow-sm hover:shadow-xl">
        {/* Marka renkli görsel alanı */}
        <div
          className="relative p-8 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${withAlpha(color, 0.10)} 0%, ${withAlpha(color, 0.03)} 100%)`,
          }}
        >
          {/* Dekoratif daire */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-125"
            style={{ backgroundColor: color }}
          />

          {/* İkon */}
          <div className="relative w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Package size={36} style={{ color }} />
          </div>

          {/* Marka rozeti */}
          <Badge
            className="absolute top-3 left-3 text-white font-semibold shadow-sm border-0"
            style={{ backgroundColor: color }}
          >
            {product.brand}
          </Badge>

          {/* Sağ üst: kategori + stok */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
            {product.category && (
              <Badge variant="secondary" className="shadow-sm">
                {product.category}
              </Badge>
            )}
            <Badge className="bg-green-50 text-green-700 border border-green-200 shadow-sm">
              <CheckCircle2 size={11} className="mr-1" /> Stokta
            </Badge>
          </div>
        </div>

        {/* İçerik */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Başlık */}
          <h3 className="font-bold text-base text-vag-navy mb-1.5 group-hover:text-vag-blue transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Açıklama */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* OEM numarası (teknik kimlik) */}
          {firstOem && (
            <div className="mb-3">
              <code className="inline-block text-xs px-2 py-1 bg-vag-light rounded-md font-mono text-vag-navy border border-border">
                OE: {firstOem}
              </code>
            </div>
          )}

          {/* Uyumlu modeller */}
          {product.compatibleModels.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 min-h-[1.25rem]">
              <Car size={13} className="text-vag-blue flex-shrink-0" />
              <span className="truncate">
                {product.compatibleModels.slice(0, 3).join(', ')}
                {product.compatibleModels.length > 3
                  ? ` +${product.compatibleModels.length - 3}`
                  : ''}
              </span>
            </div>
          )}

          {/* Footer — marka renkli vurgu çizgisi */}
          <div
            className="mt-auto pt-3 border-t flex items-center justify-between"
            style={{ borderColor: withAlpha(color, 0.15) }}
          >
            <span className="text-sm font-semibold text-vag-navy">Detayları Gör</span>
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-white transition-transform group-hover:translate-x-1"
              style={{ backgroundColor: color }}
            >
              <ChevronRight size={16} />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ProductCard
