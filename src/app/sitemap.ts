import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { brands } from "@/lib/brands-data";
import { products } from "@/lib/products-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imzayedekparca.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/urunler`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/markalar`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/hizmetlerimiz`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/periyodik-bakim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/kurumsal`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const blogPages: MetadataRoute.Sitemap = (blogPosts || [])
    .filter(
      (p): p is NonNullable<typeof p> & { slug: string; publishedAt: string } =>
        Boolean(p && p.slug && p.publishedAt)
    )
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

  const productPages: MetadataRoute.Sitemap = (products || [])
    .filter((p): p is NonNullable<typeof p> & { slug: string } => Boolean(p && p.slug))
    .map((p) => ({
      url: `${SITE_URL}/urunler/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...blogPages, ...brandPages, ...productPages];
}
