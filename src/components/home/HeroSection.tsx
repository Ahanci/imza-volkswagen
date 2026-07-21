'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle, Shield, Truck, Award, Clock } from 'lucide-react'
import { TypewriterEffect } from '@/components/acernity/typewriter-effect'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-car.png"
          alt="Lüks Porsche - İmza Volkswagen VAG Grubu Yedek Parça"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-vag-navy/95 via-vag-navy/80 to-vag-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Award size={16} className="text-yellow-400" />
            <span>20+ Yıllık Tecrübe • VAG Grubu Uzmanı</span>
          </div>

          {/* Company Name */}
          <p className="text-vag-blue font-semibold text-lg mb-2 tracking-wide uppercase">
            İMZA VOLKSWAGEN
          </p>

          {/* Main Title (Acernity-style typewriter reveal) */}
          <TypewriterEffect
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            words={[
              { text: "VAG" },
              { text: "Grubu" },
              { text: "İçin" },
              {
                text: "Premium",
                className:
                  "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400",
              },
              { text: "Kalitede" },
              { text: "Yedek" },
              { text: "Parça" },
              { text: "Çözümleri" },
            ]}
            cursorClassName="bg-white"
          />

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Volkswagen, Audi, Seat ve Skoda araçlarınız için orijinal ve eşdeğer kalitede 
            yedek parçalarla tanışın. Profesyonel hizmet, güvenilir çözümler.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/905321234567?text=Merhaba,%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 h-14 text-base font-semibold btn-glow gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={22} />
                WhatsApp ile Yazın
              </Button>
            </a>
            <a href="tel:+905321234567">
              <Button 
                size="lg" 
                className="bg-vag-blue hover:bg-blue-700 text-white px-8 h-14 text-base font-bold gap-2 w-full sm:w-auto shadow-lg shadow-vag-blue/30"
              >
                <Phone size={20} />
                Hemen Arayın
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { icon: Shield, label: 'Orijinal Ürün', desc: '%100 Garantili' },
              { icon: Truck, label: 'Hızlı Teslimat', desc: 'Aynı gün kargo' },
              { icon: Award, label: 'Uzman Kadro', desc: 'Teknik destek' },
              { icon: Clock, label: '20+ Yıl', desc: 'Tecrübe' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{item.label}</p>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volkswagen Badge */}
        <div className="hidden lg:block absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-xs">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">VW</span>
            </div>
            <div>
              <p className="text-white font-bold">Volkswagen</p>
              <p className="text-white/70 text-sm">Yetkili Tedarikçi</p>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Volkswagen Türkiye onaylı yedek parça tedarikçisi olarak hizmetinizdeyiz.
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
