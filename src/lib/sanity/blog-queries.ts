/**
 * Sanity blog veri katmanı.
 * Listeleme ve detay sayfaları artık Sanity CMS'den okuyor.
 * İçerik (portable text blokları) markdown'a geri çevrilir; böylece
 * mevcut formatContent + extractFaqs kodu olduğu gibi çalışır.
 */
import { sanityClient } from "@/sanity/lib/client";
import type { BlogPost } from "@/lib/blog-data";

const FETCH_OPTIONS = { cache: "no-store" as const };

// Sanity'deki kategori slug → görünür ad eşlemesi
const CATEGORY_NAMES: Record<string, string> = {
  "vag-genel": "VAG Genel",
  motor: "Motor",
  fren: "Fren",
  suspansiyon: "Süspansiyon",
  elektrik: "Elektrik",
  sanziman: "Şanzıman",
  "periyodik-bakim": "Periyodik Bakım",
  "alim-rehberi": "Alım Rehberi",
  ankara: "Ankara",
  bakim: "Bakım Rehberi",
  "parca-rehberi": "Parça Rehberi",
  bilgi: "Bilgi Bankası",
};

interface RawBlock {
  _type: string;
  children?: { _type: string; text?: string }[];
}
interface RawBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: RawBlock[];
  categorySlug: string;
  author: string | null;
  publishedAt: string | null;
  readTime: number | null;
  tags: string[];
  coverImageUrl?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
}

/** Portable text bloklarını markdown'a çevirir (her blok = paragraf, \n\n ile birleşir). */
function blocksToMarkdown(blocks: RawBlock[] | undefined): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .filter((b) => b && b._type === "block")
    .map((b) => (b.children || []).map((ch) => ch.text || "").join(""))
    .filter((t) => t.trim().length > 0)
    .join("\n\n");
}

function cap(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "Genel";
}

function mapBlog(b: RawBlog): BlogPost {
  return {
    id: b.id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    content: blocksToMarkdown(b.content),
    category: CATEGORY_NAMES[b.categorySlug] || cap(b.categorySlug),
    categorySlug: b.categorySlug || "genel",
    author: b.author || "İmza Volkswagen",
    authorRole: "Teknik Ekip",
    publishedAt: b.publishedAt || new Date().toISOString(),
    readTime: b.readTime || 5,
    tags: b.tags || [],
    image: b.coverImageUrl ?? undefined,
  };
}

const blogProjection = `{
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  "categorySlug": coalesce(category, ""),
  author,
  publishedAt,
  readTime,
  "tags": coalesce(tags[]->.name, []),
  "coverImageUrl": coverImage.asset->url,
  metaTitle,
  metaDescription
}`;

/** Tüm blog yazıları (yeni eklenenler dahil, en yeni first). */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const rows = await sanityClient.fetch<RawBlog[]>(
    `*[_type == "blog" && defined(slug.current) && slug.current != ""] | order(publishedAt desc) ${blogProjection}`,
    {},
    FETCH_OPTIONS,
  );
  return rows.map(mapBlog);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const row = await sanityClient.fetch<RawBlog | null>(
    `*[_type == "blog" && slug.current == $slug][0] ${blogProjection}`,
    { slug },
    FETCH_OPTIONS,
  );
  return row ? mapBlog(row) : null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    `*[_type == "blog" && defined(slug.current) && slug.current != ""] | order(publishedAt desc).slug.current`,
    {},
    FETCH_OPTIONS,
  );
}

/** Blog kategorilerini (ad, slug, sayı) Sanity verisinden türet. */
export function deriveBlogCategories(
  posts: BlogPost[],
): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    const key = p.categorySlug || "genel";
    const existing = map.get(key);
    if (existing) existing.count++;
    else map.set(key, { name: p.category, slug: key, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
