'use client'

import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Send
} from 'lucide-react'

const footerLinks = {
  hizmetler: {
    title: 'Hizmetlerimiz',
    links: [
      { name: 'Motor Parçaları', href: '/hizmetlerimiz/motor' },
      { name: 'Fren Sistemi', href: '/hizmetlerimiz/fren' },
      { name: 'Süspansiyon', href: '/hizmetlerimiz/suspansiyon' },
      { name: 'Elektrik Sistemi', href: '/hizmetlerizm/elektrik' },
      { name: 'Filtre & Bakım', href: '/hizmetlerimiz/filtre' },
      { name: 'Tüm Hizmetler', href: '/hizmetlerimiz' }
    ]
  },
  markalar: {
    title: 'Markalar',
    links: [
      { name: 'Volkswagen', href: '/markalar/volkswagen' },
      { name: 'Audi', href: '/markalar/audi' },
      { name: 'Seat', href: '/markalar/seat' },
      { name: 'Skoda', href: '/markalar/skoda' }
    ]
  },
  kurumsal: {
    title: 'Kurumsal',
    links: [
      { name: 'Hakkımızda', href: '/kurumsal' },
      { name: 'Blog', href: '/blog' },
      { name: 'İletişim', href: '/iletisim' },
      { name: 'Kariyer', href: '/kariyer' }
    ]
  },
  destek: {
    title: 'Destek',
    links: [
      { name: 'SSS', href: '/sss' },
      { name: 'Teslimat Bilgisi', href: '/teslimat' },
      { name: 'İade Politikası', href: '/iade' },
      { name: 'Gizlilik Politikası', href: '/gizlilik' }
    ]
  }
}

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/imzavolkswagen/',
    label: 'Instagram',
    hoverBg: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/p/%C4%B0mza-Otomotiv-Yedek-Par%C3%A7a-100064134310272/',
    label: 'Facebook',
    hoverBg: 'hover:bg-blue-600',
  },
]

export function Footer() {
  return (
    <footer className="bg-vag-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="İmza Volkswagen Logo"
                width={80}
                height={56}
                className="h-20 w-auto bg-white rounded-lg p-2 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">İMZA VOLKSWAGEN</h2>
                <p className="text-xs text-white/60">VAG Grubu Yedek Parça Uzmanı</p>
              </div>
            </Link>
            
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için orijinal ve eşdeğer kalitede
              yedek parçaları en uygun fiyatlarla sunuyoruz. 20 yılı aşkın tecrübemizle hizmetinizdeyiz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="https://wa.me/905439792013" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <MessageCircle size={16} className="text-green-400 flex-shrink-0" />
                <span className="font-semibold text-lg">WhatsApp: +90 543 979 20 13</span>
              </a>
              <a href="tel:+903123940525" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone size={16} className="text-vag-blue flex-shrink-0" />
                <span>Kurumsal: 0312 394 05 25</span>
              </a>
              <a href="mailto:info@imzavolkswagen.com.tr" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={16} className="text-vag-blue flex-shrink-0" />
                <span>info@imzavolkswagen.com.tr</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="text-vag-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Organize Sanayi Bölgesi,<br />
                  Ankara / Türkiye
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock size={16} className="text-vag-blue flex-shrink-0" />
                <span>Pzt - Cmt: 09:00 - 18:00</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.hoverBg}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.hizmetler.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.hizmetler.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-vag-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.markalar.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.markalar.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-vag-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-white mt-6 mb-4">{footerLinks.kurumsal.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.kurumsal.links.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-vag-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.destek.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.destek.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-vag-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Hızlı İletişim</h3>
            <p className="text-white/70 text-sm mb-4">
              Hemen bize ulaşın, size yardımcı olalım!
            </p>
            
            <a 
              href="https://wa.me/905439792013?text=Merhaba,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold transition-colors mb-3"
            >
              WhatsApp ile Yazın
            </a>
            
            <a 
              href="tel:+905439792013"
              className="block w-full bg-white/10 hover:bg-white/20 text-white text-center py-3 rounded-xl font-semibold transition-colors"
            >
              Hemen Arayın
            </a>

            {/* Payment Methods */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <p className="text-xs text-white/50 mb-2">Ödeme Yöntemleri</p>
              <div className="flex gap-2">
                {['Nakit', 'Kredi Kartı', 'Havale'].map((method) => (
                  <div 
                    key={method}
                    className="px-2 py-1 bg-white/10 rounded text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © 2026 İmza Volkswagen. Tüm hakları saklıdır. | VAG Grubu Yedek Parça Uzmanı
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/gizlilik" className="text-white/50 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim" className="text-white/50 hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/kvkk" className="text-white/50 hover:text-white transition-colors">
                KVKK
              </Link>
            </div>
          </div>

          {/* Geliştirici bilgisi */}
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <a
              href="tel:+905396540461"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Bu site <strong className="text-white/60">Ahanci Studio</strong> tarafından geliştirilmiştir · 0539 654 04 61
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
