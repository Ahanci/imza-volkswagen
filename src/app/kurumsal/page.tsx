import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Award, Users, Target, Heart, Shield, Wrench, Sparkles, Building2, Clock,
  CheckCircle2, ArrowRight, MessageCircle, Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurumsal | İmza Volkswagen - VAG Grubu Yedek Parça Uzmanı',
  description:
    'İmza Volkswagen, 20+ yıllık tecrübesiyle VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisidir. Orijinal ve yan sanayi parça, uzman ekip, hızlı teslimat.',
  keywords: [
    'İmza Volkswagen kurumsal', 'VAG yedek parça firması', 'VW parça tedarikçisi',
    'Ankara VAG yedek parça', 'orijinal VAG parça', 'yan sanayi VAG parça',
  ],
  openGraph: {
    title: 'Kurumsal | İmza Volkswagen',
    description: '20+ yıllık VAG Grubu yedek parça tecrübesi. Orijinal ve yan sanayi parça tedariği.',
    type: 'website',
  },
}

const values = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    desc: 'Her parça faturalı, garantili ve VIN ile doğru eşleşme garantili. Yanlış parça göndermiyoruz.',
  },
  {
    icon: Wrench,
    title: 'Uzmanlık',
    desc: '20+ yıl VAG grubu tecrübemizle motor kodu, şase numarası ve uyumluluk tespitinde uzman kadro.',
  },
  {
    icon: Target,
    title: 'Hız',
    desc: 'Stokta olan parçalar aynı gün kargolanır. Acil siparişler için öncelikli tedarik süreci.',
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklılık',
    desc: 'Her müşteriye özel çözüm. Doğru parçayı bulmak için VIN sorgulama ve uzman danışmanlık ücretsiz.',
  },
]

const milestones = [
  { year: '2003', title: 'Kuruluş', desc: 'Ankara\'da küçük bir atölyede VAG grubu yedek parça satışına başlandı.' },
  { year: '2010', title: 'İlk Showroom', desc: 'Daha geniş bir alana taşınılarak showroom ve stok alanı oluşturuldu.' },
  { year: '2015', title: 'OEM Tedarik Ağı', desc: 'VAG network\'üne doğrudan bağlanılarak orijinal parça tedariği başladı.' },
  { year: '2019', title: 'Yan Sanayi Kalite Kontrol', desc: 'Yan sanayi parçalarda (Bosch, ATE, Mahle, Sachs) kalite kontrol süreçleri devreye alındı.' },
  { year: '2023', title: 'Ticari Filo Hizmetleri', desc: 'Küçük/orta ölçekli filo yönetimine yönelik toplu parça tedariği ve öncelikli destek başladı.' },
  { year: '2026', title: '20+ Yıl', desc: '50.000+ müşteri, 100.000+ teslimat, 4.9/5 müşteri memnuniyeti ile yola devam.' },
]

const stats = [
  { value: '20+', label: 'Yıllık Tecrübe' },
  { value: '50K+', label: 'Mutlu Müşteri' },
  { value: '100K+', label: 'Parça Teslimatı' },
  { value: '4.9', label: 'Müşteri Puanı', icon: Sparkles },
]

const team = [
  { name: 'Satış Ekibi', count: '4 uzman', desc: 'VAG grubu yedek parça konusunda eğitimli, telefon/WhatsApp destek.' },
  { name: 'Teknik Ekip', count: '3 mühendis', desc: 'Motor kodu, şase no, parça uyumluluğu sorgulama ve teyit.' },
  { name: 'Lojistik', count: '2 kişi', desc: 'Stok yönetimi, kargo, teslimat takibi.' },
  { name: 'Müşteri Hizmetleri', count: '2 kişi', desc: 'Satış sonrası destek, garanti, iade süreçleri.' },
]

export default function KurumsalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vag-navy via-vag-blue to-blue-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <Building2 size={16} />
                <span>20+ Yıllık VAG Grubu Uzmanlığı</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                İmza Volkswagen
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                2003 yılından bu yana Türkiye'nin önde gelen VAG Grubu
                (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça
                tedarikçilerinden biri olarak hizmet veriyoruz. Orijinal
                ve yüksek kaliteli yan sanayi parça ile müşterilerimizin
                araçlarını güvenle yola çıkarıyoruz.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/iletisim">
                  <button className="inline-flex items-center gap-2 bg-vag-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                    <MessageCircle size={18} />
                    İletişime Geç
                  </button>
                </Link>
                <a href="tel:+905321234567">
                  <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                    <Phone size={18} />
                    Hemen Ara
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-8 bg-vag-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                    {s.value}
                    {s.icon && <s.icon size={24} className="text-yellow-400" />}
                  </p>
                  <p className="text-white/70 text-sm md:text-base mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hakkımızda */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
                  Hakkımızda
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
                  VAG Grubu Parça Tedariğinde 20+ Yıllık Tecrübe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  İmza Volkswagen, Ankara merkezli bir VAG Grubu yedek parça
                  tedarikçisidir. Faaliyet gösterdiğimiz tüm markalar —
                  Volkswagen, Audi, Seat, Skoda, Cupra, Porsche — için orijinal (OEM)
                  ve kaliteli yan sanayi (OEE) parçalar sunuyoruz. Çıkma parça
                  satışımız yoktur.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((v) => (
                  <Card key={v.title} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-vag-blue rounded-xl flex items-center justify-center mb-4">
                        <v.icon size={24} className="text-vag-blue" />
                      </div>
                      <h3 className="font-bold text-lg text-vag-navy mb-2">{v.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Misyon & Vizyon */}
        <section className="py-16 bg-vag-light/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <Target size={32} className="text-vag-blue mb-4" />
                  <h2 className="text-2xl font-bold text-vag-navy mb-3">Misyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    VAG grubu araç sahiplerine ve servislerine doğru parçayı, doğru fiyata, doğru zamanda ulaştırmak. Her parça için fatura, garanti ve VIN ile doğru eşleşme garantisi vermek.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <Sparkles size={32} className="text-vag-blue mb-4" />
                  <h2 className="text-2xl font-bold text-vag-navy mb-3">Vizyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Türkiye'nin VAG grubu yedek parça alanında referans firması olmak. Dijitalleşme, AI destekli parça sorgulama ve müşteri deneyimi ile sektöre öncülük etmek.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Yolculuk (Timeline) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
                  Yolculuğumuz
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
                  20+ Yıllık Birikim
                </h2>
                <p className="text-muted-foreground text-lg">
                  Küçük bir atölyeden Türkiye'nin önde gelen VAG yedek parça tedarikçilerinden birine.
                </p>
              </div>

              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-vag-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {m.year}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 flex-1 bg-vag-blue/20 mt-2 min-h-[40px]" />
                      )}
                    </div>
                    <Card className="flex-1 border-0 shadow-sm">
                      <CardContent className="p-5">
                        <h3 className="font-bold text-vag-navy mb-1">{m.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ekip */}
        <section className="py-16 md:py-20 bg-vag-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
                  Ekibimiz
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
                  VAG Uzmanı 11 Kişilik Kadro
                </h2>
                <p className="text-muted-foreground text-lg">
                  Satış, teknik destek, lojistik ve müşteri hizmetleri — her biri kendi alanında uzman.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((t) => (
                  <Card key={t.name} className="border-0 shadow-sm text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-vag-navy to-vag-blue flex items-center justify-center mb-4">
                        <Users size={28} className="text-white" />
                      </div>
                      <h3 className="font-bold text-vag-navy mb-1">{t.name}</h3>
                      <Badge variant="secondary" className="mb-3 text-xs">{t.count}</Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sertifikalar / Sözümüz */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award size={48} className="text-vag-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-vag-navy mb-6">
                Sözümüz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  'Her parça faturalı ve garantili',
                  'VIN ile doğru parça eşleşmesi garantili',
                  'Çıkma / hurda parça satmıyoruz',
                  'Yalnızca kanıtlanmış markalar (Bosch, ATE, Mahle, Sachs, Hella)',
                  'Müşteri memnuniyetsizliğinde iade/değişim garantisi',
                  'Şeffaf fiyatlandırma, gizli ücret yok',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-br from-vag-navy to-vag-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Sorunuz mu Var? Hemen Ulaşın
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Aracınızın parça ihtiyacı için bizimle iletişime geçin. Uzman ekibimiz VIN numaranızla doğru parçayı tespit etsin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <button className="inline-flex items-center gap-2 bg-white text-vag-navy hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-colors">
                  <MessageCircle size={18} />
                  İletişim Sayfası
                  <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+905321234567">
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                  <Phone size={18} />
                  +90 532 123 45 67
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
