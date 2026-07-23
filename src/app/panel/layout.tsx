/**
 * /panel route metadata — Sanity Studio tamamen client-side ve dynamic.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = {
  title: "İmza Volkswagen Yönetim Paneli",
  description: "Ürün, blog, marka, SSS ve sayfa içerik yönetimi",
  robots: { index: false, follow: false },
};

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
