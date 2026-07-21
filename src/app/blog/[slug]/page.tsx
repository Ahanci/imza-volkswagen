import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getBlogPostBySlug, blogPosts } from '@/lib/blog-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  BookOpen,
  Facebook,
  Twitter,
  MessageCircle,
  Share2,
  CheckCircle2,
  Package,
  Shield,
  Truck,
  Wrench,
  FileText,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Vercel default Edge runtime, 150KB blog-data.ts modülünü bazen reject edebilir.
// Node runtime zorla.
export const runtime = 'nodejs'
// Sık güncellenen içerik — her istekte dynamic render
export const dynamic = 'force-dynamic'

// Markdown içerikteki "Sıkça Sorulan Sorular" bölümünü parse eder
function extractFaqs(content: string): { question: string; answer: string }[] {
  try {
    const sssIdx = content.indexOf('Sıkça Sorulan Sorular')
    if (sssIdx === -1) return []
    const rest = content.slice(sssIdx)
    const after = rest.replace(/^.*?\n/, '')
    const faqBlocks = after.split(/\n\n+/).slice(0, 12)
    const faqs: { question: string; answer: string }[] = []
    for (const block of faqBlocks) {
      const qm = block.match(/^\*\*([^*]+\?)\*\*\s*([\s\S]*)$/)
      if (qm) {
        faqs.push({
          question: qm[1].trim(),
          answer: qm[2].replace(/\n+/g, ' ').trim().slice(0, 500),
        })
      }
    }
    return faqs
  } catch {
    return []
  }
}

// Basit markdown -> HTML (sadece başlıklar, paragraflar, listeler, tablolar, kuvvetli)
function formatContent(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-vag-navy mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-vag-navy mt-6 mb-3">$1</h3>')
    .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc mb-1">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal mb-1">$1</li>')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc mb-1">$1</li>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-vag-navy">$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(/\n/g, '<br/>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter((c) => c.trim())
      if (cells.every((c) => c.includes('-'))) return ''
      return `<tr>${cells.map((c) => `<td class="border border-gray-200 px-3 py-2 text-sm">${c.trim()}</td>`).join('')}</tr>`
    })
    .replace(/---/g, '<hr class="my-8 border-t border-gray-200" />')
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, 3)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imza-oto.vercel.app'
  const articleUrl = `${siteUrl}/blog/${post.slug}`
  const faqs = extractFaqs(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: { '@type': 'Organization', name: post.author, url: siteUrl },
        publisher: {
          '@type': 'Organization',
          name: 'İmza Volkswagen',
          logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        keywords: post.tags.join(', '),
        inLanguage: 'tr-TR',
      },
      ...(faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link href="/" className="text-muted-foreground hover:text-vag-blue">
                Ana Sayfa
              </Link>
              <ChevronRight size={14} className="text-muted-foreground" />
              <Link href="/blog" className="text-muted-foreground hover:text-vag-blue">
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
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-vag-blue transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Bloga Dön
            </Link>

            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vag-navy mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>

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
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime} dk okuma
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <Tag size={16} className="text-muted-foreground" />
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${tag}`}>
                  <Badge variant="outline" className="cursor-pointer hover:bg-vag-blue hover:border-vag-blue hover:text-white transition-colors">
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
            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: `<p class="mb-4 text-gray-700 leading-relaxed">${formatContent(post.content)}</p>` }}
                />

                {/* CTA Box — Parça Satışı */}
                <Card className="mt-10 bg-gradient-to-br from-vag-navy to-vag-blue text-white overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Package size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">Bu Yazıdaki Parçalar Bizde Var</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          <strong className="text-yellow-300">{post.category}</strong> kategorisindeki tüm parçalar İmza Volkswagen Ankara İvedik stokunda.
                          Orijinal ve yan sanayi seçenekleri, faturalı ve garantili satış.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 text-sm">
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <CheckCircle2 size={18} className="mx-auto mb-1 text-green-400" />
                        <p className="text-xs">İvedik Stok</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <Shield size={18} className="mx-auto mb-1 text-yellow-400" />
                        <p className="text-xs">Garantili</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <FileText size={18} className="mx-auto mb-1 text-blue-300" />
                        <p className="text-xs">Faturalı</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <Truck size={18} className="mx-auto mb-1 text-orange-300" />
                        <p className="text-xs">Aynı Gün Kargo</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/9054349792013?text=${encodeURIComponent(`Merhaba, "${post.title}" yazısındaki parçalar için teklif almak istiyorum.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px]"
                      >
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors">
                          <MessageCircle size={18} />
                          WhatsApp Teklif Al
                        </button>
                      </a>
                      <a href="tel:+9054349792013" className="flex-1 min-w-[160px]">
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-xl font-semibold transition-colors">
                          Hemen Ara
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* İlgili Hizmetler */}
                {post.categorySlug === 'parca-rehberi' && (
                  <Card className="mt-6 border-0 shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-vag-navy mb-3 flex items-center gap-2">
                        <Wrench size={20} className="text-vag-blue" />
                        İlgili Hizmet Kategorisi
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Bu yazıdaki parçaların tümü <Link href="/hizmetlerimiz" className="text-vag-blue hover:underline">hizmet kategorilerimiz</Link> kapsamında stoklarımızdadır.
                      </p>
                      <Link href="/periyodik-bakim">
                        <button className="inline-flex items-center gap-2 text-vag-blue hover:text-vag-navy font-semibold text-sm transition-colors">
                          Periyodik Bakım Paketlerimizi İnceleyin
                          <ArrowRight size={16} />
                        </button>
                      </Link>
                    </CardContent>
                  </Card>
                )}

                {/* FAQ Section (if any) */}
                {faqs.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold text-vag-navy mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-vag-blue" size={24} />
                      Sıkça Sorulan Sorular
                    </h2>
                    <div className="space-y-3">
                      {faqs.map((faq, i) => (
                        <Card key={i} className="border-0 shadow-sm">
                          <CardContent className="p-5">
                            <h3 className="font-bold text-vag-navy mb-2">S: {faq.question}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              <span className="font-semibold text-vag-blue">C:</span> {faq.answer}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-vag-navy to-vag-blue flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {post.author.charAt(0)}
                    </div>
                    <h3 className="font-bold text-vag-navy">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.authorRole}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      VAG Grubu araçları konusunda uzman ekibimiz. 20+ yılın deneyimi ile doğru bilgi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <MessageCircle size={32} className="mx-auto text-green-500 mb-3" />
                    <h3 className="font-bold text-vag-navy mb-2">Soru mu Var?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      WhatsApp'tan doğrudan ulaşın.
                    </p>
                    <a
                      href="https://wa.me/9054349792013"
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
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <Card className="group card-hover cursor-pointer border-0 shadow-sm overflow-hidden h-full">
                        <div className="bg-gradient-to-br from-vag-light to-gray-100 p-6 flex items-center justify-center min-h-[120px]">
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
      <Footer />
      <FloatingCTA />
    </div>
  )
}
