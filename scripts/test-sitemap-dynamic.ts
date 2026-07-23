/**
 * Test: Sanity'ye yeni ürün ekle, sitemap.xml'de görünmesini doğrula.
 * 60 saniye sonra tekrar kontrol (revalidate: 60).
 * Sonra test ürünü sil.
 */
import { writeClient, sanityClient } from "../src/sanity/lib/client";

const TEST_ID = "product-test-sitemap-auto";
const TEST_SLUG = "test-sitemap-auto";
const TEST_BRAND_ID = "brand-volkswagen";
const TEST_CAT_ID = "category-motor";

async function main() {
  console.log("🧪 Test: Sanity'ye yeni ürün ekleniyor...");

  // Mevcut brand ve category ref'lerini al
  const brand = await sanityClient.fetch(
    `*[_id == "${TEST_BRAND_ID}"][0]{_id}`
  );
  const category = await sanityClient.fetch(
    `*[_id == "${TEST_CAT_ID}"][0]{_id}`
  );

  if (!brand || !category) {
    console.error("❌ Brand veya category bulunamadı, seed gerekli");
    process.exit(1);
  }

  // 1) Yeni ürün oluştur
  await writeClient.createOrReplace({
    _id: TEST_ID,
    _type: "product",
    title: "TEST VW Golf 8 Otomatik Sitemap Test Ürünü",
    slug: { _type: "slug", current: TEST_SLUG },
    brand: { _type: "reference", _ref: brand._id },
    category: { _type: "reference", _ref: category._id },
    oemNumbers: ["5G0-TEST-001"],
    shortDescription:
      "Bu ürün sitemap test içindir. Sanity'den silinecek.",
    description: [
      {
        _type: "block",
        _key: "desc1",
        children: [
          {
            _type: "span",
            text: "Otomatik sitemap test ürünü. Gerçek değildir.",
          },
        ],
      },
    ],
    features: ["Test feature 1", "Test feature 2"],
    specifications: [],
    compatibleModels: ["Golf 8"],
    images: [],
    tags: [],
    isFeatured: false,
    metaTitle: "TEST Sitemap Ürünü | İmza Volkswagen",
    metaDescription:
      "Bu bir test ürünüdür, sitemap revalidate testi için oluşturuldu.",
    publishedAt: new Date().toISOString(),
  });

  console.log(`✅ Ürün oluşturuldu: ${TEST_ID}`);

  // 2) 60 saniye bekle (sitemap revalidate süresi)
  console.log("⏳ 60 saniye bekleniyor (sitemap cache)...");
  await new Promise((r) => setTimeout(r, 65000));

  // 3) Sitemap kontrol
  console.log("🔍 Sitemap kontrol ediliyor...");
  const sitemap = await fetch(
    "https://imzayedekparca.com/sitemap.xml"
  ).then((r) => r.text());

  const inSitemap = sitemap.includes(`/urunler/${TEST_SLUG}`);
  console.log(
    inSitemap
      ? `✅ Ürün sitemap'te BULUNDU: /urunler/${TEST_SLUG}`
      : `❌ Ürün sitemap'te YOK (60s sonra)`
  );

  // 4) llms.txt kontrol
  const llms = await fetch("https://imzayedekparca.com/llms.txt").then(
    (r) => r.text()
  );
  const inLLMS = llms.includes(`/urunler/${TEST_SLUG}`);
  console.log(
    inLLMS
      ? `✅ Ürün llms.txt'te BULUNDU`
      : `❌ Ürün llms.txt'te YOK`
  );

  // 5) Test ürünü sil
  console.log("🗑️ Test ürünü siliniyor...");
  await writeClient.delete(TEST_ID);
  console.log(`✅ Test ürünü silindi: ${TEST_ID}`);

  console.log("\n🎉 Test tamamlandı!");
  console.log(`Sitemap: ${inSitemap ? "✅ Dinamik" : "❌ Statik (kontrol et)"}`);
  console.log(`LLMS:    ${inLLMS ? "✅ Dinamik" : "❌ Statik (kontrol et)"}`);
}

main().catch((e) => {
  console.error("Test hatası:", e);
  process.exit(1);
});
