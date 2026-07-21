import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft, ArrowRight, Phone, MessageCircle, CheckCircle2,
  Wrench, Package, Phone as PhoneIcon,
} from 'lucide-react'
import { services, getServiceBySlug, iconMap } from '@/lib/services-data'

// Statik olarak tüm hizmet sayfalarını pre-render et
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'article',
    },
  }
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.iconName]
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imza-oto.vercel.app'
  const serviceUrl = `${siteUrl}/hizmetlerimiz/${service.slug}`

  // JSON-LD: Service + FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': serviceUrl,
        name: service.title,
        description: service.longDescription,
        provider: { '@type': 'Organization', name: 'İmza Volkswagen' },
        areaServed: { '@type': 'Country', name: 'Türkiye' },
        serviceType: 'Yedek Parça Tedariki',
        url: serviceUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link href="/" className="text-muted-foreground hover:text-vag-blue">Ana Sayfa</Link>
              <ArrowRight size={14} className="text-muted-foreground" />
              <Link href="/hizmetlerimiz" className="text-muted-foreground hover:text-vag-blue">Hizmetlerimiz</Link>
              <ArrowRight size={14} className="text-muted-foreground" />
              <span className="font-medium text-vag-navy">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className={`bg-gradient-to-br ${service.gradient} text-white py-12 md:py-16`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4">
                <ArrowLeft size={16} />
                Tüm Hizmetler
              </Link>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.features.map((feature) => (
                <Card key={feature} className="border-0 shadow-sm">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-vag-blue flex-shrink-0" />
                    <span className="text-sm font-medium text-vag-navy">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parts Table */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <Package size={28} className="text-vag-blue" />
                <h2 className="text-2xl md:text-3xl font-bold text-vag-navy">
                  Parça Listesi ve Markalar
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Bu kategoride stoğumuzda bulunan başlıca parçalar. Tüm liste ve güncel fiyat için lütfen iletişime geçin.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-vag-navy text-white">
                      <th className="text-left p-4 font-semibold">Parça</th>
                      <th className="text-left p-4 font-semibold">Açıklama</th>
                      <th className="text-left p-4 font-semibold">Markalar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.parts.map((part, i) => (
                      <tr key={part.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-vag-navy">{part.name}</td>
                        <td className="p-4 text-sm text-muted-foreground">{part.description}</td>
                        <td className="p-4 text-sm">
                          {part.brand.split(', ').map((b) => (
                            <Badge key={b} variant="secondary" className="mr-1 mb-1 text-xs">
                              {b}
                            </Badge>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-6">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <Card key={i} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-vag-navy mb-2 flex items-start gap-2">
                        <span className="text-vag-blue">S:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-6">
                        <span className="text-vag-blue font-semibold">C:</span> {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-vag-navy mb-6 text-center">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((s) => {
                  const OtherIcon = iconMap[s.iconName]
                  return (
                    <Link key={s.slug} href={`/hizmetlerimiz/${s.slug}`} className="group">
                      <Card className="border-0 shadow-sm group-hover:shadow-md transition-shadow h-full">
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-2`}>
                            <OtherIcon size={20} className="text-white" />
                          </div>
                          <h3 className="font-semibold text-sm text-vag-navy group-hover:text-vag-blue transition-colors">
                            {s.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-br from-vag-navy to-vag-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <Wrench size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {service.title} İçin Bize Ulaşın
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Şase numaranızı paylaşın, doğru parçayı tespit edip size fiyat ve stok bilgisi verelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+9054349792013">
                <button className="inline-flex items-center gap-2 bg-vag-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
                  <PhoneIcon size={18} />
                  +90 543 979 20 13
                </button>
              </a>
              <a
                href={`https://wa.me/9054349792013?text=Merhaba,%20${service.title}%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
