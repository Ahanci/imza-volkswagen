'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { blogPosts, getAllCategories } from '@/lib/blog-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = useMemo(() => getAllCategories(), [])

  const filteredPosts = useMemo(() => {
    let result = blogPosts

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory])

  // Featured post (latest)
  const featuredPost = blogPosts[0]

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
                <BookOpen size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Blog
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Blog & Rehberler
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                VAG Grubu araçlarınız hakkında bilgilendirici içerikler, bakım rehberleri ve 
                teknik makaleler. Uzman ekibimizden doğrudan bilgiler.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden border-2 hover:border-vag-blue/30 transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-vag-navy to-vag-blue p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-white" size={64} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-vag-blue text-white">
                      Öne Çıkan Yazı
                    </Badge>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-4 group-hover:text-vag-blue transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('tr-TR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime} dk okuma
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-vag-blue font-semibold group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Blog yazısı ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-base"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[220px] h-12">
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
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-vag-navy">
                Son Yazılar ({filteredPosts.length})
              </h2>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden flex flex-col">
                      {/* Post Image Placeholder */}
                      <div className="bg-gradient-to-br from-vag-light to-gray-100 p-6 flex items-center justify-center min-h-[180px]">
                        <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="text-vag-blue" size={36} />
                        </div>
                        
                        {/* Category Badge */}
                        <Badge 
                          className="absolute top-4 left-4"
                          variant="secondary"
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <CardContent className="p-5 flex-1 flex flex-col">
                        {/* Title */}
                        <h3 className="font-bold text-lg text-vag-navy mb-3 group-hover:text-vag-blue transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                          <span className="flex items-center gap-1">
                            <User size={12} />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime} dk
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-vag-light rounded text-vag-navy">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16 bg-white rounded-2xl">
                <BookOpen size={64} className="mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-bold text-vag-navy mb-2">Yazı Bulunamadı</h3>
                <p className="text-muted-foreground">Arama kriterlerinize uygun yazı bulunamadı.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-vag-navy py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bültenimize Abone Olun
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              En son blog yazılarından, teknik rehberlerden ve özel fırsatlardan haberdar olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="E-posta adresiniz" 
                type="email" 
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="bg-green-500 hover:bg-green-600 h-12 px-8 whitespace-nowrap">
                Abone Ol
              </Button>
            </form>
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
