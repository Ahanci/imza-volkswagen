/**
 * Studio route metadata — Next.js'in Studio'yu statik build etmesini engeller.
 * Sanity Studio tamamen client-side ve dynamic.
 */
export const dynamic = "force-static";
export const metadata = {
  title: "İmza Volkswagen CMS — Sanity Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sanity Studio kendi HTML/body sağlar; sadece children pass-through
  return children;
}
