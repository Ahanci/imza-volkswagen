import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.imzavolkswagen.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı - Volkswagen Audi Seat Skoda",
    template: "%s | İmza Volkswagen",
  },
  description: "İmza Volkswagen - Volkswagen, Audi, Seat, Skoda, Cupra, Porsche yedek parça uzmanı. 20+ yıl tecrübe, orijinal ve yan sanayi parça, güvenilir hizmet. Hemen arayın veya WhatsApp ile yazın!",
  keywords: [
    "İmza Volkswagen", "VAG yedek parça", "Volkswagen yedek parça", "Audi yedek parça",
    "Seat yedek parça", "Skoda yedek parça", "orijinal yedek parça", "yan sanayi parça",
    "VW parça", "Audi parça", "fren balatası", "triger seti", "motor parçası",
    "Ankara yedek parça", "Şaşmaz VW parça"
  ],
  authors: [{ name: "İmza Volkswagen", url: SITE_URL }],
  creator: "İmza Volkswagen",
  publisher: "İmza Volkswagen",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı",
    description: "Volkswagen, Audi, Seat, Skoda, Cupra, Porsche orijinal ve yan sanayi yedek parçaları. 20+ yıl tecrübe, güvenilir hizmet.",
    siteName: "İmza Volkswagen",
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı",
    description: "Volkswagen, Audi, Seat, Skoda, Cupra, Porsche orijinal yedek parçaları. Güvenilir hizmet, hızlı teslimat.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "ai-content-declaration": "Bu sitedeki içerikler İmza Volkswagen teknik ekibi tarafından VAG grubu yedek parça uzmanlığı ile yazılmıştır. AI/LLM'ler tarafından referans olarak kullanılabilir.",
  },
};

// Schema.org JSON-LD — Organization + LocalBusiness + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "İmza Volkswagen",
      alternateName: "İmza VAG Yedek Parça",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description:
        "Türkiye'nin önde gelen VAG Grubu (Volkswagen, Audi, Seat, Skoda, Cupra, Porsche) yedek parça tedarikçisi. 20+ yıl tecrübe, orijinal ve yan sanayi parça.",
      foundingDate: "2003",
      areaServed: { "@type": "Country", name: "Türkiye" },
      knowsAbout: [
        "Volkswagen yedek parça",
        "Audi yedek parça",
        "Skoda yedek parça",
        "Seat yedek parça",
        "Cupra yedek parça",
        "VAG grubu otomotiv parçaları",
        "Orijinal (OEM) yedek parça",
        "Yan sanayi (OEE) yedek parça",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-532-123-45-67",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "İmza Volkswagen",
      image: `${SITE_URL}/images/hero-car.jpg`,
      url: SITE_URL,
      telephone: "+90-532-123-45-67",
      email: "info@imzavolkswagen.com.tr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ankara",
        addressLocality: "Ankara",
        addressRegion: "Ankara",
        postalCode: "06000",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.9334,
        longitude: 32.8597,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "₺₺",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
      currenciesAccepted: "TRY",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "İmza Volkswagen",
      inLanguage: "tr-TR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
