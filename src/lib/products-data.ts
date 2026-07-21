// Ürün verileri - her marka için örnek ürünler

export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  brandSlug: string
  category: string
  categorySlug: string
  description: string
  features: string[]
  specifications: Record<string, string>
  oemNumbers?: string[]
  compatibleModels: string[]
  image?: string
}

export const products: Product[] = [
  // VOLKSWAGEN ÜRÜNLERİ
  {
    id: 'vw-001',
    name: 'VW Golf 8 Fren Disk Takımı',
    slug: 'vw-golf-8-fren-disk-takimi',
    brand: 'Volkswagen',
    brandSlug: 'volkswagen',
    category: 'Fren Sistemi',
    categorySlug: 'fren',
    description: 'VW Golf 8 için orijinal kalitede ön fren disk takımı. Yüksek performanslı döküm demir malzeme, üstün ısı dağıtım özelliği ile uzun ömürlü kullanım sunar.',
    features: [
      'Orijinal ebatlarda üretim',
      'Isı işlem görmüş yüksek karbonlu demir',
      'Korozyona dayanıklı yüzey',
      'Gürültü ve titreşim emici tasarım',
      '2 yıl garantili'
    ],
    specifications: {
      'Çap': '312 mm',
      'Kalınlık': '25 mm',
      'Delik Sayısı': '5',
      'Malzeme': 'Yüksek Karbonlu Döküm Demir',
      'Montaj': 'Ön Aks',
      'OE Numarası': '5Q0 615 301'
    },
    oemNumbers: ['5Q0 615 301', '5Q0 615 302'],
    compatibleModels: ['Golf 8', 'Golf 8 GTI', 'Golf 8 GTE']
  },
  {
    id: 'vw-002',
    name: 'VW Passat B9 Motor Yağ Filtresi',
    slug: 'vw-passat-b9-motor-yag-filtresi',
    brand: 'Volkswagen',
    brandSlug: 'volkswagen',
    category: 'Filtreler',
    categorySlug: 'filtre',
    description: 'Passat B9 TSI motorları için yüksek verimli motor yağ filtresi. Sentetik yağlarla tam uyumlu, 10.000 km bakım aralığı destekler.',
    features: [
      'Sentetik yağ uyumlu',
      'Yüksek filtreleme verimliliği',
      'Anti-drenaj valfli',
      'Kolay montaj tasarımı',
      'Uzun ömürlü filtre elementi'
    ],
    specifications: {
      'Tip': 'Kaset Filtre',
      'Yükseklik': '95 mm',
      'Çap': '66 mm',
      'Basınç Kapasitesi': '4 bar',
      'Bakım Aralığı': '10.000 km',
      'OE Numarası': '04E 115 562 B'
    },
    oemNumbers: ['04E 115 562 B', '04E 115 462'],
    compatibleModels: ['Passat B9', 'Passat Variant', 'Arteon']
  },
  {
    id: 'vw-003',
    name: 'VW Tiguan Amortisör Takımı',
    slug: 'vw-tiguan-amortisor-takimi',
    brand: 'Volkswagen',
    brandSlug: 'volkswagen',
    category: 'Süspansiyon',
    categorySlug: 'suspansiyon',
    description: 'Tiguan AD1 için gazlı amortisör takımı. Konfor ve yol tutuş dengesi optimize edilmiş, değişken damperlama teknolojisi.',
    features: [
      'Çift borulu gazlı sistem',
      'Değişken damperlama teknolojisi',
      'Hidrolik son durdurma',
      'Koruma kaplamalı piston çubuğu',
      '300.000 km test edilmiş'
    ],
    specifications: {
      'Tip': 'Biyel Kancalı Gazlı',
      'Uzunluk (Sıkış)': '430 mm',
      'Uzunlık (Genleşme)': '620 mm',
      'Basınç': '22 bar',
      'Montaj': 'Ön/Arka',
      'OE Numarası': '5N0 413 031'
    },
    oemNumbers: ['5N0 413 031 AB', '5N0 413 032'],
    compatibleModels: ['Tiguan', 'Tiguan L', 'Tiguan R']
  },
  // AUDI ÜRÜNLERİ
  {
    id: 'au-001',
    name: 'Audi A4 B9 LED Far Modülü',
    slug: 'audi-a4-b9-led-far-modulu',
    brand: 'Audi',
    brandSlug: 'audi',
    category: 'Elektrik Sistemi',
    categorySlug: 'elektrik',
    description: 'Audi A4 B9 Matrix LED far modülü. Dinamik sinyal, adaptif far sistemi ve gündüz farı fonksiyonları ile tam donanım.',
    features: [
      'Matrix LED teknolojisi',
      'Dinamik sinyal fonksiyonu',
      'Adaptif far kontrolü',
      'Otomatik seviye ayarı',
      'DRL entegre'
    ],
    specifications: {
      'Teknoloji': 'Matrix LED',
      'Güç': '35W (Her Taraf)',
      'Renk Sıcaklığı': '5500K',
      'Voltaj': '12V',
      'Bağlantı': 'LED Master Modül',
      'OE Numarası': '8W0 941 003'
    },
    oemNumbers: ['8W0 941 003', '8W0 941 004'],
    compatibleModels: ['A4 B9', 'A4 Avant', 'S4']
  },
  {
    id: 'au-002',
    name: 'Audi Q5 Süspansiyon Kolu',
    slug: 'audi-q5-suspansiyon-kolu',
    brand: 'Audi',
    brandSlug: 'audi',
    category: 'Süspansiyon',
    categorySlug: 'suspansiyon',
    description: 'Q5 FY için ön alt süspansiyon kolu. Hidrolik rulmanlı, sessiz bloklu premium kalite parça.',
    features: [
      'Hidrolik mafsallı rulman',
      'Sessiz blok teknolojisi',
      'Galvaniz korumalı',
      'Preslenmiş silindirik mafsallar',
      'OEM kalite standartlarında'
    ],
    specifications: {
      'Tip': 'Ön Alt Kontrol Kolu',
      'Mafsallar': '2 Adet',
      'Rulman Tipi': 'Hidrolik',
      'Malzeme': 'Çelik Dövme',
      'Montaj': 'Sağ/Sol',
      'OE Numarası': '8R0 407 151'
    },
    oemNumbers: ['8R0 407 151', '8R0 407 152'],
    compatibleModels: ['Q5 FY', 'SQ5', 'Q5L']
  },
  {
    id: 'au-003',
    name: 'Audi A3 8Y Egzoz Manifoldu',
    slug: 'audi-a3-8y-egzoz-manifoldu',
    brand: 'Audi',
    brandSlug: 'audi',
    category: 'Egzoz Sistemi',
    categorySlug: 'egzoz',
    description: 'Audi A3 8Y TFSI için turbo egzoz manifoldu. Entegre katalitik konvertör ile emisyon uyumlu.',
    features: [
      'Entegre katalitik konvertör',
      'Isı kalkanı korumalı',
      'Turbo uyumlu akış geometrisi',
      'Euro 6d uyumlu',
      'Paslanmaz çelik gövde'
    ],
    specifications: {
      'Malzeme': 'Paslanmaz Çelik (SS304)',
      'Katalizör Tipi': 'Metal Substrat',
      'Emisyon Standardı': 'Euro 6d',
      'Ağırlık': '8.5 kg',
      'Montaj': 'Motor-Sağ',
      'OE Numarası': '06L 131 501'
    },
    oemNumbers: ['06L 131 501', '06L 131 501 T'],
    compatibleModels: ['A3 8Y', 'S3', 'TT RS']
  },
  // SEAT ÜRÜNLERİ
  {
    id: 'se-001',
    name: 'Seat Leon KL1 Debriyaj Seti',
    slug: 'seat-leon-kl1-debriyaj-seti',
    brand: 'Seat',
    brandSlug: 'seat',
    category: 'Şanzıman',
    categorySlug: 'sanziman',
    description: 'Leon KL1 2.0 TSI için debriyaj seti. Merkezi debriyaj bearingli, hidrolik sistemle uyumlu yüksek performans seti.',
    features: [
      'Organik disk malzemesi',
      'Merkezi debriyaj bearing',
      'Hidrolik sistem uyumlu',
      'Titanyum kaplama pressure plate',
      'Yüksek tork kapasitesi'
    ],
    specifications: {
      'Disk Çapı': '240 mm',
      'Dişli Sayısı': '23',
      'Tork Kapasitesi': '400 Nm',
      'Malzeme': 'Organik/Kevlar Karışım',
      'Montaj': 'DSG/Manuel',
      'OE Numarası': '02Q 141 671'
    },
    oemNumbers: ['02Q 141 671', '02Q 141 671 E'],
    compatibleModels: ['Leon KL1', 'Cupra Leon', 'Golf 8 GTI']
  },
  {
    id: 'se-002',
    name: 'Seat Ateca Fren Balatası Seti',
    slug: 'seat-ateca-fren-balata-seti',
    brand: 'Seat',
    brandSlug: 'seat',
    category: 'Fren Sistemi',
    categorySlug: 'fren',
    description: 'Ateca KH7 için arka fren balatası seti. Düşük toz formülasyonu, sessiz çalışma, ECE R90 onaylı.',
    features: [
      'ECE R90 onaylı',
      'Düşük toz (LP) formülasyonu',
      'Sessiz çalışma şilenti',
      'Slotted soğutma kanalları',
      ' aşınma göstergeli'
    ],
    specifications: {
      'Konum': 'Arka',
      'Boyut': 'Pad x 4',
      'Formülasyon': 'Low-Metallic',
      'Onay': 'ECE R90',
      'Sıcaklık Aralığı': '-40°C - 650°C',
      'OE Numarası': '5Q0 698 451'
    },
    oemNumbers: ['5Q0 698 451', '5Q0 698 451 M'],
    compatibleModels: ['Ateca', 'Ateca FR', 'Tiguan']
  },
  {
    id: 'se-003',
    name: 'Seat Ibiza 6F Su Pompa',
    slug: 'seat-ibiza-6f-su-pompa',
    brand: 'Seat',
    brandSlug: 'seat',
    category: 'Motor Parçaları',
    categorySlug: 'motor',
    description: 'Ibiza 6F 1.0 MPI/TSI için elektrikli su pompası. Değişken hız kontrolü, termal korumalı.',
    features: [
      'Değişken hız kontrolü',
      'Entegre termal koruma',
      'Düşük tüketim DC motor',
      'Sızdırmaz contalı',
      'Anti-korozyon impeller'
    ],
    specifications: {
      'Güç': '400W',
      'Voltaj': '12V DC',
      'Debi': '180 L/dk',
      'Basınç': '1.8 bar',
      'Bağlantı': '2-Pin',
      'OE Numarası': '04C 121 012'
    },
    oemNumbers: ['04C 121 012', '04C 121 012 C'],
    compatibleModels: ['Ibiza 6F', 'Polo 6R', 'Fabia NJ']
  },
  // SKODA ÜRÜNLERİ
  {
    id: 'sk-001',
    name: 'Skoda Octavia 4 Turbocharger',
    slug: 'skoda-octavia-4-turbocharger',
    brand: 'Skoda',
    brandSlug: 'skoda',
    category: 'Motor Parçaları',
    categorySlug: 'motor',
    description: 'Octavia NX 2.0 TSI için turbo şarj cihazı. Variable turbine geometry, elektrikli wastegate aktüatörlü.',
    features: [
      'Variable Turbine Geometry (VTG)',
      'Elektrikli wastegate',
      'Su-soğutmalı housing',
      'Ball bearing rotor',
      'Billet wheel opsiyonu'
    ],
    specifications: {
      'Boost Basıncı': '1.8 bar (max)',
      'RPM Limiti': '240.000 dk',
      'Power Output': '140 kW (190 PS)',
      'Oil Supply': '4.0 bar',
      'Coolant Flow': '8 L/dk',
      'OE Numarası': '06L 145 702'
    },
    oemNumbers: ['06L 145 702', '06L 145 702 L'],
    compatibleModels: ['Octavia 4', 'Superb 3', 'Passat B8']
  },
  {
    id: 'sk-002',
    name: 'Skoda Superb 3 Klima Kondanseri',
    slug: 'skoda-superb-3-kima-kondanseri',
    brand: 'Skoda',
    brandSlug: 'skoda',
    category: 'Elektrik Sistemi',
    categorySlug: 'elektrik',
    description: 'Superb 3V klima kondanseri (condenser). Yüksek ısı transfer verimlilikli, alüminyum micro-tube teknolojisi.',
    features: [
      'Alüminyum micro-tube teknolojisi',
      'Yüksek ısı transferi',
      'Kuruser receiver-dryer entegre',
      'Korozyona dayanıklı kaplama',
      'OEM eşdeğer boyutlar'
    ],
    specifications: {
      'Malzeme': 'Alüminyum',
      'Soğutma Kapasitesi': '18 kW',
      'Çalışma Basıncı': '28 bar (max)',
      'Boyutlar': '520x380x16 mm',
      'Bağlantı Tipi': 'O-Ring',
      'OE Numarası': '3Q0 820 411'
    },
    oemNumbers: ['3Q0 820 411', '3Q0 820 411 A'],
    compatibleModels: ['Superb 3', 'Superb Combi', 'Passat B8']
  },
  {
    id: 'sk-003',
    name: 'Skoda Fabia 4 Akü',
    slug: 'skoda-fabia-4-aku',
    brand: 'Skoda',
    brandSlug: 'skoda',
    category: 'Akü & Batarya',
    categorySlug: 'aku',
    description: 'Fabia NJ/MW için AGM start-stop akü. Yüksek krampir akımı, uzun cycle ömrü.',
    features: [
      'AGM (Absorbent Glass Mat) teknolojisi',
      'Start-Stop uyumlu',
      'Yüksek krampir akımı (CCA)',
      'Bakımsız sealed tasarım',
      'Vibration resistant'
    ],
    specifications: {
      'Kapasite': '70 Ah',
      'Gerilim': '12V',
      'CCA': '760 A (EN)',
      'Boyutlar': '278x175x190 mm',
      'Tip': 'AGM Start-Stop',
      'OE Numarası': '000 915 105 DL'
    },
    oemNumbers: ['000 915 105 DL', '000 915 105 FL'],
    compatibleModels: ['Fabia 4', 'Polo 6R', 'Ibiza 6F', 'Arona']
  },
  // CUPRA ÜRÜNLERİ
  {
    id: 'cu-001',
    name: 'Cupra Formentor Brembo Fren Kiti',
    slug: 'cupra-formentor-brembo-fren-kiti',
    brand: 'Cupra',
    brandSlug: 'cupra',
    category: 'Fren Sistemi',
    categorySlug: 'fren',
    description: 'Formentor için yüksek performanslı Brembo fren kiti. 4-pistonlu kaliper, delikli disk, performans balatalar.',
    features: [
      'Brembo 4-piston sabit kaliper',
      'Delikli ve yivli ventilî disk',
      'Yüksek performans balata',
      'Paslanmaz çelik flexible hose',
      'High temp brake fluid included'
    ],
    specifications: {
      'Disk Çapı': '370 mm (Ön)',
      'Kaliper': 'Brembo 4-Piston',
      'Disk Malzemesi': 'Ventileli Çelik',
      'Balata Formülü': 'Performance Street',
      'Max Sıcaklık': '750°C',
      'OE Numarası': '5KH 615 301 P'
    },
    oemNumbers: ['5KH 615 301 P', '5KH 615 302 P'],
    compatibleModels: ['Formentor', 'Formentor VZ', 'Cupra Leon']
  },
  {
    id: 'cu-002',
    name: 'Cupra Leon Sport Amortisör',
    slug: 'cupra-leon-sport-amortisor',
    brand: 'Cupra',
    brandSlug: 'cupra',
    category: 'Süspansiyon',
    categorySlug: 'suspansiyon',
    description: 'Cupra Leon KL için sport amortisörler. 2-way adjustable, DCC uyumlu, track-day hazır.',
    features: [
      '2-Way adjustable (Rebound + Compression)',
      'DCC (Dynamic Chassis Control) uyumlu',
      'Alüminyum gövde',
      'Track-day sertifikalı',
      'Yol konforu modu mevcut'
    ],
    specifications: {
      'Tip': '2-Way Coilover',
      'Sıkış': '-50mm ~ +10mm',
      'Rebound Clicks': '16',
      'Compression Clicks': '12',
      'Montaj': 'Ön + Arka Set',
      'OE Numarası': '5Q0 413 033 AB'
    },
    oemNumbers: ['5Q0 413 033 AB', '5Q0 413 034 AB'],
    compatibleModels: ['Cupra Leon', 'Leon Cupra', 'Golf R']
  },
  {
    id: 'cu-003',
    name: 'Cupra Born Performans Hava Filtresi',
    slug: 'cupra-born-performans-hava-filtresi',
    brand: 'Cupra',
    brandSlug: 'cupra',
    category: 'Filtreler',
    categorySlug: 'filtre',
    description: 'Born için yüksek akışlı performans hava filtresi. Cotton-gauze malzeme, washable, lifetime warranty.',
    features: [
      'Cotton-gauze filtre malzemesi',
      '%25 daha yüksek hava akışı',
      'Yıkanabilir ve tekrar kullanılabilir',
      'Ömür boyu garanti',
      'Plug-and-play montaj'
    ],
    specifications: {
      'Filtre Malzemesi': 'Multi-Layer Cotton',
      'Akış Artışı': '+%',
      'Filtrasyon Verimliliği': '%98.6',
      'Servis Aralığı': '50.000 km / Yıkama',
      'OE Numarası': '04E 129 620 Q'
    },
    oemNumbers: ['04E 129 620 Q', '04E 129 620 R'],
    compatibleModels: ['Born', 'ID.3 GTX', 'ID.4 GTX']
  },
  {
    id: 'porsche-cayenne-958-fren-balata',
    name: 'Porsche Cayenne 958 Fren Balata Seti (Ön)',
    slug: 'porsche-cayenne-958-fren-balata',
    brand: 'Porsche',
    brandSlug: 'porsche',
    category: 'Fren Sistemi',
    categorySlug: 'fren',
    description: 'Porsche Cayenne 958 (2010-2017) ön fren balata seti. PCCB seramik fren opsiyonu hariç, standart çelik disk fren sistemleri için. Düşük toz emisyonu, yüksek ısı dayanımı.',
    features: [
      'Düşük toz emisyonu (Low-Metallic)',
      'Yüksek ısı dayanımı (700°C+)',
      'OEM kalitesinde sürtünme materyali',
      'Sessiz çalışma (NBR shim)',
      'Slot + chamfer (çentik) tasarım'
    ],
    specifications: {
      'Malzeme': 'Semi-Metallic (NAO)',
      'Fren Tipi': 'Çelik disk (PCCB seramik uyumlu değil)',
      'Konum': 'Ön aks (sol + sağ)',
      'Aşınma Sensörü': 'Evet (2 adet)',
      'OE Numarası': '7P0 698 151 AJ'
    },
    oemNumbers: ['7P0 698 151 AJ', '7P0 698 151 AF', '7L0 698 151'],
    compatibleModels: ['Cayenne 958 (2010-2017)', 'Cayenne S', 'Cayenne Diesel', 'Cayenne GTS']
  },
  {
    id: 'porsche-taycan-j1-yag-filtresi',
    name: 'Porsche Taycan J1 Yüksek Performans Yağ Filtresi',
    slug: 'porsche-taycan-j1-yag-filtresi',
    brand: 'Porsche',
    brandSlug: 'porsche',
    category: 'Filtreler',
    categorySlug: 'filtre',
    description: 'Porsche Taycan (J1 platformu) için yüksek performans yağ filtresi. Elektrikli performans sedanlarının termal yüklerine dayanıklı, sentetik yağ uyumlu filtre ortamı.',
    features: [
      'Sentetik yağ uyumlu filtre ortamı',
      '700°C+ çalışma sıcaklığı dayanımı',
      '%99.5 filtrasyon verimliliği (50 micron)',
      'Manyetik tahliye valfi',
      'OEM eşdeğeri kapasite'
    ],
    specifications: {
      'Filtre Tipi': 'Spin-on (yerleşik valf)',
      'Çap': '76 mm',
      'Yükseklik': '90 mm',
      'Diş': 'M22x1.5',
      'OE Numarası': '9J1 115 466 B'
    },
    oemNumbers: ['9J1 115 466 B', 'EA111'],
    compatibleModels: ['Taycan', 'Taycan 4S', 'Taycan Turbo', 'Taycan Turbo S', 'Taycan GTS']
  }
]

// Yardımcı fonksiyonlar
export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter(p => p.brandSlug === brandSlug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getAllBrands(): {name: string, slug: string, count: number}[] {
  const brandMap = new Map<string, {name: string, slug: string, count: number}>()
  
  products.forEach(p => {
    if (brandMap.has(p.brandSlug)) {
      brandMap.get(p.brandSlug)!.count++
    } else {
      brandMap.set(p.brandSlug, { name: p.brand, slug: p.brandSlug, count: 1 })
    }
  })
  
  return Array.from(brandMap.values())
}

export function getAllCategories(): {name: string, slug: string, count: number}[] {
  const catMap = new Map<string, {name: string, slug: string, count: number}>()
  
  products.forEach(p => {
    if (catMap.has(p.categorySlug)) {
      catMap.get(p.categorySlug)!.count++
    } else {
      catMap.set(p.categorySlug, { name: p.category, slug: p.categorySlug, count: 1 })
    }
  })
  
  return Array.from(catMap.values())
}
