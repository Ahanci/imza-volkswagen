import type { MetadataRoute } from "next";
import { brands } from "@/lib/brands-data";
import { getAllProductSlugs } from "@/lib/sanity/queries";
import { getAllBlogPosts } from "@/lib/sanity/blog-queries";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.imzayedekparca.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/urunler`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/turkiye-geneli-yedek-parca`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/markalar`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/hizmetlerimiz`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/periyodik-bakim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/kurumsal`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const blogPosts = await getAllBlogPosts();

  const blogPages: MetadataRoute.Sitemap = (blogPosts || [])
    .filter((p) => Boolean(p && p.slug && p.publishedAt))
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const brandPages: MetadataRoute.Sitemap = (brands || [])
    .filter((b): b is NonNullable<typeof b> & { slug: string } => Boolean(b && b.slug))
    .map((b) => ({
      url: `${SITE_URL}/markalar/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const productSlugs = await getAllProductSlugs();

  const productPages: MetadataRoute.Sitemap = (productSlugs || [])
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({
      url: `${SITE_URL}/urunler/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  // Hizmet detay sayfaları (statik, 7 kategori)
  const serviceSlugs = ["motor", "fren", "suspansiyon", "elektrik", "filtre", "sanziman", "egzoz"];
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/hizmetlerimiz/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...brandPages, ...productPages];
}
