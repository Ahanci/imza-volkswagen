'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Cog, 
  Disc, 
  Zap, 
  Filter, 
  Gauge, 
  Battery, 
  Wind,
  ArrowRight
} from 'lucide-react'

const categories = [
  {
    name: 'Motor Parçaları',
    slug: 'motor',
    icon: Cog,
    description: 'Piston, segman, silindir kapağı, contalar',
    productCount: 3250,
    color: '#1E3A5F',
    gradient: 'from-vag-navy to-blue-800'
  },
  {
    name: 'Fren Sistemi',
    slug: 'fren',
    icon: Disc,
    description: 'Balata, disk, kaliper, balata sensörü',
    productCount: 2180,
    color: '#DC2626',
    gradient: 'from-red-600 to-red-700'
  },
  {
    name: 'Süspansiyon',
    slug: 'suspansiyon',
    icon: Gauge,
    description: 'Amortisör, rotil, salıncak, rulman',
    productCount: 1890,
    color: '#2563EB',
    gradient: 'from-vag-blue to-blue-600'
  },
  {
    name: 'Elektrik Sistemi',
    slug: 'elektrik',
    icon: Zap,
    description: 'Alternatör, marş motoru, sensörler, ampul',
    productCount: 2650,
    color: '#D97706',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Filtre & Bakım',
    slug: 'filtre',
    icon: Filter,
    description: 'Hava, yağ, polen filtresi, bakım setleri',
    productCount: 1560,
    color: '#16A34A',
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    name: 'Şanzıman',
    slug: 'sanziman',
    icon: Cog,
    description: 'Debriyaj, bilya, senkron, volant',
    productCount: 1240,
    color: '#7C3AED',
    gradient: 'from-violet-600 to-purple-700'
  },
  {
    name: 'Egzoz & Emisyon',
    slug: 'egzoz',
    icon: Wind,
    description: 'Egzoz borusu, katalizör, lambda sensör',
    productCount: 890,
    color: '#64748B',
    gradient: 'from-slate-500 to-slate-600'
  },
  {
    name: 'Akü & Şarj',
    slug: 'aku',
    icon: Battery,
    description: 'Akü, şarj dinamosu, regülatör',
    productCount: 680,
    color: '#0891B2',
    gradient: 'from-cyan-600 to-teal-600'
  }
]

export function CategorySection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
              Kategoriler
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-vag-navy">
              Parça Kategorileri
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Aradığınız parçayı kolayca bulun
            </p>
          </div>
          <Link href="/urunler">
            <Button variant="ghost" className="text-vag-blue hover:text-vag-navy gap-2">
              Tüm Kategoriler
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Link key={category.slug} href={`/urunler/${category.slug}`}>
              <Card className="group card-hover cursor-pointer border-0 shadow-sm overflow-hidden h-full">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${category.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div 
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <category.icon size={28} className="text-white" />
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="font-bold text-lg text-vag-navy group-hover:text-vag-blue transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-1 bg-vag-light rounded-full text-vag-navy">
                      {category.productCount.toLocaleString('tr-TR')}+ Ürün
                    </span>
                    <ArrowRight size={16} className="text-vag-blue opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
