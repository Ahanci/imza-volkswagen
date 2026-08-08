import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { brands } from '@/lib/brands-data'
import { BrandLogo } from '@/components/brands/BrandLogo'
import {
  Truck, MapPin, MessageCircle, Phone, CheckCircle2, ShieldCheck,
  Clock, Package, Search, ClipboardCheck, Store,
  Navigation, CalendarDays, ChevronRight,
} from 'lucide-react'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://imzayedekparca.com'

const title = 'VAG Yedek Parça: Türkiye Geneli Kargo & Mağazadan Teslim | İmza Volkswagen'
const description =
  "Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche yedek parça — marka bazında. Türkiye'nin 81 iline kargo (1-3 iş günü) veya Ankara İvedik mağazadan teslim (gel-al). VIN ile doğru parça tespiti."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/turkiye-geneli-yedek-parca` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/turkiye-geneli-yedek-parca`,
    type: 'website',
    siteName: 'İmza Volkswagen',
    locale: 'tr_TR',
  },
  robots: { index: true, follow: true },
}

const steps = [
  {
    icon: MessageCircle,
    title: '1. İletişime Geç',
    desc: 'WhatsApp veya telefon ile parça ihtiyacınızı ve VIN numaranızı iletin.',
  },
  {
    icon: Search,
    title: '2. Parça Tespiti & Teklif',
    desc: 'VIN üzerinden tam uyumlu parçayı (orijinal/yan sanayi) bulur, fiyat ve stok bildiririz.',
  },
  {
    icon: ClipboardCheck,
    title: '3. Sipariş & Ödeme',
    desc: 'Onayınız sonrası faturalı sipariş. Havale/EFT veya kredi kartı.',
  },
  {
    icon: Package,
    title: '4. Teslimat Seç',
    desc: 'Türkiye geneli kargo (1-3 gün) YA DA Ankara İvedik mağazadan teslim (aynı gün).',
  },
]

const cities = [
  { region: 'Marmara', cities: 'İstanbul, Bursa, Kocaeli, Sakarya', days: '1-2 iş günü' },
  { region: 'Ege', cities: 'İzmir, Manisa, Aydın, Denizli, Muğla', days: '1-2 iş günü' },
  { region: 'Akdeniz', cities: 'Antalya, Adana, Mersin, Hatay', days: '2-3 iş günü' },
  { region: 'İç Anadolu', cities: 'Ankara, Konya, Kayseri, Eskişehir', days: '1-2 iş günü' },
  { region: 'Karadeniz', cities: 'Trabzon, Samsun, Ordu, Zonguldak', days: '2-3 iş günü' },
  { region: 'Doğu & Güneydoğu', cities: 'Erzurum, Gaziantep, Diyarbakır, Van', days: '2-4 iş günü' },
]

const faqs = [
  {
    q: "Kargo ve mağazadan teslim seçeneklerinden hangisini kullanabilirim?",
    a: "İkisi de geçerli. Türkiye'nin her yerindeyseniz 81 il için kargo gönderiyoruz (1-3 iş günü). Ankara'da veya İvedik civarındaysanız, sipariş verip aynı gün mağazadan teslim alabilirsiniz (gel-al). Seçim sizin.",
  },
  {
    q: "Her VAG markası için parça tedarik ediyor musunuz?",
    a: 'Evet. Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche için orijinal (OEM) ve yan sanayi (OEE) yedek parça tedarik ediyoruz. Her markanın kendi sayfasında modeller ve parça çeşitleri detaylı yer alıyor.',
  },
  {
    q: "Mağazadan teslim (gel-al) nasıl çalışıyor?",
    a: 'WhatsApp’tan parçayı ve VIN’i bildirin, stok ve fiyatı teyit edelim. Ödemenizi tamamladıktan sonra parçayı mağazamıza hazırlatırız; siz uygun saatinde gelip teslim alırsınız. Adres: İvedik Sanayi Bölgesi, Altındağ / Ankara.',
  },
  {
    q: 'Doğru parçayı nasıl bulacağım?',
    a: 'VIN (şase) numaranızı göndermeniz yeterli. VIN üzerinden aracınızın tam uyumlu parçasını tespit ederiz — bu hizmet ücretsizdir ve yanlış parça riskini ortadan kaldırır.',
  },
  {
    q: 'Kargo ücretini kim ödüyor, hangi firmalarla çalışıyorsunuz?',
    a: 'Kargo ücreti alıcıya aittir; Barın, MNG, Aras ve Yurtiçi Kargo ile gönderim yapıyoruz. Kapıda ödeme seçeneği de sunulabilir.',
  },
]

export default function TurkiyeGeneliPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'VAG Grubu Yedek Parça Tedariği — Türkiye Geneli Kargo ve Mağazadan Teslim',
        provider: {
          '@type': 'AutoPartsStore',
          name: 'İmza Volkswagen',
          telephone: '+90-312-394-05-25',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'İvedik Sanayi Bölgesi, Altındağ',
            addressLocality: 'Ankara',
            addressCountry: 'TR',
          },
        },
        areaServed: { '@type': 'Country', name: 'Türkiye' },
        url: `${SITE_URL}/turkiye-geneli-yedek-parca`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 bg-vag-light/30">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vag-navy to-vag-blue text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Truck size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Türkiye Geneli Tedarik
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                VAG Parçada İki Teslimat Seçeneği
              </h1>
              <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche yedek parçalarda{" "}
                <span className="font-semibold text-yellow-300">marka bazında</span> tedarik.
                İstediğiniz parçayı{" "}
                <span className="font-semibold text-white">Türkiye’nin 81 iline kargo</span> ile
                alabilir ya da{" "}
                <span className="font-semibold text-white">Ankara İvedik mağazamızdan teslim</span>{" "}
                alabilirsiniz. Seçim sizin.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://wa.me/905439792013?text=Merhaba,%20VAG%20yedek%20parça%20teklifi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <MessageCircle size={18} /> WhatsApp Teklif Al
                  </button>
                </a>
                <a href="tel:+905439792013">
                  <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone size={18} /> 0312 394 05 25
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* İki Teslimat Seçeneği */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Kargo */}
              <Card className="border-2 hover:border-vag-blue/30 transition-colors overflow-hidden">
                <div className="bg-gradient-to-br from-vag-blue to-blue-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Truck size={26} />
                    </div>
                    <h2 className="text-2xl font-bold">Türkiye Geneli Kargo</h2>
                  </div>
                  <p className="text-white/85">
                    Ankara İvedik’ten 81 ilin tamamına VAG yedek parça kargosu.
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      'Saat 16:00’a kadar aynı gün sevkiyat',
                      'Barın, MNG, Aras, Yurtiçi Kargo',
                      'Tahmini teslimat: 1-3 iş günü',
                      'Kapıda ödeme seçeneği mevcut',
                      'Kargo ücreti alıcıya aittir',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mağazadan Teslim */}
              <Card className="border-2 hover:border-vag-blue/30 transition-colors overflow-hidden">
                <div className="bg-gradient-to-br from-vag-navy to-slate-800 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Store size={26} />
                    </div>
                    <h2 className="text-2xl font-bold">Mağazadan Teslim (Gel-Al)</h2>
                  </div>
                  <p className="text-white/85">
                    Sipariş ver, hazırlayalım — Ankara İvedik mağazamızdan aynı gün teslim al.
                  </p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      'Sipariş sonrası parça hazır bekler',
                      'Aynı gün teslim — kargo bekleme yok',
                      'Ödemeyi mağazada yapabilirsiniz',
                      'Parçayı yerinde inceleme imkânı',
                      'Uzman ekibe doğrudan soru sorma',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Marka Bazında Tedarik */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-2">
                Marka Bazında Yedek Parça
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tüm VAG grubu markaları için orijinal + yan sanayi parça. Her marka{" "}
                <span className="font-semibold text-vag-navy">kargo</span> ve{" "}
                <span className="font-semibold text-vag-navy">mağazadan teslim</span> seçeneklerinin
                ikisiyle de alınabilir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => {
                const logoColor = brand.textColor || '#FFFFFF'
                return (
                  <Link key={brand.slug} href={`/markalar/${brand.slug}`}>
                    <Card className="group card-hover cursor-pointer border-2 hover:border-vag-blue/30 h-full overflow-hidden flex flex-col">
                      {/* Marka başlık */}
                      <div
                        className="p-6 transition-colors"
                        style={{ backgroundColor: brand.bgColor }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
                          >
                            <BrandLogo slug={brand.slug} name={brand.name} className="h-10 w-10" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                            <p className="text-white/80 text-sm">{brand.models.length}+ model</p>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5 flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {brand.description}
                        </p>

                        {/* Teslimat rozetleri — her markada ikisi de aktif */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-green-100 text-green-700 border border-green-200">
                            <Truck size={12} className="mr-1" /> Kargo
                          </Badge>
                          <Badge className="bg-vag-blue/10 text-vag-blue border border-vag-blue/20">
                            <Store size={12} className="mr-1" /> Mağazadan Teslim
                          </Badge>
                        </div>

                        <div className="mt-auto pt-3 border-t flex items-center justify-between">
                          <span className="text-sm font-semibold text-vag-navy">
                            Parçaları İncele
                          </span>
                          <ChevronRight size={18} className="text-vag-blue group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-vag-navy text-center mb-2">
              Nasıl Çalışır?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              4 adımda aracınıza uygun parça — kargo veya mağazadan teslim.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s) => (
                <Card key={s.title} className="border-2 hover:border-vag-blue/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-vag-blue flex items-center justify-center mb-4">
                      <s.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-vag-navy mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mağaza Konumu + Kargo süreleri */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Mağazadan teslim — adres */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-3 flex items-center gap-3">
                  <Navigation className="text-vag-blue" /> Mağaza Konumu
                </h2>
                <p className="text-muted-foreground mb-6">
                  Gel-al siparişleriniz için mağazamız Ankara İvedik Sanayi Bölgesi’nde.
                </p>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-vag-blue flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-vag-navy">Adres</p>
                        <p className="text-sm text-muted-foreground">
                          İvedik Sanayi Bölgesi, Altındağ / Ankara
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarDays className="text-vag-blue flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-vag-navy">Çalışma Saatleri</p>
                        <p className="text-sm text-muted-foreground">
                          Pazartesi – Cumartesi, 09:00 – 18:00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-vag-blue flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-vag-navy">Telefon</p>
                        <a href="tel:+903123940525" className="text-sm text-vag-blue hover:underline">
                          0312 394 05 25
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/905439792013?text=Merhaba,%20mağazadan%20teslim%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        <MessageCircle size={18} /> Gel-Al Siparişi Başlat
                      </button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Kargo teslimat süreleri */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-3 flex items-center gap-3">
                  <Truck className="text-vag-blue" /> Kargo Teslimat Süreleri
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ankara’dan yola çıkan parçalar bölgeye göre ortalama şu sürede teslim edilir.
                </p>
                <div className="space-y-3">
                  {cities.map((c) => (
                    <div key={c.region} className="flex items-center justify-between p-4 bg-vag-light rounded-xl">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-vag-blue flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-vag-navy">{c.region}</p>
                          <p className="text-xs text-muted-foreground">{c.cities}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 whitespace-nowrap">
                        <Clock size={12} /> {c.days}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-vag-navy text-center mb-8">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-vag-navy mb-2 flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-vag-navy py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck size={40} className="text-vag-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Parçanız Hazır — Kargo veya Mağazadan
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              VIN numaranızı gönderin; marka ve modelinize uygun parçayı tespit edip size en uygun
              teslimat seçeneğini birlikte belirleyelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/905439792013?text=Merhaba,%20VIN%20numaramla%20parça%20tespiti%20yapmak%20istiyorum." target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  <MessageCircle size={18} /> WhatsApp ile Yazın
                </button>
              </a>
              <Link href="/urunler">
                <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  <Package size={18} /> Ürünleri İncele
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  )
}
