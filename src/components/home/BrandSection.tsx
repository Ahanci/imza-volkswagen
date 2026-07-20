'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

const brands = [
  {
    name: 'Volkswagen',
    slug: 'volkswagen',
    logo: 'VW',
    color: '#001E50',
    bgColor: '#001E50',
    description: 'Golf, Passat, Polo, Tiguan, Transporter ve tüm VW modelleri için yedek parça',
    models: ['Golf', 'Passat', 'Polo', 'Tiguan', 'T-Roc', 'Transporter', 'Caddy', 'Touran'],
  },
  {
    name: 'Audi',
    slug: 'audi',
    logo: 'AU',
    color: '#BB0A30',
    bgColor: '#BB0A30',
    description: 'A3, A4, A6, Q3, Q5, Q7 ve premium Audi modelleri için yedek parça',
    models: ['A3', 'A4', 'A5', 'A6', 'Q3', 'Q5', 'Q7', 'e-tron'],
  },
  {
    name: 'Seat',
    slug: 'seat',
    logo: 'SE',
    color: '#F0CD00',
    textColor: '#000000',
    bgColor: '#1E1E1E',
    description: 'Leon, Ibiza, Ateca, Toledo ve sportif Seat modelleri için yedek parça',
    models: ['Leon', 'Ibiza', 'Ateca', 'Toledo', 'Arona', 'Cupra'],
  },
  {
    name: 'Skoda',
    slug: 'skoda',
    logo: 'SK',
    color: '#4FBA2F',
    bgColor: '#3F9142',
    description: 'Octavia, Fabia, Superb, Karoq, Kamiq ve tüm Skoda modelleri için yedek parça',
    models: ['Octavia', 'Fabia', 'Superb', 'Karoq', 'Kamiq', 'Enyaq'],
  }
]

export function BrandSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Markalar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
            VAG Grubu Markaları
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Volkswagen, Audi, Seat ve Skoda araçlarınız için geniş yedek parça portföyümüz
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link key={brand.slug} href={`/markalar/${brand.slug}`}>
              <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden">
                {/* Brand Header */}
                <div 
                  className="p-6 pb-4 transition-colors"
                  style={{ backgroundColor: `${brand.bgColor}05` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {/* Logo Circle */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: brand.bgColor }}
                    >
                      {brand.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vag-navy group-hover:text-vag-blue transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        VAG Grubu
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Models Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {brand.models.slice(0, 4).map((model) => (
                      <span 
                        key={model}
                        className="text-xs px-2 py-1 bg-vag-light rounded-md text-vag-navy font-medium"
                      >
                        {model}
                      </span>
                    ))}
                    {brand.models.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-vag-blue/10 text-vag-blue rounded-md font-medium">
                        +{brand.models.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <CardContent className="px-6 py-3 bg-vag-light/50 border-t flex items-center justify-between">
                  <span className="text-sm font-medium text-vag-navy">Detaylı Bilgi</span>
                  <ChevronRight size={16} className="text-vag-blue group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link href="/markalar">
            <button className="inline-flex items-center gap-2 bg-vag-navy hover:bg-vag-blue text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Tüm Markaları Keşfet
              <ChevronRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandSection
