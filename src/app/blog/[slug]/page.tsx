'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getBlogPostBySlug, blogPosts } from '@/lib/blog-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  ChevronRight,
  BookOpen,
  Share2,
  Facebook,
  Twitter,
  MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <BookOpen size={64} className="mx-auto text-muted-foreground/30 mb-4" />
            <h1 className="text-2xl font-bold text-vag-navy mb-2">Yazı Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız blog yazısı mevcut değil.</p>
            <Link href="/blog">
              <Button>Bloga Dön</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    )
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter(p => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-vag-blue transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link href="/blog" className="text-muted-foreground hover:text-vag-blue transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <span className="font-medium text-vag-navy line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-vag-blue transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Bloga Dön
            </Link>

            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vag-navy mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vag-navy to-vag-blue flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-vag-navy">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(post.publishedAt).toLocaleDateString('tr-TR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime} dk okuma
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              <Tag size={16} className="text-muted-foreground" />
              {post.tags.map(tag => (
                <Link key={tag} href={`/blog?tag=${tag}`}>
                  <Badge variant="outline" className="cursor-pointer hover:bg-vag-blue/10 hover:border-vag-blue hover:text-vag-blue transition-colors">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              {/* Main Content */}
              <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-vag-navy prose-p:text-gray-600 prose-a:text-vag-blue prose-strong:text-vag-navy"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />

                {/* Share Section */}
                <div className="mt-10 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-vag-navy">Bu yazıyı paylaş:</span>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook size={18} className="text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter size={18} className="text-sky-500" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <MessageCircle size={18} className="text-green-500" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Share2 size={18} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <Card className="mt-8 bg-gradient-to-br from-vag-navy to-vag-blue text-white overflow-hidden">
                  <CardContent className="p-6 md:p-8 text-center">
                    <h3 className="font-bold text-xl mb-3">Yedek Parça mı Arıyorsunuz?</h3>
                    <p className="text-white/80 mb-6">
                      Bu yazıda bahsedilen parçalar veya başka bir yedek parça için bizimle iletişime geçin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href="https://wa.me/905321234567?text=Merhaba, bu blog yazınızı okudum ve bilgi almak istiyorum." target="_blank" rel="noopener noreferrer">
                        <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          <MessageCircle size={18} />
                          WhatsApp ile Yazın
                        </button>
                      </a>
                      <a href="/urunler">
                        <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          Ürünleri Gör
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-vag-navy to-vag-blue flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {post.author.charAt(0)}
                    </div>
                    <h3 className="font-bold text-vag-navy">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.authorRole}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      VAG Grubu araçları konusunda uzman ekibimiz. Yılların deneyimi ile doğru bilgiye ulaşmanızı sağlıyoruz.
                    </p>
                  </CardContent>
                </Card>

                {/* Categories Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-vag-navy mb-4">Kategoriler</h3>
                    <div className="space-y-2">
                      {['Bakım Rehberi', 'Teknoloji', 'Performans', 'Sorun Çözümü', 'Eğitim'].map(cat => (
                        <Link 
                          key={cat}
                          href={`/blog?category=${cat.toLowerCase()}`}
                          className={`block px-3 py-2 rounded-lg transition-colors ${
                            post.category === cat 
                              ? 'bg-vag-blue text-white' 
                              : 'hover:bg-vag-light text-vag-navy'
                          }`}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <MessageCircle size={32} className="mx-auto text-green-500 mb-3" />
                    <h3 className="font-bold text-vag-navy mb-2">Soru mu Var?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Uzmanlarımıza doğrudan sorununuzu iletin.
                    </p>
                    <a 
                      href="https://wa.me/905321234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600">
                        WhatsApp ile Sor
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </aside>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-12 border-t">
                <h2 className="text-2xl font-bold text-vag-navy mb-6">İlgili Yazılar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden">
                        <div className="bg-gradient-to-br from-vag-light to-gray-100 p-6 flex items-center justify-center min-h-[140px]">
                          <BookOpen className="text-vag-blue group-hover:scale-110 transition-transform duration-300" size={40} />
                        </div>
                        <CardContent className="p-5">
                          <Badge variant="secondary" className="mb-3 text-xs">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-bold text-vag-navy group-hover:text-vag-blue transition-colors line-clamp-2 mb-3">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(relatedPost.publishedAt).toLocaleDateString('tr-TR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {relatedPost.readTime} dk
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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

// Format markdown-like content to HTML
function formatContent(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
    .replace(/^\* (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.every(c => c.includes('-'))) return '' // Skip separator row
      return `<tr>${cells.map(c => `<td class="border px-4 py-2">${c.trim()}</td>`).join('')}</tr>`
    })
    .replace(/---/g, '<hr class="my-8 border-t" />')
}
