'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Calendar, Clock, User, Search, ChevronRight, BookOpen, ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { BlogPost } from '@/lib/blog-data'

interface CatItem { name: string; slug: string; count: number }

interface BlogExplorerProps {
  posts: BlogPost[]
  categories: CatItem[]
}

export function BlogExplorer({ posts, categories }: BlogExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const featuredPost = posts[0]

  const filteredPosts = useMemo(() => {
    let result = posts
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)),
      )
    }
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory)
    }
    return result
  }, [posts, searchQuery, selectedCategory])

  return (
    <>
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden border-2 hover:border-vag-blue/30 transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-vag-navy to-vag-blue p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-white" size={64} />
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-vag-blue text-white">Öne Çıkan Yazı</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-4 group-hover:text-vag-blue transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime} dk okuma
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-vag-blue font-semibold group-hover:gap-3 transition-all">
                      Devamını Oku <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

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

      {/* Posts Grid */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-vag-navy">Son Yazılar ({filteredPosts.length})</h2>
          </div>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden flex flex-col">
                    <div className="bg-gradient-to-br from-vag-light to-gray-100 p-6 flex items-center justify-center min-h-[180px]">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="text-vag-blue" size={36} />
                      </div>
                      <Badge className="absolute top-4 left-4" variant="secondary">{post.category}</Badge>
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-vag-navy mb-3 group-hover:text-vag-blue transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                        <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} dk</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-vag-light rounded text-vag-navy">#{tag}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <BookOpen size={64} className="mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-bold text-vag-navy mb-2">Yazı Bulunamadı</h3>
              <p className="text-muted-foreground">Arama kriterlerinize uygun yazı bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
