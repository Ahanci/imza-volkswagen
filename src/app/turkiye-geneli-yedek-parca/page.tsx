import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Truck, MapPin, MessageCircle, Phone, CheckCircle2, ShieldCheck,
  Clock, Package, CreditCard, Search, ClipboardCheck, Boxes,
} from 'lucide-react'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://imzayedekparca.com'

const title = 'Türkiye Geneli VAG Yedek Parça Tedarigi ve Kargo | İmza Volkswagen'
const description =
  "Ankara İvedik'ten tüm Türkiye'ye Volkswagen, Audi, Seat, Skoda, Cupra, Porsche yedek parça kargosu. VIN ile doğru parça tespiti, aynı gün sevkiyat, 1-3 iş günü teslimat. WhatsApp'tan teklif alın."

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
    title: '1. WhatsApp / Telefon',
    desc: 'VIN (şase) numaranız ve ihtiyacınız olan parçayı bize iletin. 7/24 mesaj alıyoruz.',
  },
  {
    icon: Search,
    title: '2. Doğru Parça Tespiti',
    desc: 'VIN üzerinden tam uyumlu parçayı (orijinal/yan sanayi) tespit eder, fiyat ve stok bildiririz.',
  },
  {
    icon: ClipboardCheck,
    title: '3. Sipariş & Faturalama',
    desc: 'Onayınız sonrası faturalı sipariş oluşturulur. Nakit, havale veya kredi kartı.',
  },
  {
    icon: Truck,
    title: '4. Kargo & Teslimat',
    desc: 'Aynı gün sevkiyat. Barın, MNG, Aras, Yurtiçi ile 1-3 iş gününde kapınızda.',
  },
]

const cities = [
  { region: 'Marmara', cities: 'İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ', days: '1-2 iş günü' },
  { region: 'Ege', cities: 'İzmir, Manisa, Aydın, Denizli, Muğla', days: '1-2 iş günü' },
  { region: 'Akdeniz', cities: 'Antalya, Adana, Mersin, Hatay, Isparta', days: '2-3 iş günü' },
  { region: 'İç Anadolu', cities: 'Ankara, Konya, Kayseri, Eskişehir, Samsun', days: '1-2 iş günü' },
  { region: 'Karadeniz', cities: 'Trabzon, Samsun, Ordu, Zonguldak, Giresun', days: '2-3 iş günü' },
  { region: 'Doğu & Güneydoğu', cities: 'Erzurum, Gaziantep, Diyarbakır, Van, Şanlıurfa', days: '2-4 iş günü' },
]

const advantages = [
  { icon: ShieldCheck, title: 'Orijinal + Yan Sanayi', desc: 'Her iki seçenek de stokta, faturalı ve garantili.' },
  { icon: Search, title: 'VIN ile Uyum Garantisi', desc: 'Şase numarasıyla %100 doğru parça tespiti — ücretsiz.' },
  { icon: Boxes, title: 'Geniş Stok', desc: 'İvedik deposunda 20.000+ VAG parçası anlık sevke hazır.' },
  { icon: Truck, title: 'Aynı Gün Sevkiyat', desc: "Saat 16:00'a kadar onaylanan siparişler aynı gün kargoda." },
  { icon: CreditCard, title: 'Kolay Ödeme', desc: 'Havale/EFT, kredi kartı ve ticari hesap seçenekleri.' },
  { icon: Clock, title: '20+ Yıl Tecrübe', desc: 'Sadece VAG grubuna uzmanız — yanlış parça yok.' },
]

const faqs = [
  {
    q: "Türkiye'nin her yerine kargo gönderiyor musunuz?",
    a: "Evet. Ankara İvedik'ten 81 ile VAG grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça kargosu yapıyoruz. Tahmini teslimat 1-4 iş günü arasındadır.",
  },
  {
    q: 'Doğru parçayı nasıl bulacağım?',
    a: "VIN (şase) numaranızı WhatsApp'tan göndermeniz yeterli. VIN üzerinden aracınızın tam uyumlu parçasını tespit ederiz. Bu hizmet tamamen ücretsizdir ve yanlış parça riskini ortadan kaldırır.",
  },
  {
    q: 'Kargo ücretini kim ödüyor, hangi kargo firmalarıyla çalışıyorsunuz?',
    a: 'Kargo ücreti alıcıya aittir; Barın, MNG, Aras ve Yurtiçi Kargo ile gönderim yapıyoruz. Sipariş onayında kargo tutarı netleşir; isterseniz kapıda ödeme seçeneği de sunulabilir.',
  },
  {
    q: 'Sadece orijinal (OEM) parça mı satıyorsunuz?',
    a: 'Hem orijinal (OEM) hem de yüksek kaliteli yan sanayi (OEE) parça sunuyoruz. Bütçenize ve tercihinize göre her iki seçeneği de stoktan sunabiliyoruz. Çıkma/hurda parça satışımız yoktur.',
  },
  {
    q: 'Garanti ve iade nasıl işliyor?',
    a: 'Tüm parçalar faturalı ve 1-2 yıl arası garantilidir (parça tipine göre). Vin ile yanlış sipariş edilse bile önceden bildirilen uyum bilgisi dışında sorun yaşarsanız iade/değişim yapıyoruz.',
  },
]

export default function TurkiyeGeneliPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'VAG Grubu Yedek Parça Tedarigi ve Türkiye Geneli Kargo',
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
                Ankara'dan Tüm Türkiye'ye VAG Yedek Parça
              </h1>
              <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için orijinal ve yan
                sanayi yedek parça. VIN ile doğru parça tespiti, aynı gün sevkiyat, 1-3 iş gününde
                kapınızda. Nerede olursanız olun, İmza Volkswagen kalitesi kapınıza gelir.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://wa.me/905439792013?text=Merhaba,%20Türkiye%20geneli%20yedek%20parça%20teklifi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
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

        {/* Nasıl Çalışır */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-vag-navy text-center mb-2">
              Nasıl Çalışır?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              4 basit adımda aracınıza uygun yedek parça, kapınıza teslim.
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

        {/* Bölgeler / Teslimat süreleri */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-3">
                  Bölgeye Göre Tahmini Teslimat
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ankara İvedik merkez depomuzdan yola çıkan parçalar, seçilen kargo firmasına göre
                  aşağıdaki sürelerde teslim edilir.
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

              {/* Avantajlar */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-3">
                  Neden İmza Volkswagen?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Sadece VAG grubuna uzmanız. Yanlış parça, gereksiz bekleyiş yok.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((a) => (
                    <div key={a.title} className="p-4 rounded-xl border bg-white">
                      <a.icon className="text-vag-blue mb-2" size={22} />
                      <h3 className="font-semibold text-vag-navy text-sm mb-1">{a.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
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
              <Package size={40} className="text-vag-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Aracınızın Parçası Ankara'da Hazır
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              VIN numaranızı gönderin, doğru parçayı ve en uygun kargo seçeneğini birlikte
              belirleyelim. 81 ilde kapınızdayız.
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
