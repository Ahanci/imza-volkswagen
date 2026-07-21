'use client'

import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'

/**
 * Her sayfada sabit (sticky) WhatsApp + Hemen Ara butonları.
 * - Desktop: tam etiketli pill butonlar (sağ alt)
 * - Mobil: sadece yuvarlak icon butonlar (üst üste binmez)
 * - Sayfanın altındaki CTA'larla çakışmaz çünkü kendi sabit pozisyonunda
 */
export function FloatingCTA() {
  return (
    <div
      className="fixed right-4 md:right-6 z-50 flex flex-col gap-3"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {/* WhatsApp — sırayla: en altta */}
      <a
        href="https://wa.me/905321234567?text=Merhaba,%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
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
        href="tel:+905321234567"
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
