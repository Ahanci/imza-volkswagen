import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Wrench, MapPin, Phone, MessageCircle, CheckCircle2, Clock, Shield,
  Calendar, AlertCircle, Award, Truck, Sparkles, Car, Package,
} from 'lucide-react'
import { brands, getAllBrands, type PeriyodikPaket } from '@/lib/brands-data'

export const metadata: Metadata = {
  title: 'VAG Periyodik Bakım Paketleri | İmza Volkswagen - Ankara İvedik',
  description:
    'VW, Audi, Seat, Skoda, Cupra, Porsche araçlarınız için periyodik bakım paketleri. Motor yağı, filtre, fren balata, triger seti — Ankara İvedik stoklu, orijinal ve yan sanayi.',
  keywords: [
    'periyodik bakım paketi', 'VW periyodik bakım', 'Audi bakım paketi', 'Seat bakım',
    'Skoda periyodik bakım', 'VAG bakım paketi Ankara', 'fren balata paketi',
    'yağ filtresi paketi', 'triger seti Ankara', 'periyodik bakım fiyat',
  ],
  openGraph: {
    title: 'VAG Periyodik Bakım Paketleri | İmza Volkswagen',
    description: 'VW, Audi, Seat, Skoda, Cupra, Porsche için periyodik bakım paketleri. Ankara İvedik stoklu.',
    type: 'website',
  },
}

const paketAciklama = {
  mini: 'Temel motor yağı ve filtre değişimi. Aracınızın sağlığı için en temel bakım.',
  standart: 'Periyodik filtre seti + fren kontrolü. Çoğu araç için yıllık önerilen paket.',
  genis: 'Tam periyodik bakım. Fren hidroliği ve buji dahil komple paket.',
  triger: 'Kritik triger kayışı/zinciri değişimi. Motor ömrü için şart.',
}

export default function PeriyodikBakimPage() {
  const tumMarkalar = getAllBrands()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-vag-navy via-vag-blue to-blue-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                <MapPin size={16} />
                <span>Ankara İvedik Stoklu • Aynı Gün Kargo</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                VAG Periyodik Bakım Paketleri
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için
                <strong> 4 kategoride periyodik bakım paketi</strong>: Mini (15.000 km),
                Standart (30.000 km), Geniş (60.000 km) ve Triger (90.000-120.000 km).
                Tüm parçalar <strong>Ankara İvedik stoklu</strong>, orijinal ve yan sanayi seçenekleriyle.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#paketler">
                  <button className="inline-flex items-center gap-2 bg-vag-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                    <Package size={18} />
                    Paketleri İncele
                  </button>
                </a>
                <a
                  href={`https://wa.me/9054349792013?text=Merhaba, VAG periyodik bakım paketi hakkında teklif almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                    <MessageCircle size={18} />
                    WhatsApp Teklif
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bilgi Çubuğu */}
        <section className="py-6 bg-vag-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <MapPin size={20} className="text-yellow-400" />
                <p className="text-sm font-semibold">Ankara İvedik</p>
                <p className="text-xs text-white/70">Stoktan teslim</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck size={20} className="text-yellow-400" />
                <p className="text-sm font-semibold">Aynı Gün Kargo</p>
                <p className="text-xs text-white/70">Türkiye geneline</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Shield size={20} className="text-yellow-400" />
                <p className="text-sm font-semibold">Faturalı + Garantili</p>
                <p className="text-xs text-white/70">1-2 yıl garanti</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <AlertCircle size={20} className="text-yellow-400" />
                <p className="text-sm font-semibold">Parça Satışı</p>
                <p className="text-xs text-white/70">Montaj yapmıyoruz</p>
              </div>
            </div>
          </div>
        </section>

        {/* Önemli Not */}
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Önemli Bilgilendirme</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>İmza Volkswagen parça satış firmasıdır, montaj veya servis hizmeti vermemektedir.</strong> Periyodik bakım paketlerimiz parçaları içerir; montaj için yetkili veya bağımsız bir VAG servisiyle çalışmanızı öneriyoruz. WhatsApp'tan teklif alırken aracınızın şase numarasını (VIN) gönderin, doğru parça eşleşmesi yapalım.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marka Bazlı Paketler */}
        <section id="paketler" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
                Marka Seçin
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
                Aracınız İçin Periyodik Bakım Paketi
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Markanızı seçin, kilometre aralığınıza uygun paketi inceleyin. Tüm parçalar stoklarımızda, WhatsApp'tan fiyat teklifi alabilirsiniz.
              </p>
            </div>

            {tumMarkalar.map((brand) => (
              <div key={brand.slug} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{ backgroundColor: brand.bgColor }}
                  >
                    {brand.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-vag-navy">{brand.name} Bakım Paketleri</h3>
                    <p className="text-sm text-muted-foreground">
                      {brand.description}
                    </p>
                  </div>
                  <Link
                    href={`/markalar/${brand.slug}`}
                    className="ml-auto hidden md:block"
                  >
                    <Button variant="outline" size="sm">
                      Tüm {brand.name} Parçaları →
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {brand.periyodikPaketleri.map((paket) => (
                    <PeriyodikPaketCard
                      key={paket.id}
                      paket={paket}
                      brandName={brand.name}
                      brandColor={brand.bgColor}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bilgi Bloğu — Hangi KM'de Ne Değişmeli */}
        <section className="py-12 md:py-16 bg-vag-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-8 text-center">
                VAG Periyodik Bakım Takvimi
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-vag-navy text-white">
                      <th className="text-left p-4 font-semibold">Kilometre</th>
                      <th className="text-left p-4 font-semibold">Yapılacak İşlem</th>
                      <th className="text-left p-4 font-semibold hidden md:table-cell">Paket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { km: '15.000 km', islem: 'Motor yağı + yağ filtresi', paket: 'Mini' },
                      { km: '30.000 km', islem: 'Hava, polen filtresi, fren balata kontrolü', paket: 'Standart' },
                      { km: '60.000 km', islem: 'Yakıt filtresi, fren hidroliği, buji değişimi', paket: 'Geniş' },
                      { km: '90.000 – 120.000 km', islem: 'Triger seti (kayış/zincir), soğutma sıvısı', paket: 'Triger' },
                      { km: 'Yıllık', islem: 'Genel kontrol, silecek, fren diski kalınlık ölçümü', paket: 'Yıllık Kontrol' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-semibold text-vag-navy whitespace-nowrap">{row.km}</td>
                        <td className="p-4 text-sm text-muted-foreground">{row.islem}</td>
                        <td className="p-4 hidden md:table-cell">
                          <Badge variant="secondary">{row.paket}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-vag-navy mb-8 text-center">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Periyodik bakım paketine montaj dahil mi?',
                    a: 'Hayır. İmza Volkswagen parça satış firmasıdır. Paketlerimiz sadece parçaları içerir. Montaj için yetkili veya bağımsız bir VAG servisine başvurmanızı öneriyoruz.',
                  },
                  {
                    q: 'Orijinal mi yan sanayi mi seçmeliyim?',
                    a: 'Güvenlik parçaları (fren balata, triger seti) için orijinal veya kaliteli yan sanayi (Bosch, ATE, INA, Contitech) öneriyoruz. Bakım parçaları (yağ filtresi, hava filtresi) için kaliteli yan sanayi yeterli. Bütçenize göre danışmanlık için WhatsApp\'tan yazın.',
                  },
                  {
                    q: 'Fiyat teklifi nasıl alırım?',
                    a: 'WhatsApp +90 543 979 20 13 üzerinden aracınızın markasını, modelini ve kilometresini gönderin, aynı gün içinde fiyat teklifi gönderelim.',
                  },
                  {
                    q: 'Stokta yoksa ne kadar beklerim?',
                    a: 'Stokta olan parçalar aynı gün kargolanır. Stok dışı parçalar için 2-5 iş günü içerisinde tedarik sağlanır. Ankara dışına kargo ile gönderim yapılır.',
                  },
                  {
                    q: 'Periyodik bakım paketi garanti kapsamında mı?',
                    a: 'Tüm parçalarımız faturalı ve garantilidir. Orijinal parçalarda 2 yıl, yan sanayi parçalarda 1 yıl garanti sunulur.',
                  },
                ].map((faq, i) => (
                  <Card key={i} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-vag-navy mb-2">S: {faq.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-vag-blue">C:</span> {faq.a}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-br from-vag-navy to-vag-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <Sparkles size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Aracınız İçin Tam Parça Listesi
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              WhatsApp'tan şase numaranızı (VIN) gönderin. Aracınıza özel parça listesini ve fiyat teklifini aynı gün için.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/9054349792013?text=Merhaba, periyodik bakım paketi için teklif almak istiyorum. VIN:"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 gap-2">
                  <MessageCircle size={18} />
                  WhatsApp Teklif Al
                </Button>
              </a>
              <a href="tel:+9054349792013">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white gap-2">
                  <Phone size={18} />
                  +90 543 979 20 13
                </Button>
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

// Periyodik paket kartı (server component, tek başına export)
function PeriyodikPaketCard({
  paket,
  brandName,
  brandColor,
}: {
  paket: PeriyodikPaket
  brandName: string
  brandColor: string
}) {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: brandColor }}
      />
      <CardContent className="p-5 pt-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-vag-navy">{paket.ad}</h4>
          <Badge variant="secondary" className="text-xs">{paket.etiket}</Badge>
        </div>
        <p className="text-xs text-vag-blue font-semibold mb-2">{paket.km}</p>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {paket.aciklama}
        </p>
        <ul className="space-y-1 mb-4 text-xs">
          {paket.parcalar.slice(0, 4).map((parca, i) => (
            <li key={i} className="flex items-start gap-1.5 text-muted-foreground">
              <CheckCircle2 size={11} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{parca.ad}</span>
            </li>
          ))}
          {paket.parcalar.length > 4 && (
            <li className="text-xs text-muted-foreground pl-4">
              +{paket.parcalar.length - 4} parça daha
            </li>
          )}
        </ul>
        <div className="flex gap-2">
          <a
            href={`https://wa.me/9054349792013?text=${encodeURIComponent(brandName + ' ' + paket.ad + ' (' + paket.km + ') paketi için teklif almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full inline-flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1.5 rounded-md text-xs font-semibold transition-colors">
              WhatsApp
            </button>
          </a>
          <a href="tel:+9054349792013" className="flex-1">
            <button className="w-full inline-flex items-center justify-center gap-1 bg-vag-blue hover:bg-blue-700 text-white px-2 py-1.5 rounded-md text-xs font-semibold transition-colors">
              Ara
            </button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
