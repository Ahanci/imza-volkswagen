/**
 * On-demand revalidation — Sanity webhook hedefi.
 *
 * Sanity'de bir ürün/brand/category/blog değiştirilince bu uç çağrılır ve
 * Next.js cache'i anında temizlenir. Böylece panelde eklediğiniz ürün
 * production'da birkaç saniye içinde sitede görünür.
 *
 * Sanity (manage.sanity.io → project → API → Webhooks) ayarı:
 *   URL:        https://imzayedekparca.com/api/revalidate
 *   Projection: {_type, _id}
 *   Trigger:    Create, Update, Delete
 *   HTTP:       POST
 *   Headers:    { "x-revalidate-secret": "<REVALIDATE_SECRET>" }
 *
 * Secret env'i: REVALIDATE_SECRET (Vercel + .env.local).
 */
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  const incomingSecret =
    req.headers.get("x-revalidate-secret") ||
    new URL(req.url).searchParams.get("secret");

  if (!secret) {
    return NextResponse.json(
      { message: "REVALIDATE_SECRET env tanımlı değil" },
      { status: 500 },
    );
  }
  if (incomingSecret !== secret) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  // Kök layout'u revalidate et → tüm sayfalar (ürün/marka/sitemap) tazelensin.
  // Küçük site için en güvenli ve kapsayıcı yöntem.
  revalidatePath("/", "layout");

  let body: { _type?: string; _id?: string } = {};
  try {
    body = await req.json();
  } catch {
    // gövde boş olabilir
  }

  return NextResponse.json({
    revalidated: true,
    type: body?._type ?? "unknown",
    now: Date.now(),
  });
}
