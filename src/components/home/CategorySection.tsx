'use client'

import React from 'react'
import Link from 'next/link'
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

const services = [
  {
    title: 'Motor Parçaları',
    slug: 'motor',
    icon: Cog,
    description: 'Piston, segman, silindir kapağı, contalar, keçeler ve tüm motor komponentleri',
    features: ['Piston & Segman', 'Silindir Kapağı', 'Contalar & Keçeler', 'Mavi & Rulmanlar'],
    color: '#1E3A5F',
    gradient: 'from-vag-navy to-blue-800'
  },
  {
    title: 'Fren Sistemi',
    slug: 'fren',
    icon: Disc,
    description: 'Balata, disk, kaliper, balata sensörü ve fren sistemi yedek parçaları',
    features: ['Fren Balatası', 'Fren Diski', 'Kaliper', 'Fren Hortumu'],
    color: '#DC2626',
    gradient: 'from-red-600 to-red-700'
  },
  {
    title: 'Süspansiyon Sistemi',
    slug: 'suspansiyon',
    icon: Gauge,
    description: 'Amortisör, rotil, salıncak, rulman ve süspansiyon grup parçaları',
    features: ['Amortisör', 'Rotil', 'Salıncak Kol', 'Rulman'],
    color: '#2563EB',
    gradient: 'from-vag-blue to-blue-600'
  },
  {
    title: 'Elektrik Sistemi',
    slug: 'elektrik',
    icon: Zap,
    description: 'Alternatör, marş motoru, sensörler, ampul ve elektrik aksamları',
    features: ['Alternatör', 'Marş Motoru', 'Sensörler', 'Far Ampulleri'],
    color: '#D97706',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Filtre & Bakım Setleri',
    slug: 'filtre',
    icon: Filter,
    description: 'Hava, yağ, polen filtresi ve periyodik bakım setleri',
    features: ['Hava Filtresi', 'Yağ Filtresi', 'Polen Filtresi', 'Bakım Setleri'],
    color: '#16A34A',
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    title: 'Şanzıman Parçaları',
    slug: 'sanziman',
    icon: Cog,
    description: 'Debriyaj, bilya, senkron, volant ve şanzıman grubu parçaları',
    features: ['Debriyaj Diski', 'Bilya Seti', 'Senkron Mekanizma', 'Volant'],
    color: '#7C3AED',
    gradient: 'from-violet-600 to-purple-700'
  },
  {
    title: 'Egzoz & Emisyon Sistemi',
    slug: 'egzoz',
    icon: Wind,
    description: 'Egzoz borusu, katalizör, lambda sensörü ve emisyon parçaları',
    features: ['Egzoz Borusu', 'Katalizör', 'Lambda Sensör', 'Egzoz Manifoldu'],
    color: '#64748B',
    gradient: 'from-slate-500 to-slate-600'
  },
  {
    title: 'Akü & Şarj Sistemi',
    slug: 'aku',
    icon: Battery,
    description: 'Akü, şarj dinamosu, regülatör ve elektrik deposu parçaları',
    features: ['Orijinal Akü', 'Şarj Dinamosu', 'Regülatör', 'Kablo Grubu'],
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
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-vag-navy">
              Yedek Parça Hizmetlerimiz
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              VAG grubu araçlarınız için sunduğumuz geniş hizmet yelpazesi
            </p>
          </div>
          <Link href="/hizmetlerimiz">
            <button className="flex items-center gap-2 text-vag-blue hover:text-vag-navy font-semibold transition-colors">
              Tüm Hizmetler
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link key={service.slug} href={`/hizmetlerimiz/${service.slug}`}>
              <Card className="group card-hover cursor-pointer border-0 shadow-sm overflow-hidden h-full">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div 
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <service.icon size={28} className="text-white" />
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="font-bold text-lg text-vag-navy group-hover:text-vag-blue transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-vag-blue rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-medium px-2.5 py-1 bg-vag-light rounded-full text-vag-navy">
                      Detaylı Bilgi
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
