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
  title: "VAG Parça | Volkswagen - Audi - Seat - Skoda Orijinal Yedek Parça",
  description: "VAG Grubu orijinal yedek parçaları. Volkswagen, Audi, Seat, Skoda araçlarınız için güvenilir, kaliteli ve garantili yedek parça. Hızlı kargo, uygun fiyat!",
  keywords: [
    "VAG yedek parça", "Volkswagen yedek parça", "Audi yedek parça", 
    "Seat yedek parça", "Skoda yedek parça", "orijinal yedek parça",
    "oto yedek parça", "VW parça", "Audi parça", "fren balatası",
    "amortisör", "motor parçası", "süspansiyon"
  ],
  authors: [{ name: "VAG Parça" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "VAG Parça | VAG Grubu Orijinal Yedek Parça",
    description: "Volkswagen, Audi, Seat, Skoda orijinal yedek parçaları. Güvenilir alışveriş, hızlı teslimat.",
    siteName: "VAG Parça",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAG Parça | VAG Grubu Orijinal Yedek Parça",
    description: "Volkswagen, Audi, Seat, Skoda orijinal yedek parçaları.",
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
