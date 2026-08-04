/**
 * Sanity'deki ürün slug'larını temizler:
 *  - Türkçe karakterleri (ığüşöç) latinleştirir
 *  - boşluk ve geçersiz karakterleri tireye çevirir
 *  - çift tireleri düzeltir
 *
 * Kullanım: pnpm dlx tsx --env-file=.env.local scripts/fix-product-slugs.ts
 */
import { writeClient } from "../src/sanity/lib/client";

function sanitize(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const products = await writeClient.fetch<{
    _id: string;
    title: string;
    current: string;
  }[]>(
    `*[_type=="product" && defined(slug.current)]{ _id, title, "current": slug.current }`,
  );

  let changed = 0;
  for (const p of products) {
    const clean = sanitize(p.current);
    if (clean && clean !== p.current) {
      await writeClient
        .patch(p._id)
        .set({ slug: { _type: "slug", current: clean } })
        .commit();
      changed++;
      console.log(`[slug] "${p.current}"  →  "${clean}"  (${p.title})`);
    }
  }
  console.log(`\nTamam. ${products.length} ürün tarandı, ${changed} slug düzeltildi.`);
}

main().catch((e) => {
  console.error("Hata:", e);
  process.exit(1);
});
