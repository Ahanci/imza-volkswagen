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

export const metadata: Metadata = {
  title: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı - Volkswagen Audi Seat Skoda",
  description: "İmza Volkswagen - Volkswagen, Audi, Seat, Skoda yedek parça uzmanı. 20+ yıl tecrübe, orijinal kalite, güvenilir hizmet. Hemen arayın veya WhatsApp ile yazın!",
  keywords: [
    "İmza Volkswagen", "VAG yedek parça", "Volkswagen yedek parça", "Audi yedek parça", 
    "Seat yedek parça", "Skoda yedek parça", "orijinal yedek parça",
    "oto yedek parça İstanbul", "VW parça", "Audi parça", "fren balatası",
    "amortisör", "motor parçası", "süspansiyon parçaları"
  ],
  authors: [{ name: "İmza Volkswagen" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı",
    description: "Volkswagen, Audi, Seat, Skoda orijinal yedek parçaları. 20+ yıl tecrübe, güvenilir hizmet.",
    siteName: "İmza Volkswagen",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "İmza Volkswagen | VAG Grubu Yedek Parça Uzmanı",
    description: "Volkswagen, Audi, Seat, Skoda orijinal yedek parçaları. Güvenilir alışveriş, hızlı teslimat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
