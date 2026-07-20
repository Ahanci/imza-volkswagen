'use client'

import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send
} from 'lucide-react'

const footerLinks = {
  ürünler: {
    title: 'Ürün Kategorileri',
    links: [
      { name: 'Motor Parçaları', href: '/urunler/motor' },
      { name: 'Fren Sistemi', href: '/urunler/fren' },
      { name: 'Süspansiyon', href: '/urunler/suspansiyon' },
      { name: 'Elektrik Sistemi', href: '/urunler/elektrik' },
      { name: 'Filtre & Bakım', href: '/urunler/filtre' },
      { name: 'Tüm Ürünler', href: '/urunler' }
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
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Blog', href: '/blog' },
      { name: 'İletişim', href: '/iletisim' },
      { name: 'Kariyer', href: '/kariyer' },
      { name: 'Bayilik', href: '/bayilik' }
    ]
  },
  destek: {
    title: 'Müşteri Hizmetleri',
    links: [
      { name: 'Sıkça Sorulan Sorular', href: '/sss' },
      { name: 'Sipariş Takibi', href: '/takip' },
      { name: 'Teslimat & Kargo', href: '/teslimat' },
      { name: 'İade & Değişim', href: '/iade' },
      { name: 'Garanti Koşulları', href: '/garanti' }
    ]
  }
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter/X' }
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
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Car className="text-vag-navy" size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">VAG PARÇA</h2>
                <p className="text-xs text-white/60">Orijinal Yedek Parça</p>
              </div>
            </Link>
            
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Volkswagen, Audi, Seat ve Skoda araçlarınız için orijinal ve eşdeğer kalitede 
              yedek parçaları en uygun fiyatlarla sunuyoruz. 20 yılı aşkın tecrübemizle hizmetinizdeyiz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+908501234567" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone size={16} className="text-vag-blue flex-shrink-0" />
                <span>0850 123 45 67</span>
              </a>
              <a href="mailto:info@vagparca.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={16} className="text-vag-blue flex-shrink-0" />
                <span>info@vagparca.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="text-vag-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Organize Sanayi Bölgesi,<br />
                  İstanbul / Türkiye
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock size={16} className="text-vag-blue flex-shrink-0" />
                <span>Pzt - Cmt: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.ürünler.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.ürünler.links.map((link) => (
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
              {footerLinks.kurumsal.links.slice(0, 4).map((link) => (
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

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">E-Bülten</h3>
            <p className="text-white/70 text-sm mb-4">
              İndirimlerden ve yeni ürünlerden haberdar olun.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11 pr-11"
                />
                <Button 
                  size="icon" 
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-vag-blue hover:text-vag-blue hover:bg-white/20 h-9 w-9"
                >
                  <Send size={16} />
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-white/60 mb-3">Bizi Takip Edin</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 hover:bg-vag-blue rounded-lg flex items-center justify-center transition-colors"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-4">
                <p className="text-xs text-white/50 mb-2">Ödeme Yöntemleri</p>
                <div className="flex gap-2">
                  {['Visa', 'MC', 'Troy'].map((method) => (
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
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} VAG Parça. Tüm hakları saklıdır.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/gizlilik" className="text-white/50 hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim" className="text-white/50 hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/kvkk" className="text-white/50 hover:text-white transition-colors">
              KVKK Aydınlatma
            </Link>
            <Link href="/cerez" className="text-white/50 hover:text-white transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
