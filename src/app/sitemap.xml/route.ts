/**
 * /sitemap.xml — Dinamik sitemap route handler.
 * Sanity'den güncel ürün, blog, marka slug'larını çeker.
 * Cache-Control: s-maxage=60 (Vercel CDN 60s), 5 dakika stale-while-revalidate.
 */
import { sanityClient } from "@/sanity/lib/client";
import { blogPosts as staticBlogPosts } from "@/lib/blog-data";
import { brands as staticBrands } from "@/lib/brands-data";
import { products as staticProducts } from "@/lib/products-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imzayedekparca.com";

export const revalidate = 60;
export const dynamic = "force-dynamic";

async function getSanitySlugs() {
  try {
    const [sanityProducts, sanityBlogs, sanityBrands] = await Promise.all([
      sanityClient.fetch<
        { slug: string; publishedAt: string; _updatedAt?: string }[]
      >(
        `*[_type == "product" && defined(slug.current)]{slug, publishedAt, _updatedAt}`,
        {},
        { next: { revalidate: 60 } }
      ),
      sanityClient.fetch<
        { slug: string; publishedAt: string; _updatedAt?: string }[]
      >(
        `*[_type == "blog" && defined(slug.current)]{slug, publishedAt, _updatedAt}`,
        {},
        { next: { revalidate: 60 } }
      ),
      sanityClient.fetch<{ slug: string }[]>(
        `*[_type == "brand" && defined(slug.current)]{slug}`,
        {},
        { next: { revalidate: 300 } }
      ),
    ]);
    return { sanityProducts, sanityBlogs, sanityBrands };
  } catch (e) {
    return { sanityProducts: [], sanityBlogs: [], sanityBrands: [] };
  }
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date();
  const { sanityProducts, sanityBlogs, sanityBrands } = await getSanitySlugs();

  const staticPages = [
    { loc: "/", priority: 1.0, freq: "weekly" },
    { loc: "/urunler", priority: 0.9, freq: "daily" },
    { loc: "/markalar", priority: 0.8, freq: "weekly" },
    { loc: "/blog", priority: 0.9, freq: "daily" },
    { loc: "/hizmetlerimiz", priority: 0.8, freq: "monthly" },
    { loc: "/periyodik-bakim", priority: 0.8, freq: "monthly" },
    { loc: "/kurumsal", priority: 0.6, freq: "monthly" },
    { loc: "/iletisim", priority: 0.6, freq: "monthly" },
  ];

  const productSlugs =
    sanityProducts.length > 0
      ? sanityProducts
      : staticProducts
          .filter(
            (p): p is typeof p & { slug: string; id: string } =>
              Boolean(p && p.slug)
          )
          .map((p) => ({
            slug: p.slug,
            publishedAt: new Date().toISOString(),
            _updatedAt: undefined,
          }));

  const blogSlugs =
    sanityBlogs.length > 0
      ? sanityBlogs
      : staticBlogPosts
          .filter(
            (p): p is typeof p & { slug: string; publishedAt: string } =>
              Boolean(p && p.slug && p.publishedAt)
          )
          .map((p) => ({
            slug: p.slug,
            publishedAt: p.publishedAt,
            _updatedAt: undefined,
          }));

  const brandSlugs =
    sanityBrands.length > 0
      ? sanityBrands
      : staticBrands
          .filter(
            (b): b is typeof b & { slug: string } => Boolean(b && b.slug)
          )
          .map((b) => ({ slug: b.slug }));

  const urls: { loc: string; lastmod: string; freq: string; priority: number }[] =
    [
      ...staticPages.map((p) => ({
        loc: `${SITE_URL}${p.loc}`,
        lastmod: now.toISOString(),
        freq: p.freq,
        priority: p.priority,
      })),
      ...productSlugs.map((p) => ({
        loc: `${SITE_URL}/urunler/${escapeXml(p.slug)}`,
        lastmod: (p._updatedAt || p.publishedAt || now.toISOString()),
        freq: "weekly",
        priority: 0.7,
      })),
      ...blogSlugs.map((b) => ({
        loc: `${SITE_URL}/blog/${escapeXml(b.slug)}`,
        lastmod: (b._updatedAt || b.publishedAt || now.toISOString()),
        freq: "monthly",
        priority: 0.7,
      })),
      ...brandSlugs.map((b) => ({
        loc: `${SITE_URL}/markalar/${escapeXml(b.slug)}`,
        lastmod: now.toISOString(),
        freq: "monthly",
        priority: 0.7,
      })),
    ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
