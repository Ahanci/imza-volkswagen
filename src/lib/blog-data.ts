// Blog verileri

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  author: string
  authorRole: string
  publishedAt: string
  readTime: number
  image?: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'Volkswagen Golf 8 Fren Sistemi Bakım Rehberi',
    slug: 'volkswagen-golf-8-fren-sistemi-bakim-rehberi',
    excerpt: 'Golf 8\'inizin fren sisteminin ömrünü uzatmak ve güvenli sürüş sağlamak için bilmeniz gereken her şey bu rehberde.',
    content: `
## Volkswagen Golf 8 Fren Sistemi Bakım Rehberi

Volkswagen Golf 8, modern fren teknolojisi ile donatılmış olsa da, düzenli bakım hayati önem taşır. Bu rehberde, fren sisteminizin ömrünü nasıl uzatabileceğinizi ve ne zaman parça değişimi yapmanız gerektiğini öğreneceksiniz.

### Fren Diskleri Ne Zaman Değişmelidir?

Fren disklerinin ömrü sürüş tarzına, yol koşullarına ve kullanılan malzeme kalitesine göre değişir. Genel olarak:
- **Ön fren diskleri**: 40.000 - 60.000 km arası
- **Arka fren diskleri**: 60.000 - 80.000 km arası

### Fren Balatalarının Ömür Belirtileri

Fren balalarınızın değişim zamanı geldiğini gösteren işaretler:
- Uzun fren mesafesi
- Frenden gürültü veya vızıltı gelmesi
- Fren pedalında titreme
- Balata kalınlığının 3mm altına düşmesi

### DSG ve Manuel Vites Farkları

Manuel vitesli araçlarda balata ömrü genelde daha uzundur çünkü motor freni daha sık kullanılır. DSG araçlarda ise balatalar daha hızlı aşınır.

### Orijinal vs Yan Sanayi Parça

Orijinal VW parçaları fabrika standartlarında üretilirken, kaliteli yan sanayi parçalar da uygun fiyat alternatifi sunar. **İmza Volkswagen** olarak her iki seçeneği de stoklarımızda bulunduruyoruz.

### Bakım İpuçları

1. **Düzenli kontrol**: Her 10.000 km'de fren sistemi kontrolü yaptırın
2. **Sakin sürüş**: Aniden sert frenlemekten kaçının
3. **Kaliteli parça**: Ucuz kalitesiz parçalardan uzak durun
4. **Uzman montaj**: Fren sistem mutlaka uzman tarafından monte edilmelidir

---

*Bu rehber bilgilendirme amaçlıdır. Fren sistemi ile ilgili her türlü işlem için yetkili servislere başvurmanızı öneririz.*
    `,
    category: 'Bakım Rehberi',
    categorySlug: 'bakim',
    author: 'İmza Volkswagen',
    authorRole: 'Teknik Ekip',
    publishedAt: '2024-12-15',
    readTime: 5,
    tags: ['Volkswagen', 'Golf 8', 'Fren', 'Bakım']
  },
  {
    id: 'blog-002',
    title: 'Audi Matrix LED Far Teknolojisi ve Avantajları',
    slug: 'audi-matrix-led-far-teknolojisi-avantajlari',
    excerpt: 'Audi\'nin devrim niteliğindeki Matrix LED far teknolojisinin çalışma prensibi ve diğer far sistemlerine göre avantajlarını keşfedin.',
    content: `
## Audi Matrix LED Far Teknolojisi

Audi, otomotiv endüstrisinde aydınlatma teknolojilerinin öncüsüdür. Matrix LED teknolojisi, gece sürüş güvenliğinde devrim yaratan bir yeniliktir.

### Matrix LED Nedir?

Matrix LED far sistemi, tek bir ışık kaynağı yerine birden fazla bağımsız LED segmentinden oluşur. Bu sayede:
- Karşıdan gelen araçları kör etmeden uzun far kullanımı
- Dinamik köşe aydınlatması
- Trafik levhası aydınlatması
- Kötü hava koşullarında otomatik optimizasyon

### Çalışma Prensibi

Sistem, ön kameradan gelen verileri anlık olarak işler ve LED segmentlerini milisaniyeler içinde kontrol eder. Bu sayede ışık dağılımı sürekli optimize edilir.

### Hangi Audi Modellerinde Var?

- A4 B9 (opsiyonel/standart)
- A6 C8
- Q5 FY
- Q7 4M
- e-tron serisi
- A8 D5 (Digital Matrix LED)

### Bakım ve Onarım

Matrix LED sistemleri hassas elektronik bileşenler içerir. Onarım mutlaka uzman ekipman gerektirir. **İmza Volkswagen** olarak orijinal Audi Matrix LED modülleri ve uzman montaj hizmeti sunuyoruz.

### Maliyet Değerlendirmesi

Matrix LED farlar standart halojen veya xenon farlara göre daha pahalıdır ancak:
- Daha iyi gece görüşü = daha güvenli sürüş
- Daha uzun ömür (LED\'ler daha dayanıklı)
- Araç değerini koruma
    `,
    category: 'Teknoloji',
    categorySlug: 'teknoloji',
    author: 'İmza Volkswagen',
    authorRole: 'Teknik Ekip',
    publishedAt: '2024-12-10',
    readTime: 7,
    tags: ['Audi', 'LED', 'Matrix', 'Teknoloji', 'Aydınlatma']
  },
  {
    id: 'blog-003',
    title: 'Cupra Performans Parçaları ile Aracınızı Güçlendirin',
    slug: 'cupra-performans-parcalari-ile-aracinizi-guclendirin',
    excerpt: 'Formentor veya Cupra Leon sahipleri için performans artırıcı parça seçenekleri ve montaj rehberi.',
    content: `
## Cupra Performans Parçaları Rehberi

Cupra, VAG Grubu\'nun performans odaklı markasıdır. Standart Cupra modelleri zaten güçlü olsa da, performans tutkunları için daha fazlası mümkün.

### Popüler Performans Yükseltmeleri

#### 1. Sport Süspansiyon Sistemleri
- **Coilover Kitleri**: Yükseklik + Sertlik ayarlanabilir
- **Kısa Yay Setleri**: 30-50 mm düşürme
- **Performans Amortisörler**: Daha iyi yol tutuşu

#### 2. Fren Sistemi Yükseltmeleri
- **Brembo 4-Piston Kaliperler**: Daha iyi fren gücü
- **Delikli/Yivli Diskler**: Isı dağıtımını artırır
- **Performans Balataları**: Daha yüksek sıcaklık toleransı

#### 3. Egzoz Sistemleri
- **Sport Egzoz**: Daha sportif ses
- **Downpipe**: Daha iyi egzoz akışı
- **Cat-back Sistem**: Katalitik konvertör sonrası

#### 4. Motor Performansı
- **Hava Filtresi**: %25 daha yüksek akış
- **Intercooler Upgrade**: Daha iyi soğutma
- **Remap Hazırlığı**: Modifiyeye uygun parçalar

### Dikkat Edilmesi Gerekenler

1. **Garanti**: Modifikasyonlar garantiyi etkileyebilir
2. **TÜV/Onay**: Trafiğe uygunluk belgesi şart
3. **Uzman Montaj**: Performans parçaları profesyonel montaj ister
4. **Denge**: Tüm sistem uyumlu olmalı

### İmza Volkswagen\'den Destek

Cupra performans parçalarını stoklarımızda bulabilirsiniz. Uzman ekibimiz size doğru seçimlerde yardımcı olur.
    `,
    category: 'Performans',
    categorySlug: 'performans',
    author: 'İmza Volkswagen',
    authorRole: 'Performans Ekibi',
    publishedAt: '2024-12-05',
    readTime: 6,
    tags: ['Cupra', 'Performans', 'Modifikasyon', 'Formentor', 'Leon']
  },
  {
    id: 'blog-004',
    title: 'Skoda Octavia 4 Turbo Şarj Cihazı Sorunları ve Çözümleri',
    slug: 'skoda-octavia-4-turbo-sorunlari-cozumleri',
    excerpt: 'Octavia 4\'te karşılaşılan yaygın turbo sorunları, belirtileri ve çözüm yolları hakkında kapsamlı bilgi.',
    content: `
## Skoda Octavia 4 Turbo Sorunları ve Çözümleri

Skoda Octavia 4 (NX) EA888 motor ailesini kullanır ve turbo şarj cihazı bu motorun kalbidir. İşte bilmeniz gerekenler.

### Yaygın Turbo Sorunları

#### 1. Turbo Gecikmesi (Turbo Lag)
**Belirti**: Gaz pedalına basıldığında güç gecikmeli gelir  
**Neden**: Wastegate contası, boost basınç sensörü  
**Çözüm**: Kontroller ve gerekirse parça değişimi

#### 2. Yağ Kaçağı
**Belirti**: Motordan mavi duman, yağ seviyesi düşüşü  
**Neden**: Turbo yağ contaları, return hattı  
**Çözüm**: Conta/hortum değişimi

#### 3. Turbodan Anormal Ses
**Belirti**: Vızıltı, ıslık sesi veya metalik ses  
**Neden**: Rulman aşınması, çark hasarı  
**Çözüm**: Turbo revizyon veya değişim

### Turbo Ömrünü Uzatmak İçin İpuçları

1. **Isınma**: Soğuk motorda yüksek devirden kaçının
2. **Soğutma**: Sürüş sonrası turbo soğuması için bekleme
3. **Yağ Bakımı**: Zamanında yağ değişi ve kaliteli yağ kullanımı
4. **Hava Filtresi**: Temiz hava filtresi turboya temiz hava sağlar

### Ne Zaman Turbo Değişmelidir?

- Rulman hasarı durumunda (tamir ekonomik değil)
- Çarpma/kaza sonrası hasar
- Yüksek kilometre (>200.000 km) + sorunlu çalışma

### Orijinal vs Yan Sanayi Turbo

| Özellik | Orijinal | Yan Sanayi |
|---------|----------|------------|
| Fiyat | Yüksek | Orta |
| Kalite | Garantili | Markaya göre değişir |
| Garanti | 2 yıl | 1 yıl |
| Uyum | Mükemmel | Genellikle iyi |

**İmza Volkswagen** olarak hem orijinal hem de kaliteli yan sanayi turbo seçenekleri sunuyoruz.
    `,
    category: 'Troubleshooting',
    categorySlug: 'sorun-cozumu',
    author: 'İmza Volkswagen',
    authorRole: 'Teknik Ekip',
    publishedAt: '2024-11-28',
    readTime: 8,
    tags: ['Skoda', 'Octavia', 'Turbo', 'Motor', 'Sorun Çözümü']
  },
  {
    id: 'blog-005',
    title: 'Seat Leon Debriyaj Sistemi Bilmeniz Gerekenler',
    slug: 'seat-leon-debriyaj-sistemi-bilmeniz-gerekenler',
    excerpt: 'Seat Leon debriyaj sistemi nasıl çalışır? DSG ve manuel vites farkları nelerdir? Tüm detaylar bu yazıda.',
    content: `
## Seat Leon Debriyaj Sistemi Rehberi

Debriyaj, motor gücünü şanzımana ileten kritik bir bileşendir. Seat Leon\'da iki farklı debriyaj türü bulunur:

### Manuel Debriyaj

**Çalışma Prensibi:**
- Debriyaj pedalı basılınca baskı plakası serbest kalır
- Disk serbest kalır, güç aktarımı kesilir
- Pedal bırakılınca yay basıncla disk sıkıştırılır

**Yaşam Ömrü:** 80.000 - 150.000 km (sürüş tarzına bağlı)

**Değişim Belirtileri:**
- Pedal yüksekliği arttı
- Vites zor giriyor
- Hızlanırken devir yükseliyor ama araç hızlanmıyor
- Debriyajdan kokuyor (yanmış kokusu)

### DSG Debriyaj (Otomatik)

**Çalışma Prensibi:**
- Çift kavrama (Dry clutch - kuru veya Wet clutch - yağlı)
- Hidrolik aktüatör kontrolü
- Yazılım yönetimli vites değişimi

**DSG Türleri:**
- **DQ200/DQ250**: Kuru kavrama (1.0-1.4 TSI)
- **DQ381/DQ500**: Yağlı kavrama (1.8-2.0 TSI, performans)

**Mekatronik Ünite:**
DSG\'nin beynidir. En sık arızalanan bileşendir:
- Debriyaj sensörleri
- Konum sensörleri
- Elektronik kontrol kartı

### Bakım Önerileri

1. **Yarı Debriyajdan Kaçın**: Kırmızı ışıklarda debriyaja basılı beklemeyin
2. **Yokuş Kalkış**: El freni kullanın, debriyajı "tutmak" mayın
3. **DSG Yağı**: Her 60.000 km\'de değiştirilmeli
4. **Adaptasyon**: Batarya kesildikten sonra DSG adaptasyonu yapılmalı

### Fiyatlandırma

| Parça | Manuel | DSG |
|-------|--------|-----|
| Debriyaj Seti | ₺3.000 - ₺6.000 | - |
| Mekatronik | - | ₺15.000 - ₺25.000 |
| DSG Yağı + Filtre | - | ₺1.500 - ₺2.500 |
| Debriyaj Diski (DSG) | - | ₺4.000 - ₺8.000 |

*Fiyatlar tahminidir, model yıla göre değişebilir.*
    `,
    category: 'Eğitim',
    categorySlug: 'egitim',
    author: 'İmza Volkswagen',
    authorRole: 'Teknik Ekip',
    publishedAt: '2024-11-20',
    readTime: 9,
    tags: ['Seat', 'Leon', 'Debriyaj', 'DSG', 'Şanzıman']
  },
  {
    id: 'blog-006',
    title: 'Kış Mevsiminde Araç Bakımı: Kontrol Listesi',
    slug: 'kis-mevsiminde-arac-bakimi-kontrol-listesi',
    excerpt: 'Kışa hazırlanırken aracınızda yapmanız gereken bakımlar ve dikkat edilmesi gereken noktalar.',
    content: `
## Kış Mevsimi Araç Bakım Rehberi

Türkiye\'de kış aylarında özellikle iç bölgelerde sıfırın altı sıcaklıklar görülüyor. Aracınızı kışa hazırlamak için bu kontrol listesini kullanın.

### Motor ve Soğutma Sistemi

#### Antifriz Kontrolü ✓
- **Donma noktası**: -35°C altı olmalı
- **Oran**: Genellikle %50 su +%50 antifriz
- **Test**: Refraktometre ile ölçüm yapın

#### Motor Yağı
- Kış için daha ince viskozite önerilir (5W-30 yerine 0W-20)
- Uzun süre kullanılmayan araçlarda yağ değişimi şart

#### Akü Durumu
- Soğukta akü performansı %30 düşer
- Yaşlı aküler (3+ yıl) test edilmeli
- Terminal temizliği ve sıkılığı kontrol edilmeli

### Elektrik Sistemi

#### Farlar
- Tüm farların çalıştığından emin olun
- Sis lambaları kritik önem taşıyor
- LED farlar daha iyi aydınlatma sağlar

#### Silecekler
- Silecek lastikleri kontrol edin (yılda 1 değişim)
- Suyuna kış sıvısı ekleyin (-10°C koruma)

### Lastikler

#### Kış Lastiği Zorunluluğu
- Bazı illerde zorunlu (Ardahan, Erzurum vb.)
- **Derinlik**: Minimum 4mm (yaz lastiği 1.6mm)
- **Yaş**: 5+ yaşındaki lastikler sertleşir

#### Lastik Basıncı
- Soğukta basınç düşer
- Her 10°C düşüşte ~0.1 bar düşüş
- Üretici önerilerine uyun

### Fren Sistemi

- Fren balataları kış öncesi kontrol edilmeli
- Fren suyu nem oranı test edilmeli (%3 altı)
- ABS ve ESP sistemleri çalışmalı

### Kış Paketi (Araçta Bulundurun)

- [ ] Takoz
- [ ] Fener reflektörü
- [ ] Atkı, eldiven, battaniye
- [ ] Kar küreği
- [ ] Acil durum kiti
- [ ] Powerbank / telefon şarj aleti

### Özel Uyarılar

⚠️ **LPG\'li Araçlar**: Soğukta LPG başlamayabilir, benzinle başlatın  
⚠️ **Dizeller**: Soğukta zor çalışır, buji kontrolü önemli  
⚠️ **Elektrikli Araçlar**: Menzil soğukta %20-30 azalır

---

*Kış bakımınız için gerekli tüm parçaları **İmza Volkswagen**'den temin edebilirsiniz.*
    `,
    category: 'Bakım Rehberi',
    categorySlug: 'bakim',
    author: 'İmza Volkswagen',
    authorRole: 'Teknik Ekip',
    publishedAt: '2024-11-15',
    readTime: 6,
    tags: ['Kış', 'Bakım', 'Lastik', 'Akü', 'Antifriz']
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(p => p.categorySlug === categorySlug)
}

export function getAllCategories(): {name: string, slug: string, count: number}[] {
  const catMap = new Map<string, {name: string, slug: string, count: number}>()
  
  blogPosts.forEach(p => {
    if (catMap.has(p.categorySlug)) {
      catMap.get(p.categorySlug)!.count++
    } else {
      catMap.set(p.categorySlug, { name: p.category, slug: p.categorySlug, count: 1 })
    }
  })
  
  return Array.from(catMap.values())
}
