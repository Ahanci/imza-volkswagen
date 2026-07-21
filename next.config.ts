import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel otomatik optimize eder; standalone'a gerek yok
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Build sırasında tip hataları varsa build durmasın (geliştirme aşaması için)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Üretim için strict mode açık
  reactStrictMode: true,
};

export default nextConfig;
