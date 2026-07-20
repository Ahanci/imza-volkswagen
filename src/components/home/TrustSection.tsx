'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Shield, 
  Truck, 
  Award, 
  Headphones, 
  Clock, 
  CreditCard,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: '%100 Orijinal Ürün',
    description: 'Tüm ürünlerimiz orijinal veya eşdeğer kalitede, garantili',
    color: 'text-vag-blue',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Truck,
    title: 'Hızlı & Ücretsiz Kargo',
    description: '150₺ üzeri siparişlerde Türkiye geneli ücretsiz kargo',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Award,
    title: '20+ Yıl Deneyim',
    description: 'VAG grubu parçalarında uzman kadro ve tecrübe',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Headphones,
    title: '7/24 Teknik Destek',
    description: 'Uzman ekibimizle telefon ve online destek',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Clock,
    title: 'Aynı Gün Kargo',
    description: 'Saat 15:00\'e kadar verilen siparişler aynı gün kargoda',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: CreditCard,
    title: 'Güvenli Ödeme',
    description: 'Kredi kartı, havale, kapıda ödeme seçenekleri',
    color: 'text-vag-red',
    bgColor: 'bg-red-50'
  }
]

const stats = [
  { value: '50K+', label: 'Mutlu Müşteri' },
  { value: '40K+', label: 'Ürün Çeşidi' },
  { value: '99%', label: 'Müşteri Memnuniyeti' },
  { value: '24h', label: 'Hızlı Teslimat' }
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-vag-navy to-vag-blue rounded-2xl p-8 md:p-12 mb-12 -mx-4 sm:-mx-6 lg:-mx-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Neden Biz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
            Güvenilir Parça Tedarikçiniz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Binlerce müşterimizin güvendiği kalite ve hizmet anlayışımız
          </p>
        </div>

        {/* Trust Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <Card key={index} className="group card-hover border border-gray-100 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon size={26} className={item.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-vag-navy mb-2 group-hover:text-vag-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checkmarks */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Garantili hizmet</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-vag-light rounded-2xl p-6 md:p-8">
            <div className="text-left">
              <h3 className="font-bold text-xl text-vag-navy mb-1">Hemen Sipariş Verin</h3>
              <p className="text-muted-foreground">Uzman ekibimiz sizin için doğru parçayı bulsun</p>
            </div>
            <button className="bg-vag-red hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold btn-glow whitespace-nowrap flex items-center gap-2">
              Hemen Ara
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
