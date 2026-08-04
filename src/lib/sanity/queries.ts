/**
 * Sanity ürün veri katmanı.
 *
 * Tüm ürün listesi/detay sayfaları artık Sanity CMS'den okuyor.
 * `src/lib/products-data.ts` sadece seed kaynağı ve `Product` tipi için kullanılır.
 *
 * Yenileme: ISR `revalidate: 30` (otomatik) + on-demand `revalidatePath`
 * (/api/revalidate üzerinden Sanity webhook'u ile, anlık).
 */
import { sanityClient } from "@/sanity/lib/client";
import type { Product } from "@/lib/products-data";

const FETCH_OPTIONS = { next: { revalidate: 30 } };

const productProjection = `{
  "id": _id,
  "name": coalesce(title, ""),
  "slug": slug.current,
  "brand": coalesce(brand->.name, ""),
  "brandSlug": coalesce(brand->.slug.current, ""),
  "category": coalesce(category->.name, ""),
  "categorySlug": coalesce(category->.slug.current, ""),
  "description": coalesce(shortDescription, pt::text(description), ""),
  "features": coalesce(features, []),
  "specifications": coalesce(specifications, []),
  "oemNumbers": coalesce(oemNumbers, []),
  "compatibleModels": coalesce(compatibleModels, []),
  "imageUrl": images[0].asset->url,
  "isFeatured": coalesce(isFeatured, false),
  "publishedAt": publishedAt
}`;

interface RawProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  brandSlug: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  specifications: { key?: string; value?: string }[];
  oemNumbers?: string[];
  compatibleModels: string[];
  imageUrl?: string | null;
  isFeatured?: boolean;
  publishedAt?: string | null;
}

function mapProduct(p: RawProduct): Product {
  const specifications: Record<string, string> = {};
  for (const s of p.specifications ?? []) {
    if (s && s.key) specifications[s.key] = s.value ?? "";
  }
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    brand: p.brand,
    brandSlug: p.brandSlug,
    category: p.category,
    categorySlug: p.categorySlug,
    description: p.description,
    features: p.features ?? [],
    specifications,
    oemNumbers: p.oemNumbers,
    compatibleModels: p.compatibleModels ?? [],
    image: p.imageUrl ?? undefined,
  };
}

/** Tüm yayınlanmış ürünler (yeni eklenenler dahil). */
export async function getAllProducts(): Promise<Product[]> {
  const rows = await sanityClient.fetch<RawProduct[]>(
    `*[_type == "product" && defined(slug.current) && slug.current != ""] | order(publishedAt desc, title asc) ${productProjection}`,
    {},
    FETCH_OPTIONS,
  );
  return rows.map(mapProduct);
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | null> {
  const row = await sanityClient.fetch<RawProduct | null>(
    `*[_type == "product" && slug.current == $slug][0] ${productProjection}`,
    { slug },
    FETCH_OPTIONS,
  );
  return row ? mapProduct(row) : null;
}

export async function getProductsByBrand(
  brandSlug: string,
): Promise<Product[]> {
  const rows = await sanityClient.fetch<RawProduct[]>(
    `*[_type == "product" && brand->.slug.current == $brandSlug && defined(slug.current)] | order(publishedAt desc, title asc) ${productProjection}`,
    { brandSlug },
    FETCH_OPTIONS,
  );
  return rows.map(mapProduct);
}

export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  const rows = await sanityClient.fetch<RawProduct[]>(
    `*[_type == "product" && category->.slug.current == $categorySlug && defined(slug.current)] | order(publishedAt desc, title asc) ${productProjection}`,
    { categorySlug },
    FETCH_OPTIONS,
  );
  return rows.map(mapProduct);
}

export async function getAllProductSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    `*[_type == "product" && defined(slug.current) && slug.current != ""] | order(publishedAt desc).slug.current`,
    {},
    FETCH_OPTIONS,
  );
}
