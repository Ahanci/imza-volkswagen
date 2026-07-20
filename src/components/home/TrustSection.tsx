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
  Star,
  Users,
  Phone,
  MessageCircle
} from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: '%100 Orijinal Ürün',
    description: 'Tüm parçalarımız orijinal veya eşdeğer kalitede, tam garantili',
    color: 'text-vag-blue',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Truck,
    title: 'Hızlı Teslimat',
    description: 'Türkiye geneline hızlı ve güvenli kargo imkanı',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Award,
    title: '20+ Yıl Deneyim',
    description: 'VAG grubu parçalarında uzman kadro ve güvenilir tecrübe',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Headphones,
    title: 'Teknik Destek',
    description: 'Uzman ekibimizle ücretsiz telefon ve online destek',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Clock,
    title: 'Hızlı Servis',
    description: 'Siparişleriniz en kısa sürede hazırlanır ve kargoya verilir',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: CreditCard,
    title: 'Esnek Ödeme',
    description: 'Kredi kartı, havale, kapıda ödeme seçenekleri',
    color: 'text-vag-red',
    bgColor: 'bg-red-50'
  }
]

const stats = [
  { value: '20+', label: 'Yıllık Tecrübe' },
  { value: '50K+', label: 'Mutlu Müşteri' },
  { value: '100K+', label: 'Teslimat' },
  { value: '4.9', label: 'Müşteri Puanı', icon: Star }
]

const testimonials = [
  {
    name: 'Ahmet Y.',
    text: 'Yıllardır tüm araçlarımın parçalarını buradan alıyorum. Kalite ve hizmet mükemmel!',
    car: 'VW Golf 7',
    rating: 5
  },
  {
    name: 'Mehmet K.',
    text: 'Fiyatlar uygun, ürünler orijinal. Kesinlikle tavsiye ederim.',
    car: 'Audi A3',
    rating: 5
  },
  {
    name: 'Can Ö.',
    text: 'Teknik destek harika. Doğru parçayı bulmama çok yardımcı oldular.',
    car: 'Skoda Octavia',
    rating: 5
  }
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
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.icon && <stat.icon size={24} className="text-yellow-400 fill-yellow-400" />}
                </p>
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
            İmza Volkswagen Farkı
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Binlerce müşterimizin güvendiği kalite ve hizmet anlayışımız
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, index) => (
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

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Güvenilir hizmet garantisi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <Users size={32} className="text-vag-blue mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-vag-navy mb-2">Müşteri Yorumları</h3>
            <p className="text-muted-foreground">Binlerce mutlu müşterimizden bazıları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-vag-navy mb-4 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-vag-navy">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.car}</p>
                  </div>
                  <CheckCircle size={18} className="text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-vag-navy to-vag-blue rounded-2xl p-8 md:p-10 text-white">
            <div className="text-left">
              <h3 className="font-bold text-2xl mb-1">Yedek Parça mı Arıyorsunuz?</h3>
              <p className="text-white/80">Uzman ekibimiz sizin için doğru parçayı bulsun</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+905321234567">
                <button className="bg-vag-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg">
                  <Phone size={18} />
                  Hemen Ara
                </button>
              </a>
              <a 
                href="https://wa.me/905321234567?text=Merhaba,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg">
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
