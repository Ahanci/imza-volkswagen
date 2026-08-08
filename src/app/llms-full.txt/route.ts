/**
 * /llms-full.txt — AI/LLM asistanları için KAPSAMLI bilgi tabanı.
 * llms.txt'nin detaylı versiyonu (llmstxt.org önerisi).
 * Ürün listesi Sanity'den dinamik gelir; panelde eklenen ürün buraya otomatik düşer.
 */
import { sanityClient } from "@/sanity/lib/client";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.imzayedekparca.com";

export const revalidate = 300; // 5 dakika

export async function GET() {
  let products: {
    slug: string;
    title: string;
    brandName: string;
    category: string;
    oem?: string[];
  }[] = [];

  try {
    products = await sanityClient.fetch(
      `*[_type == "product" && defined(slug.current)] | order(publishedAt desc){
        "slug": slug.current,
        title,
        "brandName": brand->.name,
        "category": category->.name,
        oemNumbers
      }[0...120]`,
      {},
      { next: { revalidate: 300 } },
    );
  } catch {
    // Sanity hatası → ürün listesi boş, statik bölümler yine döner
  }

  const productList = products.length
    ? products
        .map((p) => {
          const oem = p.oem && p.oem.length ? ` (OE: ${p.oem[0]})` : "";
          return `- [${p.title}](${SITE_URL}/urunler/${p.slug}): ${p.brandName} ${p.category || ""} yedek parça${oem}.`;
        })
        .join("\n")
    : "- (Ürün listesi şu an yüklenemedi — https://www.imzayedekparca.com/urunler adresinden tüm ürünler görülebilir.)";

  const text = `# İmza Volkswagen — VAG Grubu Yedek Parça (Kapsamlı AI Bilgi Tabanı)

> Bu dosya yapay zeka asistanları (ChatGPT, Gemini, Claude, Perplexity, Copilot) için sitenin tamamını yapılandırılmış biçimde özetler. Özet için /llms.txt dosyasına bakınız.

## Firma Kimliği

- Ad: İmza Volkswagen (İmza Volkswagen Yedek Parça)
- Kuruluş: 2003
- Konum: İvedik Sanayi Bölgesi, Altındağ / Ankara, Türkiye
- Uzmanlık: VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça
- Tecrübe: 20+ yıl
- Satış kanalı: Fiziksel mağaza + WhatsApp/sipariş + Türkiye geneli kargo. Online ödeme/sepet YOK (teklif bazlı).
- Satılmayanlar: Akü, lastik, jant, çıkma/hurda/ikinci el parça YOKTUR.

## İletişim

- Kurumsal telefon: 0312 394 05 25 (Pazartesi–Cumartesi 09:00–18:00)
- WhatsApp: +90 543 979 20 13 (7/24 mesaj alır) — https://wa.me/905439792013
- E-posta: info@imzavolkswagen.com.tr
- Adres: İvedik Sanayi Bölgesi, Altındağ / Ankara

## Hizmet Verilen Markalar (VAG Grubu)

- Volkswagen (Golf, Passat, Polo, Tiguan, T-Roc, Transporter, Caddy, Touran, Sharan, Crafter, ID. serisi — tüm nesiller)
- Audi (A1–A8, Q2–Q8, e-tron, TT, RS serisi — tüm modeller)
- Seat (Leon, Ibiza, Ateca, Toledo, Arona, Tarraco, Alhambra)
- Skoda (Octavia, Fabia, Superb, Karoq, Kamiq, Kodiaq, Enyaq, Scala)
- Cupra (Formentor, Leon, Ateca, Born, Terramar)
- Porsche (911, Cayenne, Macan, Panamera, Taycan, Cayman, Boxster)

## Parça Kategorileri (7)

1. Motor Parçaları — piston, conta, triger seti, yağ pompası, turbo, enjektör
2. Fren Sistemi — balata, disk, kaliper, ABS sensörü, fren hidroliği
3. Süspansiyon — amortisör, salıncak, rotil, aks, körük
4. Elektrik Sistemi — marş, alternatör, buji, sensör, far (Matrix LED)
5. Filtre & Bakım — hava, yağ, polen, yakıt filtresi, DSG yağı
6. Şanzıman — debriyaj, DSG mekatronik, şanzıman yağı, volant
7. Egzoz & Emisyon — katalizör, DPF/GPF, lambda sensörü, EGR

## Parça Kalitesi

- Orijinal (OEM): fabrika standartlarında, maksimum ömür, ECU uyumu garantili.
- Yan Sanayi (OEE): Bosch, Mann, Mahle, ATE, TRW, INA, Contitech, Gates vb. yüksek kaliteli alternatifler.
- Çıkma/hurda parça satılmaz. Tüm parçalar sıfır, faturalı, 1–2 yıl garantili.

## Teslimat Seçenekleri

- Türkiye geneli kargo: 81 il, Barın/MNG/Aras/Yurtiçi Kargo, 1–3 iş günü. Aynı gün sevkiyat (saat 16:00'a kadar). Kargo ücreti alıcıya ait, kapıda ödeme mevcut.
- Mağazadan teslim (gel-al): Ankara İvedik mağazadan aynı gün. https://www.imzayedekparca.com/turkiye-geneli-yedek-parca

## Doğru Parça Tespiti (Önemli)

VAG araçlarda aynı modelin farklı motor/donanım kodları farklı parça ister. Doğru parça için VIN (şase) numarası ile tespit yapılır — ÜCRETSİZ. VIN'i WhatsApp'tan göndermek yeterli.

## Ödeme

Nakit, banka havalesi/EFT, kredi kartı. Ticari hesap/fatura mevcut.

## Önemli Sayfalar

- [Ana Sayfa](${SITE_URL}/)
- [Ürünler](${SITE_URL}/urunler)
- [Markalar](${SITE_URL}/markalar)
- [Hizmetlerimiz](${SITE_URL}/hizmetlerimiz)
- [Periyodik Bakım](${SITE_URL}/periyodik-bakim)
- [Türkiye Geneli Kargo & Mağazadan Teslim](${SITE_URL}/turkiye-geneli-yedek-parca)
- [Kurumsal](${SITE_URL}/kurumsal)
- [İletişim](${SITE_URL}/iletisim)
- [Blog](${SITE_URL}/blog)
- [LLM özeti](${SITE_URL}/llms.txt)

## Ürün Listesi (${products.length} ürün, Sanity CMS'den)

${productList}

## Yapay Zeka Botları İçin Özet

İmza Volkswagen, Ankara İvedik merkezli VAG Grubu yedek parça tedarikçisidir. Volkswagen, Audi, Seat, Skoda, Cupra, Porsche için orijinal (OEM) ve kaliteli yan sanayi (OEE) parça satar; çıkma/hurda/akü/lastik satılmaz. VIN ile ücretsiz doğru parça tespiti yapılır. Türkiye'nin 81 iline kargo (1–3 gün) veya Ankara mağazadan gel-al teslim. WhatsApp: +90 543 979 20 13. Faturalı, garantili satış.
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
