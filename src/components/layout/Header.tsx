'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Menu,
  Phone,
  ChevronDown,
  Car,
} from 'lucide-react'

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { 
    name: 'Hizmetlerimiz', 
    href: '/hizmetlerimiz',
    children: [
      { name: 'Motor Parçaları', href: '/hizmetlerimiz/motor' },
      { name: 'Fren Sistemi', href: '/hizmetlerimiz/fren' },
      { name: 'Süspansiyon Sistemi', href: '/hizmetlerimiz/suspansiyon' },
      { name: 'Elektrik Sistemi', href: '/hizmetlerizm/elektrik' },
      { name: 'Filtre & Bakım Setleri', href: '/hizmetlerimiz/filtre' },
      { name: 'Şanzıman Parçaları', href: '/hizmetlerimiz/sanziman' },
    ]
  },
  { 
    name: 'Markalar', 
    href: '/markalar',
    children: [
      { name: 'Volkswagen', href: '/markalar/volkswagen' },
      { name: 'Audi', href: '/markalar/audi' },
      { name: 'Seat', href: '/markalar/seat' },
      { name: 'Skoda', href: '/markalar/skoda' },
    ]
  },
  { name: 'Kurumsal', href: '/kurumsal' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg border-b border-white/20' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-vag-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+905321234567" className="flex items-center gap-2 hover:text-vag-blue transition-colors">
              <Phone size={14} />
              <span>+90 532 123 45 67</span>
            </a>
            <span className="text-white/70">|</span>
            <span>Pazartesi - Cumartesi: 09:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/kurumsal" className="hover:text-vag-blue transition-colors">Hakkımızda</Link>
            <Link href="/blog" className="hover:text-vag-blue transition-colors">Blog</Link>
            <Link href="/iletisim" className="hover:text-vag-blue transition-colors">İletişim</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`${isScrolled ? 'bg-white/95' : 'bg-white'} transition-colors`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Company Name */}
            <Link href="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-vag-navy to-vag-blue rounded-xl flex items-center justify-center shadow-lg">
                <Car className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-vag-navy leading-tight tracking-tight">SABRİ OTO</h1>
                <p className="text-sm text-muted-foreground font-medium">VAG Grubu Yedek Parça Uzmanı</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 px-4 py-2 text-vag-navy hover:text-vag-blue font-medium rounded-lg hover:bg-gray-50 transition-colors">
                          {item.name}
                          <ChevronDown size={16} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.name} asChild>
                            <Link href={child.href}>{child.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-vag-navy hover:text-vag-blue font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={26} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Menü</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  {/* Logo in Mobile Menu */}
                  <Link href="/" className="flex items-center gap-3 mb-8 pb-6 border-b">
                    <div className="w-12 h-12 bg-gradient-to-br from-vag-navy to-vag-blue rounded-xl flex items-center justify-center">
                      <Car className="text-white" size={28} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-vag-navy">SABRİ OTO</h2>
                      <p className="text-xs text-muted-foreground">VAG Parça Uzmanı</p>
                    </div>
                  </Link>

                  {/* Mobile Nav Items */}
                  <nav className="flex-1 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-vag-light transition-colors text-vag-navy"
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <div className="ml-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-vag-blue transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Contact Info in Mobile */}
                  <div className="border-t pt-4 mt-4 space-y-3">
                    <a href="tel:+905321234567" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl text-green-700 font-semibold">
                      <Phone size={20} />
                      +90 532 123 45 67
                    </a>
                    <p className="text-sm text-muted-foreground text-center">
                      Pazartesi - Cumartesi: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="hidden lg:block bg-vag-navy">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-t-lg transition-colors text-sm font-medium">
                        {item.name}
                        <ChevronDown size={14} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href}>{child.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-t-lg transition-colors text-sm font-medium block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
