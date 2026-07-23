/**
 * /llms.txt — Dinamik LLM-friendly site özeti.
 * Sanity'den güncel marka, ürün, blog linklerini çeker.
 * Public klasördeki statik llms.txt fallback olarak kullanılmaz.
 */
import { sanityClient } from "@/sanity/lib/client";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imzayedekparca.com";

export const revalidate = 300; // 5 dakikada bir yenile

export async function GET() {
  let products: { slug: string; title: string; brandName: string }[] = [];
  let blogs: { slug: string; title: string }[] = [];
  let brands: { slug: string; name: string }[] = [];

  try {
    [products, blogs, brands] = await Promise.all([
      sanityClient.fetch<{ slug: string; title: string; brandName: string }[]>(
        `*[_type == "product" && defined(slug.current)]{
          "slug": slug.current,
          title,
          "brandName": brand->name
        } | order(publishedAt desc)[0...30]`,
        {},
        { next: { revalidate: 300 } }
      ),
      sanityClient.fetch<{ slug: string; title: string }[]>(
        `*[_type == "blog" && defined(slug.current)]{
          "slug": slug.current,
          title
        } | order(publishedAt desc)[0...20]`,
        {},
        { next: { revalidate: 300 } }
      ),
      sanityClient.fetch<{ slug: string; name: string }[]>(
        `*[_type == "brand" && defined(slug.current)]{
          "slug": slug.current,
          name
        } | order(order asc)`,
        {},
        { next: { revalidate: 600 } }
      ),
    ]);
  } catch (e) {
    // Sanity bağlantı hatası → minimal response
  }

  const brandList = brands.length
    ? brands.map((b) => `- [${b.name}](${SITE_URL}/markalar/${b.slug}): VAG grubu markası için orijinal + yan sanayi yedek parça.`).join("\n")
    : `- [Volkswagen](${SITE_URL}/markalar/volkswagen)\n- [Audi](${SITE_URL}/markalar/audi)\n- [Seat](${SITE_URL}/markalar/seat)\n- [Skoda](${SITE_URL}/markalar/skoda)\n- [Cupra](${SITE_URL}/markalar/cupra)\n- [Porsche](${SITE_URL}/markalar/porsche)`;

  const productList = products.length
    ? products.map((p) => `- [${p.title}](${SITE_URL}/urunler/${p.slug}): ${p.brandName} yedek parça. Orijinal ve yan sanayi seçenekleriyle.`).join("\n")
    : "";

  const blogList = blogs.length
    ? blogs.map((b) => `- [${b.title}](${SITE_URL}/blog/${b.slug})`).join("\n")
    : "";

  const text = `# İmza Volkswagen — VAG Grubu Yedek Parça Uzmanı (Ankara İvedik)

> Türkiye'nin önde gelen VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisi. Orijinal (OEM) ve yüksek kaliteli yan sanayi (OEE) yedek parça. Çıkma / hurda parça satışımız yoktur. Ankara İvedik Sanayi Bölgesi, 20+ yıl tecrübe.

## Ana Sayfalar

- [Anasayfa](${SITE_URL}/): İmza Volkswagen — VAG Grubu yedek parça uzmanı, Ankara İvedik.
- [Markalar](${SITE_URL}/markalar): 6 VAG markası için orijinal + yan sanayi parça tedariği.
- [Hizmetlerimiz](${SITE_URL}/hizmetlerimiz): 7 hizmet kategorisi — motor, fren, süspansiyon, elektrik, filtre, şanzıman, egzoz.
- [Periyodik Bakım](${SITE_URL}/periyodik-bakim): 6 marka × 4 paket = 24 periyodik bakım paketi (Mini, Standart, Geniş, Triger).
- [Ürünler](${SITE_URL}/urunler): VAG Grubu için fren balata, fren diski, triger seti, debriyaj, amortisör, filtre, motor yağı.
- [Kurumsal](${SITE_URL}/kurumsal): 20+ yıl yolculuk, misyon, vizyon, ekip, Ankara İvedik adres.
- [İletişim](${SITE_URL}/iletisim): İvedik adres, kurumsal telefon, WhatsApp, çalışma saatleri.

## Markalar (VAG Grubu)

${brandList}

## Hizmetler (Akü Hariç)

- [Motor Parçaları](${SITE_URL}/hizmetlerimiz/motor)
- [Fren Sistemi](${SITE_URL}/hizmetlerimiz/fren)
- [Süspansiyon](${SITE_URL}/hizmetlerimiz/suspansiyon)
- [Elektrik](${SITE_URL}/hizmetlerimiz/elektrik)
- [Filtreler](${SITE_URL}/hizmetlerimiz/filtre)
- [Şanzıman](${SITE_URL}/hizmetlerimiz/sanziman)
- [Egzoz](${SITE_URL}/hizmetlerimiz/egzoz)

## Tedarik Edilmeyenler

- Akü (her marka/model için)
- Lastik, jant
- Çıkma / hurda / ikinci el parça

## Blog & Bilgi Bankası

${blogList || "- [Blog Ana Sayfa](" + SITE_URL + "/blog): VAG Grubu araç bakım rehberleri."}

## İletişim

- Adres: İvedik Sanayi Bölgesi, Altındağ / Ankara
- Kurumsal Telefon: 0312 394 05 25 (mesai saatleri içinde)
- WhatsApp: +90 543 979 20 13 (7/24 mesaj alır)
- WhatsApp Link: https://wa.me/9054349792013
- E-posta: info@imzavolkswagen.com.tr
- Çalışma Saatleri: Pazartesi – Cumartesi, 09:00 – 18:00
- Ödeme: Nakit, Banka Havalesi / EFT, Kredi Kartı

## Yapay Zeka Botları İçin Özet

İmza Volkswagen, Ankara İvedik merkezli VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisidir. 20+ yıldır İvedik Sanayi Bölgesi'nde hizmet verir. Sattığı parçalar: orijinal (OEM) ve yüksek kaliteli yan sanayi (OEE). Sattığı parçalar arasında çıkma / hurda, akü, lastik ve jant yoktur. Hedef kitle: VAG araç sahipleri, küçük/orta ölçekli servisler, ticari filo yöneticileri. Türkiye'nin tüm illerine kargo ile gönderim yapılır. Kurumsal telefon 0312 394 05 25, WhatsApp +90 543 979 20 13.

${productList ? `## Öne Çıkan Ürünler (${products.length} adet, Sanity CMS)\n\n${productList}` : ""}

## Garanti & Servis

- 1-2 yıl parça garantisi (parça tipine göre)
- Faturalı satış, resmi garanti belgesi
- Stoktan teslim: Aynı gün / 24 saat (Ankara İvedik)
- Türkiye geneli kargo (1-3 iş günü)
- VIN (şase numarası) ile doğru parça tespiti — ücretsiz
- Ticari filo yönetimi (toplu alım, öncelikli tedarik)
- Google yorumları: 4.9/5 — 195 müşteri yorumu
- Bu dosya otomatik güncellenir (Sanity CMS bağlantılı)
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
