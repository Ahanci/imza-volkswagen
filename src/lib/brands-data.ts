// Marka verileri

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
}

export const brands: Brand[] = [
  {
    name: 'Volkswagen',
    slug: 'volkswagen',
    logo: 'VW',
    color: '#001E50',
    bgColor: '#001E50',
    description: 'Golf, Passat, Polo, Tiguan, Transporter ve tüm VW modelleri için yedek parça',
    longDescription: 'Volkswagen, Alman mühendisliğin ve kalitenin simgesidir. İmza Volkswagen olarak, tüm Volkswagen modeleri için orijinal kalitede yedek parçalar sunuyoruz. Golf serisinden Transporter ticari araçlara kadar geniş ürün yelpazemizle hizmetinizdeyiz.',
    models: ['Golf (tüm nesiller)', 'Passat', 'Polo', 'Tiguan', 'T-Roc', 'Transporter', 'Caddy', 'Touran', 'Sharan', 'ID. Serisi'],
    history: '1937 yılında kurulan Volkswagen, "halkın arabası" anlamına gelmektedir. Yüzyılı aşkın tarihi boyunca otomotiv endüstrisinin en önemli markalarından biri olmuştur.',
    advantages: [
      'Orijinal ve yan sanayi seçenekleri',
      'Tüm model nesilleri için parça',
      'Uygun fiyat garantisi',
      'Hızlı tedarik süreci',
      'Uzman teknik destek'
    ]
  },
  {
    name: 'Audi',
    slug: 'audi',
    logo: 'AU',
    color: '#BB0A30',
    bgColor: '#BB0A30',
    description: 'A3, A4, A6, Q3, Q5, Q7 ve premium Audi modelleri için yedek parça',
    longDescription: 'Audi, lüks ve performansın buluştuğu noktadır. Premium Audi modelleriniz için en kaliteli yedek parçaları stoklarımızda bulunduruyoruz. Matrix LED sistemlerden quattro dördüncü jant teknolojilerine, her detay için doğru parçalar burada.',
    models: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'e-tron', 'TT'],
    history: '1909 yılında kurulan Audi, "Vorsprung durch Technik" (Teknoloji ile liderlik) felsefesiyle premium otomotiv sektörünün öncülerindendir.',
    advantages: [
      'Premium segment uzmanlığı',
      'Gelişmiş elektronik parçalar',
      'Orijinal Audi kalitesinde',
      'Spor modelleri desteği',
      'Elektrikli araç parçaları'
    ]
  },
  {
    name: 'Seat',
    slug: 'seat',
    logo: 'SE',
    color: '#F0CD00',
    textColor: '#000000',
    bgColor: '#1E1E1E',
    description: 'Leon, Ibiza, Ateca, Toledo ve sportif Seat modelleri için yedek parça',
    longDescription: 'Seat, İspanyol tutkusunu Alman mühendisliğiyle birleştiren benzersiz bir markadır. Sportif tasarım ve dinamik performans arayanlar için Seat modellerinizin her biri için uygun yedek parçaları sunuyoruz.',
    models: ['Leon', 'Ibiza', 'Ateca', 'Toledo', 'Arona', 'Tarraco', 'Alhambra'],
    history: '1950 yılında kurulan Seat, 1986\'dan bu yana Volkswagen Grubu\'nun bir parçasıdır. Sportif karakteriyle Avrupa\'nın en popüler markalarından biri olmuştur.',
    advantages: [
      'Sportif model odaklı',
      'Cupra performans parçaları',
      'Rekabetçi fiyatlandırma',
      'Geniş model kapsamı',
      'Hızlı teslimat'
    ]
  },
  {
    name: 'Skoda',
    slug: 'skoda',
    logo: 'SK',
    color: '#4FBA2F',
    bgColor: '#3F9142',
    description: 'Octavia, Fabia, Superb, Karoq, Kamiq ve tüm Skoda modelleri için yedek parça',
    longDescription: 'Skoda, Çek mühendisliği ve pratik zekanın ürünüdür. Dayanıklı, güvenilir ve ekonomik Skoda araçlarınız için geniş yedek parça stoğumuzla hizmetinizdeyiz. Octavia\'dan Superb\'e, her model için doğru parçalar.',
    models: ['Octavia', 'Fabia', 'Superb', 'Karoq', 'Kamiq', 'Enyaq', 'Scala', 'Kodiaq', 'Rapid'],
    history: '1895 yılında kurulan Skoda, dünyanın en eski otomotiv markalarından biridir. 1991\'den bu yana Volkswagen Grubu bünyesinde üretim yapmaktadır.',
    advantages: [
      'Ekonomik çözümler',
      'Geniş stok çeşitliliği',
      'Dizel/benzin/LPG parçaları',
      'Uzun ömürlü ürünler',
      'Müstakil teknik danışmanlık'
    ]
  },
  {
    name: 'Cupra',
    slug: 'cupra',
    logo: 'CU',
    color: '#E5801B',
    bgColor: '#E5801B',
    description: 'Formentor, Leon, Ateca, Born ve sportif Cupra modelleri için performans yedek parça',
    longDescription: 'Cupra, performans ve tasarımın sınırlarını zorlayan VAG Grubu\'nun sportif markasıdır. Formentor, Cupra Leon ve Born gibi yüksek performanslı modelleriniz için özel performans parçaları sunuyoruz. Standarttan fazlasını arayanlar için.',
    models: ['Formentor', 'Cupra Leon', 'Ateca', 'Born', 'Terramar'],
    history: '2018 yılında bağımsız bir marka haline gelen Cupra, Seat\'ın performans bölümünden doğmuş ve kısa sürede kendi kimliğini oluşturmuştur.',
    advantages: [
      'Performans parça uzmanlığı',
      'Sport süspansiyon sistemleri',
      'Yüksek performans fren kitleri',
      'Estetik aksesuarlar',
      'Track-day hazır ürünler'
    ]
  }
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug)
}

export function getAllBrands(): Brand[] {
  return brands
}
