# 🚗 İmza Volkswagen - Kurumsal Web Sitesi

> **VAG Grubu** (Volkswagen · Audi · Seat · Skoda · Cupra) yedek parça tedarikçisi kurumsal tanıtım sitesi.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000?logo=shadcnui)

---

## 🎯 Hakkında

İmza Volkswagen, Türkiye genelinde **VAG grubu** araçlar için orijinal ve eşdeğer yedek parça tedariği yapan bir firmadır. Bu web sitesi:

- 🏢 Kurumsal kimlik ve firma tanıtımı
- 🚙 5 VAG markası (VW, Audi, Seat, Skoda, Cupra) sergileme
- 📦 Yedek parça kataloğu (bilgilendirme amaçlı, online satış yok)
- 📝 Blog: teknik rehberler, bakım ipuçları, OEM kod rehberleri
- 📞 WhatsApp & telefon ile hızlı iletişim

> ⚠️ **E-ticaret değildir** — fiyat veya online satış yoktur; gerçek stok/fiyat için iletişime geçilir.

---

## 🛠️ Teknoloji Stack'i

| Teknoloji        | Kullanım                                |
| ---------------- | --------------------------------------- |
| **Next.js 16**   | App Router, RSC, Image optimizasyon     |
| **React 19**     | Server + Client components              |
| **TypeScript 5** | Tip güvenli geliştirme                  |
| **Tailwind CSS 4** | Utility-first responsive tasarım     |
| **shadcn/ui**    | Erişilebilir UI bileşen kütüphanesi     |
| **framer-motion**| Sayfa geçişleri ve mikro animasyonlar   |
| **lucide-react** | İkon seti                               |
| **Acernity UI**  | Hero ve öne çıkan bölümlerde premium efektler |

---

## 📁 Proje Yapısı

```
imza-volkswagen/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (SEO metadata, fontlar)
│   │   ├── page.tsx            # Ana sayfa
│   │   ├── globals.css         # Tailwind + VAG marka renkleri
│   │   ├── urunler/            # Ürün listesi + detay
│   │   ├── markalar/           # 5 VAG markası
│   │   └── blog/               # Blog listesi + detay
│   ├── components/
│   │   ├── layout/             # Header (sticky) + Footer
│   │   ├── home/               # Hero, Brand, Category, Trust, Blog, FloatingCTA
│   │   ├── products/           # ProductCard
│   │   ├── ui/                 # shadcn/ui bileşenleri
│   │   └── acernity/           # BackgroundGradient, TypewriterEffect, ...
│   └── lib/
│       ├── products-data.ts    # 15+ ürün
│       ├── brands-data.ts      # 5 marka
│       └── blog-data.ts        # 6 blog yazısı
├── public/
│   ├── images/                 # hero-car.png (AI üretimi Porsche görseli)
│   ├── logo.svg
│   └── robots.txt
├── .env.example                # Ortam değişkeni şablonu
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Geliştirme

```bash
# Bağımlılıkları kur
bun install

# Geliştirme sunucusunu başlat (http://localhost:3000)
bun run dev

# Üretim build'i
bun run build

# Üretim sunucusunu başlat
bun run start

# Lint
bun run lint
```

> **Paket yöneticisi:** [Bun](https://bun.sh) (npm/pnpm/yarn da uyumlu).
> **Node sürümü:** ≥ 20.x

---

## 🌐 Vercel Deploy

1. Bu repoyu GitHub'a push edin.
2. [vercel.com](https://vercel.com) → **New Project** → repo'yu seçin.
3. Framework: **Next.js** (otomatik algılanır).
4. **Environment Variables** kısmına `.env.example`'daki değerleri ekleyin.
5. **Deploy** — 1-2 dakikada `imza-volkswagen.vercel.app` üzerinde yayında.

Domain bağlamak için: Vercel Project → Settings → Domains → `imzavolkswagen.com.tr` ekleyin, DNS kayıtlarını güncelleyin.

---

## 📝 İçerik Güncelleme

- **Ürünler:** `src/lib/products-data.ts`
- **Markalar:** `src/lib/brands-data.ts`
- **Blog yazıları:** `src/lib/blog-data.ts`
- **İletişim bilgileri:** `src/components/layout/Footer.tsx` ve `.env`
- **Renkler & marka kimliği:** `src/app/globals.css` (VAG renk paleti)

---

## 📞 İletişim

|             |                                    |
| ----------- | ---------------------------------- |
| **Telefon** | +90 532 123 45 67                  |
| **WhatsApp**| +90 532 123 45 67                  |
| **E-posta** | info@imzavolkswagen.com.tr         |
| **Saatler** | Pazartesi – Cumartesi · 09:00–18:00 |

---

## 📄 Lisans

© İmza Volkswagen. Tüm hakları saklıdır.
