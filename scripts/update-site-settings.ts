/**
 * Site Ayarları Güncelleme — Developer, WhatsApp templates, Hero CTA ekle.
 */
import { writeClient } from "../src/sanity/lib/client";

async function main() {
  console.log("⚙️ Site ayarları güncelleniyor...");

  await writeClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "İmza Volkswagen",
    tagline: "VAG Grubu Yedek Parça Uzmanı",
    description:
      "Volkswagen, Audi, Seat, Skoda, Cupra, Porsche için orijinal ve yan sanayi yedek parça. Ankara İvedik.",
    contact: {
      phone: "0312 394 05 25",
      whatsapp: "+90 543 979 20 13",
      email: "info@imzavolkswagen.com.tr",
      address: "İvedik Sanayi Bölgesi, Altındağ / Ankara",
      workingHours: "Pazartesi – Cumartesi, 09:00 – 18:00",
    },
    // Geliştirici bilgisi (Footer alt bilgi)
    developer: {
      company: "Ahanci Studio",
      phone: "0539 654 04 61",
      email: "",
      url: "",
    },
    // WhatsApp hazır mesaj şablonları
    whatsappTemplates: {
      general:
        "Merhaba, İmza Volkswagen'ten bilgi almak istiyorum. Aracım: [Marka/Model] [Yıl]. Konu: [Parça]",
      quote:
        "Merhaba, teklif almak istiyorum. Aracım: [Marka/Model] [Yıl]. Şase No: [VIN]. Parça: [Parça adı/kodu]",
      product:
        "Merhaba, [Ürün adı] için fiyat ve stok bilgisi almak istiyorum. Aracım: [Marka/Model] [Yıl]",
    },
    // Hero bölümü ayarları
    hero: {
      eyebrow: "VAG Grubu Yedek Parça Uzmanı",
      subtitle:
        "Ankara İvedik'te 20+ yıldır Volkswagen, Audi, Seat, Skoda, Cupra ve Porsche araçlarınız için orijinal ve yan sanayi yedek parça satışı.",
      primaryCtaLabel: "WhatsApp ile Yazın",
      primaryCtaHref: "https://wa.me/9054349792013",
      secondaryCtaLabel: "Hemen Arayın",
      secondaryCtaHref: "tel:+9054349792013",
    },
    footerText:
      "İmza Volkswagen, Türkiye'nin önde gelen VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisidir. Orijinal (OEM) ve yüksek kaliteli yan sanayi (OEE) yedek parça. Çıkma parça satışımız yoktur.",
  });

  console.log("✅ Site ayarları güncellendi:");
  console.log("   • developer: Ahanci Studio, 0539 654 04 61");
  console.log("   • whatsappTemplates: 3 hazır mesaj");
  console.log("   • hero: CTA button'lar");
}

main().catch((e) => {
  console.error("Hata:", e);
  process.exit(1);
});
