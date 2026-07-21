import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Phone, MessageCircle, MapPin, Mail, Clock, Send, Building2,
  Navigation, Car, FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'İletişim | İmza Volkswagen - VAG Grubu Yedek Parça',
  description:
    'İmza Volkswagen iletişim bilgileri: Ankara Şaşmaz sanayi bölgesinde VAG grubu yedek parça. Telefon, WhatsApp, e-posta, çalışma saatleri ve Google Maps konum.',
  keywords: [
    'İmza Volkswagen iletişim', 'Ankara VW parça', 'Şaşmaz VW parça',
    'VAG yedek parça telefon', 'VW yedek parça WhatsApp',
    'Ankara VAG yedek parça adres',
  ],
  openGraph: {
    title: 'İletişim | İmza Volkswagen',
    description: 'Ankara merkezli VAG grubu yedek parça tedarikçisi. Telefon, WhatsApp, adres.',
    type: 'website',
  },
}

// Schema.org JSON-LD: ContactPage + LocalBusiness
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imza-oto.vercel.app'

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vag-navy via-vag-blue to-blue-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Send size={16} />
                <span>7/24 WhatsApp • Çalışma saatlerinde telefon</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                İletişim
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                VAG grubu yedek parça ihtiyacınız için bize ulaşın. Uzman ekibimiz
                <strong> VIN numaranızla </strong> doğru parçayı tespit edip fiyat teklifi versin.
              </p>
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri + Harita */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Sol: İletişim Bilgileri */}
              <div>
                <h2 className="text-2xl font-bold text-vag-navy mb-6">
                  Bize Ulaşın
                </h2>

                <div className="space-y-4">
                  {/* Telefon */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-vag-blue/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={22} className="text-vag-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-vag-navy mb-1">Telefon</h3>
                        <a href="tel:+905321234567" className="text-lg font-bold text-vag-blue hover:underline">
                          +90 532 123 45 67
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pazartesi – Cumartesi: 09:00 – 18:00
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={22} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-vag-navy mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/905321234567?text=Merhaba,%20VAG%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold text-green-600 hover:underline"
                        >
                          +90 532 123 45 67
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          7/24 açık — fotoğraf gönderin, parçayı biz tespit edelim
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* E-posta */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-vag-blue/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={22} className="text-vag-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-vag-navy mb-1">E-posta</h3>
                        <a href="mailto:info@imzavolkswagen.com.tr" className="text-base font-bold text-vag-blue hover:underline">
                          info@imzavolkswagen.com.tr
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          24 saat içinde dönüş
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Adres */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-vag-red/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={22} className="text-vag-red" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-vag-navy mb-1">Adres</h3>
                        <p className="text-base text-vag-navy font-medium">
                          İmza Volkswagen
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                          Şaşmaz Sanayi Bölgesi<br />
                          06105 Altındağ / Ankara
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=İmza+Volkswagen+Ankara"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-vag-blue hover:underline mt-2"
                        >
                          <Navigation size={14} />
                          Google Maps'te Aç
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Çalışma Saatleri */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Clock size={22} className="text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-vag-navy mb-2">Çalışma Saatleri</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Pazartesi – Cuma</span>
                            <span className="font-medium text-vag-navy">09:00 – 18:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Cumartesi</span>
                            <span className="font-medium text-vag-navy">10:00 – 15:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Pazar</span>
                            <span className="font-medium text-red-600">Kapalı</span>
                          </li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">
                          WhatsApp 7/24 açık — mesaj atın, açılış saatinde dönüş yapalım
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sağ: Harita */}
              <div>
                <h2 className="text-2xl font-bold text-vag-navy mb-6">
                  Konum
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps?q=Şaşmaz+Sanayi+Ankara&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="İmza Volkswagen - Şaşmaz Sanayi Ankara"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Car size={16} className="text-vag-blue" />
                    <span>Otopark mevcut</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 size={16} className="text-vag-blue" />
                    <span>Showroom + Stok</span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=İmza+Volkswagen+Şaşmaz+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <Button className="w-full bg-vag-blue hover:bg-blue-700 gap-2">
                    <Navigation size={18} />
                    Yol Tarifi Al (Google Maps)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hızlı Mesaj (Form Placeholder) */}
        <section className="py-12 md:py-16 bg-vag-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <FileText size={48} className="text-vag-blue mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-3">
                Detaylı Teklif İster misiniz?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Aracınızın şase numarası (VIN) ve istenen parçayı WhatsApp'tan gönderin.
                <br />Uzman ekibimiz aynı gün içinde fiyat ve stok bilgisi versin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905321234567?text=Merhaba,%20teklif%20almak%20istiyorum.%20VIN%20numaram:%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 gap-2">
                    <MessageCircle size={18} />
                    WhatsApp'tan Teklif Al
                  </Button>
                </a>
                <Link href="/kurumsal">
                  <Button variant="outline" className="gap-2">
                    <Building2 size={18} />
                    Kurumsal Hakkımızda
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
