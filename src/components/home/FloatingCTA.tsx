'use client'

import React, { useEffect, useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

/**
 * Her sayfada sabit (sticky) WhatsApp + Hemen Ara butonları.
 * - Sayfa yukarıdayken (HeroSection görünürken) gizli — ana sayfa CTA'ları ile çakışmaz
 * - Sayfa 320px aşağı kayınca görünür — diğer sayfalarda her zaman görünür (orada zaten scroll > 320)
 * - Desktop: tam etiketli pill butonlar (sağ alt)
 * - Mobil: sadece yuvarlak icon butonlar (üst üste binmez)
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // İlk 320px'te (HeroSection başlangıcı) sticky'yi gizle, sonra göster.
    // Bu sayede HeroSection CTA'ları ile çakışmaz.
    const handleScroll = () => {
      setVisible(window.scrollY > 320)
    }
    handleScroll() // initial check (diğer sayfalarda scrollY > 320 olabilir)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed right-3 md:right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {/* WhatsApp — sırayla: en altta */}
      <a
        href="https://wa.me/905439792013?text=Merhaba,%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="group flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105
                   w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3.5 md:min-w-[160px] justify-center"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="hidden md:inline font-bold text-base whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Hemen Ara — en üstte */}
      <a
        href="tel:+905439792013"
        aria-label="Hemen ara"
        className="group flex items-center gap-2.5 bg-vag-blue hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-vag-blue/40 transition-all duration-300 hover:scale-105
                   w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3.5 md:min-w-[160px] justify-center"
      >
        <Phone size={22} className="flex-shrink-0" />
        <span className="hidden md:inline font-bold text-base whitespace-nowrap">
          Hemen Ara
        </span>
      </a>
    </div>
  )
}

export default FloatingCTA
