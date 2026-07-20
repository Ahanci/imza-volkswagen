'use client'

import React from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'

export function FloatingCTA() {
  const [showBanner, setShowBanner] = React.useState(true)

  return (
    <>
      {/* Sticky WhatsApp & Call Buttons - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905321234567?text=Merhaba,%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 min-w-[160px]"
        >
          <MessageCircle size={22} className="flex-shrink-0" />
          <span className="font-bold text-base whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Call Button - MAVİ */}
        <a
          href="tel:+905321234567"
          className="group flex items-center gap-2.5 bg-vag-blue hover:bg-blue-700 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-vag-blue/40 transition-all duration-300 hover:scale-105 min-w-[160px]"
        >
          <Phone size={22} className="flex-shrink-0" />
          <span className="font-bold text-base whitespace-nowrap">
            Hemen Ara
          </span>
        </a>
      </div>

      {/* Bottom Contact Banner (dismissible) - Mobile Only */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-3 px-4 shadow-2xl md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-vag-blue rounded-full flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-vag-navy text-sm">Hemen Ara</p>
                <p className="text-xs text-muted-foreground">+90 532 123 45 67</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="tel:+905321234567"
                className="bg-vag-blue text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                Ara
              </a>
              <a 
                href="https://wa.me/905321234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle size={14} />
                WA
              </a>
              <button 
                onClick={() => setShowBanner(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCTA
