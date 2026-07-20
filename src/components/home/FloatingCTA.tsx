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
          className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-5 pr-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle size={24} className="group-hover:animate-pulse" />
          <span className="font-semibold text-sm max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+905321234567"
          className="group flex items-center gap-3 bg-vag-navy hover:bg-vag-blue text-white pl-5 pr-6 py-4 rounded-full shadow-2xl hover:shadow-vag-blue/30 transition-all duration-300 hover:scale-105"
        >
          <Phone size={24} className="group-hover:animate-pulse" />
          <span className="font-semibold text-sm max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
            Hemen Ara
          </span>
        </a>
      </div>

      {/* Bottom Contact Banner (dismissible) */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-vag-navy text-white py-3 px-4 shadow-2xl md:hidden">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-vag-blue" />
              <span className="font-medium text-sm">+90 532 123 45 67</span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="tel:+905321234567"
                className="bg-white text-vag-navy px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Ara
              </a>
              <a 
                href="https://wa.me/905321234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <button 
                onClick={() => setShowBanner(false)}
                className="p-1 text-white/60 hover:text-white"
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
