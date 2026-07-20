'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Car,
  Package
} from 'lucide-react'

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { 
    name: 'Ürünler', 
    href: '/urunler',
    children: [
      { name: 'Motor Parçaları', href: '/urunler/motor' },
      { name: 'Fren Sistemi', href: '/urunler/fren' },
      { name: 'Süspansiyon', href: '/urunler/suspansiyon' },
      { name: 'Elektrik Sistemi', href: '/urunler/elektrik' },
      { name: 'Filtre & Bakım', href: '/urunler/filtre' },
      { name: 'Şanzıman', href: '/urunler/sanziman' },
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
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-vag-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+908501234567" className="flex items-center gap-2 hover:text-vag-blue transition-colors">
              <Phone size={14} />
              <span>0850 123 45 67</span>
            </a>
            <span className="text-white/70">|</span>
            <span>Pazartesi - Cumartesi: 09:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/hakkimizda" className="hover:text-vag-blue transition-colors">
              Hakkımızda
            </Link>
            <Link href="/sss" className="hover:text-vag-blue transition-colors">
              SSS
            </Link>
            <Link href="/takip" className="hover:text-vag-blue transition-colors">
              Sipariş Takibi
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`${isScrolled ? 'bg-white/95' : 'bg-white'} transition-colors`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-vag-navy to-vag-blue rounded-xl flex items-center justify-center shadow-lg">
                <Car className="text-white" size={28} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-vag-navy leading-tight">VAG PARÇA</h1>
                <p className="text-xs text-muted-foreground">Orijinal Yedek Parça</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-4">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="search"
                  placeholder="Ürün ara veya OEM kodu girin... (Örn: 1J0 698 151)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-32 h-12 border-2 focus:border-vag-blue rounded-xl"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-vag-red hover:bg-red-700 text-white px-6 rounded-lg"
                >
                  Ara
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* OEM Code Quick Search */}
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden xl:flex items-center gap-2 border-vag-blue text-vag-blue hover:bg-vag-blue hover:text-white"
              >
                <Package size={16} />
                Kod ile Sorgula
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="relative hidden sm:flex">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-vag-red text-white h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <User size={22} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <User size={16} className="mr-2" />
                    Giriş Yap
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Kayıt Ol
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Siparişlerim
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Favorilerim
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetTitle className="sr-only">Menü</SheetTitle>
                  <div className="flex flex-col h-full pt-8">
                    {/* Mobile Search */}
                    <div className="relative mb-6">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        type="search"
                        placeholder="Ürün ara..."
                        className="pl-10 h-11"
                      />
                    </div>

                    {/* Mobile Nav */}
                    <nav className="flex-1 space-y-1 overflow-y-auto">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-vag-light transition-colors"
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

                    {/* Mobile Actions */}
                    <div className="border-t pt-4 space-y-3 mt-4">
                      <Button className="w-full bg-vag-navy hover:bg-vag-blue">
                        Giriş Yap
                      </Button>
                      <Button variant="outline" className="w-full border-vag-blue text-vag-blue">
                        Sepetim ({cartCount})
                      </Button>
                      <a href="tel:+908501234567" className="flex items-center justify-center gap-2 text-vag-blue font-medium">
                        <Phone size={16} />
                        0850 123 45 67
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="search"
                placeholder="Ürün ara..."
                className="pl-10 pr-20 h-11"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-vag-red hover:bg-red-700 text-white px-4 rounded-lg text-sm"
              >
                Ara
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
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
