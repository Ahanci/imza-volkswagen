import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { blogPosts as staticBlogPosts } from "@/lib/blog-data";
import { brands as staticBrands } from "@/lib/brands-data";
import { products as staticProducts } from "@/lib/products-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imzayedekparca.com";

// Sanity'den dinamik içerik çek (yeni eklenen ürün/blog otomatik sitemap'te)
async function getSanitySlugs() {
  try {
    const [sanityProducts, sanityBlogs, sanityBrands] = await Promise.all([
      sanityClient.fetch<{ slug: string; publishedAt: string; _updatedAt?: string }[]>(
        `*[_type == "product" && defined(slug.current)]{slug, publishedAt, _updatedAt}`,
        {},
        { next: { revalidate: 60 } } // 60 saniyede bir yenile
      ),
      sanityClient.fetch<{ slug: string; publishedAt: string; _updatedAt?: string }[]>(
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
    // Sanity bağlantı hatasında fallback: statik data
    return { sanityProducts: [], sanityBlogs: [], sanityBrands: [] };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const { sanityProducts, sanityBlogs, sanityBrands } = await getSanitySlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/urunler`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/markalar`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/hizmetlerimiz`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/periyodik-bakim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/kurumsal`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  // Sanity'den dinamik ürünler (varsa), yoksa statik fallback
  const productSlugs = sanityProducts.length > 0
    ? sanityProducts
    : staticProducts
        .filter((p): p is typeof p & { slug: string; id: string } => Boolean(p && p.slug))
        .map((p) => ({ slug: p.slug, publishedAt: new Date().toISOString() }));

  const productPages: MetadataRoute.Sitemap = productSlugs.map((p) => ({
    url: `${SITE_URL}/urunler/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Sanity blog (varsa), yoksa statik
  const blogSlugs = sanityBlogs.length > 0
    ? sanityBlogs
    : staticBlogPosts
        .filter((p): p is typeof p & { slug: string; publishedAt: string } => Boolean(p && p.slug && p.publishedAt))
        .map((p) => ({ slug: p.slug, publishedAt: p.publishedAt, _updatedAt: undefined }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p._updatedAt ? new Date(p._updatedAt) : new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Sanity markalar (varsa), yoksa statik
  const brandSlugs = sanityBrands.length > 0
    ? sanityBrands
    : staticBrands
        .filter((b): b is typeof b & { slug: string } => Boolean(b && b.slug))
        .map((b) => ({ slug: b.slug }));

  const brandPages: MetadataRoute.Sitemap = brandSlugs.map((b) => ({
    url: `${SITE_URL}/markalar/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages, ...brandPages];
}
