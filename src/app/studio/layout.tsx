/**
 * Studio route metadata — Sanity Studio tamamen client-side ve dynamic.
 * Vercel'de server-side render YAPILMAMALI (Studio client-only).
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = {
  title: "İmza Volkswagen CMS — Sanity Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sanity Studio kendi HTML/body sağlar; children pass-through
  return children;
}
