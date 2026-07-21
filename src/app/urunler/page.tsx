'use client'

import React, { useState, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/products/ProductCard'
import { products, getAllBrands, getAllCategories, getProductsByBrand, getProductsByCategory } from '@/lib/products-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Search, SlidersHorizontal, Grid3X3, LayoutGrid, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function UrunlerPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid')

  const brands = useMemo(() => getAllBrands(), [])
  const categories = useMemo(() => getAllCategories(), [])

  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.compatibleModels.some(m => m.toLowerCase().includes(query))
      )
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      result = result.filter(p => p.brandSlug === selectedBrand)
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    return result
  }, [searchQuery, selectedBrand, selectedCategory])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-vag-navy to-vag-blue text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Package size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Ürün Kataloğu
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Yedek Parça Ürünleri
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için kaliteli yedek parçalar.
                Aradığınız parçayı bulun veya bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Search & Filters Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Ürün ara... (örn: fren disk, amortisör, filtre)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-base"
                  />
                </div>

                {/* Brand Filter */}
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="w-full lg:w-[180px] h-12">
                    <SelectValue placeholder="Marka Seç" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Markalar</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand.slug} value={brand.slug}>
                        {brand.name} ({brand.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full lg:w-[200px] h-12">
                    <SelectValue placeholder="Kategori Seç" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Kategoriler</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat.slug} value={cat.slug}>
                        {cat.name} ({cat.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="hidden lg:flex items-center gap-2 border rounded-xl p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-lg"
                  >
                    <Grid3X3 size={18} />
                  </Button>
                  <Button
                    variant={viewMode === 'large' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('large')}
                    className="rounded-lg"
                  >
                    <LayoutGrid size={18} />
                  </Button>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedBrand !== 'all' || selectedCategory !== 'all') && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                  <span className="text-sm text-muted-foreground">Aktif Filtreler:</span>
                  {selectedBrand !== 'all' && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedBrand('all')}>
                      {brands.find(b => b.slug === selectedBrand)?.name} ×
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                      {categories.find(c => c.slug === selectedCategory)?.name} ×
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs text-muted-foreground"
                    onClick={() => {
                      setSelectedBrand('all')
                      setSelectedCategory('all')
                      setSearchQuery('')
                    }}
                  >
                    Temizle
                  </Button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-vag-navy">{filteredProducts.length}</span> ürün bulundu
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16 bg-white rounded-2xl">
                <Package size={64} className="mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-bold text-vag-navy mb-2">Ürün Bulunamadı</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Arama kriterlerinize uygun ürün bulunamadı. Lütfen farklı bir arama deneyin veya bizimle iletişime geçin.
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedBrand('all')
                      setSelectedCategory('all')
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                  <a href="https://wa.me/9054349792013" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-600 hover:bg-green-700">
                      WhatsApp İletişim
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-vag-navy py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Aradığınız Ürünü Bulamadınız mı?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Binlerce stoklu ürünümüz arasında aradığınız parça var. Bizimle iletişime geçerek 
              fiyat ve stok durumu hakkında bilgi alabilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/9054349792013" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  WhatsApp ile Sor
                </button>
              </a>
              <a href="tel:+9054349792013">
                <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Hemen Ara
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  )
}
