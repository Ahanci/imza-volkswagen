'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ArrowRight, Shield, Truck, Award, RotateCcw } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Award size={16} className="text-yellow-400" />
            <span>Türkiye&apos;nin 1 Numaralı VAG Parça Tedarikçisi</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            VAG Grubu İçin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Orijinal Yedek Parça
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Volkswagen, Audi, Seat ve Skoda araçlarınız için orijinal veya eşdeğer kalitede 
            yedek parçalar. Hızlı teslimat, güvenilir hizmet.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-3xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="OEM kodu, parça adı veya araç modeli girin..."
                  className="pl-12 h-14 border-0 focus-visible:ring-2 focus-visible:ring-vag-blue text-base"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-vag-red hover:bg-red-700 text-white px-8 h-14 text-base font-semibold btn-glow"
              >
                Ürün Ara
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-muted-foreground">Popüler:</span>
              {['Fren Balatası', 'Amortisör', 'Yağ Filtresi', 'Debriyaj', 'Far Ampulü'].map((item) => (
                <button
                  key={item}
                  className="text-sm px-3 py-1 bg-vag-light hover:bg-vag-blue hover:text-white rounded-full transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: 'Orijinal Ürün', desc: '%100 Garantili' },
              { icon: Truck, label: 'Hızlı Kargo', desc: 'Aynı gün kargo' },
              { icon: Award, label: 'Uzman Destek', desc: 'Teknik yardım' },
              { icon: RotateCcw, label: 'Kolay İade', desc: '14 gün iade' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{item.label}</p>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
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
