import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Wrench, Phone, MessageCircle, Shield, Truck, Award } from 'lucide-react'
import { services, iconMap } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | İmza Volkswagen - VAG Grubu Yedek Parça',
  description:
    'VAG grubu (VW, Audi, Seat, Skoda, Cupra, Porsche) yedek parça hizmetlerimiz: motor, fren, süspansiyon, elektrik, filtre, şanzıman, egzoz. 7 kategoride orijinal ve yan sanayi parça. (Akü satışımız yoktur.)',
  keywords: [
    'VAG yedek parça', 'VW yedek parça', 'Audi yedek parça', 'Skoda yedek parça', 'Seat yedek parça',
    'motor parçaları', 'fren balata', 'süspansiyon', 'elektrik', 'filtre', 'şanzıman', 'egzoz',
    'orijinal parça', 'yan sanayi parça', 'Ankara yedek parça',
  ],
  openGraph: {
    title: 'Hizmetlerimiz | İmza Volkswagen',
    description: '7 kategoride VAG grubu yedek parça hizmeti. Motor, fren, süspansiyon, elektrik, filtre, şanzıman, egzoz. (Akü satışımız yoktur.)',
    type: 'website',
  },
}

export default function HizmetlerimizPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vag-navy via-vag-blue to-blue-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Wrench size={16} />
                <span>7 Hizmet Kategorisi • VAG Grubu Uzmanı</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Yedek Parça Hizmetlerimiz
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için
                <strong> 7 kategoride </strong>
                orijinal ve yüksek kaliteli yan sanayi yedek parça tedariği.
                Her parça faturalı, VIN ile doğru eşleşme garantili. Garanti süresi parça tipine göre değişir.
                <span className="block text-base text-white/70 mt-3">Not: Akü, lastik ve jant satışımız yoktur.</span>
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {[
                  { icon: Shield, label: 'Garantili' },
                  { icon: Truck, label: 'Hızlı Teslimat' },
                  { icon: Award, label: '20+ Yıl' },
                  { icon: Wrench, label: 'Uzman Ekip' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <b.icon size={20} className="text-yellow-400" />
                    <span className="text-sm font-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
                7 Kategori
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
                Hizmet Verdiğimiz Tüm Parça Kategorileri
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Her kategoride orijinal ve yan sanayi seçenekleriyle geniş stok.
                Detay sayfasında parça listesi, marka karşılaştırması ve SSS bulabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = iconMap[service.iconName]
                return (
                  <Link key={service.slug} href={`/hizmetlerimiz/${service.slug}`} className="group">
                    <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className={`bg-gradient-to-br ${service.gradient} p-6 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Icon size={36} className="text-white relative" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl text-vag-navy group-hover:text-vag-blue transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {service.features.slice(0, 3).map((f) => (
                            <Badge key={f} variant="secondary" className="text-xs">
                              {f}
                            </Badge>
                          ))}
                          {service.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{service.features.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t">
                          <span className="text-sm font-medium text-vag-blue group-hover:text-vag-navy transition-colors">
                            Detayları Gör
                          </span>
                          <ArrowRight size={16} className="text-vag-blue group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Us Strip */}
        <section className="py-12 bg-white border-t border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Orijinal ve Yan Sanayi',
                  desc: 'Her kategoride orijinal (OEM) ve kaliteli yan sanayi (Bosch, ATE, Mahle, Sachs) seçenekleri.',
                },
                {
                  icon: Award,
                  title: '20+ Yıl VAG Tecrübesi',
                  desc: 'VAG grubu (VW, Audi, Seat, Skoda, Cupra, Porsche) parçalarında uzman ekibimizle doğru parça.',
                },
                {
                  icon: Truck,
                  title: 'Hızlı Stoktan Teslim',
                  desc: 'Stokta olan parçalar aynı gün kargolanır. Acil parça için öncelikli tedarik.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vag-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-vag-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-vag-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-br from-vag-navy to-vag-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Doğru Parçayı Bulamadınız mı?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              İhtiyacınız olan parçayı bizimle paylaşın. Uzman ekibimiz VIN numaranızla
              doğru parçayı tespit edip size fiyat ve stok bilgisi versin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+905439792013">
                <button className="inline-flex items-center gap-2 bg-vag-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
                  <Phone size={18} />
                  Hemen Ara
                </button>
              </a>
              <a
                href="https://wa.me/905439792013?text=Merhaba,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg">
                  <MessageCircle size={18} />
                  WhatsApp ile Sor
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
