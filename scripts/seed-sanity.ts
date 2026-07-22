/**
 * Faz 2: Seed Script — Mevcut 60+ içeriği Sanity'ye aktar.
 *
 * Mevcut statik data dosyalarını okur, Sanity'ye mutation ile yazar.
 * Sıra: brands → categories → tags → products → blogs → siteSettings
 *
 * Kullanım: cd /Users/abdulkerimhancioglu/Desktop/imza-oto
 *   node --env-file=.env.local --experimental-strip-types scripts/seed-sanity.ts
 *
 * Veya: pnpm dlx tsx --env-file=.env.local scripts/seed-sanity.ts
 */

import { writeClient } from "../src/sanity/lib/client";
import { brands } from "../src/lib/brands-data";
import { products } from "../src/lib/products-data";
import { blogPosts } from "../src/lib/blog-data";

const log = (msg: string) => console.log(`[seed] ${msg}`);

async function main() {
  log("🚀 Seed başlıyor...");

  // 1) BRANDS
  log(`\n📦 Markalar (${brands.length} adet)...`);
  const brandMap = new Map<string, string>(); // slug → _id
  for (const brand of brands) {
    const doc = {
      _id: `brand-${brand.slug}`,
      _type: "brand",
      name: brand.name,
      slug: { _type: "slug", current: brand.slug },
      logoInitials: (brand as any).logoInitials || brand.logo?.slice(0, 2) || "?",
      color: brand.color,
      textColor: brand.textColor,
      bgColor: brand.bgColor,
      shortDescription: brand.description,
      longDescription: brand.longDescription
        ? [{ _type: "block", _key: brand.slug, children: [{ _type: "span", text: brand.longDescription }] }]
        : undefined,
      isVAGGroup: true,
      order: (brand as any).order ?? 0,
    };
    await writeClient.createOrReplace(doc);
    brandMap.set(brand.slug, `brand-${brand.slug}`);
    log(`  ✅ ${brand.name}`);
  }

  // 2) CATEGORIES (services-data'dan 7 kategori)
  log(`\n📂 Kategoriler (7 adet)...`);
  const categorySlugs = ["motor", "fren", "suspansiyon", "elektrik", "filtre", "sanziman", "egzoz"];
  const categoryIcons: Record<string, { icon: string; color: string; gradient: string; name: string; desc: string }> = {
    motor: { icon: "Cog", color: "#001E50", gradient: "from-vag-navy to-blue-800", name: "Motor Parçaları", desc: "Piston, conta, triger seti, yağ pompası, turbo" },
    fren: { icon: "Disc", color: "#DC2626", gradient: "from-red-600 to-red-700", name: "Fren Sistemi", desc: "Balata, disk, kaliper, ABS sensör, fren hidroliği" },
    suspansiyon: { icon: "Gauge", color: "#2563EB", gradient: "from-vag-blue to-blue-600", name: "Süspansiyon Sistemi", desc: "Amortisör, salıncak, rotil, aks, körük" },
    elektrik: { icon: "Zap", color: "#F59E0B", gradient: "from-amber-500 to-orange-600", name: "Elektrik Sistemi", desc: "Marş motoru, alternatör, buji, sensör, far" },
    filtre: { icon: "Filter", color: "#16A34A", gradient: "from-green-600 to-emerald-700", name: "Filtre & Bakım", desc: "Hava, yağ, polen, yakıt, DSG yağı" },
    sanziman: { icon: "Cog", color: "#7C3AED", gradient: "from-violet-600 to-purple-700", name: "Şanzıman Parçaları", desc: "Debriyaj, DSG mekatronik, şanzıman yağı, volant" },
    egzoz: { icon: "Wind", color: "#64748B", gradient: "from-slate-600 to-gray-700", name: "Egzoz & Emisyon", desc: "Katalizör, DPF/GPF, lambda sensörü, EGR" },
  };
  const categoryMap = new Map<string, string>();
  let i = 0;
  for (const slug of categorySlugs) {
    const meta = categoryIcons[slug];
    const doc = {
      _id: `category-${slug}`,
      _type: "category",
      name: meta.name,
      slug: { _type: "slug", current: slug },
      iconName: meta.icon,
      color: meta.color,
      gradient: meta.gradient,
      description: meta.desc,
      order: i++,
    };
    await writeClient.createOrReplace(doc);
    categoryMap.set(slug, `category-${slug}`);
    log(`  ✅ ${meta.name}`);
  }

  // 3) TAGS (ürün ve blog'lardan unique etiketler)
  const tagSet = new Set<string>();
  // Blog tag'lerinden
  for (const b of blogPosts) {
    if (b && b.tags) b.tags.forEach((t) => tagSet.add(t));
  }
  // Marka isimleri de tag olarak
  brands.forEach((b) => tagSet.add(b.name));
  // Genel etiketler
  ["Orijinal", "Yan Sanayi", "Ankara", "Stok", "Faturalı", "Garantili"].forEach((t) => tagSet.add(t));

  log(`\n🏷️ Etiketler (${tagSet.size} adet)...`);
  const tagMap = new Map<string, string>();
  for (const tag of tagSet) {
    const slug = tag
      .toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ş/g, "s")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const doc = {
      _id: `tag-${slug}`,
      _type: "tag",
      name: tag,
      slug: { _type: "slug", current: slug },
    };
    await writeClient.createOrReplace(doc);
    tagMap.set(tag, `tag-${slug}`);
  }
  log(`  ✅ ${tagSet.size} etiket yüklendi`);

  // 4) PRODUCTS
  log(`\n🛍️ Ürünler (${products.length} adet)...`);
  let productCount = 0;
  for (const p of products) {
    const brandRef = brandMap.get(p.brandSlug);
    if (!brandRef) {
      log(`  ⚠️ Marka bulunamadı: ${p.brandSlug} — ${p.name} atlandı`);
      continue;
    }
    // Category slug tahmin et (ürün adından)
    let categorySlug = "motor";
    const name = p.name.toLowerCase();
    if (name.includes("fren") || name.includes("balata") || name.includes("disk") || name.includes("kaliper")) categorySlug = "fren";
    else if (name.includes("amortis") || name.includes("salıncak") || name.includes("rotil") || name.includes("aks") || name.includes("yay") || name.includes("süspansi")) categorySlug = "suspansiyon";
    else if (name.includes("alternat") || name.includes("marş") || name.includes("buji") || name.includes("far") || name.includes("sensör") || name.includes("elektrik")) categorySlug = "elektrik";
    else if (name.includes("filtre")) categorySlug = "filtre";
    else if (name.includes("debriyaj") || name.includes("şanzıman") || name.includes("sanziman") || name.includes("mekatronik") || name.includes("volant") || name.includes("dsg") || name.includes("pdk")) categorySlug = "sanziman";
    else if (name.includes("egzoz") || name.includes("kataliz") || name.includes("dpf") || name.includes("gpf") || name.includes("lambda") || name.includes("egr") || name.includes("manifold")) categorySlug = "egzoz";
    else if (name.includes("motor") || name.includes("piston") || name.includes("triger") || name.includes("turbo") || name.includes("conta") || name.includes("enjekt") || name.includes("yağ")) categorySlug = "motor";
    const categoryRef = categoryMap.get(categorySlug) || categoryMap.get("motor")!;

    const features = Array.isArray(p.features) ? p.features : [];
    const oemNumbers = Array.isArray(p.oemNumbers) ? p.oemNumbers : [];
    const compatibleModels = Array.isArray(p.compatibleModels) ? p.compatibleModels : [];
    const specs = p.specifications
      ? Object.entries(p.specifications).map(([k, v], idx) => ({
          _key: `spec-${idx}`,
          _type: "object",
          key: k,
          value: String(v),
        }))
      : [];

    const description = p.description
      ? [{ _type: "block", _key: `desc-${p.id}`, children: [{ _type: "span", text: p.description }] }]
      : undefined;

    const doc = {
      _id: `product-${p.id}`,
      _type: "product",
      title: p.name,
      slug: { _type: "slug", current: p.slug },
      brand: { _type: "reference", _ref: brandRef },
      category: { _type: "reference", _ref: categoryRef },
      oemNumbers,
      shortDescription: p.description?.slice(0, 200),
      description,
      features,
      specifications: specs,
      compatibleModels,
      images: [], // Mevcut resimler Sanity'ye yüklenmedi, sonra eklenecek
      tags: [],
      isFeatured: false,
      metaTitle: `${p.name} | İmza Volkswagen`,
      metaDescription: `${p.name} - ${p.brand} ${categoryIcons[categorySlug]?.name || ""}. Orijinal ve yan sanayi parça, Ankara İvedik stoklu.`.slice(0, 160),
      publishedAt: new Date().toISOString(),
    };
    await writeClient.createOrReplace(doc);
    productCount++;
    log(`  ✅ [${p.brand}] ${p.name}`);
  }

  // 5) BLOGS
  log(`\n📝 Blog yazıları (${blogPosts.length} adet)...`);
  let blogCount = 0;
  for (const b of blogPosts) {
    if (!b || !b.slug) continue;
    // Content: portable text'e çevir
    const contentBlocks = b.content
      ? b.content.split(/\n\n+/).map((para, idx) => ({
          _type: "block",
          _key: `block-${idx}`,
          children: [{ _type: "span", text: para.trim() }],
        }))
      : undefined;

    const doc = {
      _id: `blog-${b.id}`,
      _type: "blog",
      title: b.title,
      slug: { _type: "slug", current: b.slug },
      excerpt: b.excerpt,
      content: contentBlocks,
      coverImage: undefined,
      author: b.author,
      category: b.categorySlug,
      tags: (b.tags || []).map((t) => tagMap.get(t)).filter((id): id is string => !!id).map((id) => ({ _type: "reference", _ref: id })),
      readTime: b.readTime,
      metaTitle: `${b.title} | İmza Volkswagen Blog`,
      metaDescription: b.excerpt?.slice(0, 160),
      publishedAt: b.publishedAt ? new Date(b.publishedAt).toISOString() : new Date().toISOString(),
    };
    await writeClient.createOrReplace(doc);
    blogCount++;
    if (blogCount % 10 === 0) log(`  ✅ ${blogCount}/${blogPosts.length} yüklendi`);
  }
  log(`  ✅ Toplam: ${blogCount} blog`);

  // 6) SITE SETTINGS (singleton)
  log(`\n⚙️ Site ayarları...`);
  await writeClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "İmza Volkswagen",
    tagline: "VAG Grubu Yedek Parça Uzmanı",
    description: "Volkswagen, Audi, Seat, Skoda, Cupra, Porsche için orijinal ve yan sanayi yedek parça. Ankara İvedik.",
    contact: {
      phone: "0312 394 05 25",
      whatsapp: "+90 543 979 20 13",
      email: "info@imzavolkswagen.com.tr",
      address: "İvedik Sanayi Bölgesi, Altındağ / Ankara",
      workingHours: "Pazartesi – Cumartesi, 09:00 – 18:00",
    },
    social: {},
    footerText: "İmza Volkswagen, Türkiye'nin önde gelen VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisidir. Orijinal (OEM) ve yüksek kaliteli yan sanayi (OEE) yedek parça. Çıkma parça satışımız yoktur.",
  });
  log(`  ✅ Site settings`);

  log(`\n🎉 Seed tamamlandı!`);
  log(`   ${brands.length} marka`);
  log(`   7 kategori`);
  log(`   ${tagSet.size} etiket`);
  log(`   ${productCount} ürün`);
  log(`   ${blogCount} blog`);
  log(`   1 site settings`);
  log(`\n👉 Studio: https://imzayedekparca.com/studio`);
}

main().catch((err) => {
  console.error("❌ Seed hatası:", err);
  process.exit(1);
});
