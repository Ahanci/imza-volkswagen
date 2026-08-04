'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Shield, Truck, Award, Clock, MapPin } from 'lucide-react'
import { TypewriterEffect } from '@/components/acernity/typewriter-effect'

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-vag-navy">
      {/* Dekoratif arka plan (temiz navy gradyan — uyumsuz görsel arka planı yok) */}
      <div className="absolute inset-0 bg-gradient-to-br from-vag-navy via-vag-navy to-vag-blue/40" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-vag-blue/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-yellow-400/10 rounded-full blur-3xl" />

      {/* İçerik */}
      <div className="relative container mx-auto px-4 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sol: Metin */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/20">
              <Award size={14} className="text-yellow-400 md:w-4 md:h-4" />
              <span>20+ Yıllık Tecrübe • VAG Uzmanı</span>
            </div>

            {/* Company Name */}
            <p className="text-vag-blue font-semibold text-sm md:text-lg mb-2 tracking-wide uppercase">
              İMZA VOLKSWAGEN
            </p>

            {/* Main Title */}
            <TypewriterEffect
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
              words={[
                { text: "VAG" },
                {
                  text: "Grubu",
                  className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400",
                },
                { text: "Yedek" },
                { text: "Parça" },
              ]}
              cursorClassName="bg-white"
            />

            {/* Subtitle */}
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              <span className="font-semibold text-yellow-300">Ankara İvedik</span>'te orijinal + yan sanayi VAG yedek parça.
              20 yılı aşkın tecrübe, <span className="font-semibold text-white">Türkiye geneli kargo</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <a
                href="https://wa.me/905439792013?text=Merhaba,%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-semibold btn-glow gap-2 w-full"
                >
                  <MessageCircle size={20} className="md:w-[22px] md:h-[22px]" />
                  WhatsApp ile Yazın
                </Button>
              </a>
              <a href="tel:+905439792013" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-vag-blue hover:bg-blue-700 text-white px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-bold gap-2 w-full shadow-lg shadow-vag-blue/30"
                >
                  <Phone size={18} className="md:w-5 md:h-5" />
                  Hemen Arayın
                </Button>
              </a>
            </div>

            {/* Trust Badges — sadece desktop'ta */}
            <div className="hidden md:grid grid-cols-2 gap-3 max-w-xl">
              {[
                { icon: Shield, label: 'Orijinal + Yan Sanayi', desc: 'İkisi de stokta' },
                { icon: Truck, label: 'Türkiye Geneli Kargo', desc: 'Aynı gün sevkiyat' },
                { icon: Award, label: '20+ Yıl Tecrübe', desc: 'VAG Grubu uzmanı' },
                { icon: Clock, label: 'İvedik Stok', desc: 'Hızlı erişim' },
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

          {/* Sağ: Araç görseli — çerçeveli, net görünür */}
          <div className="relative">
            {/* Arka parıltı */}
            <div className="absolute -inset-4 bg-vag-blue/30 rounded-[2.5rem] blur-3xl" />
            {/* Görsel çerçevesi */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
              <Image
                src="/images/hero-car.jpg"
                alt="VAG Grubu yedek parça - Volkswagen Audi Seat Skoda Cupra Porsche"
                width={1344}
                height={768}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto object-cover"
              />
              {/* İnce üst gradyan (okunabilir rozet için) */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
              {/* Yüzen rozet */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/25">
                <MapPin size={12} className="text-yellow-300" />
                Ankara İvedik — Türkiye geneli teslimat
              </div>
            </div>

            {/* Köşe VW rozeti */}
            <div className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white rounded-2xl p-4 shadow-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">VW</span>
              </div>
              <div>
                <p className="text-vag-navy font-bold text-sm leading-tight">VAG Grubu Uzmanı</p>
                <p className="text-muted-foreground text-xs">Orijinal + Yan Sanayi</p>
              </div>
            </div>
          </div>
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
