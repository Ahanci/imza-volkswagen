'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { services, iconMap } from '@/lib/services-data'

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
            VAG grubu araçlarınız için sunduğumuz geniş hizmet yelpazesi — VW, Audi, Seat, Skoda, Cupra, Porsche
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
          {services.map((service) => {
            const Icon = iconMap[service.iconName]
            return (
              <Link key={service.slug} href={`/hizmetlerimiz/${service.slug}`}>
                <Card className="group card-hover cursor-pointer border-0 shadow-sm overflow-hidden h-full">
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-5 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-vag-navy group-hover:text-vag-blue transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
