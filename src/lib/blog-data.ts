// Blog verileri
// Toplam 31 makale — İmza Volkswagen VAG grubu yedek parça tanıtım
// AI/Answer Engine Optimization (AEO) için FAQ + tablo + açık cevap yapısında
// Not: blog-004 (Skoda Octavia Turbo Troubleshooting) kaldırıldı, yerine blog-032 (turbo parça satışı) eklendi.

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

export const blogPosts: BlogPost[] = ([

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
  ,
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
  ,
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
  ,
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
,
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
  },
  ,
  {
    id: 'blog-007',
    title: "Volkswagen Yedek Parça Rehberi: Orijinal ve Yan Sanayi Farkı",
    slug: 'volkswagen-yedek-parca-rehberi-orijinal-ve-yan-sanayi-farki',
    excerpt: "Volkswagen yedek parça alırken orijinal ve yan sanayi arasındaki farkları, parça kodu sorgulamayı ve Ankara'da güvenilir tedarikçi seçimini öğrenin.",
    content: `## Volkswagen Yedek Parça Alırken Dikkat Edilmesi Gerekenler

Volkswagen, Türkiye'de en çok tercih edilen otomobil markalarından biridir. Golf, Polo, Passat, Jetta, Caddy, Transporter, Tiguan ve Touareg gibi modellerin geniş kullanıcı kitlesi, **volkswagen yedek parça** talebini her geçen gün artırıyor. Bu rehberde Volkswagen yedek parça seçerken dikkat etmeniz gereken tüm kriterleri, sık değişen parça gruplarını ve doğru tedarikçi seçiminin önemini anlatacağız.

## orijinal ve yan sanayi Parça Farkı

Volkswagen parça ihtiyacınızda karşınıza üç ana seçenek çıkar ve bu üçünü birbirine karıştırmak en sık yapılan hatalardan biridir.

**Orijinal (OEM) parça:** Volkswagen'in kendi logosu ve parça kodu ile gelen, üretici onaylı parçalardır. Garanti kapsamındadır, araç performansını ve güvenliğini korur. Fiyatı en yüksek olan seçenektir ancak uzun ömürlüdür.

**yan sanayi parça:** Hurda veya kazalı araçlardan sökülen, orijinal üretilmiş ikinci el parçalardır. Fiyat avantajı sunar; ancak alırken mutlaka garanti belgesi ve fatura ile birlikte alınmalıdır.

**Aftermarket parça:** Üçüncü parti üreticiler tarafından üretilen uyumlu parçalardır. Üst düzey OEE kaliteden ucuz Çin üretimine kadar geniş bir yelpazeye sahiptir. Fiyatı düşüktür ancak kalite markadan markaya çok değişir.

Doğru seçim, parçanın kritikliğine bağlıdır. Fren, hava yastığı, direksiyon, triger gibi güvenlik parçalarında her zaman orijinal tercih edilmelidir. Kapı paneli, bagaj rafları, trim parçaları gibi kozmetik ürünlerde yan sanayi veya aftermarket seçenekleri mantıklıdır.

## Volkswagen Parça Kodu ve VIN ile Sorgulama

Volkswagen yedek parça alırken en kritik nokta, aracınızın şasi numarası (VIN) ile parça sorgulamaktır. Volkswagen, aynı model içinde bile farklı üretim dönemlerinde farklı parçalar kullanır. Örneğin 2010 üretim bir Polo ile 2015 üretim bir Polo'nun fren balatası, motor kelepçesi veya silecek kolu farklı olabilir.

Volkswagen parça kodu genellikle şu formatlardadır:

- **PR kodu** (örnek: 1K0 698 151 F) — Üç harfli model ailesi kodu + rakam grubu + revizyon harfi
- İlk harf grubu model ailesini ifade eder: **1K** = Golf 5/Jetta 5, **1H** = Golf 3, **5G** = Golf 7, **6R** = Polo 6R
- Sonundaki harf revizyonu belirtir; bu harf değişse parça uyumlu olmayabilir

Şasi numaranız (VIN) olmadan sipariş verdiğinizde yanlış parça gelme riski çok yüksektir. Bu nedenle VIN'in 17 haneli kodunu parçacınızla mutlaka paylaşın.

## Sık Değişen Volkswagen Yedek Parçaları

Servis istatistiklerine göre en sık değiştirilen Volkswagen yedek parçaları şunlardır:

1. **Fren balata ve disk** — 30.000-60.000 km arası
2. **Triger zinciri/kayışı** — 80.000-120.000 km
3. **Yağ ve hava filtresi** — Her bakımda
4. **Debriyaj seti (manuel)** — 100.000-150.000 km
5. **DSG mekatronik ve debriyaj** — 100.000+ km
6. **Amortisör ve salıncak** — 80.000+ km
7. **Akü** — 3-5 yıl
8. **Rot başı ve rotili** — 60.000-100.000 km
9. **Egzoz ve katalitik konvertör** — 120.000+ km
10. **Silecek ve far** — Yıllık bakım

## Ankara'da Volkswagen Parça Tedariği

Volkswagen parça arayışında Ankara, geniş oto sanayi bölgeleriyle (İskitler, İvedik, OSTİM) önemli bir merkezdir. Ancak doğru parça, uygun fiyat ve garantili tedarik için firmayı iyi seçmek gerekir. **İmza Volkswagen** olarak Ankara merkezli tesisimizde Volkswagen grubunun tüm modelleri için orijinal ve yüksek kaliteli yan sanayi parça seçeneklerini VIN ile sorgulayarak sunuyoruz. Böylece yanlış parça gönderme riskini tamamen ortadan kaldırıyoruz; her sipariş faturalı ve garantili şekilde teslim edilir.

## Sonuç

Volkswagen yedek parça alırken en düşük fiyat yerine doğru parçayı önceliklendirmek, uzun vadede hem cebinizi hem de aracınızı korur. VIN ile parça sorgulama yapın, orijinal/yan sanayi/aftermarket farkını bilin ve güvenilir bir tedarikçiden alım yapın. Ankara'da İmza Volkswagen, VAG grubu uzmanlığıyla bu ihtiyacınızı tek elden, hızlı ve güvenilir biçimde karşılar.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 8,
    tags: ['Volkswagen', 'Yedek Parça', 'Orijinal', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-008',
    title: "Audi Yedek Parça Alırken Dikkat Edilmesi Gerekenler",
    slug: 'audi-yedek-parca-alirken-dikkat-edilmesi-gerekenler',
    excerpt: "Audi yedek parça seçiminde orijinal OEM kodu, VAG ortak platform avantajı ve sık değişen parçalar hakkında bilmeniz gereken her şey.",
    content: `## Audi Yedek Parça Seçimi: Bilinçli Alım Rehberi

Audi, premium segmentin en köklü markalarından biridir ve Türkiye'de özellikle A serisi (A1, A3, A4, A6, A8) ile Q serisi (Q2, Q3, Q5, Q7, Q8) modelleriyle geniş bir kullanıcı kitlesine sahiptir. Premium bir marka olduğu için **audi yedek parça** arayışında doğru parçayı seçmek, hem sürüş konforunuzu hem de aracınızın değerini doğrudan etkiler. Bu yazıda Audi parça alırken bilmeniz gereken tüm detayları ele alacağız.

## Audi ve VAG Ortak Platform Mantığı

Audi, Volkswagen Grubu'nun (VAG) bir parçasıdır ve bu nedenle birçok parça diğer VAG markalarıyla (VW, Seat, Skoda) ortaktır. Bu durum Audi sahipleri için hem avant hem dezavantaj yaratır.

**Avantajları:**
- Aynı platformdaki modellerde parça fiyatları daha uygundur
- Parça bulunabilirliği yüksektir
- Teknik servis altyapısı yaygındır

**Örnek ortak platformlar:**
- Audi A3 8L = Volkswagen Golf 4 = Seat Leon 1 = Skoda Octavia 1
- Audi A3 8V = VW Golf 7 = Seat Leon 3 = Skoda Octavia 3
- Audi TT = VW Golf platformu
- Audi Q3 = VW Tiguan

Yani Seat veya Golf parçası ile Audi parçası çoğu zaman birebir aynıdır; sadece kutu ve logo farklıdır. Bu durum bilinçli alıcılar için ciddi fiyat avantajı sağlar.

## Orijinal Audi Parça Kodu (Teilenummer)

Audi yedek parçalarında her parçanın 11 haneli bir orijinal kodu vardır (örnek: **8K0 698 103 A**). Bu kodun yapısı:

- İlk 3 hane (8K0) → model serisi (A4 B8 ailesi)
- Orta 3 hane (698) → parça grubu
- Son harf (A) → revizyon

Audi'de aynı model içinde bile farklı donanım seviyeleri (S-Line, Design, Sport) için farklı parçalar kullanılır. Örneğin standart A4 ile S-Line A4'ün ön tamponu, farı ve sanitye farklıdır. Bu yüzden sipariş verirken VIN (şasi numarası) ile sorgulama yapmak şarttır.

## Sık Değişen Audi Yedek Parçaları

Audi sahiplerinin en sık ihtiyaç duyduğu yedek parçalar:

1. **Fren balata ve disk** — Sport sürüş tercih edildiği için daha hızlı aşınır
2. **Turbo** — TFSI motorlarda 120.000+ km sonrasında dikkat ister
3. **Yağ pompası ve zincir gerdiri** — 2.0 TFSI motorlarda kritik
4. **DSG mekatronik** — S-Tronic şanzımanlarda 100.000+ km
5. **Matrix LED far modülleri** — Hassas elektronik
6. **Multimedik (MMI) ekran** — Dokunmatik hassasiyet kaybı
7. **Su pompası ve termostat** — Her 80.000 km'de
8. **Egzoz manifold contası** — TDI motorlarda yaygın
9. **Direksiyon rampası (EPS)** — Yağ sızıntısı durumunda
10. **Salıncak burcu ve rot başı** — Sport süspansiyonda hızlı aşınır

## Orijinal mi yan sanayi mı Aftermarket mi?

Audi gibi premium bir markada parça seçiminde şu prensibi benimsemek gerekir:

- **Güvenlik parçaları** (fren, hava yastığı, direksiyon, süspansiyon) → mutlaka orijinal
- **Elektronik modüller** (MMI, far kontrol ünitesi) → orijinal veya garantili yan sanayi
- **Kaporta parçaları** (tampon, çamurluk, kapı) → orijinal veya kaliteli aftermarket
- **Motor contaları** → orijinal tercih edilmeli
- **Trim ve iç aksesuar** → yan sanayi rahatlıkla kullanılabilir

## Ankara'da Audi Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da, Audi'nin tüm modelleri (A1, A3, A4, A5, A6, A7, A8, Q2, Q3, Q5, Q7, Q8, TT) için orijinal ve kaliteli yan sanayi parça seçeneklerini stoğumuzda bulunduruyoruz. VIN ile sorgulama yaparak aracınıza birebir uygun parçayı tespit ediyor; faturalı, garantili ve hızlı kargoyla Türkiye'nin her yerine gönderiyoruz. Audi sahiplerinin ihtiyaç duyduğu tüm parçaları tek elden karşılamak için uzman ekibimiz hazır.

## Sonuç

Audi yedek parça alırken VAG ortak platform mantığını anlamak, parça kodunu doğru okumak ve güvenilir bir tedarikçiyle çalışmak çok önemlidir. Ankara'da İmza Volkswagen, Audi uzmanlığıyla her bütçeye uygun, garantili çözümler sunar.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 9,
    tags: ['Audi', 'Yedek Parça', 'VAG', 'Orijinal', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-009',
    title: "Skoda Yedek Parça Rehberi: Model Bazlı Seçim ve Fiyat",
    slug: 'skoda-yedek-parca-rehberi-model-bazli-secim-ve-fiyat',
    excerpt: "Skoda yedek parça alırken dikkat edilecek noktalar, octavia/fabia/superb model bazlı seçim ve orijinal parça fiyat listesi hakkında rehber.",
    content: `## Skoda Yedek Parça: Uzmanlık Rehberi

Skoda, son yıllarda Türkiye'de popülerliği hızla artan bir markadır. Octavia, Fabia, Superb, Scala, Kamiq, Karoq ve Kodiaq modelleriyle hem aile hem de ticari kullanımda tercih ediliyor. **Skoda yedek parça** talebi de bu yükselişle paralel olarak artıyor. Bu yazıda Skoda parça seçerken bilmeniz gereken tüm detayları paylaşacağız.

## Skoda'nın Avantajı: VAG Platformu ve Uygun Fiyat

Skoda'nın en büyük avantajı, VAG grubunun bir parçası olmasıdır. Yani teknik altyapı Volkswagen, Audi ve Seat ile aynıdır; ancak fiyat politikası daha uygundur. Bu durum yedek parça tarafında da geçerlidir:

- Skoda Octavia'nın motoru ve şanzımanı VW Golf ile birebir aynıdır
- Skoda Fabia'nın platformu VW Polo ile ortaktır
- Skoda Superb'da kullanılan 2.0 TDI ve 2.0 TSI motorlar Audi A4/A6 ile aynıdır

Bu nedenle "skoda orjinal yedek parça fiyat listesi" ararken aslında çoğu zaman VW veya Audi parçasıyla karşılaşırsınız. Doğru parça kodunu biliyorsanız alternatif markalardan da aynı parçayı daha uygun fiyata bulabilirsiniz.

## Model Bazlı Skoda Yedek Parça

### Skoda Octavia Yedek Parça

Octavia, Türkiye'de en çok satan Skoda modelidir ve yedek parça bulunabilirliği en yüksek olan modeldir.

- **Octavia Tour (1U)** — 1996-2010: Klasik model, parça fiyatı uygundur
- **Octavia 2 (1Z)** — 2004-2013: En yaygın ikinci el model
- **Octavia 3 (5E)** — 2013-2020: Modern platform, bol parça
- **Octavia 4 (NX)** — 2020-: Güncel model, orijinal parça ağırlıklı

Sık değişen parçalar: fren balata/disk, turbo, DSG mekatronik, salıncak burcu, triger zinciri.

### Skoda Fabia Yedek Parça

Fabia, küçük sınıfın en mantıklı tercihlerinden biridir.

- **Fabia 1 (6Y)** — 1999-2007
- **Fabia 2 (5J)** — 2007-2014
- **Fabia 3 (NJ)** — 2014-2021
- **Fabia 4 (PJ)** — 2022-:

Fabia için en sık talep edilen parçalar: kol dayama, far, tampon, silecek, fren seti, yağ filtresi.

### Skoda Superb Yedek Parça

Üst segment Superb'da daha çok orijinal parça tercih edilmelidir:

- **Superb 1** — 2001-2008: Passat B5 platformu
- **Superb 2 (3T)** — 2008-2015: Passat B6/B7 platformu
- **Superb 3 (3V)** — 2015-2024: Passat B8 platformu
- **Superb 4** — 2024-: En güncel

### SUV Modeller (Karoq, Kodiaq, Kamiq)

Bu modeller relatively yenidir; genelde orijinal parça tercih edilir. Tiguan ve Atlas ile ortak parça kullanır.

## Skoda Favorit, Forman, Felicia: Klasik Modeller

Skoda'nın klasik modelleri için parça bulunması daha zordur ama imkansız değildir. **Skoda favorit yedek parça**, **skoda forman yedek parça** ve **skoda felicia yedek parça** talepleri özellikle koleksiyoncular ve klasik araç tutkunları tarafından sıkça geliyor. Bu modellerde parça kodu yerine görsel eşleştirme daha sık kullanılır.

## Orijinal Skoda Parça Fiyat Listesi

Skoda orijinal yedek parça fiyatları, model ve yıla göre büyük farklılık gösterir. Genel bir referans olarak:

| Parça | Octavia (TL) | Fabia (TL) | Superb (TL) |
|-------|-------------|-----------|-------------|
| Ön fren seti | 2.500-5.000 | 1.800-3.500 | 3.500-6.500 |
| Triger zinciri | 4.000-8.000 | 3.000-6.000 | 5.000-10.000 |
| Turbo (TSI) | 12.000-25.000 | 9.000-18.000 | 15.000-30.000 |
| Far (LED) | 8.000-18.000 | 5.000-12.000 | 12.000-25.000 |
| DSG yağı seti | 1.500-2.500 | 1.200-2.200 | 1.800-3.000 |

*Fiyatlar tahmini olup, piyasa ve döviz kuruyla değişebilir.*

## Ankara'da Skoda Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara merkezli tesisimizde Skoda'nın tüm modelleri için orijinal ve kaliteli yan sanayi yedek parça stoğu bulunduruyoruz. Octavia, Fabia, Superb, Kamiq, Karoq, Kodiaq ve hatta klasik Favorit/Forman/Felicia modelleri için parça tedarik ediyoruz. VIN ile sorgulama yapıyoruz; faturalı ve garantili satış yapıyoruz. Skoda parça ihtiyacınızda Ankara'da tek adres olarak hizmet veriyoruz.

## Sonuç

Skoda yedek parça arayışında VAG ortak platform avantajını kullanmak, doğru parça kodunu bilmek ve güvenilir bir tedarikçiyle çalışmak hem cebinizi hem de aracınızı korur. İmza Volkswagen olarak tüm Skoda modelleri için hızlı, güvenilir ve uygun fiyatlı çözümler sunuyoruz.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Skoda', 'Yedek Parça', 'Octavia', 'Fabia', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-010',
    title: "Seat Yedek Parça Seçimi: Fiyat, Kalite ve Modeller",
    slug: 'seat-yedek-parca-secimi-fiyat-kalite-ve-modeller',
    excerpt: "Seat yedek parça alırken Leon, Ibiza, Cordoba ve Ateca modelleri için bilmeniz gerekenler. Orijinal ve yan sanayi parça karşılaştırması.",
    content: `## Seat Yedek Parça: Kapsamlı Seçim Rehberi

Seat, İspanyol kökenli ama VAG grubuna ait bir marka olarak Türkiye'de özellikle genç sürücüler arasında popüler. Leon, Ibiza, Cordoba, Toledo, Ateca, Arona ve Leon Cupra modelleri yollarda sıkça görülüyor. **Seat yedek parça** talebi de her geçen gün artıyor. Bu yazıda Seat sahipleri için kapsamlı bir parça seçim rehberi hazırladık.

## Seat ve VAG Bağlantısı

Seat, 1986'dan beri Volkswagen Grubu'nün bir parçasıdır ve tüm Seat modelleri VW grubu platformlarını kullanır. Bu durum Seat yedek parça arayanlar için büyük bir avantajdır:

- **Seat Leon** = VW Golf = Audi A3 = Skoda Octavia (aynı platform)
- **Seat Ibiza** = VW Polo = Audi A1 (aynı platform)
- **Seat Ateca** = VW Tiguan = Skoda Karoq (aynı platform)
- **Seat Toledo** = Skoda Rapid = VW Virtus (aynı platform)

Aynı parça kodu Seat, VW ve Skoda'da birebir aynı olduğu için parça bulunabilirliği çok yüksektir. Bu da fiyatları aşağı çeker.

## Model Bazlı Seat Yedek Parça

### Seat Leon Yedek Parça

Leon, Seat'ın en popüler modelidir. Üç jenerasyonu yollarda yoğun olarak bulunur:

- **Leon 1 (Mk1)** — 1999-2005: Golf 4 platformu
- **Leon 2 (Mk2)** — 2005-2012: Golf 5 platformu
- **Leon 3 (Mk3)** — 2012-2020: Golf 7 platformu
- **Leon 4 (Mk4)** — 2020-: Golf 8 platformu

En sık değişen parçalar: fren, turbo, salıncak, debriyaj/DSG, triger, kol dayama, kapı aynası.

### Seat Ibiza Yedek Parça

Ibiza, küçük sınıf hatchback olarak gençler arasında çok tercih edilir:

- **Ibiza 3 (6L)** — 2002-2008: Polo 9N ile ortak
- **Ibiza 4 (6J)** — 2008-2017: Polo 6R ile ortak
- **Ibiza 5 (KJ1)** — 2017-: Polo AW ile ortak

### Seat Cordoba Yedek Parça

Cordoba, Ibiza'nın sedan versiyonudur. 1993-2009 yılları arasında üretilmiştir ve hâlâ çok sayıda kullanıcısı vardır. Özellikle 1.4 ve 1.6 benzinli motorlu modelleri için parça bulunabilirliği yüksektir.

### Seat Ateca, Arona SUV Modeller

Daha yeni modeller olduğu için orijinal parça ağırlıklı çalışmak daha mantıklıdır. Tiguan ve Karoq ile ortak parça kullanır.

## Seat Parça Seçiminde Dikkat Edilecek Noktalar

1. **Parça kodunu mutlaka isteyin** — Seat parçaları 11 haneli orijinal kodla gelir (örn: 5P0 698 103)
2. **VIN ile sorgulama** — Şasi numarası olmadan sipariş vermeyin
3. **Donanım seviyesi kontrolü** — FR, Style, Reference gibi farklı donanımlar için parça farklı olabilir
4. **Garanti belgesi** — yan sanayi parça olsa dahi mutlaka garanti isteyin
5. **Faturalı alım** — İleride sorun yaşarsanız faturanız olması gerekir

## Sık Değişen Seat Parçaları

| Parça | Ömür (km) | Tahmini Fiyat (TL) |
|-------|-----------|---------------------|
| Ön fren seti | 35.000-50.000 | 2.000-4.500 |
| Arka fren seti | 60.000-80.000 | 1.500-3.500 |
| Triger zinciri | 90.000-120.000 | 4.000-8.000 |
| Turbo (1.4 TSI) | 110.000+ | 12.000-22.000 |
| DSG yağı seti | 60.000 | 1.500-2.500 |
| Kol dayama | - | 400-1.200 |
| Kapı aynası | - | 1.500-4.500 |

*Fiyatlar tahmini olup piyasa koşullarına göre değişir.*

## Orijinal mi yan sanayi mı Aftermarket mi?

Seat için parça seçiminde şu strateji mantıklıdır:

- **Güvenlik parçaları** (fren, süspansiyon, hava yastığı) → Orijinal
- **Kaporta parçaları** (tampon, çamurluk, ayna) → yan sanayi veya orijinal
- **Motor parçaları** → Orijinal tercih edilmeli
- **İç trim parçaları** → yan sanayi rahatlıkla kullanılabilir

## Ankara'da Seat Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara merkezli tesisimizde Seat'ın tüm modelleri için yedek parça stoğu bulunduruyoruz. Leon, Ibiza, Cordoba, Toledo, Ateca, Arona, Exeo ve hatta Cupra modelleri için orijinal ve kaliteli yan sanayi seçenekler sunuyoruz. VIN ile sorgulama yapıyor, faturalı ve garantili satış yapıyoruz. Türkiye'nin her yerine hızlı kargo imkânıyla Seat parça ihtiyacınızı tek elden karşılıyoruz.

## Sonuç

Seat yedek parça arayışında VAG ortak platform avantajını kullanmak, doğru parça kodunu öğrenmek ve güvenilir bir tedarikçiyle çalışmak çok önemlidir. İmza Volkswagen olarak Ankara'da tüm Seat modelleri için uygun fiyatlı, hızlı ve garantili çözümler sunuyoruz.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 9,
    tags: ['Seat', 'Yedek Parça', 'Leon', 'Ibiza', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-011',
    title: "Ankara Volkswagen Parçacı Seçimi: Doğru Tedarikçi Nasıl Bulunur?",
    slug: 'ankara-volkswagen-parcaci-secimi-dogru-tedarikci-nasil-bulunur',
    excerpt: "Ankara'da Volkswagen parçacı seçerken güvenilir, garantili ve uygun fiyatlı bir tedarikçi bulmak için dikkat edilmesi gereken 10 kritik kriter.",
    content: `## Ankara Volkswagen Parçacı: Doğru Seçim Nasıl Yapılır?

Volkswagen araç sahiplerinin en sık arayışlarından biri **volkswagen parçacı** konusudur. Ankara, oto sanayi bölgeleri açısından zengin bir şehir olsa da her parçacının aynı kalitede hizmet vermediğini bilmek önemlidir. Bu yazıda Ankara'da Volkswagen parçacı seçerken dikkat etmeniz gereken kriterleri ve doğru tedarikçinin nasıl bulunacağını anlatacağız.

## Ankara Oto Sanayi Bölgeleri

Ankara'da yedek parça tedariği için başlıca bölgeler şunlardır:

- **İskitler Oto Sanayi** — Şehir merkezine yakın, en köklü bölge
- **İvedik Oto Sanayi** — Eskişehir yolu üzerinde, modern tesisler
- **OSTİM** — Organize sanayi, daha çok üretim odaklı
- **Sincan Oto Sanayi** — Batı Ankara için pratik
- **Etlik / Keçiören civarı** — Yerel ölçekli parçacılar

Her bölgede onlarca parçacı bulunur; ancak kalite, fiyat ve güvenilirlik açısından aralarında büyük fark vardır.

## Doğru Volkswagen Parçacıda Olması Gereken 10 Kriter

### 1. VIN ile Parça Sorgulama Yapabiliyor Olması

Profesyonel bir parçacı, sizden şasi numarası (VIN) alır ve bu numara üzerinden aracınıza birebir uygun parçayı tespit eder. VIN ile sorgulama yapmayan bir parçacı, "evet uyar" diyerek yanlış parça gönderebilir.

### 2. orijinal ve yan sanayi Seçenek Sunması

İyi bir parçacı her bütçeye uygun seçenek sunar. Sadece tek bir kategori satan bir parçacı, ihtiyacınıza değil stokuna göre satış yapar.

### 3. Faturalı Satış

Fatura, hem iade hem garanti hem de yasal haklarınız için şarttır. Faturasız satış yapan parçacılardan uzak durun.

### 4. Garanti Verilmesi

Özellikle yan sanayi parçalarda garanti şarttır. Garanti veremeyen bir parçacı, parçanın kalitesine güvenmiyor demektir.

### 5. Uzmanlaşmış Olması

VAG grubu (Volkswagen, Audi, Skoda, Seat, Porsche, Cupra) uzmanlaşmış bir parçacı, her markadan biraz bilen bir parçacının önüne geçer. Volkswagen grubunun parça kodlama mantığı, motor aileleri ve platform ortaklıkları karmaşıktır.

### 6. Geniş Stok ve Hızlı Tedarik

Sık değişen parçaları stokta bulunduran bir parçacı, siparişinizi aynı gün gönderir. Özel parçalarda bile hızlı tedarik ağı olan bir parçacı tercih edilmelidir.

### 7. Şeffaf Fiyatlandırma

Telefon veya mesajla net fiyat veren, sonradan sürpriz ek ücret çıkarmayan bir parçacı güvenilir parçacıdır.

### 8. Kargo ve Türkiye Geneli Gönderim

Sadece yüz yüze satış yapan parçacılar, acil ihtiyaçlarda yetersiz kalır. Türkiye'nin her yerine kargo yapabilen bir parçacı çok daha avantajlıdır.

### 9. Online İletişim Kolaylığı

WhatsApp, web sitesi, sosyal medya üzerinden hızlı dönüş yapan bir parçacı zaman kazandırır.

### 10. Referanslar ve Yorumlar

Daha önce çalıştığı müşterilerin memnuniyeti, bir parçacının en büyük referansıdır.

## Volkswagen Parçacıda Sık Yapılan Hatalar

- **Sadece fiyat odaklı seçim** — En ucuz parça çoğu zaman yanlış parça veya kalitesiz üründür
- **VIN vermeden sipariş** — Yanlış parça gelme riski %80'dir
- **Faturasız alım** — İleride hiçbir hak iddia edemezsiniz
- **Garanti sormamak** — yan sanayi parçada mutlaka garanti isteyin
- **Marka uzmanlığı kontrol etmemek** — Her markayı "biraz" bilen parçacı zarar verebilir

## İmza Volkswagen: Ankara'nın Volkswagen Parçacı Adresi

**İmza Volkswagen** olarak Ankara'da, VAG grubu (Volkswagen, Audi, Skoda, Seat, Cupra) yedek parça konusunda uzmanlaşmış bir firmayız. Yukarıdaki 10 kriterin hepsini karşılıyoruz:

- VIN ile parça sorgulama yapıyoruz
- orijinal ve kaliteli yan sanayi seçenekler sunuyoruz
- Her satış faturalıdır
- yan sanayi parçalarda garanti veriyoruz
- VAG grubu uzmanıyız
- Geniş stok + hızlı tedarik ağı
- Şeffaf fiyatlandırma
- Türkiye geneli kargo
- WhatsApp ve web üzerinden hızlı iletişim
- Binlerce memnun müşteri referansı

Ankara'da Volkswagen parçacı arayışınızda **İmza Volkswagen** olarak yanınızdayız. Tek mesajla tüm parça ihtiyacınızı karşılıyoruz.

## Sonuç

Ankara'da Volkswagen parçacı seçimi, sadece en uygun fiyatı bulmak değil; doğru parçayı, garantili ve faturalı şekilde almak demektir. Yukarıdaki 10 kritere dikkat ederek güvenilir bir tedarikçi bulabilirsiniz. İmza Volkswagen olarak Ankara'da bu ihtiyacınızı eksiksiz karşılıyoruz.`,
    category: "Eğitim",
    categorySlug: 'egitim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 9,
    tags: ['Volkswagen', 'Parçacı', 'Ankara', 'İskitler', 'İvedik', 'Yan Sanayi']
  },
  {
    id: 'blog-012',
    title: "Volkswagen Polo Yedek Parça: Tüm Jenerasyonlar Rehberi",
    slug: 'volkswagen-polo-yedek-parca-tum-jenerasyonlar-rehberi',
    excerpt: "Polo yedek parça ihtiyacında 6N, 9N, 6R ve AW jenerasyonları için bilmeniz gerekenler. Sık değişen parçalar ve fiyat rehberi.",
    content: `## Volkswagen Polo Yedek Parça Rehberi

Volkswagen Polo, dünyanın en popüler küçük sınıf otomobillerinden biridir ve Türkiye'de de onlarca yıldır tercih ediliyor. 1975'ten bu yana üretilen Polo'nun birçok jenerasyonu yollarda hâlâ aktif olarak kullanılıyor. **Polo yedek parça** talebi de bu sebeple hiç düşmüyor. Bu yazıda Polo'nun tüm jenerasyonları için yedek parça rehberi hazırladık.

## Polo Jenerasyonları ve Parça Farklılıkları

Polo'nun başlıca jenerasyonları Türkiye pazarında şunlardır:

### Polo 6N (3. Jenerasyon) — 1994-2002

Bu jenerasyon Türkiye'de en çok kullanılan klasik Polo'lardan biridir. **98 polo yedek parça**, **97 polo yedek parça**, **2000 polo yedek parça**, **2001 polo yedek parça** aramalarının çoğunluğu bu jenerasyona aittir.

- Motor: 1.0, 1.4, 1.6 benzinli; 1.7, 1.9 SDI/TDI dizel
- Sık değişen: **kol dayama**, egzoz, fren balata, far, tampon, kapı aynası
- Bu jenerasyonda **yan sanayi parça** yaygın ve fiyatı uygundur

### Polo 9N (4. Jenerasyon) — 2001-2009

Polo 6N ile 9N paralel üretildi; 9N daha modern bir tasarıma sahiptir. Seat Ibiza 6L ile ortak platformdur.

- Motor: 1.2, 1.4, 1.6 benzinli; 1.4 TDI, 1.9 TDI dizel
- **2001 polo kol dayama**, **2004 polo yedek parça** talepleri bu jenerasyondadır

### Polo 6R / 6C (5. Jenerasyon) — 2009-2014

Bu jenerasyon en çok tutulan Pololar arasındadır. Modern tasarım, daha güvenli gövde yapısı ve geliştirilmiş motorlar sunar.

- Motor: 1.2 TSI, 1.4 TSI, 1.6 TDI, 1.2 TDI
- Sık parça: turbo, triger zinciri, fren, salıncak, MMI benzeri multimedya

### Polo AW (6. Jenerasyon) — 2017-2024

Güncel Polo jenerasyonudur. Daha çok orijinal parça tercih edilir.

- Motor: 1.0 TSI, 1.5 TSI, 1.6 TDI, 2.0 GTI
- Modern ADAS sensörler, dijital gösterge

### Polo 7 / GTI

Performans odaklı Polo GTI için özel frenler, turbo ve süspansiyon parçaları gerekir.

## Sık Değişen Polo Yedek Parçaları

Polo sahiplerinin en sık ihtiyaç duyduğu parçalar:

1. **Kol dayama** — Polo'nun karakteristik yedek parçası; kapı açıldığında koruma sağlar
2. **Far ve arka lamba seti** — Halojen ve LED seçenekler mevcut
3. **Fren balata ve disk** — Ön 35.000-50.000 km, arka 60.000-80.000 km
4. **Egzoz** — Özellikle 6N ve 9N jenerasyonunda
5. **Triger zinciri** — TSI motorlarda 90.000-120.000 km
6. **Turbo** — TSI motorlarda 110.000+ km
7. **Kapı aynası** — Elektrikli/ısıtmalı seçenekler
8. **Tampon ve çamurluk** — Hasar sonrası
9. **Silecek kolu ve lastiği** — Yıllık bakım
10. **Akü** — 3-5 yıl ömür

## Polo Kol Dayama: En Çok Aranan Parça

**Polo kol dayama orjinal** ve **2013 polo kol dayama**, **2001 polo kol dayama** aramaları Polo yedek parça dünyasının en spesifik taleplerindendir. Kapı açıldığında kapı altına monte edilen, kapı çizilmesini ve ezilmesini önleyen küçük bir parçadır. Her jenerasyonda farklı boyutta üretilir; bu yüzden VIN veya model yılı ile sipariş vermek şarttır.

## yan sanayi mı Orijinal mi?

Polo için parça seçiminde şu strateji mantıklıdır:

- **6N, 9N (1994-2009)** — yan sanayi parça mantıklı, çünkü araç yaşı yüksek
- **6R (2009-2014)** — Karma; güvenlik parçaları orijinal, trim yan sanayi
- **AW (2017+)** — Mümkün olduğunca orijinal tercih edilmeli

## Polo Yedek Parça Fiyat Aralıkları

| Parça | 6N/9N (TL) | 6R (TL) | AW (TL) |
|-------|-----------|---------|---------|
| Kol dayama seti | 150-400 | 250-600 | 400-900 |
| Ön fren seti | 800-1.800 | 1.500-3.000 | 2.000-4.000 |
| Far | 600-1.800 | 1.500-4.000 | 3.000-8.000 |
| Egzoz (komple) | 1.200-2.500 | 2.000-4.500 | 3.000-6.000 |
| Turbo | - | 8.000-15.000 | 12.000-22.000 |

*Fiyatlar tahmini ve referans niteliğindedir.*

## Ankara'da Polo Yedek Parça

**İmza Volkswagen** olarak Ankara'da Polo'nun tüm jenerasyonları için yedek parça stoğu bulunduruyoruz. 6N'den AW'ye kadar her model için orijinal ve kaliteli yan sanayi seçenek sunuyoruz. VIN ile sorgulama yapıyor, faturalı ve garantili satış gerçekleştiriyoruz. Ankara'da Polo parça ihtiyacınız için İmza Volkswagen doğru adres.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Volkswagen', 'Polo', 'Yedek Parça', 'Kol Dayama', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-013',
    title: "Volkswagen Passat Yedek Parça Rehberi: B3'ten B8'e",
    slug: 'volkswagen-passat-yedek-parca-rehberi-b3ten-b8e',
    excerpt: "Passat yedek parça ihtiyacında B3, B4, B5, B6, B7 ve B8 jenerasyonları için bilmeniz gerekenler. Sık değişen parçalar ve tedarik önerileri.",
    content: `## Volkswagen Passat Yedek Parça Rehberi

Volkswagen Passat, orta-üst segmentin en köklü modellerinden biridir. Türkiye'de hem aile hem de kurumsal kullanımda çok tercih edilir. 1973'ten bu yana üretilen Passat'ın birçok jenerasyonu yollarda aktif olarak görev yapıyor. **Passat yedek parça** talebi de bu sebeple sürekli yüksek. Bu yazıda Passat'ın tüm popüler jenerasyonlarını ve parça özelliklerini inceleyeceğiz.

## Passat Jenerasyonları

### Passat B3 / B4 (1988-1996)

Klasik Passat jenerasyonlarından biridir. **1982 passat yedek parça** aramaları bu döneme kadar uzanır. B3 ve B4 paralel olarak değerlendirilir.

- Motor: 1.8, 2.0 benzinli; 1.9 TD/TDI dizel
- Bu jenerasyonda parça bulunabilirliği azalmıştır; özelleşmiş tedarikçi gerekir
- Çoğunlukla yan sanayi parça kullanılır

### Passat B5 / B5.5 (1996-2005)

Bu jenerasyon en uzun ömürlü Passat'lardan biridir. Audi A4 B5 ile platform paylaşır (uzlamalı motor). Skoda Superb 1. nesil de bu platformdadır.

- Motor: 1.6, 1.8T, 2.0, 2.3 V5, 2.8 V6 benzinli; 1.9 TDI, 2.5 V6 TDI dizel
- Sık sorun: yağ pompası, turbo yağ contası, salıncak burcu, ön konsol
- Parça fiyatı: Audi tabanlı olduğu için bir miktar yüksektir

### Passat B6 (2005-2010)

Bu jenerasyon PQ46 platformunu kullanır ve en çok tutulan Passat jenerasyonlarından biridir. Transvers motorlu ilk Passat'tır.

- Motor: 1.6, 1.4 TSI, 1.8 TSI, 2.0 TSI, 3.2 V6 benzinli; 1.9 TDI, 2.0 TDI dizel
- Sık parça: triger zinciri, DSG mekatronik, turbo, direksiyon rampası
- Parça bulunabilirliği çok yüksek

### Passat B7 (2010-2014)

B6'nın makyajlanmış halidir. Mekanik olarak çoğunlukla aynı parçaları kullanır.

- B6 yedek parçalarının %85'i B7 ile uyumludur

### Passat B8 (2014-2023)

MQB platformuna geçilmiş modern Passat'tır. Çok daha hafif, daha güvenli ve daha teknolojik.

- Motor: 1.4 TSI, 2.0 TSI, 2.0 TDI, 2.0 BiTDI
- Yaygın parça: adaptif hız sabitleyeme sensörü, Matrix LED, DSG yağı
- Orijinal parça ağırlıklı çalışılmalı

### Passat B9 (2023-)

En güncel Passat jenerasyonudur. Sadece station wagon (Variant) olarak üretilir.

## Sık Değişen Passat Yedek Parçaları

1. **Fren balata ve disk** — Ön 30.000-50.000 km, arka 60.000-90.000 km
2. **Triger zinciri** — TSI motorlarda 90.000-120.000 km (kritik!)
3. **Turbo** — TSI/TDI motorlarda 130.000+ km
4. **DSG mekatronik** — 100.000+ km
5. **Direksiyon rampası (EPS)** — B6'da yaygın sorun
6. **Yağ pompası** — B5/B6'da kritik
7. **Salıncak burcu** — Ağır araç olduğu için hızlı aşınır
8. **Egzoz ve DPF** — Dizellerde 150.000+ km
9. **Far (Matrix LED)** — B8 ve üzeri modellerde
10. **Multimedya (Discover Pro)** — Dokunmatik hassasiyet kaybı

## Passat için Parça Seçim Stratejisi

- **B3/B4/B5** — Çoğunlukla yan sanayi parça kullanılır; araç yaşı yüksek
- **B6/B7** — Karma; güvenlik parçaları orijinal, trim ve kaporta yan sanayi
- **B8 ve üzeri** — Mümkün olduğunca orijinal tercih edilmeli

## Passat Yedek Parça Fiyat Aralıkları

| Parça | B5 (TL) | B6/B7 (TL) | B8 (TL) |
|-------|---------|-----------|---------|
| Ön fren seti | 1.500-3.000 | 2.000-4.500 | 3.000-6.000 |
| Triger zinciri seti | 3.000-6.000 | 4.000-8.000 | 5.000-10.000 |
| Turbo | 8.000-15.000 | 10.000-20.000 | 15.000-28.000 |
| DSG yağı seti | - | 1.500-2.500 | 1.800-3.000 |
| Direksiyon rampası | 4.000-8.000 | 6.000-12.000 | 8.000-15.000 |
| Far | 800-2.500 | 2.000-6.000 | 6.000-18.000 |

*Fiyatlar tahmini olup, model yıla göre değişir.*

## Ankara'da Passat Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Passat'ın tüm jenerasyonları (B3'ten B9'a) için yedek parça stoğu bulunduruyoruz. Klasik B3/B4 parçalarını bile özel tedarik ağımızla karşılıyoruz. VIN ile sorgulama yapıyor; orijinal ve yan sanayi seçeneklerle her bütçeye uygun çözüm sunuyoruz. Faturalı, garantili ve hızlı kargoyla Türkiye genelinde Passat parça ihtiyacınızı karşılıyoruz.

## Sonuç

Passat yedek parça arayışında jenerasyonu doğru tespit etmek, parça kodunu bilmek ve güvenilir bir tedarikçiyle çalışmak kritik önem taşır. Ankara'da İmza Volkswagen, Passat uzmanlığıyla bu ihtiyacınızı eksiksiz karşılıyor.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Volkswagen', 'Passat', 'Yedek Parça', 'TSI', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-014',
    title: "Volkswagen Golf Yedek Parça: Golf 4'ten Golf 8'e",
    slug: 'volkswagen-golf-yedek-parca-golf-4ten-golf-8e',
    excerpt: "Golf yedek parça alırken Golf 4, 5, 6, 7 ve 8 jenerasyonları için bilmeniz gerekenler. Sık değişen parçalar ve fiyat rehberi.",
    content: `## Volkswagen Golf Yedek Parça Rehberi

Volkswagen Golf, hatchback sınıfın efsanesidir ve Türkiye'de yıllardır en çok tercih edilen C segment araçların başında gelir. 1974'ten bu yana üretilen Golf'un sekiz jenerasyonu vardır ve yollarda hâlâ Golf 4'ten Golf 8'e kadar her jenerasyonu görmek mümkündür. **Golf yedek parça** talebi de bu nedenle çok yüksek. Bu yazıda Golf'un tüm modern jenerasyonlarını inceleyeceğiz.

## Golf Jenerasyonları ve Özellikleri

### Golf 4 (1J) — 1997-2003

Türkiye'de çok sevilen klasik Golf jenerasyonlarından biridir. Audi A3 8L, Seat Leon 1 ve Skoda Octavia 1 ile aynı platformu paylaşır.

- Motor: 1.4, 1.6, 1.8T, 2.0, 2.3 V5, 3.2 R32 benzinli; 1.9 TDI dizel
- Sık parça: turbo (1.9 TDI), fren seti, triger kayışı, far, iç trim
- yan sanayi parça çok yaygın

### Golf 5 (1K) — 2003-2008

PQ35 platformuna geçen ilk Golf'tur. Çok daha modern ve güvenli bir gövdeye sahiptir.

- Motor: 1.4 TSI, 1.6, 1.4 TSI Twincharger, 2.0 TSI, 2.0 GTI, 3.2 R32 benzinli; 1.9 TDI, 2.0 TDI dizel
- **Golf 5 yedek parça** talebi çok yüksektir
- Sık parça: DSG mekatronik, turbo, triger zinciri, fren, salıncak

### Golf 6 (5K) — 2008-2012

Golf 5'in makyajlanmış halidir. Mekanik %90 Golf 5 ile aynıdır.

- Golf 5 parçalarının çoğu Golf 6 ile birebir uyumludur

### Golf 7 (5G/AU) — 2012-2020

MQB platformuna geçen Golf'tur. Daha hafif, daha güvenli ve daha teknolojiktir.

- Motor: 1.0 TSI, 1.2 TSI, 1.4 TSI, 1.5 TSI, 2.0 TSI GTI, 2.0 TSI R, 2.0 TDI dizel
- Modern parçalar: adaptif hız sabitleyeme, Matrix LED, dijital gösterge
- Sık parça: turbo, DSG, fren, salıncak burcu

### Golf 8 (CD) — 2020-2024

Güncel Golf jenerasyonudur. Tam dijital kokpit, çift ekranlı multimedya ve elektrikli Golf seçenekleri (e-Golf, Golf GTE) sunar.

- Modern ADAS sensörler, çift ekran Multimedya
- Orijinal parça ağırlıklı çalışılmalı

### Golf 8.5 (Makyaj 2024-)

Golf 8'in makyajlı versiyonudur ve güncel üretimdir.

## Sık Değişen Golf Yedek Parçaları

1. **Fren balata ve disk** — GTI ve R modellerinde daha hızlı aşınır
2. **Triger zinciri** — 1.4 TSI, 1.8 TSI, 2.0 TSI motorlarda 90.000-120.000 km
3. **Turbo** — TSI/TDI motorlarda 120.000+ km
4. **DSG mekatronik** — 100.000+ km
5. **Yağ separatörü** — TSI motorlarda kritik
6. **Su pompası** — Her 80.000 km'de
7. **Direksiyon rampası** — Ağır sürüş tarzında
8. **Salıncak ve rot başı** — 80.000+ km
9. **Far (LED/Matrix)** — Golf 7 ve sonrasında
10. **Multimedya ekranı** — Golf 7.5 ve sonrasında

## GTI ve R Modelleri için Özel Parçalar

Performans odaklı Golf GTI ve Golf R modelleri için standart Golf parçaları yerine özel parçalar gerekir:

- Daha büyük fren kaliperleri (GTI: 312mm, R: 340mm)
- Daha güçlü turbo (GTI: IS20, R: IS38)
- Sport süspansiyon, daha kısa yaylar
- Daha büyük intercooler
- Egzoz sistemi (cat-back)

## Golf Yedek Parça Fiyat Aralıkları

| Parça | Golf 4/5 (TL) | Golf 6/7 (TL) | Golf 8 (TL) |
|-------|---------------|---------------|-------------|
| Ön fren seti | 1.500-3.000 | 2.000-4.500 | 3.500-7.000 |
| Triger zinciri | 3.500-7.000 | 4.500-9.000 | 5.000-12.000 |
| Turbo (1.4 TSI) | 8.000-14.000 | 10.000-18.000 | 13.000-22.000 |
| Far | 800-2.500 | 2.500-8.000 | 6.000-18.000 |
| DSG yağı seti | 1.500-2.500 | 1.800-3.000 | 2.000-3.500 |
| Multimedya | - | 4.000-12.000 | 8.000-20.000 |

*Fiyatlar tahmini ve referans niteliğindedir.*

## orijinal ve yan sanayi veya Aftermarket?

Golf için parça seçiminde şu strateji önerilir:

- **Golf 4/5** — yan sanayi parça mantıklı (araç yaşı yüksek)
- **Golf 6** — Karma; güvenlik parçaları orijinal
- **Golf 7/8** — Mümkün olduğunca orijinal tercih edilmeli
- **GTI/R modeller** — Mutlaka orijinal performans parçası

## Ankara'da Golf Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Golf'un tüm jenerasyonları için yedek parça stoğu bulunduruyoruz. Golf 4'ten Golf 8'e kadar her model, GTI ve R performans parçaları dahil, VIN ile sorgulanarak tedarik edilir. orijinal ve kaliteli yan sanayi seçeneklerle her bütçeye uygun çözüm sunuyoruz. Ankara'da Golf parça ihtiyacınızda İmza Volkswagen doğru adres; faturalı, garantili ve hızlı kargoyla Türkiye genelinde hizmet veriyoruz.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Volkswagen', 'Golf', 'Yedek Parça', 'GTI', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-015',
    title: "Volkswagen Jetta Yedek Parça: MK2'den MK7'ye Rehber",
    slug: 'volkswagen-jetta-yedek-parca-mk2den-mk7ye-rehber',
    excerpt: "Jetta yedek parça ihtiyacında MK2, MK3, MK4, MK5, MK6 ve MK7 jenerasyonları için bilmeniz gerekenler.",
    content: `## Volkswagen Jetta Yedek Parça Rehberi

Volkswagen Jetta, Golf'ün sedan versiyonu olarak uzun yıllardır Türkiye pazarında popülerdir. Özellikle kurumsal filo ve aile kullanımı için ideal bir seçenektir. 1979'dan bu yana üretilen Jetta'nın yedi jenerasyonu vardır. **Jetta yedek parça** talebi de araç sayısıyla doğru orantılı olarak yüksektir. Bu yazıda Jetta'nın tüm jenerasyonlarını inceleyeceğiz.

## Jetta Jenerasyonları

### Jetta MK2 (2. nesil, 1984-1992)

Klasik Jetta jenerasyonlarından biridir. Golf 2 ile aynı platformu paylaşır. Türkiye'de hâlâ koleksiyonluk olarak kullanılan modelleri mevcuttur.

- Motor: 1.3, 1.6, 1.8 benzinli; 1.6 TD dizel
- Parça bulunabilirliği sınırlı; özel tedarik gerekir

### Jetta MK3 (1H, 1991-1998)

Vento adıyla da bilinen bu jenerasyon, Golf 3 ile aynı platformu kullanır.

- Türkiye pazarında daha az görülür

### Jetta MK4 (1J, 1998-2005)

Bora adıyla piyasaya çıkmış, Golf 4 ile aynı platformu paylaşır. Türkiye'de oldukça popülerdir.

- Motor: 1.4, 1.6, 1.8T, 2.0, 2.3 V5 benzinli; 1.9 TDI dizel
- Sık parça: turbo, fren seti, kapı aynası, trim

### Jetta MK5 (1K, 2005-2010)

Bu jenerason Türkiye'de çok tutulmuştur. **2006 jetta yedek parça** aramalarının önemli kısmı bu jenerasyona aittir.

- Motor: 1.4 TSI, 1.6, 2.0 TSI, 2.0 TDI, 1.9 TDI
- **2006 jetta fren disk fiyatları** sık aratılan bir parçadır
- **2006 jetta yedek parça fiyatları** talebi yüksektir
- Sık parça: DSG mekatronik, turbo, fren disk, triger zinciri

### Jetta MK6 (16, 2010-2018)

Bu jenerasyon en uzun süre üretimde kalan Jetta'lardan biridir. Golf 6/Golf 7 platformlarını kullanır.

- Motor: 1.2 TSI, 1.4 TSI, 1.6, 2.0 TSI, 1.6 TDI, 2.0 TDI
- En çok parça bulunabilir olan jenerasyon

### Jetta MK7 (AU, 2018-2024)

Güncel Jetta jenerasyonudur. MQB platformunu kullanır. Türkiye'ye resmi ithalatı sınırlıdır.

- Daha çok bireysel ithalat yoluyla gelmiştir
- Orijinal parça ağırlıklı çalışılmalı

## Sık Değişen Jetta Yedek Parçaları

Jetta sedan gövdesi ve ağır yapısı nedeniyle şu parçalar hızlı aşınır:

1. **Fren disk ve balata** — Ağır sedan gövdesi freni yorar
2. **Triger zinciri** — TSI motorlarda kritik
3. **Turbo** — 1.4 TSI ve 2.0 TDI'da yaygın
4. **DSG mekatronik** — DSG şanzımanda sık sorun
5. **Salıncak burcu** — Sedan ağırlığı nedeniyle
6. **Amortisör** — 80.000+ km
7. **Klima kompresörü** — 100.000+ km
8. **Direksiyon rampası** — Ağır sürüş tarzında
9. **Egzoz ve susturucu** — Zamanla aşınma
10. **Far ve stop** — Hasar veya donanımsal sorun

## 2006 Jetta Özel Notu

**2006 jetta fren disk fiyatları** Jetta yedek parça aramalarının en spesifik taleplerinden biridir. 2006 model Jetta MK5 için:

- Ön fren diski (tek): 800-1.800 TL
- Arka fren diski (tek): 600-1.400 TL
- Fren balatası (ön takım): 700-1.500 TL
- Komple fren seti (4 teker): 3.500-7.000 TL

*Fiyatlar tahmini olup, marka ve kaliteye göre değişir.*

## Jetta Yedek Parça Fiyat Aralıkları

| Parça | MK4/Bora (TL) | MK5 (TL) | MK6 (TL) |
|-------|---------------|----------|----------|
| Ön fren seti | 1.200-2.500 | 1.800-4.000 | 2.500-5.000 |
| Triger zinciri | 3.000-6.000 | 4.000-8.000 | 5.000-9.500 |
| Turbo | 7.000-13.000 | 9.000-17.000 | 12.000-22.000 |
| Far | 700-2.000 | 1.800-5.000 | 3.000-8.000 |
| Kapı aynası | 600-1.800 | 1.200-3.000 | 1.800-4.500 |

## Orijinal mi yan sanayi mı?

Jetta için parça seçiminde şu yaklaşım önerilir:

- **MK4 (Bora) ve öncesi** — yan sanayi parça mantıklı
- **MK5** — Karma; güvenlik parçaları orijinal, kaporta yan sanayi
- **MK6 ve sonrası** — Orijinal tercih edilmeli

## Ankara'da Jetta Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Jetta'nın tüm jenerasyonları için yedek parça stoğu bulunduruyoruz. MK2'den MK7'ye kadar her model için orijinal ve kaliteli yan sanayi seçenek sunuyoruz. **2006 jetta fren disk fiyatları** dahil tüm spesifik parça taleplerinizi VIN ile sorgulayarak karşılıyoruz. Faturalı, garantili ve hızlı kargoyla Ankara'dan Türkiye genelinde Jetta parça ihtiyacınızı tek elden karşılıyoruz.

## Sonuç

Jetta yedek parça arayışında jenerasyonu doğru tespit etmek, parça kodunu bilmek ve güvenilir bir tedarikçiyle çalışmak kritik önem taşır. Ankara'da İmza Volkswagen, Jetta uzmanlığıyla tüm ihtiyaçlarınızı karşılıyor.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Volkswagen', 'Jetta', 'Yedek Parça', 'MK5', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-016',
    title: "VW Caddy ve Transporter Ticari Araç Yedek Parçaları",
    slug: 'vw-caddy-ve-transporter-ticari-arac-yedek-parcalari',
    excerpt: "Caddy ve Transporter yedek parça ihtiyacında bilmeniz gerekenler. Ticari araç sahipleri için sık değişen parçalar ve tedarik önerileri.",
    content: `## Volkswagen Ticari Araç Yedek Parça Rehberi

Volkswagen ticari araç serisi, Türkiye'de hem KOBİ'ler hem de bireysel kullanıcılar tarafından yoğun olarak tercih ediliyor. **Caddy** küçük van sınıfında, **Transporter (T5, T6, T6.1)** ise büyük van sınıfında lider modellerdir. **Caddy yedek parça** ve **transporter yedek parça** talebi ticari araç sahipliğinin doğası gereği çok yüksektir. Bu yazıda her iki model için kapsamlı bir rehber hazırladık.

## Volkswagen Caddy Yedek Parça

Caddy, küçük işletmeler, kuryeler ve aileler için ideal bir ticari araçtır. Türkiye'de üç ana jenerasyonu yaygındır:

### Caddy 3 (2K, 2004-2020)

Türkiye'de en çok kullanılan Caddy jenerasyonudur. Golf 5 platformunu (PQ35) kullanır.

- Motor: 1.6, 1.4 TSI, 1.6 TDI, 2.0 TDI, 1.9 TDI
- Sık parça: turbo, DSG mekatronik, salıncak, fren, egzoz
- **2008 caddy turbo fiyatları** sık aratılan bir parçadır
- Caddy 3'te turbo özellikle 1.6 TDI ve 2.0 TDI motorlarda 130.000+ km'de sorun çıkarır

### Caddy 4 (SA, 2020-)

Güncel Caddy jenerasyonudur. MQB platformunu kullanır.

- Motor: 1.5 TSI, 2.0 TDI, 1.0 TGI
- Daha modern donanım; orijinal parça ağırlıklı

### Caddy için Sık Değişen Parçalar

1. **Turbo** — Yüksek kilometre ticari kullanımda kritik
2. **DSG mekatronik** — Otomatik şanzımanda yaygın sorun
3. **Fren seti** — Ticari yüke göre daha hızlı aşınır
4. **Salıncak ve rot başı** — Yük taşıdığı için
5. **Amortisör** — 80.000+ km
6. **Egzoz ve DPF** — Dizel modellerde 150.000+ km
7. **Klima kompresörü** — Uzun süreli kullanımda
8. **Debriyaj seti** — Manuel şanzımanda 100.000-150.000 km
9. **Akü** — Start-Stop sistemleri için özel akü
10. **Far ve stop** — LED/yorum halojen seçenekleri

## Volkswagen Transporter Yedek Parça

Transporter, VW'nün ikonik ticari araç serisidir. Türkiye'de T5, T6 ve T6.1 modelleri yoğun olarak kullanılır.

### Transporter T5 (2003-2015)

Türkiye'de en çok bulunan Transporter jenerasyonlarından biridir.

- Motor: 1.9 TDI, 2.0 TDI, 3.2 V6, 2.0 BiTDI, 2.5 TDI
- **Transporter t5 sıfır motor fiyatları** sık aratılan bir aramadır
- Sık parça: turbo, EGR, DPF, DSG mekatronik, salıncak

### Transporter T6 (2015-2019)

T5'in evrimi gibidir; mekanik olarak büyük ölçüde benzer.

- Motor: 2.0 TDI, 2.0 TSI
- Modern multimedya ve güvenlik donanımları

### Transporter T6.1 (2019-2024)

Güncel Transporter jenerasyonudur. Dijital kokpit ve güncel ADAS donanımları mevcuttur.

- Motor: 2.0 TDI
- Multivan California gibi özel versiyonlar

### Transporter için Sık Değişen Parçalar

1. **Motor (komple)** — Yüksek kilometre ticari kullanımda
2. **Turbo** — 2.0 TDI ve 2.5 TDI'da kritik
3. **DSG mekatronik (DQ500)** — 100.000+ km
4. **EGR valfi** — Dizel motorlarda yaygın
5. **DPF** — Dizel partikül filtresi 150.000+ km
6. **Salıncak ve burçlar** — Ağır yük nedeniyle hızlı aşınır
7. **Fren seti** — Geniş gövde, ağır yük
8. **Amortisör** — 80.000-100.000 km
9. **Akü (ikili sistem)** — Ticari donanımlar için
10. **Far (LED matrix)** — T6.1 ve Multivan'da

## Ticari Araçlarda Parça Seçim Stratejisi

Ticari araçlar günde onlarca, bazen yüzlerce kilometre yaptığından parça seçimi farklıdır:

- **Mümkün olduğunca orijinal tercih edilmeli** — Ticari kullanımda arıza = iş kaybı
- **Garanti çok kritik** — Uzun yol ve yük için garanti belgesi şart
- **Faturalı alım** — Kurumsal gider yazma ihtiyacı için
- **Hızlı tedarik** — Araç durduğu her gün gelir kaybıdır
- **Yedek parça stoğu** — Sık değişen parçaları stokta tutmak mantıklı

## Caddy ve Transporter Yedek Parça Fiyatları

| Parça | Caddy 3 (TL) | Caddy 4 (TL) | T5/T6 (TL) |
|-------|--------------|--------------|------------|
| Turbo | 9.000-17.000 | 12.000-22.000 | 14.000-28.000 |
| DSG mekatronik | 8.000-15.000 | 12.000-20.000 | 15.000-28.000 |
| Ön fren seti | 1.500-3.000 | 2.000-4.000 | 2.500-5.000 |
| EGR valfi | 2.500-5.000 | 3.000-6.000 | 4.000-8.000 |
| Komple motor | 35.000-70.000 | 45.000-90.000 | 60.000-140.000 |
| Salıncak burcu seti | 800-1.800 | 1.200-2.500 | 1.500-3.000 |

*Fiyatlar tahmini olup, motor tipi ve modele göre değişir.*

## Ankara'da Caddy ve Transporter Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da hem Caddy hem Transporter için geniş yedek parça stoğu bulunduruyoruz. Ticari araç sahiplerinin zamana duyarlı ihtiyaçlarını biliyoruz; bu yüzden **aynı gün kargo**, VIN ile hızlı parça sorgulama, faturalı ve garantili satış standartlarımızdır. **Transporter t5 sıfır motor fiyatları** ve **2008 caddy turbo fiyatları** dahil tüm spesifik taleplerinizi uzman ekibimizle karşılıyoruz. Ankara'dan Türkiye genelinde ticari araç yedek parça ihtiyacınızı tek elden karşılıyoruz.

## Sonuç

Caddy ve Transporter gibi ticari araçlarda yedek parça seçimi, yol güvenliği ve iş sürekliliği için kritiktir. Doğru parça, garanti ve hızlı tedarik için İmza Volkswagen Ankara'da yanınızda.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Volkswagen', 'Caddy', 'Transporter', 'Ticari Araç', 'Ankara']
  },
  {
    id: 'blog-017',
    title: "Audi A3, A4 ve A6 Yedek Parça Rehberi",
    slug: 'audi-a3-a4-ve-a6-yedek-parca-rehberi',
    excerpt: "Audi A3, A4 ve A6 yedek parça alırken jenerasyon bazlı bilmeniz gerekenler. Sık değişen parçalar ve tedarik önerileri.",
    content: `## Audi A Serisi Yedek Parça Rehberi

Audi'nin A serisi (A3, A4, A6) Türkiye'de en çok tercih edilen Audi modelleridir. **audi a3 yedek parca**, **a4 yedek parça** ve **a6 yedek parça** aramaları premium segmentte en yüksek arama hacmine sahip. Bu yazıda bu üç modeli jenerasyon bazında ele alacağız.

## Audi A3 Yedek Parça

Audi A3, premium kompakt sınıfın lider modellerinden biridir. VW Golf, Seat Leon ve Skoda Octavia ile platform paylaşır.

### A3 8L (1996-2003)

İlk A3 jenerasyonu. Golf 4 ile aynı platform (PQ34).

- Motor: 1.6, 1.8, 1.8T, 1.9 TDI
- Türkiye'de ikinci el pazarında hâlâ bulunur
- yan sanayi parça yaygın

### A3 8P (2003-2013)

Türkiye'de çok popüler bir A3 jenerasyonudur. PQ35 platformu.

- Motor: 1.6, 1.4 TSI, 1.8 TFSI, 2.0 TFSI, 1.6 TDI, 2.0 TDI, 3.2 V6 (S3)
- Sık parça: turbo, triger zinciri, fren, DSG mekatronik
- **1997 model audi a4 yedek parça** ile karıştırılır; A3 için doğru parça kodu şarttır

### A3 8V (2012-2020)

MQB platformuna geçilmiş modern A3.

- Motor: 1.0 TFSI, 1.4 TFSI, 1.5 TFSI, 2.0 TFSI (S3), 1.6 TDI, 2.0 TDI
- Matrix LED far, dijital kokpit, MMI Touch
- Orijinal parça ağırlıklı çalışılmalı

### A3 8Y (2020-)

Güncel A3 jenerasyonudur. Sedan ve Sportback gövde tipleri mevcuttur.

## Audi A4 Yedek Parça

Audi A4, orta-üst segmentin en çok tercih edilen Audi'sidir.

### A4 B5 (1994-2001)

Klasik A4 jenerasyonu. Uzlamalı motor, Passat B5 ile aynı platform.

- Motor: 1.6, 1.8, 1.8T, 2.4 V6, 2.8 V6, 1.9 TDI, 2.5 TDI
- **1997 model audi a4 yedek parça** bu jenerasyonadır

### A4 B6 (2000-2004) ve B7 (2004-2008)

Bu iki jenerasyon mekanik olarak çok benzer.

- Motor: 1.6, 1.8T, 2.0, 3.0 V6, 1.9 TDI, 2.5 TDI, 2.0 TDI, 3.2 FSI (S4)
- Sık parça: ön konsol yatağı, turbo (1.9 TDI), direksiyon rampası

### A4 B8 (2007-2015)

MOD alt platform. En çok tutulan A4 jenerasyonlarından.

- Motor: 1.8 TFSI, 2.0 TFSI, 3.2 FSI, 2.0 TDI, 3.0 TDI
- Sık parça: yağ seperatörü, su pompası, turbo, MMI

### A4 B9 (2015-2024)

MLB Evo platformu. Modern, hafif ve teknolojik.

- Motor: 1.4 TFSI, 2.0 TFSI, 2.0 TDI, 3.0 TDI (S4/S5)
- Matrix LED, virtual cockpit, adaptif hız sabitleyeme

### A4 B10 (2024-)

Sadece sedan gövde olarak üretilen en güncel jenerasyon.

## Audi A6 Yedek Parça

Audi A6, üst segmentin önde gelen modellerindendir.

### A6 C5 (1997-2004)

Klasik A6 jenerasyonu. Passat B5 platformunun büyütülmüş versiyonu.

- Motor: 1.8T, 2.4 V6, 2.8 V6, 4.2 V8, 1.9 TDI, 2.5 TDI

### A6 C6 (2004-2011)

Modern platform, daha büyük gövde.

- Motor: 2.0 TFSI, 2.4 V6, 2.8 FSI, 3.0 TFSI, 4.2 V8, 2.0 TDI, 2.7 TDI, 3.0 TDI
- Sık parça: hava süspansiyon kompresörü, MMI, far kontrol ünitesi

### A6 C7 (2011-2018)

Makyajlı modern A6. Matrix LED ve sanal kokpit.

- Motor: 1.8 TFSI, 2.0 TFSI, 3.0 TFSI, 2.0 TDI, 3.0 TDI

### A6 C8 (2018-2024)

Güncel A6 jenerasyonu. Tam dijital, otonom sürüş özellikleri.

- Motor: 2.0 TFSI, 3.0 TFSI, 2.0 TDI, 3.0 TDI, S6/TDI

## Sık Değişen Audi Parçaları

1. **Fren balata ve disk** — Premium segmentte daha sık
2. **Turbo** — TFSI/TDI motorlarda 110.000+ km
3. **Triger zinciri** — 2.0 TFSI'da kritik
4. **DSG/S-Tronic mekatronik** — 100.000+ km
5. **Yağ seperatörü** — TFSI motorlarda yaygın
6. **Su pompası ve termostat** — 80.000 km
7. **Direksiyon rampası** — Yıllanmış modellerde
8. **Matrix LED far modülleri** — B8 ve sonrasında
9. **Hava süspansiyon kompresörü** — A6, Q7'de
10. **MMI/MIB multimedya** — Dokunmatik hassasiyet kaybı

## Audi Yedek Parça Fiyat Aralıkları

| Parça | A3 (TL) | A4 (TL) | A6 (TL) |
|-------|---------|---------|---------|
| Ön fren seti | 2.500-5.000 | 3.000-6.500 | 4.000-9.000 |
| Turbo | 12.000-22.000 | 14.000-28.000 | 18.000-35.000 |
| Triger zinciri | 5.000-9.000 | 6.000-12.000 | 8.000-15.000 |
| Far (Matrix LED) | 8.000-18.000 | 12.000-25.000 | 18.000-35.000 |
| MMI ekran | 4.000-10.000 | 6.000-15.000 | 10.000-25.000 |

## Ankara'da Audi Yedek Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Audi A serisinin tüm jenerasyonları (A3 8L'den A6 C8'e) için yedek parça stoğu bulunduruyoruz. VIN ile sorgulama yapıyor; orijinal ve kaliteli yan sanayi seçenekler sunuyoruz. Faturalı ve garantili satışla, Ankara'dan Türkiye genelinde hızlı kargo imkânıyla Audi parça ihtiyacınızı karşılıyoruz.

## Sonuç

Audi A3, A4 ve A6 için yedek parça arayışında jenerasyonu ve parça kodunu doğru tespit etmek, VAG ortak platform avantajını kullanmak ve güvenilir bir tedarikçiyle çalışmak çok önemlidir. Ankara'da İmza Volkswagen tüm bu ihtiyaçlarınızı karşılıyor.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Audi', 'A3', 'A4', 'A6', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-018',
    title: "Skoda Octavia ve Fabia Yedek Parça Rehberi",
    slug: 'skoda-octavia-ve-fabia-yedek-parca-rehberi',
    excerpt: "Skoda Octavia ve Fabia yedek parça alırken jenerasyon bazlı bilmeniz gerekenler. Sık değişen parçalar ve fiyat rehberi.",
    content: `## Skoda Octavia ve Fabia Yedek Parça

Skoda'nın Türkiye'de en popüler iki modeli Octavia ve Fabia'dır. **skoda octavia yedek parça** ve **skoda fabia yedek parça** talebi markanın diğer tüm modellerinden yüksektir. Bu yazıda her iki modeli kapsamlı biçimde inceleyeceğiz.

## Skoda Octavia Yedek Parça

Octavia, Türkiye'de en çok satan Skoda modelidir. Hem aile hem de kurumsal kullanımda tercih edilir. VW Golf, Seat Leon ve Audi A3 ile platform paylaşır.

### Octavia 1U / Tour (1996-2010)

İlk Octavia jenerasyonudur. Golf 4 ile aynı PQ34 platformunu kullanır. Uzun süre üretimde kaldığı için parça bulunabilirliği yüksektir.

- Motor: 1.4, 1.6, 1.8, 1.8T, 2.0, 1.9 SDI, 1.9 TDI
- Sık parça: fren, turbo (1.9 TDI), debriyaj, salıncak, egzoz
- Çoğunlukla yan sanayi parça kullanılır

### Octavia 1Z (2004-2013)

Türkiye'de en yaygın ikinci el Octavia jenerasyonudur. PQ35 platformu.

- Motor: 1.4, 1.6, 1.4 TSI, 1.8 TSI, 2.0 TSI (RS), 1.6 TDI, 2.0 TDI
- Sık parça: DSG mekatronik, turbo, triger zinciri, fren, yağ seperatörü

### Octavia 5E (2013-2020)

MQB platformuna geçilen modern Octavia.

- Motor: 1.0 TSI, 1.2 TSI, 1.4 TSI, 1.5 TSI, 2.0 TSI (RS), 1.6 TDI, 2.0 TDI
- Modern donanım: Matrix LED, adaptif hız sabitleyeme, sanal kokpit
- Karma parça: güvenlik orijinal, trim yan sanayi

### Octavia NX (2020-)

Güncel Octavia jenerasyonudur. Daha keskin tasarım, geliştirilmiş hibrit motor seçenekleri.

- Motor: 1.0 TSI, 1.5 TSI, 2.0 TSI (RS), 1.4 TSI iV (plug-in), 2.0 TDI

### Octavia için Sık Değişen Parçalar

1. **Fren seti** — Ön 30.000-50.000 km, arka 60.000-80.000 km
2. **Triger zinciri** — TSI motorlarda 90.000-120.000 km
3. **Turbo** — TSI/TDI motorlarda 110.000+ km
4. **DSG mekatronik** — 100.000+ km
5. **Yağ seperatörü** — TSI motorlarda kritik
6. **Salıncak ve rot başı** — Ağır sedan gövdesi
7. **Far ve stop** — Octavia 3 ve sonrasında LED
8. **Kol dayama** — Klasik Octavia 1'de hâlâ talep var
9. **Kapı aynası** — Isıtmalı/elektrikli
10. **Multimedya (Columbus/Bolero)** — 5E ve NX'te

## Skoda Fabia Yedek Parça

Fabia, küçük sınıfın en mantıklı tercihlerinden biridir. VW Polo ve Seat Ibiza ile aynı platformu kullanır.

### Fabia 1 (6Y, 1999-2007)

İlk Fabia jenerasyonudur. PQ24 platformu.

- Motor: 1.0, 1.2 HTP, 1.4, 1.4 16V, 2.0, 1.4 TDI, 1.9 SDI, 1.9 TDI
- Sık parça: kol dayama, fren, far, tampon, egzoz
- yan sanayi parça çok yaygın

### Fabia 2 (5J, 2007-2014)

PQ25 platformu. Polo 6R ile ortak.

- Motor: 1.2 HTP, 1.4, 1.4 TSI, 1.6, 1.4 TDI, 1.6 TDI, 1.9 TDI
- Daha modern güvenlik donanımı

### Fabia 3 (NJ, 2014-2021)

MQB A0 platformunun öncülü PQ26.

- Motor: 1.0 MPI, 1.2 TSI, 1.4 TSI, 1.4 TDI
- Modern multimedya ve güvenlik

### Fabia 4 (PJ, 2022-)

Güncel Fabia jenerasyonudur. MQB A0 platformu.

- Motor: 1.0 MPI, 1.0 TSI, 1.5 TSI

### Fabia için Sık Değişen Parçalar

1. **Kol dayama** — En çok aratılan Fabia parçası
2. **Far ve arka lamba** — Halojen/LED seçenekler
3. **Fren seti** — Küçük araç olduğu için uygun fiyatlı
4. **Kapı aynası** — Elektrikli/ısıtmalı
5. **Triger zinciri** — 1.2 TSI motorlarda
6. **Silecek kolu** — Yıllık bakım
7. **Tampon** — Hasar sonrası
8. **Egzoz susturucu** — Yıllanmış modellerde

## Skoda Octavia ve Fabia Yedek Parça Fiyatları

| Parça | Octavia 1Z (TL) | Octavia 5E (TL) | Fabia 2 (TL) |
|-------|-----------------|-----------------|--------------|
| Ön fren seti | 1.500-3.000 | 2.000-4.000 | 1.200-2.500 |
| Triger zinciri | 4.000-7.500 | 5.000-9.500 | 3.000-6.000 |
| Turbo | 10.000-18.000 | 13.000-22.000 | 8.000-15.000 |
| Far | 1.500-5.000 | 4.000-12.000 | 1.200-4.000 |
| DSG yağı seti | 1.500-2.500 | 1.800-3.000 | 1.400-2.200 |

*Fiyatlar tahmini olup, model yıla göre değişir.*

## Ankara'da Skoda Octavia ve Fabia Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Skoda Octavia'nın tüm jenerasyonları (Tour, 1Z, 5E, NX) ve Fabia'nın tüm jenerasyonları (6Y, 5J, NJ, PJ) için yedek parça stoğu bulunduruyoruz. VIN ile sorgulama yapıyor; orijinal ve kaliteli yan sanayi seçeneklerle her bütçeye uygun çözüm sunuyoruz. Faturalı, garantili ve hızlı kargoyla Ankara'dan Türkiye genelinde Skoda parça ihtiyacınızı tek elden karşılıyoruz.

## Sonuç

Skoda Octavia ve Fabia için yedek parça arayışında VAG ortak platform avantajını kullanmak, jenerasyonu doğru tespit etmek ve güvenilir bir tedarikçiyle çalışmak çok önemlidir. Ankara'da İmza Volkswagen, Skoda uzmanlığıyla tüm ihtiyaçlarınızı eksiksiz karşılıyor.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Skoda', 'Octavia', 'Fabia', 'Yedek Parça', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-019',
    title: "Seat Leon ve Cordoba Yedek Parça Rehberi",
    slug: 'seat-leon-ve-cordoba-yedek-parca-rehberi',
    excerpt: "Seat Leon ve Cordoba yedek parça alırken jenerasyon bazlı bilmeniz gerekenler. Sık değişen parçalar ve fiyat rehberi.",
    content: `## Seat Leon ve Cordoba Yedek Parça

Seat'ın Türkiye'de en popüler iki modeli Leon ve Cordoba'dır. **seat leon yedek parça** ve **seat cordoba yedek parca** talebi markanın diğer modellerinden yüksektir. Bu yazıda her iki modeli detaylıca inceleyeceğiz.

## Seat Leon Yedek Parça

Leon, Seat'ın kompakt hatchback/estate modelidir. VW Golf, Audi A3 ve Skoda Octavia ile aynı platformu paylaşır.

### Leon Mk1 (1999-2005)

İlk Leon jenerasyonudur. Golf 4 ile PQ34 platformunu paylaşır. Türkiye'de hâlâ çok sayıda kullanıcısı mevcuttur.

- Motor: 1.4, 1.6, 1.8, 1.8T (20V), 2.3 V5, 1.9 SDI, 1.9 TDI
- Sık parça: fren, turbo (1.9 TDI), debriyaj, salıncak, far
- Çoğunlukla yan sanayi parça kullanılır

### Leon Mk2 (2005-2012)

PQ35 platformuna geçilmiş ikinci Leon jenerasyonudur. Altea, Toledo ve Golf 5 ile ortak platform.

- Motor: 1.4, 1.6, 1.4 TSI, 1.8 TFSI, 2.0 TFSI (Cupra), 1.9 TDI, 2.0 TDI
- Sık parça: DSG mekatronik, turbo, triger zinciri, salıncak, kapı aynası

### Leon Mk3 (2012-2020)

MQB platformuna geçilmiş modern Leon jenerasyonudur. SC (3 kapı), 5 kapı ve ST (station) gövde tipleri mevcuttur.

- Motor: 1.0 TSI, 1.2 TSI, 1.4 TSI, 1.8 TSI, 2.0 TSI (Cupra), 1.6 TDI, 2.0 TDI
- Modern donanım: Matrix LED (Cupra), adaptif hız sabitleyeme, sanal kokpit
- Karma parça stratejisi önerilir

### Leon Mk4 (2020-)

Güncel Leon jenerasyonudur. Cupra artık ayrı bir marka olduğu için sadece Seat logosu ile gelir.

- Motor: 1.0 TSI, 1.5 TSI, 1.4 eHybrid (plug-in), 2.0 TDI
- Tam dijital kokpit, çift ekran multimedya

### Leon için Sık Değişen Parçalar

1. **Fren seti** — Cupra modellerinde çok hızlı aşınır
2. **Triger zinciri** — TSI motorlarda 90.000-120.000 km
3. **Turbo** — TSI/TDI motorlarda 110.000+ km
4. **DSG mekatronik** — 100.000+ km
5. **Salıncak ve rot başı** — Sport süspansiyonda hızlı aşınır
6. **Kapı aynası** — Elektrikli, ısıtmalı, katlanır
7. **Far (Matrix LED)** — Mk3 Cupra'da
8. **Kol dayama** — Mk1 ve Mk2'de talep var
9. **Multimedya ekranı** — Mk3 ve Mk4'te
10. **Tampon ve çamurluk** — Hasar sonrası

## Seat Cordoba Yedek Parça

Cordoba, Ibiza'nın sedan versiyonudur. 1993-2009 yılları arasında üretilmiştir. Türkiye'de çok sayıda kullanıcısı mevcuttur.

### Cordoba Mk1 (6K, 1993-1999)

İlk Cordoba jenerasyonudur. Ibiza Mk2 ve VW Polo Mk3 ile aynı platform.

- Motor: 1.4, 1.6, 1.8, 1.9 SDI, 1.9 TDI
- Sık parça: fren, far, tampon, kapı aynası, egzoz
- Tamamen yan sanayi parça odaklı

### Cordoba Mk2 (6L, 1999-2002)

Bu jenerasyon kısa ömürlü olmuştur.

### Cordoba Mk3 (6L, 2002-2009)

Türkiye'de en çok kullanılan Cordoba jenerasyonudur. Ibiza Mk3 (6L) ile ortak.

- Motor: 1.4, 1.6, 1.4 TDI, 1.9 TDI
- Sık parça: kol dayama, kapı aynası, far, fren seti, trim parçaları

### Cordoba için Sık Değişen Parçalar

1. **Kapı aynası** — Elektrikli/manuel seçenekler
2. **Far ve arka lamba** — Halojen standart
3. **Fren seti** — Uygun fiyatlı
4. **Tampon** — Hasar sonrası
5. **Kol dayama** — Sık aratılan parça
6. **Egzoz** — Yıllanmış modellerde
7. **Triger kayışı** — 1.4 benzinli motorda
8. **İç trim parçaları** — Kapı paneli, konsol

## Seat Leon ve Cordoba Yedek Parça Fiyatları

| Parça | Leon Mk2 (TL) | Leon Mk3 (TL) | Cordoba (TL) |
|-------|---------------|---------------|--------------|
| Ön fren seti | 1.500-3.000 | 2.000-4.500 | 1.000-2.200 |
| Triger zinciri | 3.500-7.000 | 4.500-9.000 | - |
| Turbo (1.4 TSI) | 9.000-16.000 | 12.000-22.000 | - |
| Far | 1.200-4.000 | 2.500-8.000 | 700-2.200 |
| Kapı aynası | 1.000-2.500 | 1.500-4.000 | 500-1.500 |
| Kol dayama | 200-500 | 300-700 | 150-400 |

*Fiyatlar tahmini olup, model yıla göre değişir.*

## orijinal ve yan sanayi veya Aftermarket?

Seat için parça seçiminde şu yaklaşım önerilir:

- **Leon Mk1, Mk2 ve Cordoba** — yan sanayi parça mantıklı (araç yaşı yüksek)
- **Leon Mk3** — Karma; güvenlik parçaları orijinal
- **Leon Mk4** — Mümkün olduğunca orijinal tercih edilmeli
- **Cupra performans parçaları** — Mutlaka orijinal veya onaylı aftermarket

## Ankara'da Seat Leon ve Cordoba Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Seat Leon'un tüm jenerasyonları (Mk1-Mk4) ve Cordoba'nın tüm jenerasyonları (Mk1-Mk3) için yedek parça stoğu bulunduruyoruz. **Seat yan sanayi parça** talepleri başta olmak üzere her bütçeye uygun orijinal ve aftermarket seçenek sunuyoruz. VIN ile sorgulama yapıyor; faturalı, garantili ve hızlı kargoyla Türkiye genelinde Seat parça ihtiyacınızı karşılıyoruz. Ankara'da Seat Leon ve Cordoba parça arayışınızda tek adresiz.

## Sonuç

Seat Leon ve Cordoba için yedek parça arayışında VAG ortak platform avantajını kullanmak, jenerasyonu doğru tespit etmek ve güvenilir bir tedarikçiyle çalışmak çok önemlidir. Ankara'da İmza Volkswagen, Seat uzmanlığıyla tüm ihtiyaçlarınızı eksiksiz karşılıyor.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Seat', 'Leon', 'Cordoba', 'Yedek Parça', 'Ankara', 'Yan Sanayi']
  },
  {
    id: 'blog-020',
    title: "Skoda Favorit, Forman ve Felicia: Klasik Yedek Parça Rehberi",
    slug: 'skoda-favorit-forman-ve-felicia-klasik-yedek-parca-rehberi',
    excerpt: "Skoda Favorit, Forman ve Felicia için klasik yedek parça bulunabilirliği ve tedarik önerileri. 1993, 1994 ve 1997 model Skoda sahipleri için rehber.",
    content: `## Skoda Favorit, Forman ve Felicia Klasik Parça Rehberi

Skoda'nın klasik modelleri olan Favorit, Forman ve Felicia, 80'lerin sonu ve 90'ların başında Türkiye'ye giriş yapmış, milyonlarca aileye ilk otomobil olmuştur. Bugün hâlâ koleksiyon amaçlı veya nostaljik araç olarak kullanılan bu modellerin yedek parça tedariki özel bilgi gerektirir. **skoda favorit yedek parça**, **skoda forman yedek parça** ve **skoda felicia yedek parça** aramaları klasik araç tutkunları tarafından sıkça yapılır. Bu yazıda her üç modeli detaylıca ele alacağız.

## Skoda Favorit (1987-1995)

Skoda Favorit, Skoda'nın VW grubuna girmeden önce tasarladığı son modelefiyettir. Bertone tasarımı hatchback gövdesiyle 90'larda Türkiye'de çok popüler olmuştur.

### Teknik Özellikler

- Motor: 1.3 (1289cc) OHV, 40-46 kW (54-62 HP)
- Şanzıman: 4 ileri manuel (baz modeller) / 5 ileri manuel (standart)
- Önden çekişli — Skoda'nın ilk önden çekişli seri üretim modeli

### Favorit için Yedek Parça Durumu

Favorit parçaları artık standart tedariğe girmiyor; bu yüzden şu kaynaklara yönelmek gerekir:

1. **Özelleşmiş klasik parça tedarikçileri** — Türkiye'de birkaç firma Favurit/Forman/Felicia'ya özel çalışır
2. **Hurda ve yan sanayi parça** — Çekya'dan ithalat yaygın
3. **Yeniden üretilen parçalar** — Bazı üreticiler tuning/klasik parça üretiyor
4. **Klasik araç kulüpleri** — Tutkunlar arası takas

### Sık İhtiyaç Dolan Favorit Parçaları

- **Far ve stoplar** — Plastik yıllanmış, çatlamalar yaygın
- **Tamponlar** — Plastik çatlar
- **Kapı aynası** — Manuel
- **Kapı paneli ve trim** — İç aksamın çoğu yıpranmış
- **Fren seti** — Disk ve balata yeniden üretiliyor
- **Motor contaları** — Özel üretilen setler mevcut
- **Debriyaj seti** — Bulunabilir ama dikkatli sipariş
- **Silecek ve lastikler** — Standart ölçüler
- **Egzoz** — Özel üretim veya yan sanayi

## Skoda Forman (1988-1995)

Forman, Favorit'in station wagon (kombi) versiyonudur. Türkiye'de ticari amaçla da çok kullanılmıştır.

### Forman Özellikleri

- Motor: 1.3 (Favorit ile aynı)
- Daha uzun gövde, daha geniş bagaj
- Arka süspansiyon biraz farklı

### Sık İhtiyaç Dolan Forman Parçaları

- **Arka bagaj kapağı** — Yıllanmış contalar
- **Arka süspansiyon yayları** — Yük taşındığı için yorulmuş
- **Arka stoplar** — Forman'a özel
- **Tavan bagajı rafları** — Kombi gövde için
- **Yan camlar** — Özel ölçüler

## Skoda Felicia (1994-2001)

Felicia, Favorit'in yerine üretilen daha modern modeldir. Hem hatchback (Felicia) hem de pickup (Felicia Pickup/Felicia Fun) versiyonları vardır.

### Felicia Özellikleri

- Motor: 1.3 (Favorit'ten carry over), 1.6 (VW grubuna geçiş sonrası)
- Daha modern güvenlik donanımı
- Daha iyi sürüş dinamiği

### Felicia için Yedek Parça Durumu

Favorit ve Forman'a göre biraz daha rahat parça bulunur; çünkü VW grubuna geçiş sonrası bazı parçalar (1.6 motor) VW grubu ile ortaktır.

### Sık İhtiyaç Dolan Felicia Parçaları

- **Far ve stoplar** — Favorit'ten farklı
- **Motor parçaları (1.6)** — VW grubu uyumlu
- **Fren seti** — Bulunabilir
- **Debriyaj** — 1.3 ve 1.6 için farklı
- **Kapı aynası ve trim parçaları**

## Klasik Skoda Parça Alırken Dikkat Edilecekler

Klasik modellerde parça almak modern araçlardan çok farklıdır. Şu noktalara dikkat etmek gerekir:

### 1. Görsel Karşılaştırma Şart

Parça kodu yerine görsel karşılaştırma çok daha yaygındır. Mümkün olduğunda eski parçayı çıkarıp tedarikçiye göstermek veya net fotoğraf çekip göndermek gerekir.

### 2. Model Yılını Net Belirtmek

**1993 skoda favorit yedek parça** ile **1995 skoda favorit yedek parça** arasında fark olabilir. Üretim dönemi boyunca küçük revizyonlar olmuştur. **93 model skoda favorit** ve **1993 model skoda forman** gibi spesifik aramalar doğru sonuç verir.

### 3. Garanti ve İade Şartları

Klasik parçalarda uyumsuzluk riski yüksek olduğu için garanti ve iade hakkı olan tedarikçilerle çalışmak şarttır.

### 4. Yeniden Üretilen Parça Kalitesi

Bazı parçalar Checkya'dan veya Polonya'dan ithal yeniden üretilmiş olarak gelir. Kaliteli olanını tercih edin.

### 5. Faturalı Alım

Klasik parça olsa bile faturalı alım, hem iade hakkı hem de yasal koruma için şarttır.

## Ankara'da Klasik Skoda Parça Tedariği

**İmza Volkswagen** olarak Ankara'da Skoda Favorit, Forman ve Felicia için klasik parça tedariki sağlıyoruz. Bu modeller için özel tedarik ağımız var; hem yurt içinden hem Çekya/Polonya'dan parça temin ediyoruz. **1993 model skoda favorit yedek parça**, **1993 skoda favorit**, **1993 model skoda forman**, **skoda felicia yedek parça** ve benzeri tüm taleplerinizi karşılıyoruz. Görsel karşılaştırma yaparak doğru parçayı tespit ediyor, faturalı ve garantili şekilde gönderiyoruz.

## Sonuç

Skoda Favorit, Forman ve Felicia gibi klasik modellerde parça tedariki özel bilgi ve sabır gerektirir. Doğru tedarikçi, görsel karşılaştırma, model yılı tespiti ve faturalı alım bu süreçte kritik önem taşır. Ankara'da İmza Volkswagen olarak bu nostaljik araçların hayatta kalması için uzman desteği sağlıyoruz.`,
    category: "Bakım Rehberi",
    categorySlug: 'bakim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Skoda', 'Favorit', 'Forman', 'Felicia', 'Klasik', 'Yan Sanayi']
  },
  {
    id: 'blog-021',
    title: "VAG Yedek Parça: Orijinal mi Yan Sanayi mi? Doğru Seçim Rehberi",
    slug: 'vag-yedek-parca-orijinal-mi-yan-sanayi-mi-dogru-secim-rehberi',
    excerpt: "VAG grubu araçlarınız için orijinal ve yan sanayi (OEE) parça arasındaki farkları, hangi parçada hangisini seçmeniz gerektiğini ve İmza Volkswagen'in parça tedarik yaklaşımını öğrenin.",
    content: `## VAG Yedek Parça: Orijinal ve Yan Sanayi Seçimi

Volkswagen Grubu (VAG) — Volkswagen, Audi, Skoda, Seat, Cupra — Türkiye'nin en yaygın otomobil markalarıdır. **VAG yedek parça** denince akla iki ana kategori gelir: **Orijinal (OEM)** ve **Yan Sanayi (OEE)**. Bu rehberde her iki seçeneği avantaj ve dezavantajlarıyla karşılaştırıyor, hangi parçada hangisini seçmeniz gerektiğini anlatıyoruz.

> **Not:** İmza Volkswagen olarak **orijinal ve yüksek kaliteli yan sanayi parça** tedariği yapıyoruz. Çıkma / hurda parça satışımız yoktur.

## Orijinal Parça (OEM) Nedir?

Orijinal parça, aracın üreticisinin (VW, Audi, Skoda, Seat) kendi markası ve **11 haneli parça kodu** ile sattığı, fabrika standartlarında üretilmiş parçadır. Kutusunda üretici logosu, parça kodu ve barkod bulunur.

**Avantajları:**
- %100 uyum garantisi (VIN ile eşleşir)
- 2 yıl üretici garantisi
- En yüksek kalite ve dayanıklılık
- Araç ikinci el değerini korur
- Servis geçmişine resmi işlenir

**Dezavantajları:**
- En yüksek fiyat (%30-200 daha pahalı)
- Tedarik süresi bazen 3-7 gün
- Stokta bulunmayabilir

## Yan Sanayi Parça (OEE) Nedir?

Yan sanayi parça, araç üreticisi dışında **aynı kalite spesifikasyonunda** üretilen uyumlu parçadır. Piyasada iki alt kategori vardır:

**Kaliteli Yan Sanayi (OEE):** Orijinal parçayla aynı kalitede, üretici onaysız. Bosch, Mahle, Brembo, Sachs, Hella, ATE, Continental, ZF, Lemförder gibi Alman ve Avrupa markaları bu gruptadır.

**Ekonomik Yan Sanayi:** Çin, Türkiye veya Uzak Doğu menşeli daha düşük fiyatlı parçalar. Fiyat avantajı sağlar ama ömür ve kalite değişkendir.

**Avantajları:**
- %30-60 fiyat avantajı (kalite grubuna göre)
- Geniş stok, hızlı tedarik
- Kaliteli OEE markalar orijinalle aynı performansı verir

**Dezavantajları:**
- Ekonomik segmentte kalite tutarsızlığı
- Bazı parçalarda uyum sorunu
- 6 ay-1 yıl garanti (markaya göre)

## Hangi Parçada Hangisini Seçmeli?

| Parça Grubu | Öneri | Neden |
|---|---|---|
| Fren balata, disk | Kaliteli Yan Sanayi (Bosch, ATE, TRW) veya Orijinal | Fiyat/performans optimum, OEM en üst güvenlik |
| Triger seti (kayış/zincir) | **Orijinal** | Motor hasarı riski yüksek |
| Turbo | **Orijinal** | Yüksek maliyet, dengeli performans kritik |
| Hava yastığı / emniyet kemeri | **Orijinal** | Hayati güvenlik |
| Direksiyon / süspansiyon parçaları | Orijinal veya Lemförder / Sachs (OEE) | Güvenlik ve dayanıklılık |
| Motor yağı / filtreleri | VW 504/507 spesifikasyonu (OEE Castrol, Mobil, Total) | Yağ spesifikasyona uygun olduğu sürece kaliteli OEE yeterli |
| Far / stop | Orijinal veya Depo / Valeo (OEE) | Estetik ve aydınlatma kalitesi |
| Kaporta (tampon, çamurluk) | Yan Sanayi (kaliteli) | OEM'in muadili pratikte aynı |
| Multimedya / elektronik | **Orijinal** | Yazılım uyumu kritik |
| Akü | Varta / Bosch / Mutlu (OEE) | OEM ile aynı performans |

## VAG Parça Kodu Nasıl Okunur?

VAG yedek parça kodları **11 haneli** ve belirli bir yapıyı takip eder. Örnek: **5G0 698 151 A**

- **5G0** → Model ailesi (Golf 7)
- **698** → Parça grubu (fren balata)
- **151** → Spesifik parça
- **A** → Revizyon harfi

Aynı modelin farklı revizyonları birbiriyle uyumsuz olabilir. Bu yüzden sipariş öncesi **VIN (şase numarası)** mutlaka paylaşılmalıdır.

## 2018 Golf 7 Ön Fren Balata Örneği

| Seçenek | Fiyat Aralığı (TL) | Garanti | Beklenen Ömür |
|---|---|---|---|
| Orijinal VW | 3.500 – 5.000 | 2 yıl | 50.000 – 70.000 km |
| Bosch / ATE (OEE) | 2.200 – 3.500 | 1 yıl | 45.000 – 65.000 km |
| TRW / Ferodo (OEE) | 1.800 – 3.000 | 1 yıl | 40.000 – 60.000 km |
| Ekonomik Çin | 800 – 1.500 | 6 ay | 15.000 – 25.000 km |

*Güncel fiyatlar için lütfen teyit alın. Tablo ortalama piyasa aralıklarını gösterir.*

## İmza Volkswagen Yaklaşımı

**İmza Volkswagen** olarak Ankara'da VAG grubunun tüm markaları (VW, Audi, Skoda, Seat, Cupra) için:

- **Orijinal (OEM)** parçaları doğrudan VAG network'ünden tedarik ediyoruz.
- **Yan sanayi (OEE)** parçaları sadece Bosch, Mahle, ATE, Brembo, Sachs, Hella, Lemförder, Valeo, Continental gibi kanıtlanmış markalardan seçiyoruz.
- VIN numarası ile **doğru parça tespiti** yapıyoruz — yanlış parça siparişinde %30'a varan tasarruf ve zaman kaybını önlüyoruz.
- Tüm parçalar **faturalı ve garantili**dir.

## Sıkça Sorulan Sorular (SSS)

**VAG yedek parça için orijinal mi yan sanayi mi seçmeliyim?**
Güvenlik parçalarında (fren, direksiyon, hava yastığı, triger) orijinal veya kaliteli OEE öneriyoruz. Bakım parçalarında (filtre, yağ, silecek, fren balata) kaliteli yan sanayi yeterlidir.

**Yan sanayi parça garantisi ne kadar?**
Kaliteli OEE markalar genelde 1 yıl garanti verir. Ucuz ekonomik segmentte 6 ay veya garanti yoktur. İmza Volkswagen tüm yan sanayi parçaları için 1 yıl garanti sağlar.

**VIN numarası neden gerekli?**
Aynı modelin farklı üretim yıllarında farklı parça kodları olabilir. VIN ile doğru parça siparişi %100 garanti edilir.

**Çıkma parça almalı mıyım?**
İmza Volkswagen olarak çıkma parça satmıyoruz. Kısa ömür, belirsiz garanti ve güvenlik riski nedeniyle orijinal veya kaliteli yan sanayi parçayı öneriyoruz.

---

*Ankara'da VAG grubu yedek parça ihtiyacınız için İmza Volkswagen ile iletişime geçin: +90 543 979 20 13 — WhatsApp hattımız 7/24 açıktır.*`,
    category: "Eğitim",
    categorySlug: 'egitim',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 12,
    tags: ['VAG', 'Orijinal Parça', 'Yan Sanayi', 'Parça Seçimi', 'OEM', 'OEE', 'Ankara']
  },
  {
    id: 'blog-022',
    title: "VW Polo Yedek Parça Uyumluluğu: 9N, 9N3, 6R, 6C, AW Jenerasyonları",
    slug: 'vw-polo-yedek-parca-uyumlulugu-jenerasyonlar',
    excerpt: "Volkswagen Polo'nun 9N, 9N3, 6R, 6C ve AW (Polo 7) jenerasyonları arasındaki parça uyumluluğu, hangi parçanın hangi nesilde kullanılabileceği ve İmza Volkswagen stoklarındaki Polo parçaları.",
    content: `## Volkswagen Polo Jenerasyon Parça Uyumluluğu

Volkswagen Polo, Türkiye'nin en yaygın küçük segment araçlarından biridir. **Polo 9N, 9N3, 6R, 6C ve AW (yeni Polo 7)** olmak üzere beş ayrı jenerasyon piyasada aktiftir. Her jenerasyonun kendine özgü **parça kodu ve uyumluluk yapısı** vardır. Yanlış jenerasyon parça siparişi hem zaman hem para kaybettirir.

## Polo Jenerasyonları Özet Tablosu

| Kod | Yıllar | Kasa Tipi | Motor Seçenekleri | Piyasadaki Yaygınlık |
|---|---|---|---|---|
| 9N | 2001 – 2005 | Mk4 (9N) | 1.2, 1.4 16V, 1.4 TDI, 1.9 SDI | Düşük (klasik) |
| 9N3 | 2005 – 2009 | Mk4 Fazelift | 1.2, 1.4 16V, 1.4 TDI, 1.9 TDI | Orta |
| 6R | 2009 – 2014 | Mk5 | 1.2 TSI, 1.4, 1.6 TDI | Yüksek |
| 6C | 2014 – 2017 | Mk5 Fazelift | 1.0 TSI, 1.2 TSI, 1.4 TDI, 1.6 | Yüksek |
| AW | 2017 – günümüz | Mk6 (Polo 7) | 1.0 TSI, 1.5 TSI, 1.6 TDI, GTI | Çok yüksek |

## Parça Uyumluluk Kuralları

### 1. Fren Sistemi

- **9N / 9N3 fren disk ve balataları birbiriyle uyumlu değildir** — 9N3 disk çapı daha büyüktür.
- **6R ve 6C fren parçaları uyumludur** — aynı kaliper tasarımı kullanılmıştır.
- **AW (Polo 7) kendi platformundadır** — 6R/6C parçaları AW'ye uymaz.
- Ön fren disk çapları: 9N/9N3 → 256 mm, 6R/6C → 288 mm, AW → 288-312 mm (motor/GTI'ye göre değişir).

### 2. Aydınlatma (Far / Stop)

- **9N ve 9N3 stopları farklıdır** — iç dizayn değişmiştir.
- **6R ve 6C arka stopları aynıdır** — far iç dizaynı farklı olsa da stop aynıdır.
- **AW kasa tamamen yeni LED teknolojisine geçmiştir** — eski nesil parçalar takılamaz.
- Halojen / Xenon / LED ayrımı: AW sadece LED ile donatılmıştır.

### 3. Motor ve Motor Parçaları

- **1.2 TSI (6R)** ve **1.0 TSI (6C/AW)** aileleri farklıdır — yağ karteri, triger seti, turbo tamamen uyumsuz.
- **1.4 TDI (9N3/6R)** motorları aynı EA189 ailesi olsa da pompa-enjektör üniteleri dönemlere göre değişir.
- **1.6 TDI (6R/6C/AW)** motorları kısmen uyumlu — turbo ve EGR parçaları farklı.

### 4. Süspansiyon

- **9N/9N3 amortisör ve yaylar 6R/6C ile uyumsuz** — sürüş yüksekliği ve bağlantı noktaları farklı.
- **6R ve 6C süspansiyon parçaları** önemli ölçüde ortaktır.
- **AW** kendi platformu (MQB A0) üzerinde — salıncak, amortisör tamamen değişmiştir.

### 5. Kapı ve Kaporta

- **9N/9N3** ve **6R/6C** kapı panelleri tamamen farklıdır.
- **AW** yeni platform, kapı yapısı değişmiştir.
- Çamurluk, tampon gibi dış parçalar modelin piyasa değerine göre **orijinal veya kaliteli yan sanayi** seçeneklerinde bulunur.

## Polo Parça Tedariki: İmza Volkswagen Stokları

İmza Volkswagen olarak Polo'nun tüm nesilleri için **orijinal ve kaliteli yan sanayi parça** tedariği yapıyoruz. Stoklarımızda özellikle şu kategorilerde geniş yedek mevcuttur:

- **Fren balata ve disk** — TRW, Bosch, ATE, Brembo
- **Filtre setleri** — Mann, Mahle, Bosch
- **Triger seti ve aksesuarları** — Orijinal + Contitech, Gates, INA
- **Süspansiyon parçaları** — Sachs, KYB, Monroe
- **Elektrik ve aydınlatma** — Hella, Valeo, Depo
- **Kaporta parçaları** — Orijinal ve kaliteli yan sanayi (DEPO, TYC, VAN WEZEL)

## Sıkça Sorulan Sorular (SSS)

**Polo 6R fren balatası Polo AW'ye uyar mı?**
Hayır, 6R ve AW fren kaliper tasarımları farklıdır. Yanlış balata montajı fren verimi düşüklüğüne yol açar.

**Polo 9N 1.4 16V motor parçaları Polo 6R'da kullanılır mı?**
Hayır, 9N 1.4 16V (EA113 ailesi) ile 6R 1.2 TSI/1.6 TDI (EA211/EA189) tamamen farklı motor aileleridir.

**Polo parça siparişi için hangi bilgiler gerekli?**
Şase numarası (VIN) ve motor kodu. VIN olmadan doğru parça garantisi veremeyiz.

**Polo AW (2017+) için hangi motor yağı kullanılır?**
VW 504.00 / 507.00 spesifikasyonunda 0W-30 veya 5W-30. İmza Volkswagen stoklarında Castrol, Mobil ve Total'ın bu spesifikasyondaki yağları mevcuttur.

---

*Ankara'da Polo yedek parça ihtiyacınız için +90 543 979 20 13 numaramızdan bize ulaşın. WhatsApp'tan fotoğraf gönderin, parça kodunu biz çıkaralım.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Volkswagen', 'Polo', 'Yedek Parça', 'Jenerasyon', 'Uyumluluk', '9N', '6R', 'AW', 'Ankara']
  },
  {
    id: 'blog-023',
    title: "Audi A4 B8 vs B9: Parça Kodu Farkları ve Geçiş Tablosu",
    slug: 'audi-a4-b8-vs-b9-parca-kodu-farklari-gecis-tablosu',
    excerpt: "Audi A4'ün B8 (2007-2015) ve B9 (2015-2023) nesilleri arasındaki parça farkları, ortak parçalar ve geçiş tablosu. Doğru parça siparişi için kritik bilgiler.",
    content: `## Audi A4 B8 ile B9 Arasındaki Parça Farkları

Audi A4, premium orta segment sedanlar arasında Türkiye'de en yaygın modellerden biridir. **B8 (2007 – 2015)** ve **B9 (2015 – 2023)** nesilleri görsel olarak benzer olsa da **platform, motor ailesi, elektrik mimarisi ve elektronik parçalar** büyük ölçüde farklıdır. Yanlış jenerasyon parça siparişi geri dönüşü olmayan uyum sorunlarına yol açabilir.

## Platform ve Mimari Fark

- **B8:** MLB Evo öncesi platform (B8 / B8.5)
- **B9:** MLB Evo platformu — %90 yeni parça tasarımı

Bu platform farkı nedeniyle **ön süspansiyon, direksiyon, motor bağlantı elemanları** büyük ölçüde uyumsuzdur.

## Motor Ailesi Farkları

| Motor | B8 | B9 |
|---|---|---|
| 1.4 TFSI | — | ✓ (2015 – 2019) |
| 1.8 TFSI | ✓ (EA888 Gen1/2) | — |
| 2.0 TFSI | ✓ (EA888 Gen1/2/3) | ✓ (EA888 Gen3) |
| 2.0 TDI | ✓ (EA189) | ✓ (EA288) |
| 3.0 TDI | ✓ | ✓ (farklı tasarım) |
| 3.0 TFSI | — | ✓ (yeni nesil) |

**Kritik not:** B8 ve B9'daki 2.0 TFSI motorları aynı aile (EA888) olsa da **Gen3 mimarisi** nedeniyle turbo, yakıt enjektörü ve triger parçaları uyumsuzdur.

## Parça Kategorilerine Göre Geçiş Tablosu

| Parça Grubu | B8 ile B9 Uyumu | Açıklama |
|---|---|---|
| Far / Stop | ❌ Tamamen farklı | B9 LED teknolojisine geçti |
| Ön tampon | ❌ Farklı | B9 daha keskin hatlı |
| Arka tampon | ❌ Farklı | — |
| Çamurluk | ❌ Farklı | — |
| Kaput / Bagaj kapağı | ⚠️ Kısmen | Motor seçeneğine göre farklı |
| Ön kapı | ❌ Farklı | Menteşe noktaları farklı |
| Arka kapı | ❌ Farklı | — |
| Ayna | ❌ Farklı | Elektrik bağlantısı farklı |
| Ön fren diski | ⚠️ Motor seçeneğine göre | 320 mm / 345 mm karışık |
| Arka fren diski | ⚠️ Farklı | — |
| Fren balatası | ⚠️ Motor seçeneğine göre | Aynı kaliper, farklı balata |
| Ön amortisör | ❌ Farklı | — |
| Arka amortisör | ❌ Farklı | — |
| Salıncak | ❌ Farklı | — |
| Direksiyon kutusu | ❌ Farklı | Elektrik destek farklı |
| Turbo | ❌ Farklı | Gen3 tasarım |
| Yakıt enjektörü | ❌ Farklı | — |
| Triger seti | ❌ Farklı | — |
| EGR valfi | ❌ Farklı | B9 EA288 ailesi |
| Multimedya (MMI) | ❌ Farklı | B9 MIB3 platformu |
| Far adaptasyon modülü | ❌ Farklı | — |
| ECU | ❌ Farklı | Yazılım uyumsuz |
| Diagnostik kablo (VCDS) | ⚠️ Aynı | VCDS tüm nesillerde çalışır |

## Aynı Kalan / Ortak Parçalar

- **VCDS / OBD arıza okuma cihazı** — Audi VAG grubu ortaktır, B8 ve B9'da aynı cihaz çalışır.
- **Karter koruma sacı** — Bazı alt saç parçalar jenerasyonlar arası uyumlu olabilir, ancak **VIN'e göre doğrulatılması** gerekir.
- **Lastik ve jant ölçüleri** — 17" – 19" jantlar çoğu durumda uyumludur (motor seçeneğine göre değişir).

## A4 B8 / B9 Parça Tedariki

İmza Volkswagen olarak Audi A4 B8 ve B9 nesilleri için **orijinal ve kaliteli yan sanayi** parça tedariği yapıyoruz. Stoklarımızda özellikle:

- **LED Far / Stop modülleri** — B9 tam LED ve Matrix LED seçenekleri
- **Ön-arka fren balata setleri** — TRW, Bosch, ATE, Brembo
- **Süspansiyon parçaları** — Sachs, KYB, Lemförder
- **Triger seti ve zincir aksesuarları** — Orijinal + INA, Contitech
- **Multimedya / MMI ekran** — Orijinal Audi parçaları
- **Ayna kapağı ve cam** — Orijinal + Depo, TYC
- **Kaporta parçaları** — B8 ve B9 için ayrı ayrı orijinal ve yan sanayi

## Sıkça Sorulan Sorular (SSS)

**Audi A4 B8 fren balatası B9'a uyar mı?**
Kaliper tasarımı farklı olduğu için doğrudan uymaz. Disk çapları da farklıdır (B8 320 mm / B9 320-345 mm motor seçeneğine göre).

**B8 ve B9 motor yağı aynı mı?**
İkisi de VW 504.00 / 507.00 spesifikasyonunda 0W-30 veya 5W-30 ister. Yağ seçimi benzerdir, motor farklı olsa da üretici aynı spesifikasyonu önerir.

**A4 B8 LED far B9'a takılır mı?**
Hayır. B8 LED farları kendi kablo tesisatı ve beyin yapısıyla çalışır, B9 tamamen farklı bir LED mimarisine sahiptir. Uyumsuzdur.

**Audi A4 için orijinal mi yan sanayi mi parça almalıyım?**
Güvenlik parçaları (fren, direksiyon, süspansiyon) için orijinal veya Lemförder/Sachs/Bosch OEE öneriyoruz. Bakım parçaları (filtre, yağ, balata) için kaliteli yan sanayi yeterlidir.

---

*Audi A4 yedek parça ihtiyacınız için Ankara İmza Volkswagen'i arayın: +90 543 979 20 13. WhatsApp'tan şase numaranızı gönderin, parçayı biz tespit edelim.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Audi', 'A4', 'B8', 'B9', 'Yedek Parça', 'Uyumluluk', 'Ankara']
  },
  {
    id: 'blog-024',
    title: "Skoda Superb I, II, III Parça Listesi: Motor, Şanzıman, Elektrik",
    slug: 'skoda-superb-i-ii-iii-parca-listesi',
    excerpt: "Skoda Superb'in 3U (I), 3T (II) ve 3V (III) jenerasyonları için kritik yedek parça listesi. Motor, şanzıman, fren ve elektrik parçaları için İmza Volkswagen stokları.",
    content: `## Skoda Superb Parça Tedariki: 3 Jenerasyon, Tek Tedarikçi

Skoda Superb, VAG grubunun amiral gemisi sedan modelidir. Üç farklı jenerasyon Türkiye'de aktiftir: **3U (Superb I, 2001-2008)**, **3T (Superb II, 2008-2015)** ve **3V (Superb III, 2015-2024)**. Her nesil farklı platform ve motor ailesine sahiptir. Yanlış parça siparişi sık karşılaşılan bir sorundur; bu rehber İmza Volkswagen'in stoklarında bulunan kritik Superb parçalarını özetler.

## Jenerasyon Özet Tablosu

| Kod | Nesil | Yıllar | Platform | Motor Ailesi |
|---|---|---|---|---|
| 3U | Superb I | 2001 – 2008 | PQ46 (Passat B5.5 ile ortak) | 1.8T, 2.0, 2.8 V6, 1.9 TDI, 2.5 TDI |
| 3T | Superb II | 2008 – 2015 | PQ46 (Passat B6 ile ortak) | 1.4 TSI, 1.8 TSI, 2.0 TSI, 1.6 TDI, 2.0 TDI, 3.6 VR6 |
| 3V | Superb III | 2015 – 2024 | MQB (Passat B8 ile ortak) | 1.4 TSI, 1.5 TSI, 2.0 TSI, 1.6 TDI, 2.0 TDI |

## Motor Parçaları

### 1.8 T / 1.8 TSI Ailesi

- **Superb I 1.8T (EA113):** Turbo, yakıt enjektörü, triger seti
- **Superb II 1.8 TSI (EA888 Gen1/2):** Turbo, yüksek basınç pompası, triger seti
- **Superb III 1.5 TSI (EA211 Evo):** Turbo, enjektör, triger (bu jenerasyonda zincir)

**İmza Volkswagen stoklarındaki motor parçaları:**
- Turbo (orijinal + IHI/BorgWarner yan sanayi)
- Yakıt enjektörü (Bosch)
- Triger seti (INA, Contitech, Gates)
- Motor yağı (VW 504.00 / 507.00 — Castrol, Mobil, Total)
- Yağ filtresi (Mann, Mahle, Bosch)
- Hava filtresi (Mann, Mahle, Bosch)
- Yakıt filtresi (Mann, Mahle, Bosch)

### 2.0 TDI Ailesi

- **Superb I 2.5 TDI (PD):** Enjektör ünitesi, turbo, EGR
- **Superb II 2.0 TDI (EA189):** Common-rail enjektör, EGR, turbo
- **Superb III 2.0 TDI (EA288):** Common-rail enjektör, AdBlue sistemi, EGR, turbo

**Stoklarımızdaki 2.0 TDI parçaları:**
- Common-rail enjektör
- EGR valfi (orijinal + Pierburg yan sanayi)
- Turbo (orijinal + IHI/BorgWarner)
- AdBlue pompa ve enjektör (Superb III)
- Dizel partikül filtresi (DPF — orijinal)

## Şanzıman Parçaları

Superb, çoğunlukla **DSG (DQ250 / DQ381 / DQ500)** veya **6 ileri manuel** ile donatılmıştır.

| Şanzıman Tipi | Nesil | Stok Parçalarımız |
|---|---|---|
| 6 ileri manuel | Tüm | Debriyaj seti (LUK, Sachs, Valeo), volan |
| DSG DQ200 (kuru) | Superb II 1.4 TSI | Mekatronik, kavrama seti, DSG yağı |
| DSG DQ250 (yağlı) | Superb II 2.0 TSI / TDI | Mekatronik, kavrama seti, DSG yağı |
| DSG DQ381 (yağlı) | Superb III 1.5/2.0 | Mekatronik, kavrama seti, DSG yağı |
| DSG DQ500 (yağlı) | Superb III 2.0 TDI 190 | Mekatronik, kavrama seti |

## Fren Sistemi

- **Superb I** — ATE fren kaliper tasarımı
- **Superb II** — TRW kaliper
- **Superb III** — ATE/TRW karışık (motor seçeneğine göre)

**Stoklarımızdaki fren parçaları:**
- Ön fren balata (Bosch, ATE, TRW, Brembo, Ferodo)
- Arka fren balata
- Ön fren disk (288 / 312 / 320 mm)
- Arka fren disk (282 / 300 mm)
- Fren hidroliği (DOT 4 / DOT 5.1)
- Fren kaliper (orijinal + ATE yenilenmiş)

## Elektrik ve Aydınlatma

- **Superb I** — H7/H4 halojen, opsiyonel Xenon
- **Superb II** — H7 halojen, opsiyonel Bi-Xenon
- **Superb III** — Tam LED (halo/halo), opsiyonel AFS adaptif

**Stoklarımızdaki aydınlatma parçaları:**
- Far (orijinal + Depo / TYC / Valeo yan sanayi)
- Stop (orijinal + Depo / TYC)
- Sis farı
- LED ampul seti (Osram, Philips)
- Far ayar motoru

## Sıkça Sorulan Sorular (SSS)

**Superb 1.8 TSI triger kayışı mı zincir mi?**
Superb II 1.8 TSI (EA888 Gen1/2) triger **kayışıdır**, 90.000 – 120.000 km'de değişmelidir. Superb III 1.5 TSI triger **zinciridir**, uzun ömürlüdür.

**Superb 2.0 TDI AdBlue arızası olursa hangi parça değişir?**
En sık AdBlue enjektör veya AdBlue pompası arızalanır. Superb III için bu parçaları orijinal olarak stokluyoruz.

**Superb II ve Superb III DSG yağı aynı mı?**
Her ikisi de VW TL 52 182 (eski adıyla G 052 182) spesifikasyonunda DSG yağı kullanır. 60.000 km'de değişim öneriyoruz.

**Superb için orijinal parça mı yan sanayi mi?**
Motor ve turbo gibi kritik parçalar için orijinal, fren ve bakım parçaları için kaliteli yan sanayi (Bosch, ATE, TRW) idealdir.

---

*Skoda Superb parça ihtiyacınız için İmza Volkswagen ile iletişime geçin. Şase numaranızı paylaşın, parça kodunu saniyeler içinde çıkaralım: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Skoda', 'Superb', '3U', '3T', '3V', 'Yedek Parça', 'Ankara']
  },
  {
    id: 'blog-025',
    title: "Seat Ibiza 6J, 6J5 ve 6F: Jenerasyon Parça Uyumluluğu",
    slug: 'seat-ibiza-6j-6j5-6f-parca-uyumlulugu',
    excerpt: "Seat Ibiza'nın 6J (2008-2012), 6J5 (2012-2015) ve 6F (2017-günümüz) jenerasyonları arasındaki parça uyumluluk tablosu ve İmza Volkswagen stoklarındaki Ibiza parçaları.",
    content: `## Seat Ibiza Jenerasyon Parça Uyumluluğu

Seat Ibiza, VAG grubu küçük segment temsilcisi olarak Türkiye'de yaygın kullanılan bir modeldir. **6J (2008-2012), 6J5 (2015-2017) ve 6F (2017-günümüz)** olmak üzere üç ana jenerasyon piyasadadır. Ibiza parçaları büyük ölçüde **VW Polo 6R/6C ve Skoda Fabia 5J/NJ** ile platform ortaklığı taşır, bu da parça tedariğini kolaylaştırır.

## Jenerasyon Özet Tablosu

| Kod | Nesil | Yıllar | Platform | Motor Ailesi | Polo ile Ortak |
|---|---|---|---|---|---|
| 6J | Ibiza IV | 2008 – 2012 | PQ25 | 1.2, 1.4, 1.6, 1.2 TDI, 1.6 TDI | Polo 6R |
| 6J5 | Ibiza IV Fazelift | 2012 – 2015 | PQ25 | 1.2 TSI, 1.4 TSI, 1.6 TDI | Polo 6R/6C |
| 6F | Ibiza V | 2017 – günümüz | MQB A0 | 1.0 MPI, 1.0 TSI, 1.5 TSI, 1.6 TDI | Polo AW |

## Parça Uyumluluk Matrisi

| Parça Grubu | 6J ↔ 6J5 | 6J5 ↔ 6F | 6J ↔ 6F | Polo ile |
|---|---|---|---|---|
| Fren diski (ön) | ⚠️ Fren tipine göre | ❌ | ❌ | Polo 6R ile aynı |
| Fren balata | ⚠️ Fren tipine göre | ❌ | ❌ | Polo 6R ile aynı |
| Far | ❌ (Fazelift farklı) | ❌ | ❌ | Polo 6R ile karşılaştırılmalı |
| Stop | ⚠️ Benzer | ❌ | ❌ | — |
| Ön tampon | ❌ (Fazelift farklı) | ❌ | ❌ | — |
| Arka tampon | ❌ (Fazelift farklı) | ❌ | ❌ | — |
| Çamurluk | ❌ | ❌ | ❌ | — |
| Kapı paneli | ⚠️ Benzer | ❌ | ❌ | — |
| Ayna | ⚠️ Elektrik farklı | ❌ | ❌ | Polo 6R ile aynı |
| Motor parçaları (1.2/1.4) | ⚠️ Bakım parçaları aynı | ❌ | ❌ | Polo 6R ile ortak |
| Motor parçaları (1.0 TSI) | — | — | ⚠️ Polo AW ile ortak | Polo AW ile aynı |
| Süspansiyon (ön) | ⚠️ Benzer | ❌ | ❌ | Polo 6R ile ortak |
| Süspansiyon (arka) | ⚠️ Benzer | ❌ | ❌ | Polo 6R ile ortak |
| Multimedya | ❌ | ❌ | ❌ | — |
| Klima kompresörü | ⚠️ Motor tipine göre | ❌ | ❌ | Polo 6R ile aynı |
| Kalorifer radyatörü | ⚠️ Benzer | ❌ | ❌ | Polo 6R ile aynı |

## İmza Volkswagen Stoklarında Bulunan Ibiza Parçaları

### Fren Sistemi

- Ön fren balata — TRW, Bosch, ATE, Ferodo
- Arka fren balata
- Fren diskleri (256 / 276 mm motor seçeneğine göre)
- Fren kaliper (orijinal + ATE yenilenmiş)
- Fren hidroliği (DOT 4)

### Motor ve Bakım

- Triger seti (1.2 TSI / 1.4 TSI — Contitech, Gates, INA)
- 1.0 TSI turbo (orijinal + BorgWarner yan sanayi)
- Motor yağı (VW 504/507 — Castrol, Mobil, Total)
- Hava filtresi, yağ filtresi, yakıt filtresi (Mann, Mahle, Bosch)
- Buji seti (NGK, Bosch)
- Yakıt pompası (Pierburg)

### Elektrik ve Aydınlatma

- Far (orijinal + Depo / Valeo yan sanayi)
- Stop (orijinal + Depo / TYC)
- Sis farı
- Far ampulü (H7, H4 — Osram, Philips)
- Marş motoru, alternatör (Bosch, Valeo)

### Süspansiyon ve Direksiyon

- Amortisör (Sachs, KYB, Monroe)
- Helezon yay
- Salıncak (orijinal + Lemförder yan sanayi)
- Direksiyon kutusu (orijinal yenilenmiş)

## Bakım Parça Seti Önerisi

**Ibiza 6J5 1.2 TSI yıllık bakım seti (her 15.000 km'de):**

| Parça | Marka Seçenekleri | Yaklaşık Fiyat (TL) |
|---|---|---|
| Motor yağı 4L (504.00) | Castrol / Mobil | 800 – 1.200 |
| Yağ filtresi | Mann / Mahle | 150 – 250 |
| Hava filtresi | Mann / Mahle | 200 – 350 |
| Yakıt filtresi | Mann / Mahle | 250 – 400 |
| Polen filtresi | Mann / Mahle / Bosch | 200 – 350 |
| Buji seti (4 adet) | NGK / Bosch | 600 – 1.000 |
| **Toplam** | | **2.200 – 3.550** |

*Fiyatlar yaklaşık piyasa aralığıdır, güncel teyit için lütfen arayın.*

## Sıkça Sorulan Sorular (SSS)

**Ibiza 6J fren balatası 6F'ye uyar mı?**
Hayır, 6J/6J5 fren sistemi 6F'ye göre daha küçük çaplıdır. 6F tamamen yeni fren tasarımı kullanır.

**Ibiza 1.2 TSI mi yoksa 1.4 TSI mı tercih edilmeli?**
Parça açısından her ikisi de yaygın. 1.2 TSI (CBZA / CBZB) parçaları daha ekonomik, 1.4 TSI (CAVA / CAVB) daha güçlü ama turbo yağ sorunlarına dikkat edilmelidir.

**Ibiza 1.0 TSI triger kayışı mı zincir mi?**
Ibiza 6F 1.0 TSI triger **zincir** kullanır, uzun ömürlüdür. Periyodik kontrol yeterlidir.

**Ibiza parça fiyatları Polo'dan pahalı mı?**
Hayır, platform ortaklığı nedeniyle Ibiza parçaları Polo ile aynı fiyat aralığındadır, hatta bazı kategorilerde daha ekonomiktir.

---

*Seat Ibiza yedek parça ihtiyacınız için İmza Volkswagen Ankara: +90 543 979 20 13. Şase numaranızı gönderin, parçayı saniyeler içinde tespit edelim.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 10,
    tags: ['Seat', 'Ibiza', '6J', '6F', 'Yedek Parça', 'Uyumluluk', 'Ankara']
  },
  {
    id: 'blog-026',
    title: "VAG Fren Balata Seçimi: Orijinal vs Yan Sanayi (Bosch, ATE, TRW)",
    slug: 'vag-fren-balata-secimi-orijinal-yan-sanayi',
    excerpt: "Volkswagen, Audi, Skoda, Seat, Cupra araçlarınız için fren balata seçimi. Orijinal ve Bosch / ATE / TRW / Brembo / Ferodo gibi kaliteli yan sanayi markaların karşılaştırması, fiyat-performans analizi.",
    content: `## VAG Grubu Fren Balata Seçim Rehberi

Fren balata, aracın en kritik güvenlik parçalarından biridir. VAG grubu araçlarda fren balata seçimi sadece marka değil, **kullanım amacı, sürüş tarzı ve bütçeye** göre yapılmalıdır. İmza Volkswagen olarak **orijinal ve kaliteli yan sanayi** (OEE) seçeneklerinde fren balata tedariği yapıyoruz.

## Fren Balata Türleri

### Yarı Metalik (Semi-Metallic)

- %30-65 metalik elyaf içerir
- Yüksek ısıya dayanıklı
- Daha iyi frenleme
- **Dezavantaj:** Disk aşındırıcı, gürültülü, tozlu

### Organik (NAO - Non Asbestos Organic)

- Cam, kauçuk, seramik elyaf karışımı
- Sessiz çalışma
- Düşük disk aşındırma
- **Dezavantaj:** Daha yüksek sıcaklıkta performans düşer

### Seramik

- Seramik elyaf + bakır elyaf karışımı
- En sessiz, en az toz
- Uzun ömür (30.000 – 50.000 km)
- **Dezavantaj:** Soğuk havada ilk frenleme gecikmeli olabilir, fiyat yüksek

### Düşük Metalik (Low-Metallic)

- Yarı metalik ile organik arası
- Günlük kullanım için ideal denge

## Marka Karşılaştırma Tablosu

| Marka | Tür | Disk Uyumu | Fiyat Segmenti | Ömür | Gürültü |
|---|---|---|---|---|---|
| **VW/Audi Orijinal** | Yarı metalik | ✓ | Yüksek | 40-60k km | Düşük |
| **Bosch** | Yarı metalik / Düşük metalik | ✓ | Orta-Yüksek | 35-55k km | Düşük |
| **ATE** | Yarı metalik | ✓ | Orta-Yüksek | 35-55k km | Düşük |
| **TRW** | Yarı metalik | ✓ | Orta | 30-50k km | Orta |
| **Brembo** | Yarı metalik / Seramik | ✓ | Orta-Yüksek | 35-55k km | Düşük |
| **Ferodo** | Yarı metalik | ✓ | Orta | 30-50k km | Orta |
| **Textar** | Yarı metalik | ✓ | Orta | 35-50k km | Düşük |
| **Ekonomik Çin** | Değişken | ⚠️ Değişken | Düşük | 15-30k km | Yüksek |

## VAG Modellerine Göre Önerilen Fren Balata

| Model | Ön Balata OEM Kodu | İmza Volkswagen Önerisi |
|---|---|---|
| VW Golf 7 / 7.5 | 5Q0 698 151 A | Bosch 0986494563 veya ATE 13.0460-7228.2 |
| VW Polo 6R / AW | 6R0 698 151 A | Bosch 0986494564 veya TRW GDB1550 |
| VW Passat B8 | 3Q0 698 151 | ATE 13.0460-7308.2 veya Brembo P85075 |
| Audi A4 B9 | 8W0 698 151 AB | ATE 13.0460-7308.2 veya TRW GDB1742 |
| Audi A3 8V | 8V0 698 151 | Bosch 0986495292 |
| Skoda Octavia 5E | 5Q0 698 151 A | ATE 13.0460-7228.2 |
| Seat Leon 5F | 5Q0 698 151 A | Bosch 0986494563 |
| Cupra Formentor | 5Q0 698 151 E | ATE 13.0460-7338.2 (yüksek ısı dayanımı) |

*Stok ve güncel fiyat için lütfen teyit alın.*

## Fiyat-Performans Analizi

2020 Audi A3 8V 1.4 TFSI ön fren balata örneği:

| Seçenek | Fiyat (TL) | Garanti | Beklenen Ömür | Tavsiye |
|---|---|---|---|---|
| Orijinal Audi | 2.500 – 3.500 | 2 yıl | 45.000 – 65.000 km | ⭐⭐⭐⭐⭐ |
| Bosch | 1.800 – 2.500 | 1 yıl | 40.000 – 60.000 km | ⭐⭐⭐⭐⭐ |
| ATE | 1.800 – 2.500 | 1 yıl | 40.000 – 60.000 km | ⭐⭐⭐⭐⭐ |
| Brembo | 1.700 – 2.400 | 1 yıl | 40.000 – 60.000 km | ⭐⭐⭐⭐⭐ |
| TRW | 1.400 – 2.000 | 1 yıl | 35.000 – 55.000 km | ⭐⭐⭐⭐ |
| Ferodo | 1.300 – 1.900 | 1 yıl | 35.000 – 55.000 km | ⭐⭐⭐⭐ |
| Ekonomik Çin | 500 – 900 | 6 ay | 15.000 – 25.000 km | ⭐⭐ |

## Fren Balata Değişim Periyodu

- **Ön balata:** Genelde 30.000 – 60.000 km (motor önde olduğu için daha fazla yük)
- **Arka balata:** Genelde 50.000 – 80.000 km
- **Disk + balata beraber:** Disk kalınlığı 3mm altına düştüyse ve balata ile birlikte değişim önerilir

## Sıkça Sorulan Sorular (SSS)

**VAG araçlar için hangi fren balata markasını seçmeliyim?**
Günlük kullanım için Bosch, ATE, Brembo arasından seçim yapılabilir; fiyat/performans açısından TRW da çok iyidir. Ekonomik segmentten kaçınmanızı öneriyoruz.

**Fren balatasını kendim değiştirebilir miyim?**
Fren balata değişimi fren kaliper söküm-takımı gerektirdiği için uzman tarafından yapılmalıdır. Yanlış montaj ciddi güvenlik riski yaratır.

**Ön ve arka fren balata aynı mı?**
Hayır, ön ve arka balata boyut, sürtünme alanı ve basınç noktaları açısından farklıdır. Yanlış balata takımı dengesiz frenlemeye yol açar.

**Orijinal fren balata ile Bosch arasında gerçek bir fark var mı?**
Test sonuçlarına göre Bosch ve ATE, orijinal VAG balatalarına performans olarak çok yakındır. Bazı testlerde orijinalin biraz daha yüksek ısı dayanımı gösterdiği raporlanmıştır, ancak günlük kullanımda fark edilmez.

**Fren balata + disk seti mi alayım yoksa sadece balata mı?**
Disk kalınlığı 3mm üstündeyse sadece balata yeterli. Eğer disk de aşınmışsa set olarak değişim önerilir.

---

*VAG araçlarınız için fren balata ihtiyacınızda İmza Volkswagen stoklarında Bosch, ATE, TRW, Brembo, Ferodo markaları hazır. Şase numaranız ile doğru parçayı tespit edelim: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['VAG', 'Fren Balata', 'Bosch', 'ATE', 'TRW', 'Brembo', 'Orijinal', 'Yan Sanayi', 'Ankara']
  },
  {
    id: 'blog-027',
    title: "VAG Triger Seti: Kayış mı Zincir mi? Doğru Seçim",
    slug: 'vag-triger-seti-kayis-zincir-secim',
    excerpt: "VAG grubu motorlarda triger kayışı ve triger zinciri farkı, hangi motorlarda hangisi kullanıldığı, değişim periyotları ve İmza Volkswagen'in triger seti stokları.",
    content: `## VAG Triger Sistemi: Kayış mı Zincir mi?

VAG grubu motorlarda iki temel triger sistemi kullanılır: **triger kayışı** ve **triger zinciri**. Her sistemin avantajı, dezavantajı ve bakım ihtiyacı farklıdır. Yanlış triger parça seçimi motor hasarına yol açabilir; bu rehberde İmza Volkswagen'in triger seti stoğundaki doğru seçimleri özetliyoruz.

## Triger Kayışı vs Zinciri

| Özellik | Triger Kayışı | Triger Zinciri |
|---|---|---|
| Malzeme | Kauçuk + elyaf (cam/karbon) | Metal zincir |
| Ömür | 60.000 – 120.000 km | Ömür boyu (genelde) |
| Değişim periyodu | Periyodik (90k – 120k km) | Kontrol amaçlı |
| Ses | Sessiz | Hafif mekanik ses normal |
| Maliyet | Düşük-orta | Yüksek (ama uzun ömür) |
| Risk | Koparsa motor hasarı | Genelde uyarı verir, nadiren kopar |
| Motor yağı etkisi | Yağdan etkilenmez | Yağ kalitesi önemli |

## Hangi VAG Motorlarda Ne Var?

| Motor | Triger Tipi | Değişim Periyodu |
|---|---|---|
| 1.2 TSI (CBZA / CBZB / CJZA) | **Kayış** | 90.000 km |
| 1.4 TSI (CAVA / CAVB / CZCA) | **Kayış** | 90.000 – 120.000 km |
| 1.4 TSI ACT (CPTA) | **Kayış** | 90.000 – 120.000 km |
| 1.5 TSI (DADA / DPCA) | **Zincir** | Kontrol amaçlı |
| 1.8 TSI (EA888 Gen1/2) | **Kayış** | 90.000 km |
| 2.0 TSI (EA888 Gen1/2) | **Kayış** | 90.000 km |
| 2.0 TSI (EA888 Gen3) | **Zincir** | Kontrol amaçlı |
| 1.6 TDI (EA288) | **Kayış** | 90.000 – 120.000 km |
| 2.0 TDI (EA189 Gen1) | **Kayış** | 90.000 – 120.000 km |
| 2.0 TDI (EA189 Gen2) | **Kayış** | 120.000 – 150.000 km |
| 2.0 TDI (EA288) | **Kayış** | 120.000 – 150.000 km |
| 3.0 TDI (EA897) | **Zincir** | Kontrol amaçlı |

## Triger Seti İçeriği

İster kayış ister zincir olsun, VAG triger seti sadece kayış/zincirden ibaret değildir. Tam sette şunlar bulunur:

1. **Triger kayışı veya zinciri** (ana parça)
2. **Gergi rulmanı / gergi mekanizması**
3. **Kasnak** (krank ve eksantrik kasnağı)
4. **Ara parçalar** (varsa)
5. **Conta ve sızdırmazlık elemanları**
6. **Cıvata ve somun seti**

İmza Volkswagen olarak tüm setleri parça parça değil, **set halinde** öneriyoruz — yarıda kalan değişimlerde tekrar sökmek hem zaman hem para kaybıdır.

## Marka Seçenekleri (İmza Volkswagen Stoklarında)

| Marka | Uygun Motor | Fiyat Segmenti | Garanti |
|---|---|---|---|
| **Orijinal VAG** | Tüm | Yüksek | 2 yıl |
| **INA (Schaeffler)** | Tüm (önerilen) | Orta-Yüksek | 2 yıl |
| **Contitech** | Tüm | Orta | 2 yıl |
| **Gates** | Tüm | Orta | 1 yıl |
| **Dayco** | Çoğu motor | Orta-Düşük | 1 yıl |
| **Bosch** | Çoğu motor | Orta | 1 yıl |
| **Febi Bilstein** | Çoğu motor | Orta-Düşük | 1 yıl |

## Fiyat Örnekleri (2024-2026 Piyasa Aralığı)

| Motor | Orijinal Set | INA Set | Contitech Set |
|---|---|---|---|
| 1.4 TSI (CAVA) | 4.500 – 6.500 TL | 3.000 – 4.500 TL | 2.800 – 4.200 TL |
| 1.6 TDI | 4.000 – 6.000 TL | 2.500 – 4.000 TL | 2.300 – 3.800 TL |
| 2.0 TDI (EA189) | 5.500 – 8.000 TL | 3.500 – 5.500 TL | 3.200 – 5.000 TL |
| 2.0 TSI (EA888 Gen3) zincir | 12.000 – 18.000 TL | 8.000 – 12.000 TL | — |

*Fiyatlar yaklaşık piyasa aralığıdır. Güncel teyit için lütfen arayın.*

## Sıkça Sorulan Sorular (SSS)

**VAG aracımda kayış mı zincir mi var nasıl anlarım?**
Motor kodu ile öğrenilir. Motor kodu motor bloğunda veya ruhsatta yazar. İmza Volkswagen'e VIN gönderdiğinizde motor kodunu ve triger tipini saniyeler içinde tespit ediyoruz.

**Triger kayışı koparsa ne olur?**
Triger kayışı koptuğunda eksantrik ve krank mili senkronizasyonu bozulur. İnterferans motorlarda (TDI, TSI çoğu model) **pistonlar supaplara çarpar** ve motor ağır hasar görür.

**Triger değişimi ne kadar sürer?**
Deneyimli bir teknisyen 2-4 saat arasında triger seti değişimi yapar. Soğutma suyu boşaltma, motor kapak contası gerekebileceğinden bazen daha uzun sürebilir.

**Triger seti değişirken başka neler değişmeli?**
- Motor yağı ve filtresi
- Soğutma suyu (eğer söküm gerekti ise)
- Gergi ve kasnak (set içinde gelir)
- Bazı durumlarda aksesuar kayışı (V kayışı)

**Triger değişimini kaçırırsam ne olur?**
Triger kayışı ömrünü aşmışsa koptuğunda motor hasarı kaçınılmazdır. Maliyet: motor kapak tamiri 30.000 – 80.000 TL arası olabilir. **Periyodik değişim en ucuz sigortadır.**

---

*VAG triger seti ihtiyacınız için İmza Volkswagen stoklarında INA, Contitech, Gates ve orijinal VAG setleri hazır. Motor kodunuzu söyleyin, doğru seti tespit edelim: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['VAG', 'Triger', 'Kayış', 'Zincir', 'Triger Seti', 'INA', 'Contitech', 'Ankara']
  },
  {
    id: 'blog-028',
    title: "Audi Far Teknolojileri: Halojen, Xenon, LED ve Matrix LED Karşılaştırması",
    slug: 'audi-far-teknolojileri-halojen-xenon-led-matrix-karsilastirma',
    excerpt: "Audi araçlarda kullanılan far teknolojileri: Halojen, Xenon, LED ve Matrix LED. Her teknolojinin avantajları, parça numaraları, fiyat aralıkları ve İmza Volkswagen'in far stoğu.",
    content: `## Audi Far Teknolojileri: Hangisi Hangi Modelde?

Audi, otomotiv aydınlatma teknolojisinde öncü markalardan biridir. A4, A6, Q5 gibi modellerde **Halojen, Xenon, LED ve Matrix LED** olmak üzere dört farklı far teknolojisi kullanılır. Her teknolojinin parça kodu, fiyatı ve yedek parça stratejisi farklıdır. İmza Volkswagen olarak Audi'nin tüm far teknolojileri için **orijinal ve kaliteli yan sanayi** tedariği yapıyoruz.

## Far Teknolojisi Karşılaştırması

| Özellik | Halojen | Xenon (HID) | LED | Matrix LED |
|---|---|---|---|---|
| Işık kaynağı | Tungsten flaman | Yüksek basınçlı gaz | Yarı iletken diyot | Çoklu LED segment |
| Lümen (tipik) | 1.500 lm | 3.200 lm | 4.000+ lm | 5.000+ lm |
| Renk sıcaklığı | 3.200 K (sarı) | 4.300 K (beyaz) | 5.500 K (gün ışığı) | 5.500 K (gün ışığı) |
| Ömür | 500 – 1.000 saat | 2.500 saat | 10.000+ saat | 10.000+ saat |
| Enerji tüketimi | 55W | 35W | 20-30W | 25-40W |
| Aydınlatma mesafesi | 100 m | 200 m | 250 m | 300+ m |
| Fiyat segmenti | Düşük | Orta | Yüksek | Çok yüksek |
| Adaptif özellik | ❌ | ⚠️ AFS opsiyonel | ⚠️ AFS opsiyonel | ✓ Standart |

## Hangi Audi Modelinde Hangisi Var?

| Model | Halojen | Xenon | LED | Matrix LED |
|---|---|---|---|---|
| A3 8V (2012-2020) | ✓ Standart | ✓ Opsiyonel | ✓ Opsiyonel | ❌ |
| A3 8Y (2020+) | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |
| A4 B8 (2007-2015) | ✓ Baz donanım | ✓ Opsiyonel | ✓ Opsiyonel | ❌ |
| A4 B9 (2015-2023) | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |
| A6 C7 (2011-2018) | ❌ | ✓ Standart | ✓ Opsiyonel | ❌ |
| A6 C8 (2018+) | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |
| Q5 8R (2008-2017) | ✓ Baz donanım | ✓ Opsiyonel | ✓ Opsiyonel | ❌ |
| Q5 FY (2017+) | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |
| Q7 4M (2015+) | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |
| e-tron | ❌ | ❌ | ✓ Standart | ✓ Opsiyonel |

## Fiyat Aralıkları (Tek Far)

| Teknoloji | Orijinal Fiyat | Yan Sanayi Fiyat (Depo, TYC, Valeo) |
|---|---|---|
| Halojen (A4 B8) | 4.000 – 6.000 TL | 1.500 – 2.800 TL |
| Xenon (A6 C7) | 8.000 – 12.000 TL | 3.500 – 5.500 TL |
| LED (A4 B9) | 18.000 – 25.000 TL | 6.000 – 9.000 TL |
| Matrix LED (A6 C8) | 35.000 – 50.000 TL | — (sadece orijinal) |

*Fiyatlar yaklaşık piyasa aralığıdır. Güncel teyit için lütfen arayın.*

## Matrix LED Teknolojisi Nedir?

Matrix LED, Audi'nin 2013'ten beri A8, sonra A4, A6, Q5, Q7 ve e-tron modellerinde sunduğu ileri teknolojidir. Ön kameradan gelen verileri kullanarak:

- **Karşıdan gelen araçları algılar** ve o bölgedeki LED'leri kapatır (uzun far açık kalır, karşı sürücü kamaşmaz)
- **Trafik levhası tarafını aydınlatmaz** (yansıma önlenir)
- **Köşe aydınlatma** virajlarda otomatik olarak açılır
- **Şehir dışı / otoyol / şehir içi** modları otomatik geçiş yapar
- 25 ayrı LED segmentinden oluşur, her biri milisaniyeler içinde bağımsız kontrol edilir

## İmza Volkswagen Stoklarında Bulunan Audi Far Çeşitleri

### A4 B9 (2015-2023)

- LED far (orijinal)
- Matrix LED far (orijinal)
- LED stop (orijinal + Depo / TYC)
- Far iç LED modülü

### A6 C7 (2011-2018)

- Xenon far (orijinal + Depo / Valeo)
- LED far (orijinal)
- Far balast (Xenon sürücü ünitesi)
- Far ayar motoru

### Q5 FY (2017+)

- LED far (orijinal)
- Matrix LED far (orijinal)
- LED sis farı (orijinal)
- Arka LED stop (orijinal + Depo / TYC)

### Far Aksesuarları

- Halojen ampul (H7, H4, H1 — Osram, Philips, Narva)
- Xenon ampul (D1S, D2S, D3S, D4S — Osram, Philips)
- LED ampul (H7 LED, H4 LED — Philips, Osram, M-Tech)
- Far balast (orijinal + Hella yan sanayi)
- Far ayar motoru (Hella, Bosch)
- Far yıkama motoru (Hella)

## Sıkça Sorulan Sorular (SSS)

**Audi Matrix LED mi yoksa standart LED mi tercih edilmeli?**
Matrix LED gece sürüş güvenliğinde ciddi avantaj sağlar. Ancak parça fiyatı çok yüksek (35.000-50.000 TL civarı tek far). Bütçe kısıtlıysa standart LED yeterlidir.

**Halojen farı LED'e dönüştürebilir miyim?**
Teknik olarak dönüşüm kiti mevcut ancak Audi araçlarda ECU uyumu ve FAR ayar yazılımı sorun çıkarabilir. Yasal uyumluluk açısından risklidir.

**Xenon far ampulü değişimi ne kadar?**
Tek ampul değişimi 800 – 1.500 TL arası. Far söküm gerektiği için montaj ücreti ayrıca eklenir.

**Far iç kısmı buğulanıyor, ne yapmalıyım?**
Far muhafazası contaları zamanla sertleşir ve nem alır. Genelde farın açılıp contaların yenilenmesi çözüm sağlar. İmza Volkswagen bu hizmeti vermekte olup, far değişiminden çok daha ekonomiktir.

**Audi A4 B9 far, A6 C8'e uyar mı?**
Hayır, kasa yapısı ve elektrik tesisatı farklıdır. Aynı Audi modelinin farklı motor seçeneklerinde bile far tipi değişebilir, bu yüzden her zaman VIN ile sorgulama şarttır.

---

*Audi far ihtiyacınız için İmza Volkswagen stoklarında orijinal ve yan sanayi (Depo, TYC, Valeo) seçenekleri mevcut. Şase numaranızı gönderin: +90 543 979 20 13.*`,
    category: "Teknoloji",
    categorySlug: 'teknoloji',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 12,
    tags: ['Audi', 'Far', 'LED', 'Matrix LED', 'Xenon', 'Halojen', 'Aydınlatma', 'Ankara']
  },
  {
    id: 'blog-029',
    title: "VAG Motor Yağı Spesifikasyonu: VW 504.00 / 507.00 Tam Rehber",
    slug: 'vag-motor-yagi-spesifikasyonu-vw-504-507-rehber',
    excerpt: "VAG grubu araçlar için motor yağı spesifikasyonları: VW 502.00, 504.00, 507.00, 508.00 farkları, hangi motor için hangi yağ, Castrol / Mobil / Total önerileri ve İmza Volkswagen stokları.",
    content: `## VAG Motor Yağı Spesifikasyon Rehberi

Volkswagen Grubu, motor yağı konusunda kendi spesifikasyonlarını belirler ve sadece onaylı yağlar garanti kapsamında kalır. Yanlış spesifikasyonda yağ kullanımı **motor hasarına ve garanti kaybına** yol açabilir. İmza Volkswagen olarak Castrol, Mobil ve Total'ın VAG onaylı yağlarını stokluyoruz.

## VAG Spesifikasyon Hiyerarşisi

VAG spesifikasyonları **yaş, motor tipi ve emisyon seviyesine** göre belirlenir. Sürücü olarak bilmeniz gereken en yaygın olanlar:

| Spesifikasyon | Kullanım Alanı | Viskozite Önerisi |
|---|---|---|
| **VW 502.00** | Eski nesil benzinli motorlar (2000-2010) | 5W-30, 5W-40 |
| **VW 504.00** | Modern benzinli motorlar (2010+) | 5W-30, 0W-30 |
| **VW 507.00** | Modern dizel motorlar (2010+) | 5W-30, 0W-30 |
| **VW 508.00** | Yeni nesil motorlar (2017+, TSI/TDI) | 0W-20 |
| **VW 509.00** | Porsche ve yüksek performans | 0W-20 |
| **VW 511.00** | Uzun ömürlü yağ (LongLife) | 0W-20 |
| **VW 504.00 / 507.00** | LongLife servisi (30.000 km'ye kadar) | 5W-30, 0W-30 |

## Hangi Motor İçin Hangi Spesifikasyon?

| Motor | Önerilen Spesifikasyon | Viskozite |
|---|---|---|
| 1.0 TSI (EA211) | VW 508.00 | 0W-20 |
| 1.2 TSI (CBZA/CBZB) | VW 504.00 | 5W-30 |
| 1.4 TSI (CAVA/CAVB) | VW 504.00 | 5W-30 |
| 1.4 TSI ACT (CPTA) | VW 507.00 | 5W-30 |
| 1.5 TSI (DADA) | VW 508.00 | 0W-20 |
| 1.6 TDI (EA288) | VW 507.00 | 5W-30 |
| 1.9 TDI (PD) | VW 505.01 veya 506.01 | 5W-40 |
| 2.0 TDI (EA189) | VW 507.00 | 5W-30 |
| 2.0 TDI (EA288) | VW 507.00 | 5W-30 |
| 2.0 TSI (EA888 Gen3) | VW 508.00 | 0W-20 |
| 2.0 TSI (EA888 Gen1/2) | VW 504.00 | 5W-30 |
| 3.0 TDI (EA897) | VW 507.00 | 5W-30 |
| 3.0 TFSI | VW 504.00 | 5W-30 |

## Marka Bazında Öneriler

| Marka | Ürün | Spesifikasyon | Viskozite | Ambalaj |
|---|---|---|---|---|
| **Castrol** | EDGE 5W-30 LL | 504.00 / 507.00 | 5W-30 | 1L / 4L / 5L |
| **Castrol** | EDGE 0W-30 LL | 504.00 / 507.00 | 0W-30 | 1L / 5L |
| **Castrol** | EDGE Professional 0W-20 | 508.00 | 0W-20 | 1L / 5L |
| **Mobil** | ESP 5W-30 | 504.00 / 507.00 | 5W-30 | 1L / 4L / 5L |
| **Mobil** | 1 ESP Formula | 508.00 | 0W-20 | 1L / 5L |
| **Total** | Quartz INEO MC3 5W-30 | 504.00 / 507.00 | 5W-30 | 1L / 5L |
| **Total** | Quartz INEO First 0W-30 | 504.00 / 507.00 | 0W-30 | 1L / 5L |
| **Motul** | 8100 X-Clean EFE 5W-30 | 504.00 / 507.00 | 5W-30 | 1L / 5L |
| **Liqui Moly** | Top Tec 6200 5W-30 | 504.00 / 507.00 | 5W-30 | 1L / 5L |
| **Shell** | Helix Ultra ECT 0W-30 | 504.00 / 507.00 | 0W-30 | 1L / 4L |

## VAG Yağ Değişim Periyotları

- **LongLife servisi (504.00 / 507.00):** 30.000 km veya 2 yıl
- **Sabit periyot (eski motorlar):** 15.000 km veya 1 yıl
- **Sport kullanım / tozlu ortam:** 7.500 – 10.000 km
- **Ağır hizmet (taksi, ticari):** 10.000 – 15.000 km

## Yağ Değişiminde Neler Yapılmalı?

1. **Motor yağı** (doğru spesifikasyon)
2. **Yağ filtresi** (Mann, Mahle, Bosch — VAG araçlarda genelde tek tip)
3. **Boşaltma tapası contası** (bakım setinde gelir)
4. **Kar-ter kontrolü:** Dip çubuk ile seviye kontrolü
5. **Servis sıfırlama:** VCDS veya Audi/VW diagnostic cihazı ile

## Fiyat Aralıkları (4L + Filtre Seti)

| Marka | 504.00 / 507.00 5W-30 | 508.00 0W-20 |
|---|---|---|
| Castrol | 1.500 – 2.200 TL | 1.800 – 2.500 TL |
| Mobil | 1.500 – 2.200 TL | 1.800 – 2.600 TL |
| Total | 1.300 – 1.900 TL | — |
| Motul | 1.700 – 2.400 TL | — |
| Liqui Moly | 1.600 – 2.300 TL | 1.900 – 2.700 TL |
| Shell | 1.400 – 2.000 TL | — |

*Fiyatlar yaklaşık piyasa aralığıdır. Güncel teyit için lütfen arayın.*

## Sıkça Sorulan Sorular (SSS)

**VAG araç için Castrol mı Mobil mı?**
İkisi de orijinal VAG spesifikasyonunda üretilir. Performans açısından fark minimum, fiyat/performans açısından Castrol EDGE biraz daha ekonomik.

**0W-30 ile 5W-30 arasında fark var mı?**
0W-30 daha düşük sıcaklıkta daha iyi akış sağlar (kış için ideal). 5W-30 daha geniş bir sıcaklık aralığında çalışır. VAG spesifikasyonu uygunluğu açısından ikisi de eşdeğerdir.

**Eski motoruma 504.00 yağ kullanabilir miyim?**
Eğer spesifikasyon tablosunda motorunuz 502.00 istiyorsa 504.00 da genelde uyumlu olur (geriye dönük uyumluluk). Ancak eski motor 5W-40 viskozite istiyorsa 5W-30'a düşürmemeniz önerilir.

**Yağ + filtre seti mi yoksa ayrı ayrı mı almalıyım?**
Genelde set olarak almak daha ekonomiktir. İmza Volkswagen set halinde satış yapıyor.

**Yağ kaç litre almalıyım?**
- 1.0 TSI, 1.2 TSI: 3.5 – 4.0 L (filtre dahil)
- 1.4 TSI, 1.6 TDI: 4.0 – 4.5 L
- 2.0 TSI, 2.0 TDI: 4.5 – 5.0 L
- 3.0 TDI, 3.0 TFSI: 6.5 – 7.0 L

İlk dolum için +0.5 L fazla almanızı öneriyoruz.

---

*VAG motor yağı ihtiyacınız için İmza Volkswagen stoklarında Castrol, Mobil, Total, Motul, Liqui Moly markalarının tüm spesifikasyonları mevcut. Şase numaranızı gönderin, doğru yağı tespit edelim: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 12,
    tags: ['VAG', 'Motor Yağı', '504.00', '507.00', '508.00', 'Castrol', 'Mobil', 'Total', 'Ankara']
  },
  {
    id: 'blog-030',
    title: "VW Crafter ve LT Ticari Araç Yedek Parça Tedariği",
    slug: 'vw-crafter-lt-ticari-arac-yedek-parca-tedarigi',
    excerpt: "VW Crafter (SY/SZ) ve LT (2D) modelleri için yedek parça tedariği. Filtreler, fren, motor, debriyaj ve elektrik parçaları. Ticari filolar için İmza Volkswagen avantajları.",
    content: `## VW Crafter ve LT Ticari Parça Tedariği

Volkswagen Crafter (büyük ticari) ve LT (eski nesil büyük ticari) Türkiye'de nakliye, lojistik ve servis sektöründe yaygın kullanılan modellerdir. Ticari araçlar binek araçlardan **çok daha yoğun kullanım** altında olduğu için parça tedariği hem kritik hem de hızlı olmalıdır. İmza Volkswagen olarak ticari filo müşterilerine **öncelikli stok** ve **esnek ödeme** seçenekleri sunuyoruz.

## VW LT (2D) — 1996-2006

- **Motor:** 2.5 TDI (PD), 2.8 TDI
- **Yaygın kullanım:** Eski nesil lojistik, servis, kamyonet
- **Stoklarımızdaki LT parçaları:**
  - Fren balata ve disk (TRW, Bosch, ATE)
  - Debriyaj seti (LUK, Sachs, Valeo)
  - Filtreler (Mann, Mahle, Bosch)
  - Turbo (orijinal + Garrett yan sanayi)
  - Triger seti (INA, Contitech, Gates)
  - Motor yağı (VW 505.01 / 506.01 — Castrol, Mobil)

## VW Crafter I (2E) — 2006-2017

- **Motor:** 2.0 TDI (EA189), 2.5 TDI, 3.0 TDI
- **Platform:** Mercedes Sprinter ile ortak (LT konsepti devamı)
- **Yaygın kullanım:** Lojistik, kargo, ambulans, karavan
- **Stoklarımızdaki Crafter I parçaları:**
  - 2.0 TDI motor parçaları (turbo, EGR, enjektör, triger)
  - Fren balata ve disk (Brembo, ATE, TRW)
  - Debriyaj seti ve volan
  - Debriyaj hidrolik merkezi
  - Marş motoru, alternatör (Bosch, Valeo)
  - Klima kompresörü (Denso, Sanden)
  - Far ve stop (Hella, Depo)
  - Kapı mekanizması (kilit, cam kaldırma)

## VW Crafter II (SY/SZ) — 2017-günümüz

- **Motor:** 2.0 TDI (EA288 Gen3)
- **Platform:** MAN TGE ile ortak
- **Yaygın kullanım:** Yeni nesil kargo, karavan, ambulans, atölye aracı
- **Stoklarımızdaki Crafter II parçaları:**
  - 2.0 TDI EA288 parçaları (turbo, EGR, enjektör)
  - Triger seti (kayış + gergi + kasnak)
  - AdBlue sistemi (enjektör, pompa, tank)
  - DSG (DQ500) veya manuel şanzıman parçaları
  - LED far ve stop (orijinal + Depo / TYC)
  - Park sensörü ve kamera
  - Adaptif cruise kontrol radyo modülü

## Ticari Filo Bakım Paketleri

İmza Volkswagen olarak ticari filo müşterilerine **bakım paketi** seçenekleri sunuyoruz:

### Crafter II 2.0 TDI Yıllık Bakım Paketi

| Parça | Marka Seçenekleri | Adet |
|---|---|---|
| Motor yağı 7L (504/507) | Castrol EDGE / Mobil ESP | 1 |
| Yağ filtresi | Mann W712/75 / Mahle OC90 | 1 |
| Hava filtresi | Mann C24135 / Mahle LX1292 | 1 |
| Yakıt filtresi | Mann WK8021 / Mahle KX208 | 1 |
| Polen filtresi | Mann CUK2939 / Mahle LAK293 | 1 |
| Fren balata ön | TRW / ATE | 1 set |
| Fren balata arka | TRW / ATE | 1 set |
| V kayışı | Gates / Contitech | 1 |
| **Toplam** | | **~5.500 – 7.500 TL** |

### Crafter II Periyodik Bakım Takvimi

- **15.000 km / 6 ay:** Yağ + filtre değişimi
- **30.000 km:** Hava, yakıt, polen filtresi + V kayışı kontrolü
- **60.000 km:** Triger kayışı kontrolü, DSG yağı (DQ500)
- **90.000 km:** Triger kayışı değişimi (gerekirse)
- **120.000 km:** Tam bakım + fren hidroliği
- **240.000 km:** Turbo kontrolü, AdBlue sistem bakımı

## Ticari Müşterilere Özel Avantajlar

İmza Volkswagen olarak **ticari filo müşterileri** için:

1. **Stoktan teslim:** Crafter, LT, Caddy, Transporter parçaları için 24-48 saat teslim
2. **Fatura ve garanti:** Tüm parçalar faturalı, 1-2 yıl garanti
3. **Toptan fiyat:** 3+ araçlı filolara özel iskonto
4. **Ödeme kolaylığı:** Havale, kredi kartı, çek (anlaşmalı filolar)
5. **Acil durum:** Aynı gün kargo imkanı
6. **VIN ile sorgu:** Aracın şase numarasından doğru parça tespiti

## Sıkça Sorulan Sorular (SSS)

**Crafter motoru ile Mercedes Sprinter motoru aynı mı?**
Crafter I (2E) Mercedes Sprinter ile aynı motor ve şanzımanı paylaşır (OM651 / OM642). Crafter II (SY) MAN TGE ile ortak 2.0 TDI kullanır.

**Crafter için triger kayışı mı zincir mi?**
Crafter II 2.0 TDI (EA288) **triger kayışı** kullanır. 90.000 – 120.000 km'de değişim önerilir.

**Crafter fren balata ömrü ne kadar?**
Ticari kullanımda ön fren balata genelde 25.000 – 40.000 km'de değişir (binek araçtan daha kısa). Filo yönetiminde periyodik kontrol önemlidir.

**Crafter AdBlue arızası olursa hangi parça değişir?**
En sık AdBlue enjektör veya AdBlue pompası arızalanır. İmza Volkswagen stoklarında orijinal AdBlue parçaları mevcut.

**Crafter için motor yağı hangi spesifikasyon?**
2.0 TDI (EA288) için **VW 507.00** spesifikasyonu, viskozite 5W-30 önerilir. Castrol EDGE veya Mobil ESP uygun yağlardır.

---

*Ticari filonuz için Crafter, LT, Caddy, Transporter yedek parça ihtiyacında İmza Volkswagen yanınızda. Toplu sipariş ve özel fiyat için: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Ticari Satış Ekibi",
    publishedAt: '2026-07-21',
    readTime: 12,
    tags: ['VW', 'Crafter', 'LT', 'Ticari Araç', 'Filo', 'Yedek Parça', 'Ankara']
  },
  {
    id: 'blog-031',
    title: "VAG Klima Kompresörü: Hangi Modeller, Hangi Parça",
    slug: 'vag-klima-kompresoru-hangi-modeller-hangi-parca',
    excerpt: "VAG araçlarda klima kompresörü çeşitleri: Sanden, Denso, Delphi, Valeo. Hangi modelde hangi kompresör kullanıldığı, klima gazı (R134a / R1234yf) ve İmza Volkswagen klima parçaları stoğu.",
    content: `## VAG Klima Kompresörü Seçim Rehberi

Klima kompresörü, aracın konfor sistemlerinin en önemli parçalarından biridir. VAG grubu araçlarda farklı üreticilerin (Sanden, Denso, Delphi, Valeo) kompresörleri kullanılır. Doğru kompresör seçimi için **motor seçeneği, klima tipi ve klima gazı** bilinmelidir. İmza Volkswagen olarak tüm VAG modelleri için orijinal ve kaliteli yan sanayi klima kompresörü tedariği yapıyoruz.

## Klima Gazı: R134a vs R1234yf

VAG grubu 2017'den itibaren AB normları gereği **R1234yf** gazına geçmiştir. Türkiye'de satılan yeni modellerde R1234yf kullanılır, ancak eski modellerde R134a yaygındır.

| Gaz | Dönem | Çevresel Etki | Fiyat |
|---|---|---|---|
| **R134a** | 1995-2017 | Yüksek GWP (1430) | Düşük |
| **R1234yf** | 2017+ | Düşük GWP (4) | Orta |

## Kompresör Üreticileri ve Kullanım Alanları

| Üretici | Marka | Kullanılan Modeller | Stok Durumu |
|---|---|---|---|
| **Denso** | 6SEU / 7SEU / 10PA | VW Polo, Golf, Passat, Audi A3/A4, Skoda Octavia, Seat Leon | Çok yaygın |
| **Sanden** | PXE / SD7H | VW Caddy, Transporter, Crafter | Yaygın |
| **Delphi** | CVC | Audi Q5, A6 | Orta |
| **Valeo** | TM-15 / ZEXEL | VW Touareg, Audi Q7 | Orta |
| **Hella** | Behr | VAG genel | Orta |

## Hangi Modelde Hangi Kompresör Var?

### Volkswagen

| Model | Yıllar | Kompresör Tipi | Klima Gazı |
|---|---|---|---|
| Polo 6R / AW | 2009+ | Denso 6SEU / 7SEU | R134a / R1234yf |
| Golf 6 / 7 / 8 | 2008+ | Denso 7SEU / 10PA | R134a / R1234yf |
| Passat B7 / B8 | 2010+ | Denso 7SEU / 10PA | R134a / R1234yf |
| Tiguan | 2007+ | Denso 7SEU | R134a / R1234yf |
| Caddy | 2004+ | Sanden PXE | R134a |
| Transporter T5/T6 | 2003+ | Sanden SD7H | R134a / R1234yf |
| Crafter | 2006+ | Sanden / Denso | R134a / R1234yf |

### Audi

| Model | Yıllar | Kompresör Tipi | Klima Gazı |
|---|---|---|---|
| A3 8V / 8Y | 2012+ | Denso 7SEU | R134a / R1234yf |
| A4 B8 / B9 | 2007+ | Denso 7SEU / Delphi CVC | R134a / R1234yf |
| A6 C7 / C8 | 2011+ | Delphi CVC / Denso 7SEU | R134a / R1234yf |
| Q5 8R / FY | 2008+ | Delphi CVC / Denso 10PA | R134a / R1234yf |
| Q7 4L / 4M | 2005+ | Valeo TM-15 | R134a / R1234yf |

### Skoda ve Seat

| Model | Yıllar | Kompresör | Gaz |
|---|---|---|---|
| Skoda Octavia 1Z / 5E | 2004+ | Denso 7SEU | R134a / R1234yf |
| Skoda Superb 3T / 3V | 2008+ | Denso 7SEU / 10PA | R134a / R1234yf |
| Seat Leon 1P / 5F | 2005+ | Denso 7SEU | R134a / R1234yf |
| Seat Ibiza 6J / 6F | 2008+ | Denso 6SEU / 7SEU | R134a / R1234yf |

## Klima Kompresörü Fiyat Aralıkları

| Araç Segmenti | Orijinal Fiyat | Yenilenmiş / Yan Sanayi |
|---|---|---|
| Küçük (Polo, Ibiza) | 8.000 – 12.000 TL | 4.000 – 6.500 TL |
| Orta (Golf, A3, Octavia, Leon) | 10.000 – 15.000 TL | 5.000 – 8.500 TL |
| Üst (Passat, A4, Superb) | 12.000 – 18.000 TL | 6.500 – 10.000 TL |
| Premium (A6, Q5, Q7) | 15.000 – 25.000 TL | 8.000 – 14.000 TL |
| Ticari (Caddy, Transporter, Crafter) | 10.000 – 16.000 TL | 5.500 – 9.000 TL |

*Fiyatlar yaklaşık piyasa aralığıdır. Güncel teyit için lütfen arayın.*

## Klima Sistemi Komple Bakım

Klima kompresörü dışında klima sisteminin düzgün çalışması için:

| Parça | Görevi | Değişim Periyodu |
|---|---|---|
| Klima kompresörü | Gazı sıkıştırır | Arıza durumunda |
| Kondanser (Radyatör) | Gazı soğutur | 8-10 yıl veya hasarda |
| Evaporatör | Gazı iç ortamda soğutur | Hasarda |
| Klima radyatörü | — | — |
| Klima filtresi (polen) | Toz, polen tutar | 15.000 km / yılda 1 |
| Klima hortumları | Gaz taşır | 10+ yıl veya sızıntıda |
| Genleşme valfi | Basınç ayarı | Hasarda |
| Klima gazı (R134a/R1234yf) | Soğutucu akışkan | Yıllık 30-50 gr kayıp normal, %50 altı dolulukta ekleme |

## İmza Volkswagen Klima Parçaları Stoğu

- **Kompresör (orijinal + Denso, Sanden, Valeo yenilenmiş)**
- **Kondanser (orijinal + Nissens, Valeo yan sanayi)**
- **Evaporatör (orijinal + Nissens)**
- **Klima filtresi (Mann, Mahle, Bosch, Filtron)**
- **Klima hortumları (orijinal + Gates yan sanayi)**
- **Genleşme valfi (orijinal)**
- **Klima gazı (R134a ve R1234yf)**

## Sıkça Sorulan Sorular (SSS)

**VAG klima kompresörü neden bozulur?**
En sık nedenler: düzenli bakım yapılmaması, düşük gaz seviyesi, kondanser tıkanması, kompresör yağının eskimesi.

**Klima kompresörü orijinal mi yenilenmiş mi almalıyım?**
Bütçe kısıtlıysa kaliteli yenilenmiş kompresör mantıklıdır. İmza Volkswagen sadece test edilmiş yenilenmiş kompresör satar, 1 yıl garanti verir. Orijinal kompresör tercih ediyorsanız uzun ömür ve sessiz çalışma garantilidir.

**R134a aracıma R1234yf gazı koyabilir miyim?**
Hayır, iki gaz kimyasal olarak farklıdır. Aracınız R134a ise sadece R134a, R1234yf ise sadece R1234yf kullanılmalıdır. Yanlış gaz kullanımı kompresör ve hortum hasarına yol açar.

**Klima gazı kaç gram alır?**
Genelde VAG araçlarda 500-700 gram klima gazı bulunur. Yıllık %10-15 kayıp normaldir, kayıp %50'yi aşarsa kaçak kontrolü yapılmalıdır.

**Klima kompresör değişimi kaç saat sürer?**
Deneyimli bir teknisyende 2-3 saat. Kompresör değişimi sonrası klima sistemi vakumlanmalı, gaz dolumu ve kaçak testi yapılmalıdır.

---

*VAG klima kompresörü ve klima sistemi parçaları için İmza Volkswagen stoklarında Denso, Sanden, Valeo orijinal ve yenilenmiş kompresörler, Nissens kondanser/evaporatör, Mann/Mahle klima filtreleri hazır. Şase numaranızı gönderin: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['VAG', 'Klima', 'Kompresör', 'Denso', 'Sanden', 'R134a', 'R1234yf', 'Ankara']
  },
  {
    id: 'blog-032',
    title: "Skoda Octavia 1.0 TSI / 1.5 TSI / 2.0 TSI Turbo: Orijinal ve Yan Sanayi Karşılaştırması",
    slug: 'skoda-octavia-turbo-orijinal-yan-sanayi-karsilastirma',
    excerpt: "Skoda Octavia'da kullanılan 1.0 TSI, 1.5 TSI ve 2.0 TSI turbo seçenekleri, orijinal ve yan sanayi turbo karşılaştırması, parça kodları ve İmza Volkswagen turbo stoğu.",
    content: `## Skoda Octavia Turbo Seçenekleri

Skoda Octavia, Türkiye'nin en yaygın kompakt sedanlarından biridir. Farklı motor seçeneklerinde farklı turbo üniteleri kullanılır. Yanlış turbo siparişi sık karşılaşılan bir sorundur; bu rehberde her motor seçeneği için **orijinal ve kaliteli yan sanayi turbo** karşılaştırmasını bulabilirsiniz.

## Octavia Motor ve Turbo Seçenekleri

| Motor | Turbo Üretici | Orijinal Kod | Yan Sanayi Marka |
|---|---|---|---|
| 1.0 TSI (DKZA / DKRF) | Garrett | 04E 145 721 R | Garrett, IHI |
| 1.2 TSI (CJZA / CYVB) | IHI | 03F 145 701 P | IHI, Garrett |
| 1.4 TSI (CAVA / CZCA) | IHI | 03F 145 701 C | IHI, Garrett |
| 1.5 TSI (DPCA / DACA) | IHI | 05L 145 100 F | IHI, Garrett |
| 1.6 TDI (EA288) | Garrett | 04L 253 019 J | Garrett, BorgWarner |
| 2.0 TDI (EA189) | Garrett | 03G 253 014 J | Garrett, BorgWarner |
| 2.0 TDI (EA288) | Garrett | 04L 253 019 H | Garrett, BorgWarner |
| 2.0 TSI (EA888 Gen3) | IHI | 06K 145 100 K | IHI, Garrett |
| 2.0 TSI (EA888 Gen3) vRS | IHI | 06K 145 100 L | IHI, Garrett |

## Orijinal vs Yan Sanayi Turbo

| Özellik | Orijinal | Yan Sanayi (IHI / Garrett / BorgWarner) |
|---|---|---|
| Fiyat | Yüksek | Orta (%30-50 daha ucuz) |
| Performans | Tam spesifikasyon | Çok yakın (genelde %95+) |
| Ömür | 200.000+ km | 150.000+ km |
| Garanti | 2 yıl | 1 yıl |
| Montaj kolaylığı | Direkt takılır | Genelde direkt takılır |
| Yazılım uyumu | %100 | Çoğu durumda uyumlu |
| ECU yeniden programlama | Gerek yok | Çoğu durumda gerek yok |

## Turbo Değişim Gerekçeleri

- **Yağ sızıntısı:** Turbo mil contaları eskimesi (en sık neden)
- **Şaft (çark) hasarı:** Yabancı cisim, yağsızlık
- **Aşırı ısınma:** Uzun süre yüksek devir, soğutma yetersiz
- **Rulman sesi:** Vızıltı, ıslık sesi
- **Wastegate arızası:** Basınç düzensizliği

## Turbo Bakımı İçin 5 Altın Kural

1. **Yağ değişimini aksatmayın** — 15.000 km veya yılda 1
2. **Kaliteli yağ kullanın** — VW 504/507 spesifikasyonu
3. **Hava filtresini düzenli değiştirin** — Turbo temiz hava almalı
4. **Soğuk motorda yüksek devirden kaçının** — İlk 5 dakika 3.000 rpm üstüne çıkmayın
5. **Yüksek devirli sürüşten sonra turbo soğumasını bekleyin** — 30 saniye rölanti

## İmza Volkswagen Stoklarında Bulunan Octavia Turbo Parçaları

### Turbo Üniteleri

- 1.0 TSI Garrett 04E 145 721 R (orijinal)
- 1.4 TSI IHI 03F 145 701 C (orijinal + Garrett yan sanayi)
- 1.5 TSI IHI 05L 145 100 F (orijinal)
- 2.0 TSI IHI 06K 145 100 K (orijinal)
- 2.0 TDI Garrett 04L 253 019 H (orijinal + BorgWarner yan sanayi)

### Turbo Aksesuarları

- Turbo yağ besleme borusu
- Turbo soğutma hortumu
- Turbo manifoldu conta seti
- Intercooler (orijinal + Nissens yan sanayi)
- Turbo basınç sensörü (Bosch)

### Turbo Montaj Seti

- Turbo cıvata seti
- Conta seti (manifold + yağ + soğutma)
- Kelepçe seti

## Fiyat Aralıkları

| Turbo | Orijinal | Yan Sanayi |
|---|---|---|
| 1.0 TSI Garrett | 12.000 – 18.000 TL | 7.000 – 11.000 TL |
| 1.4 TSI IHI | 14.000 – 20.000 TL | 8.000 – 13.000 TL |
| 1.5 TSI IHI | 15.000 – 22.000 TL | — |
| 2.0 TSI IHI (standart) | 18.000 – 26.000 TL | 11.000 – 16.000 TL |
| 2.0 TDI Garrett | 20.000 – 30.000 TL | 12.000 – 18.000 TL |
| 2.0 TSI vRS IHI | 25.000 – 35.000 TL | — |

*Fiyatlar yaklaşık piyasa aralığıdır. Güncel teyit için lütfen arayın.*

## Sıkça Sorulan Sorular (SSS)

**Octavia turbo değişimi kaç saat sürer?**
2-4 saat arası. Turbo konumuna göre değişir (bazı modellerde manifold sökümü gerekir).

**Turbo değişiminde yağ değişimi şart mı?**
Evet, turbo değişiminde motor yağı ve filtresi mutlaka yenilenmelidir. Eski yağ turbo ömrünü kısaltır.

**Orijinal turbo ile yan sanayi arasında fark var mı?**
Performans olarak fark minimaldir (genelde %5'in altında). Ancak orijinal turbo uzun ömürlü ve ECU uyumu garantilidir.

**Turbo revizyon mu değişim mi?**
Yağ sızıntısı veya wastegate arızası gibi basit sorunlarda revizyon (conta + mil değişimi) yeterli olabilir. Rulman veya çark hasarında komple değişim önerilir.

**Octavia 1.5 TSI mi 2.0 TSI mi tercih edilmeli?**
Güç ve performans istiyorsanız 2.0 TSI (190 HP), yakıt ekonomisi ve düşük maliyet istiyorsanız 1.5 TSI (150 HP) uygun. Turbo parça fiyatları 2.0 TSI'da daha yüksektir.

---

*Skoda Octavia turbo ihtiyacınız için İmza Volkswagen stoklarında IHI ve Garrett orijinal + yenilenmiş turbo seçenekleri mevcut. Şase numaranız ile doğru turbo tespitini yapalım: +90 543 979 20 13.*`,
    category: "Parça Rehberi",
    categorySlug: 'parca-rehberi',
    author: "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: '2026-07-21',
    readTime: 11,
    tags: ['Skoda', 'Octavia', 'Turbo', 'TSI', 'TDI', 'Orijinal', 'Yan Sanayi', 'Ankara']
  }
] as BlogPost[])

// Yardımcı fonksiyonlar: tanımsız (undefined) elemanları filtrele
function validPosts(): BlogPost[] {
  return blogPosts.filter((p): p is BlogPost => p !== undefined && p !== null)
}

// ─── Utility fonksiyonları ───

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  // Defensive: array'de undefined olabilir, optional chaining ile
  return blogPosts.find(p => p && p.slug === slug)
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

export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      post: p,
      score: p.tags.filter(t => tags.includes(t)).length
    }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.post)
}
