'use client'

import { useState } from 'react'

/**
 * Marka logosu. /public/images/brands/{slug}.svg varsa onu gösterir;
 * dosya yoksa (veya yüklenemezse) temiz harf kısaltmasına döner.
 *
 * Gerçek logo eklemek için: /public/images/brands/{slug}.svg koy, hepsi bu.
 * (slug: volkswagen, audi, seat, skoda, cupra, porsche)
 */
const INITIALS: Record<string, string> = {
  volkswagen: 'VW',
  audi: 'AU',
  seat: 'SE',
  skoda: 'SK',
  cupra: 'CU',
  porsche: 'P',
}

interface BrandLogoProps {
  slug: string
  name?: string
  /** Sadece logo <img> için boyut. Harf fallback'i parent kutudan stil alır. */
  className?: string
}

export function BrandLogo({ slug, name, className = 'h-8 w-8' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    // Parent kutunun font/renk stilini miras alır (text-white font-bold text-2xl vb.)
    return <>{INITIALS[slug] ?? name?.slice(0, 2).toUpperCase() ?? ''}</>
  }

  return (
    <img
      src={`/images/brands/${slug}.svg`}
      alt={name ? `${name} logosu` : 'Marka logosu'}
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  )
}

export default BrandLogo
