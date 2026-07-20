'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, User } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'VW Golf 7 Yedek Parça Rehberi: En Çok Değişen 10 Parça',
    excerpt: 'Volkswagen Golf 7 sahipleri için en sık değişen yedek parçaları, ömürlerini ve nasıl seçim yapmanız gerektiğini detaylıca inceledik.',
    slug: 'vw-golf-7-yedek-parca-rehberi',
    category: 'Rehber',
    tags: ['Volkswagen', 'Golf', 'Bakım'],
    publishedAt: '2024-12-15',
    readTime: 8
  },
  {
    id: '2',
    title: 'Orijinal vs Muadil Yedek Parça: Farklar Ne?',
    excerpt: 'Orijinal ve muadil (aftermarket) yedek parçalar arasındaki farkları, avantajları ve dezavantajlarını karşılaştırdık.',
    slug: 'orijinal-vs-muadil-yedek-parca',
    category: 'Bilgi',
    tags: ['Karşılaştırma', 'Kalite', 'Fiyat'],
    publishedAt: '2024-12-10',
    readTime: 6
  },
  {
    id: '3',
    title: 'Audi A3 Fren Sistemi Bakımı: Adım Adım Kılavuz',
    excerpt: 'Audi A3 fren sisteminin bakımını kendiniz yapabilirsiniz. Gerekli parçalar ve adım adım talimatlar bu yazımızda.',
    slug: 'audi-a3-fren-sistemi-bakimi',
    category: 'Nasıl Yapılır',
    tags: ['Audi', 'A3', 'Fren', 'DIY'],
    publishedAt: '2024-12-05',
    readTime: 12
  }
]

const categoryColors: Record<string, string> = {
  'Rehber': 'bg-blue-100 text-blue-700',
  'Bilgi': 'bg-purple-100 text-purple-700',
  'Nasıl Yapılır': 'bg-green-100 text-green-700'
}

export function BlogSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-vag-navy">
              Son Yazılar
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              VAG grubu araçlarınız için faydalı bilgiler ve rehberler
            </p>
          </div>
          <Link href="/blog">
            <button className="flex items-center gap-2 border border-vag-blue text-vag-blue hover:bg-vag-blue hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Tüm Yazılar
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group card-hover cursor-pointer border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-vag-navy/5 to-vag-blue/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-vag-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge 
                    className={`absolute top-4 left-4 ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {post.category}
                  </Badge>

                  {/* Read Time */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} dk okuma
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-0.5 bg-gray-100 text-muted-foreground rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-vag-navy mb-2 line-clamp-2 group-hover:text-vag-blue transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-vag-light rounded-full flex items-center justify-center">
                        <User size={14} className="text-vag-navy" />
                      </div>
                      <span className="text-sm text-muted-foreground">Sabri Oto</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-vag-navy to-vag-blue rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Bültenimize Abone Olun
            </h3>
            <p className="text-white/80 mb-6">
              Yeni ürünler, indirimler ve faydalı içeriklerden ilk siz haberdar olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 h-12 px-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-vag-red hover:bg-red-700 text-white px-6 h-12 rounded-xl font-semibold btn-glow whitespace-nowrap">
                Abone Ol
              </button>
            </div>
            <p className="text-white/60 text-xs mt-3">
              Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
