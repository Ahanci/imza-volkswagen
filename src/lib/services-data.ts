// VAG grubu yedek parça hizmet kategorileri
// /hizmetlerimiz ve /hizmetlerimiz/[slug] sayfaları için tek kaynak
// CategorySection da bu veriyi kullanır (DRY)

import type { LucideIcon } from 'lucide-react'
import {
  Cog, Disc, Gauge, Zap, Filter, Wind, Battery, Wrench,
} from 'lucide-react'

export interface ServicePart {
  name: string
  description: string
  brand: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  iconName: keyof typeof iconMap
  color: string
  gradient: string
  features: string[]
  parts: ServicePart[]
  faqs: ServiceFAQ[]
  metaTitle: string
  metaDescription: string
}

// iconMap client component'lerde kullanılır (lucide-react), server component'lerde
// import edilemeyeceği için isim üzerinden map'liyoruz.
export const iconMap = {
  Cog, Disc, Gauge, Zap, Filter, Wind, Battery, Wrench,
} as const

export const services: Service[] = [
  {
    slug: 'motor',
    title: 'Motor Parçaları',
    shortDescription: 'Piston, segman, silindir kapağı, contalar, keçeler ve tüm motor komponentleri',
    longDescription:
      'VAG grubu motorlar için orijinal ve yan sanayi motor parçaları. 1.0 TSI, 1.2 TSI, 1.4 TSI, 1.5 TSI, 2.0 TSI benzinli motorlar ve 1.6 TDI, 2.0 TDI dizel motorlar başta olmak üzere tüm motor tipleri için yedek parça tedariği yapıyoruz. Motor komponentleri aracın kalbi olduğu için güvenilir markaları tercih ediyoruz.',
    iconName: 'Cog',
    color: '#1E3A5F',
    gradient: 'from-vag-navy to-blue-800',
    features: ['Piston & Segman', 'Silindir Kapağı', 'Contalar & Keçeler', 'Karter & Rulmanlar'],
    parts: [
      { name: 'Piston Seti', description: 'STD, 0.25, 0.50, 1.00mm ölçü seçenekleri', brand: 'Mahle, AE, NPR' },
      { name: 'Silindir Kapağı Contası', description: 'Tek parça, çok katmanlı metal (MLS)', brand: 'Elring, Victor Reinz' },
      { name: 'Subap Lastiği', description: 'Emme ve egzoz subapları için', brand: 'Elring, Corteco' },
      { name: 'Karter Contası', description: '1.4 TSI, 1.5 TSI, 2.0 TSI motorlar', brand: 'Elring, Victor Reinz' },
      { name: 'Yağ Pompası Zinciri', description: 'EA888 Gen3 motorlar için', brand: 'INA, FAI' },
      { name: 'Triger Seti (Kayış/Zincir)', description: 'Komple set, rulman + gergi dahil', brand: 'INA, Contitech, Gates' },
      { name: 'Motor Yağı 504/507', description: '5W-30, 0W-30, 0W-20 spesifikasyon', brand: 'Castrol, Mobil, Total' },
    ],
    faqs: [
      { question: 'Motor parçalarında orijinal mi yan sanayi mi tercih etmeliyim?', answer: 'Piston, segman, conta, triger seti gibi kritik parçalarda orijinal veya kaliteli yan sanayi (Mahle, Elring, INA) öneriyoruz. Bakım parçalarında (filtre, yağ) kaliteli yan sanayi yeterlidir.' },
      { question: 'Triger kayışı mı zincir mi daha iyi?', answer: 'Bu motor modeline bağlıdır. 1.2 TSI, 1.4 TSI eski nesil motorlarda kayış; 1.5 TSI, 2.0 TSI yeni nesil motorlarda zincir kullanılır. VIN ile motor kodunu tespit ediyoruz.' },
      { question: 'Motor parçası siparişi için hangi bilgiler gerekir?', answer: 'Şase numarası (VIN) ve motor kodu. Bu bilgilerle %100 doğru parça eşleşmesi sağlıyoruz.' },
    ],
    metaTitle: 'VAG Motor Parçaları | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat, Cupra motor yedek parçaları. Piston, conta, triger seti, yağ. Orijinal ve yan sanayi, Ankara stoklu.',
  },
  {
    slug: 'fren',
    title: 'Fren Sistemi',
    shortDescription: 'Balata, disk, kaliper, balata sensörü ve fren sistemi yedek parçaları',
    longDescription:
      'VAG grubu araçların fren sistemi için kapsamlı yedek parça stoğu. Fren balata, fren disk, fren kaliper, fren hidroliği, ABS sensörü, balata aşınma sensörü ve daha fazlası. Güvenlik parçası olduğu için yalnızca kanıtlanmış markalardan (Bosch, ATE, TRW, Brembo, Ferodo) tedarik yapıyoruz.',
    iconName: 'Disc',
    color: '#DC2626',
    gradient: 'from-red-600 to-red-700',
    features: ['Fren Balatası', 'Fren Diski', 'Kaliper', 'Fren Hortumu'],
    parts: [
      { name: 'Ön Fren Balata Seti', description: 'Yarı metalik, düşük metalik, seramik seçenekleri', brand: 'Bosch, ATE, TRW, Brembo' },
      { name: 'Arka Fren Balata Seti', description: 'Disk ve kampana fren sistemleri', brand: 'Bosch, ATE, TRW' },
      { name: 'Ön Fren Diski', description: '288 / 312 / 320 / 345 mm motor ve modele göre', brand: 'Bosch, ATE, Brembo, TRW' },
      { name: 'Arka Fren Diski', description: '282 / 300 / 310 mm', brand: 'Bosch, ATE, Brembo' },
      { name: 'Fren Kaliper (Yenilenmiş)', description: 'Ön ve arka kaliper tamir kitli', brand: 'ATE, Bosch' },
      { name: 'Fren Balata Aşınma Sensörü', description: 'Ön ve arka', brand: 'Bosch, ATE, Brembo' },
      { name: 'Fren Hidroliği DOT 4 / DOT 5.1', description: 'Sentetik, 1L', brand: 'ATE, Bosch, Castrol' },
      { name: 'ABS Sensörü', description: 'Ön ve arka tekerlek', brand: 'Bosch, ATE' },
    ],
    faqs: [
      { question: 'Fren balatasında orijinal mi yan sanayi mi seçmeliyim?', answer: 'Fren güvenlik parçasıdır. Kaliteli yan sanayi (Bosch, ATE, TRW, Brembo) günlük kullanım için yeterlidir. Ancak yarış veya ağır hizmet için orijinal öneriyoruz.' },
      { question: 'Fren balata + disk beraber mi değişmeli?', answer: 'Disk kalınlığı 22mm altına düştüyse veya disk yüzeyi çizik ise disk ile birlikte değişim öneriyoruz. Aksi halde sadece balata yeterli.' },
      { question: 'Fren hidroliği ne sıklıkla değişmeli?', answer: '2 yılda bir veya fren hidroliği rengi koyulaştığında. Nem oranı %3 üstüne çıktığında fren verimi düşer.' },
    ],
    metaTitle: 'VAG Fren Balata ve Fren Diski | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat fren balata, fren disk, kaliper, ABS sensör. Bosch, ATE, TRW, Brembo markaları. Ankara stoklu.',
  },
  {
    slug: 'suspansiyon',
    title: 'Süspansiyon Sistemi',
    shortDescription: 'Amortisör, rotil, salıncak, rulman ve süspansiyon grup parçaları',
    longDescription:
      'VAG grubu süspansiyon parçaları; ön ve arka amortisör, helezon yay, salıncak kolu, rotil, rot başı, aks başı, amortisör takozu ve daha fazlası. Sachs, KYB, Monroe, Lemförder gibi kaliteli markalardan tedarik. Yol tutuşu ve konfor için doğru parça seçimi kritik önem taşır.',
    iconName: 'Gauge',
    color: '#2563EB',
    gradient: 'from-vag-blue to-blue-600',
    features: ['Amortisör', 'Rotil', 'Salıncak Kol', 'Rulman'],
    parts: [
      { name: 'Ön Amortisör', description: 'Gazlı veya yağlı, tekli veya çift (takım)', brand: 'Sachs, KYB, Monroe, Bilstein' },
      { name: 'Arka Amortisör', description: 'Gazlı', brand: 'Sachs, KYB, Monroe' },
      { name: 'Helezon Yay (Set)', description: 'Ön ve arka, standart veya spor', brand: 'Eibach, H&R, Lesjöfors' },
      { name: 'Salıncak Kolu (Ön)', description: 'Sol ve sağ, üst ve alt', brand: 'Lemförder, Meyle, TRW' },
      { name: 'Rotil + Rotbaşı Seti', description: 'Ön aks', brand: 'Lemförder, Meyle, Febi' },
      { name: 'Aks Başı (Aks Kafası)', description: 'İç veya dış', brand: 'SKF, FAG, GKN' },
      { name: 'Amortisör Takozu + Rulmanı', description: 'Ön ve arka', brand: 'Lemförder, Meyle' },
      { name: 'Stabilizer (Viraj) Çubuğu + Rotu', description: 'Ön ve arka', brand: 'Lemförder, TRW' },
    ],
    faqs: [
      { question: 'Amortisör ömrü ne kadardır?', answer: 'Genelde 80.000 – 120.000 km. Bozuk yol, hızlı sürüş ve yüksek kilometre ömrü kısaltır.' },
      { question: 'Süspansiyon parçalarında orijinal mi yan sanayi mi tercih etmeliyim?', answer: 'Sachs ve KYB orijinal VAG tedarikçisidir. Lemförder premium OEE olarak da güvenilir. Günlük kullanım için yan sanayi yeterli, performans için orijinal.' },
      { question: 'Amortisör değişimi tek mi çift mi yapılmalı?', answer: 'Aks başına çift (ön sol + sağ veya arka sol + sağ) yapılması önerilir. Tek taraf değişim dengesiz yol tutuşuna yol açar.' },
    ],
    metaTitle: 'VAG Süspansiyon Parçaları | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat amortisör, salıncak, rotil, helezon yay, aks başı. Sachs, KYB, Lemförder markaları. Ankara stoklu.',
  },
  {
    slug: 'elektrik',
    title: 'Elektrik Sistemi',
    shortDescription: 'Alternatör, marş motoru, sensörler, ampul ve elektrik aksamları',
    longDescription:
      'VAG grubu elektrik sistemi yedek parçaları. Marş motoru, alternatör, ateşleme bobini, buji, lambda sensörü, MAF sensörü, far ampulleri (H7, H4, D1S, D2S, LED), korna, far ayar motoru ve daha fazlası. Bosch, Hella, Valeo, NGK, Denso gibi markalar.',
    iconName: 'Zap',
    color: '#D97706',
    gradient: 'from-amber-500 to-orange-600',
    features: ['Alternatör', 'Marş Motoru', 'Sensörler', 'Far Ampulleri'],
    parts: [
      { name: 'Marş Motoru', description: 'Yenilenmiş veya yeni, 1.4-2.5 kW', brand: 'Bosch, Valeo, Denso' },
      { name: 'Alternatör', description: '14V, 90-180A', brand: 'Bosch, Valeo, Denso' },
      { name: 'Ateşleme Bobini', description: 'Tek bobin veya bobin seti', brand: 'Bosch, NGK, Delphi' },
      { name: 'Buji', description: 'Bakır, platin, iridyum', brand: 'NGK, Bosch, Denso' },
      { name: 'Lambda Sensörü (O2)', description: 'Ön ve arka, geniş bant', brand: 'Bosch, NGK, Denso' },
      { name: 'MAF (Hava Akış) Sensörü', description: '1.4 TSI, 1.6 TDI, 2.0 TDI', brand: 'Bosch, Pierburg' },
      { name: 'Far Ampulü', description: 'H7, H4, H1, H11, D1S, D2S, D3S, LED', brand: 'Osram, Philips, Narva' },
      { name: 'Far Ayar Motoru', description: 'Halojen ve Xenon farlar', brand: 'Hella, Bosch' },
    ],
    faqs: [
      { question: 'Marş motoru mu, alternatör mü arızalı nasıl anlarım?', answer: 'Marş motoru arızasında çevir sesi gelir ama motor döner. Alternatör arızasında motor çalışır ama kısa süre sonra akü biter. Test cihazı ile ölçüm yapılabilir.' },
      { question: 'H7 ve D1S ampul farkı nedir?', answer: 'H7 halojen ampul, sıradan far. D1S, D2S, D3S xenon ampul, özel balast gerektirir. LED farlarda ampul değişmez, modül değişir.' },
      { question: 'Far ampulü kendim değiştirebilir miyim?', answer: 'H7, H4 gibi halojen ampuller genelde sökülebilir. Xenon (D1S) ve LED farlar yetkili servis gerektirir.' },
    ],
    metaTitle: 'VAG Elektrik ve Aydınlatma Parçaları | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat marş motoru, alternatör, sensör, far ampulü, buji. Bosch, Hella, NGK, Denso markaları. Ankara stoklu.',
  },
  {
    slug: 'filtre',
    title: 'Filtre & Bakım Setleri',
    shortDescription: 'Hava, yağ, polen filtresi ve periyodik bakım setleri',
    longDescription:
      'VAG grubu araçlarınız için periyodik bakım filtreleri. Hava filtresi, yağ filtresi, yakıt filtresi (benzinli ve dizel), polen filtresi, şanzıman filtresi (DSG), aktüatör filtre. Mann, Mahle, Bosch, Filtron premium markalar. Filtre değişim periyodu 15.000 km veya yılda 1.',
    iconName: 'Filter',
    color: '#16A34A',
    gradient: 'from-green-600 to-emerald-700',
    features: ['Hava Filtresi', 'Yağ Filtresi', 'Polen Filtresi', 'Bakım Setleri'],
    parts: [
      { name: 'Yağ Filtresi', description: '1.0 TSI, 1.2 TSI, 1.4 TSI, 1.5 TSI, 2.0 TSI, 1.6 TDI, 2.0 TDI', brand: 'Mann, Mahle, Bosch' },
      { name: 'Hava Filtresi', description: 'Panel tip, motor modeline göre', brand: 'Mann, Mahle, Bosch' },
      { name: 'Yakıt Filtresi (Benzinli)', description: 'TSI motorlar, basınç regülatörlü', brand: 'Mann, Mahle, Bosch' },
      { name: 'Yakıt Filtresi (Dizel)', description: 'TDI motorlar, su separatörlü', brand: 'Mann, Mahle, Bosch' },
      { name: 'Polen / Kabin Filtresi', description: 'Aktif karbon, standart, alerjen filtresi', brand: 'Mann, Mahle, Bosch, Filtron' },
      { name: 'DSG Şanzıman Filtresi', description: 'DQ200, DQ250, DQ381, DQ500', brand: 'OEM' },
      { name: 'Bakım Seti', description: 'Yağ + filtre + tapa contası komple', brand: 'Mann-Filter, Mahle' },
    ],
    faqs: [
      { question: 'Filtre değişim periyodu nedir?', answer: 'Genel olarak 15.000 km veya yılda 1. Tozlu ortam, kısa mesafe sürüşlerde 10.000 km öneriyoruz.' },
      { question: 'Aktif karbon polen filtresi mi standart mı?', answer: 'Standart filtre temel toz tutar. Aktif karbon filtre alerjen, polen ve kokuları da tutar, premium konfor sağlar. Fiyat farkı küçük.' },
      { question: 'Yağ değişimi sırasında filtre seti almalı mıyım?', answer: 'Evet. Yağ, yağ filtresi, tapa contası bir set halinde alındığında daha ekonomik ve pratik olur.' },
    ],
    metaTitle: 'VAG Filtre ve Bakım Setleri | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat hava filtresi, yağ filtresi, polen filtresi, yakıt filtresi, bakım setleri. Mann, Mahle, Bosch markaları.',
  },
  {
    slug: 'sanziman',
    title: 'Şanzıman Parçaları',
    shortDescription: 'Debriyaj, bilya, senkron, volant ve şanzıman grubu parçaları',
    longDescription:
      'Manuel ve DSG (otomatik) şanzıman parçaları. Debriyaj seti, bilya, senkron mekanizması, volant (çift kütleli), mekatronik ünite, DSG yağı, şanzıman kulesi. LUK, Sachs, Valeo, ZF, OEM markalar.',
    iconName: 'Cog',
    color: '#7C3AED',
    gradient: 'from-violet-600 to-purple-700',
    features: ['Debriyaj Diski', 'Bilya Seti', 'Senkron Mekanizma', 'Volant'],
    parts: [
      { name: 'Debriyaj Seti (Manuel)', description: 'Disk + baskı + bilyalı rulman', brand: 'LUK, Sachs, Valeo' },
      { name: 'Çift Kütleli Volant', description: 'DSG veya manuel, DMF', brand: 'LUK, Sachs, Valeo' },
      { name: 'DSG Debriyaj Seti', description: 'DQ200, DQ250, DQ381, DQ500', brand: 'OEM' },
      { name: 'DSG Mekatronik Ünite', description: 'Tamir kitli veya yeni', brand: 'OEM' },
      { name: 'DSG Şanzıman Yağı', description: 'VW TL 52 182 spesifikasyon, 1L veya 5L', brand: 'OEM' },
      { name: 'Şanzıman Tapası + Conta', description: 'Boşaltma + dolum', brand: 'OEM' },
      { name: 'Vites Çubuğu / Kulesi', description: 'Manuel şanzıman', brand: 'OEM' },
    ],
    faqs: [
      { question: 'DSG yağı ne sıklıkla değişmeli?', answer: '60.000 km\'de DSG yağı + filtre değişimi önerilir. Mekatronik ömrü için kritik.' },
      { question: 'Çift kütleli volan hangi durumlarda değişmeli?', answer: 'Rölantide titreşim, kalkışta sarsıntı, debriyaj değişimi sırasında kontrol edilir. Aşınmışsa debriyaj ile birlikte değişir.' },
      { question: 'Manuel mi DSG mi daha ekonomik?', answer: 'Manuel şanzıman parçaları (debriyaj seti, bilya) DSG\'den daha ekonomik. Ancak DSG\'de yağ değişimi maliyeti düşük, parça değişimi (mekatronik) yüksek olabilir.' },
    ],
    metaTitle: 'VAG Şanzıman Parçaları (Manuel + DSG) | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat manuel ve DSG debriyaj, volant, mekatronik, şanzıman yağı. LUK, Sachs, Valeo, OEM markaları.',
  },
  {
    slug: 'egzoz',
    title: 'Egzoz & Emisyon Sistemi',
    shortDescription: 'Egzoz borusu, katalizör, lambda sensörü ve emisyon parçaları',
    longDescription:
      'VAG grubu egzoz ve emisyon parçaları. Katalizör, partikül filtresi (DPF/GPF), egzoz manifoldu, orta ve arka susturucu, lambda sensörü, NOX sensörü, EGR valfi. Emisyon standartlarına uygun, orijinal ve kaliteli yan sanayi seçenekleri.',
    iconName: 'Wind',
    color: '#64748B',
    gradient: 'from-slate-500 to-slate-600',
    features: ['Egzoz Borusu', 'Katalizör', 'Lambda Sensör', 'Egzoz Manifoldu'],
    parts: [
      { name: 'Katalizör', description: 'Benzinli ve dizel, Euro 5/6 uyumlu', brand: 'Walker, Bosal, OEM' },
      { name: 'DPF (Dizel Partikül Filtresi)', description: '1.6 TDI, 2.0 TDI', brand: 'OEM, Walker' },
      { name: 'GPF (Benzinli Partikül Filtresi)', description: '1.0 TSI, 1.5 TSI Euro 6d', brand: 'OEM' },
      { name: 'Egzoz Manifoldu', description: '1.4 TSI, 1.5 TSI, 2.0 TSI', brand: 'OEM, Fa1' },
      { name: 'Orta Susturucu', description: 'Genel, paslanmaz çelik', brand: 'Walker, Bosal, Ernst' },
      { name: 'Arka Susturucu', description: 'Spor ve standart', brand: 'Walker, Bosal, Remus' },
      { name: 'EGR Valfi', description: '1.6 TDI, 2.0 TDI', brand: 'Pierburg, OEM' },
      { name: 'NOX Sensörü', description: 'SCR sistemli TDI motorlar', brand: 'Bosch, NGK' },
    ],
    faqs: [
      { question: 'Katalizör ne zaman değişmeli?', answer: 'Genelde 150.000 – 200.000 km. Tıkanma, motor arıza ışığı veya egzoz emisyon testi başarısız ise değişim gerekebilir.' },
      { question: 'DPF tıkanırsa ne yapmalı?', answer: 'Önce rejenerasyon denenmeli (yüksek devirli 30 dk sürüş). Başarısızsa DPF temizleme veya değişim gerekebilir.' },
      { question: 'Spor egzoz yasal mı?', answer: 'TÜV onaylı (E-mark) spor egzozlar yasal. Onaysız egzozlar cezaya tabi ve sigorta sorunu yaratır.' },
    ],
    metaTitle: 'VAG Egzoz ve Emisyon Parçaları | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat katalizör, DPF/GPF, egzoz manifoldu, lambda sensörü, EGR valfi. OEM, Walker, Bosal markaları.',
  },
  {
    slug: 'aku',
    title: 'Akü & Şarj Sistemi',
    shortDescription: 'Akü, şarj dinamosu, regülatör ve elektrik deposu parçaları',
    longDescription:
      'VAG grubu araçlarınız için akü ve şarj sistemi parçaları. AGM, EFB, standart kurşun-asit akü seçenekleri. Start-stop sistemi olan araçlarda AGM/EFB zorunlu. Varta, Bosch, Mutlu gibi güvenilir markalar. Akü ömrü 3-5 yıl.',
    iconName: 'Battery',
    color: '#0891B2',
    gradient: 'from-cyan-600 to-teal-600',
    features: ['Orijinal Akü', 'Şarj Dinamosu', 'Regülatör', 'Kablo Grubu'],
    parts: [
      { name: 'Akü 60Ah AGM (Start-Stop)', description: 'Golf 7, A3 8V, Octavia 5E', brand: 'Varta, Bosch' },
      { name: 'Akü 70Ah AGM', description: 'Passat B8, A4 B9, Superb 3V', brand: 'Varta, Bosch' },
      { name: 'Akü 80Ah AGM', description: 'Tiguan, Q5, Kodiaq', brand: 'Varta, Bosch' },
      { name: 'Akü 60Ah EFB', description: 'Start-stop ekonomik', brand: 'Varta, Bosch, Mutlu' },
      { name: 'Akü 60Ah Standart', description: 'Start-stopsuz eski nesil araçlar', brand: 'Mutlu, Varta' },
      { name: 'Akü Şarj Cihazı (Akıllı)', description: 'AGM/EFB uyumlu', brand: 'CTEK, Bosch' },
    ],
    faqs: [
      { question: 'Start-stop aracım için hangi aküyü almalıyım?', answer: 'AGM veya EFB akü şart. Standart akü 6 ayda bozulur ve start-stop çalışmaz.' },
      { question: 'Akü ömrü ne kadar?', answer: 'Ortalama 3-5 yıl. Kısa mesafe sürüş, aşırı sıcak/soğuk ömrü kısaltır.' },
      { question: 'Akü kendim değiştirebilir miyim?', answer: 'Evet, genelde. Kodlama gerektiren modellerde (yeni BMW, Mercedes) yetkili servis gerekir. VAG araçlarda genelde manuel kodlama yeterli.' },
    ],
    metaTitle: 'VAG Akü ve Şarj Sistemi | İmza Volkswagen',
    metaDescription: 'VW, Audi, Skoda, Seat AGM, EFB, standart akü. Start-stop uyumlu. Varta, Bosch, Mutlu markaları. Ankara stoklu.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
