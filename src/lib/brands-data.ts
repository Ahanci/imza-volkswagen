// Marka verileri
// Her marka için:
//   - description: "tüm modeller" yaklaşımı
//   - models: Desteklenen modeller listesi (kısa)
//   - periyodikPaketleri: 4 periyodik bakım paketi (parça satış için)

export interface PartItem {
  ad: string
  marka: string // "Mann", "Bosch" vs.
}

export interface PeriyodikPaket {
  id: string
  ad: string
  km: string
  etiket: string // "Önerilen" / "Popüler" / "Premium"
  aciklama: string
  parcalar: PartItem[]
  tahminiSure: string // "30-45 dk"
  garantiNotu: string
}

export interface Brand {
  name: string
  slug: string
  logo: string
  color: string
  bgColor: string
  description: string
  longDescription: string
  models: string[]
  history: string
  advantages: string[]
  periyodikPaketleri: PeriyodikPaket[]
}

const standartPaketler = (
  motor: string,
  fren: string,
  ekler: PartItem[] = []
): PeriyodikPaket[] => [
  {
    id: 'mini',
    ad: 'Mini Bakım',
    km: '15.000 km',
    etiket: 'Hızlı',
    aciklama: `${motor} motoru için temel yağ ve filtre değişimi. Ankara stoklu.`,
    parcalar: [
      { ad: 'Motor Yağı 504/507 (4-5L)', marka: 'Castrol / Mobil / Total' },
      { ad: 'Yağ Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Tapası contası', marka: 'OEM' },
      ...ekler,
    ],
    tahminiSure: 'Stoktan hemen',
    garantiNotu: 'Faturalı, garantili',
  },
  {
    id: 'standart',
    ad: 'Standart Bakım',
    km: '30.000 km',
    etiket: 'Önerilen',
    aciklama: `${motor} motoru için periyodik filtre seti + fren kontrolü.`,
    parcalar: [
      { ad: 'Motor Yağı 504/507 (4-5L)', marka: 'Castrol / Mobil / Total' },
      { ad: 'Yağ Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Hava Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Polen Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Silecek Seti (ön+arka)', marka: 'Bosch / Valeo' },
      { ad: fren, marka: 'Bosch / ATE / TRW' },
      ...ekler,
    ],
    tahminiSure: 'Stoktan hemen',
    garantiNotu: 'Orijinal ve yan sanayi seçenekleri',
  },
  {
    id: 'genis',
    ad: 'Geniş Bakım',
    km: '60.000 km',
    etiket: 'Popüler',
    aciklama: `${motor} motoru için tam periyodik bakım. Fren hidroliği dahil.`,
    parcalar: [
      { ad: 'Motor Yağı 504/507 (4-5L)', marka: 'Castrol / Mobil / Total' },
      { ad: 'Yağ Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Hava Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Yakıt Filtresi', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Polen Filtresi (Aktif Karbon)', marka: 'Mann / Mahle / Bosch' },
      { ad: 'Silecek Seti', marka: 'Bosch / Valeo' },
      { ad: fren, marka: 'Bosch / ATE / Brembo' },
      { ad: 'Fren Hidroliği DOT 4 (1L)', marka: 'ATE / Bosch' },
      { ad: 'Buji Seti (4 adet)', marka: 'NGK / Bosch' },
      ...ekler,
    ],
    tahminiSure: 'Stoktan hemen',
    garantiNotu: '1 yıl garanti (orijinal seçeneklerde 2 yıl)',
  },
  {
    id: 'triger',
    ad: 'Triger Seti',
    km: '90.000 – 120.000 km',
    etiket: 'Kritik',
    aciklama: `${motor} motoru için triger kayışı/zinciri komple set. Periyodik kritik.`,
    parcalar: [
      { ad: 'Triger Seti (Kayış + Gergi + Kasnak)', marka: 'INA / Contitech / Gates / Orijinal' },
      { ad: 'Soğutma Sıvısı G12++ (5L)', marka: 'OEM / BASF' },
      { ad: 'Aksesuar Kayışı (V Kayışı)', marka: 'Gates / Contitech' },
      ...ekler,
    ],
    tahminiSure: 'Stoktan 1-2 gün',
    garantiNotu: 'Orijinal önerilir (motor hasarı riski)',
  },
]

export const brands: Brand[] = [
  {
    name: 'Volkswagen',
    slug: 'volkswagen',
    logo: 'VW',
    color: '#001E50',
    bgColor: '#001E50',
    description: 'Tüm Volkswagen modelleri için orijinal ve yan sanayi yedek parça',
    longDescription:
      'Volkswagen, Alman mühendisliğin ve kalitenin simgesidir. İmza Volkswagen olarak, tüm Volkswagen modelleri — Golf, Passat, Polo, Tiguan, Transporter dahil — için orijinal kalitede yedek parçalar sunuyoruz. Ankara Şaşmaz stoklu, hızlı tedarik.',
    models: ['Golf (tüm nesiller)', 'Passat (B5/B6/B7/B8)', 'Polo (9N/6R/AW)', 'Tiguan (5N/BJ)', 'T-Roc', 'Transporter (T5/T6/T7)', 'Caddy', 'Touran', 'Sharan', 'ID. Serisi', 'Crafter'],
    history: '1937 yılında kurulan Volkswagen, "halkın arabası" anlamına gelmektedir. Yüzyılı aşkın tarihi boyunca otomotiv endüstrisinin en önemli markalarından biri olmuştur.',
    advantages: [
      'Orijinal VW parça + yan sanayi (Bosch, Mann, Mahle)',
      'Tüm VW model nesilleri için parça',
      'Şaşmaz stoklu, aynı gün kargo',
      'Triger seti, fren balata, yağ filtresi stoklarımızda',
      'VIN ile doğru parça eşleşmesi',
      'Faturalı, garantili satış',
    ],
    periyodikPaketleri: standartPaketler('1.0/1.2/1.4/1.5/2.0 TSI', 'Fren Balata Ön Seti'),
  },
  {
    name: 'Audi',
    slug: 'audi',
    logo: 'AU',
    color: '#BB0A30',
    bgColor: '#BB0A30',
    description: 'Tüm Audi modelleri için orijinal ve yan sanayi yedek parça',
    longDescription:
      'Audi, lüks ve performansın buluştuğu noktadır. Tüm Audi modelleriniz — A3, A4, A6, Q5, Q7 ve elektrikli e-tron serisi — için orijinal ve kaliteli yan sanayi yedek parçaları stoklarımızda bulunduruyoruz. Ankara\'dan hızlı tedarik.',
    models: ['A1', 'A3 (8L/8P/8V/8Y)', 'A4 (B5/B6/B7/B8/B9)', 'A5', 'A6 (C5/C6/C7/C8)', 'A7', 'A8', 'Q2', 'Q3', 'Q5 (8R/FY)', 'Q7 (4L/4M)', 'Q8', 'e-tron / Q4 e-tron', 'TT', 'RS serisi'],
    history: '1909 yılında kurulan Audi, "Vorsprung durch Technik" (Teknoloji ile liderlik) felsefesiyle premium otomotiv sektörünün öncülerindendir.',
    advantages: [
      'Premium Audi parçaları + Lemförder, TRW, Bosch',
      'Tüm Audi modelleri (A1 → RS / e-tron)',
      'Matrix LED far ve elektronik parça stoğu',
      'Quattro ve S-Line performans parçaları',
      'VIN ile doğru eşleşme garantili',
      'Faturalı, garantili satış',
    ],
    periyodikPaketleri: standartPaketler('1.4/1.5/2.0/3.0 TFSI', 'Fren Balata Ön Seti'),
  },
  {
    name: 'Seat',
    slug: 'seat',
    logo: 'SE',
    color: '#F0CD00',
    textColor: '#000000',
    bgColor: '#1E1E1E',
    description: 'Tüm Seat modelleri için orijinal ve yan sanayi yedek parça',
    longDescription:
      'Seat, İspanyol tutkusunu Alman mühendisliğiyle birleştiren benzersiz bir markadır. Tüm Seat modelleri — Leon, Ibiza, Ateca, Toledo ve daha fazlası — için uygun yedek parçaları stoklarımızda bulunduruyoruz. Sportif karakteriyle bilinen Seat araçlarınız için doğru parça, hızlı tedarik.',
    models: ['Leon (1M/1P/5F/KL)', 'Ibiza (6K/6J/6F)', 'Ateca (5FP/KH)', 'Toledo (1L/1M/5G)', 'Arona (KJ)', 'Tarraco (KN)', 'Alhambra (7N)', 'Exeo (3R)'],
    history: '1950 yılında kurulan Seat, 1986\'dan bu yana Volkswagen Grubu\'nun bir parçasıdır. Sportif karakteriyle Avrupa\'nın en popüler markalarından biri olmuştur.',
    advantages: [
      'Orijinal Seat + Bosch, Mann, Mahle',
      'Tüm Seat modelleri (Leon → Toledo)',
      'Rekabetçi fiyatlandırma',
      'Sport süspansiyon ve fren parçaları',
      'VIN ile doğru eşleşme',
      'Faturalı, garantili satış',
    ],
    periyodikPaketleri: standartPaketler('1.0/1.2/1.4/1.5 TSI', 'Fren Balata Ön Seti'),
  },
  {
    name: 'Skoda',
    slug: 'skoda',
    logo: 'SK',
    color: '#4FBA2F',
    bgColor: '#3F9142',
    description: 'Tüm Skoda modelleri için orijinal ve yan sanayi yedek parça',
    longDescription:
      'Skoda, Çek mühendisliği ve pratik zekanın ürünüdür. Tüm Skoda modelleriniz — Octavia, Fabia, Superb, Karoq, Kamiq, Scala ve elektrikli Enyaq — için dayanıklı, güvenilir ve ekonomik yedek parçaları stoklarımızda bulunduruyoruz. Ankara\'dan hızlı kargo.',
    models: ['Octavia (1U/1Z/5E/NX)', 'Fabia (6Y/5J/NJ)', 'Superb (3U/3T/3V/NX)', 'Karoq (NU)', 'Kamiq (NW)', 'Enyaq (5A)', 'Scala (NW)', 'Kodiaq (NS)', 'Rapid (NH)', 'Citigo'],
    history: '1895 yılında kurulan Skoda, dünyanın en eski otomotiv markalarından biridir. 1991\'den bu yana Volkswagen Grubu bünyesinde üretim yapmaktadır.',
    advantages: [
      'Orijinal Skoda + yan sanayi seçenekleri',
      'Tüm Skoda modelleri (Fabia → Kodiaq)',
      'Dizel (TDI) ve benzinli (TSI) motor parçaları',
      'LPG uyumlu parça seçenekleri',
      'Faturalı, garantili satış',
      'Şaşmaz\'dan hızlı kargo',
    ],
    periyodikPaketleri: standartPaketler('1.0/1.2/1.4/1.5/2.0 TSI', 'Fren Balata Ön Seti', [
      { ad: 'LPG Enjektör Filtresi (LPG\'li araçlar için)', marka: 'OEM' },
    ]),
  },
  {
    name: 'Cupra',
    slug: 'cupra',
    logo: 'CU',
    color: '#E5801B',
    bgColor: '#E5801B',
    description: 'Tüm Cupra modelleri için performans yedek parça',
    longDescription:
      'Cupra, performans ve tasarımın sınırlarını zorlayan VAG Grubu\'nun sportif markasıdır. Tüm Cupra modelleriniz — Formentor, Leon, Ateca, Born — için özel performans parçaları sunuyoruz. Standarttan fazlasını arayanlar için.',
    models: ['Formentor (5F/KM)', 'Cupra Leon (KL)', 'Ateca (5FP/KH)', 'Born (11)', 'Terramar'],
    history: '2018 yılında bağımsız bir marka haline gelen Cupra, Seat\'ın performans bölümünden doğmuş ve kısa sürede kendi kimliğini oluşturmuştur.',
    advantages: [
      'Cupra performans parçaları uzmanı',
      'Tüm Cupra modelleri (Formentor → Terramar)',
      'Sport fren, süspansiyon, egzoz',
      'Track-day hazır ürünler',
      'Orijinal ve Brembo, AP Racing seçenekleri',
      'Faturalı, garantili',
    ],
    periyodikPaketleri: standartPaketler('2.0 TSI (310 HP)', 'Fren Balata Ön Seti (sport)', [
      { ad: 'Yarış Silecek Seti', marka: 'Bosch Aerotwin' },
    ]),
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  // Defensive: array'de undefined olabilir
  return brands.find(b => b && b.slug === slug)
}

export function getAllBrands(): Brand[] {
  return brands
}
