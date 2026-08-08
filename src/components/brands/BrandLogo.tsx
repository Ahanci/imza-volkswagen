import React from 'react'

/**
 * Marka logosu (SVG). /public/images/brands/{slug}.svg dosyalarını kullanır.
 * Tüm logolar beyazdır → koyu marka arka planlarında görünür.
 * Bilinmeyen slug'da harf kısaltmasına (initials) döner.
 */
const LOGOS: Record<string, string> = {
  volkswagen: '/images/brands/volkswagen.svg',
  audi: '/images/brands/audi.svg',
  seat: '/images/brands/seat.svg',
  skoda: '/images/brands/skoda.svg',
  cupra: '/images/brands/cupra.svg',
  porsche: '/images/brands/porsche.svg',
}

interface BrandLogoProps {
  slug: string
  name?: string
  /** Harf fallback'i (logo dosyası yoksa) */
  initials?: string
  className?: string
}

export function BrandLogo({
  slug,
  name,
  initials,
  className = 'h-8 w-8',
}: BrandLogoProps) {
  const src = LOGOS[slug]
  if (!src) {
    return (
      <span className={`font-bold leading-none text-white ${className}`}>
        {initials ?? name?.slice(0, 2).toUpperCase() ?? ''}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt={name ? `${name} logosu` : 'Marka logosu'}
      className={`object-contain ${className}`}
      loading="lazy"
    />
  )
}

export default BrandLogo
