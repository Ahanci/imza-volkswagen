'use client'

import dynamic from 'next/dynamic'

// Leaflet window gerektirir → SSR'da yüklenmez, sadece client'ta.
const StoreMap = dynamic(
  () => import('./StoreMap').then((m) => m.StoreMap),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-vag-light animate-pulse" />,
  },
)

export function StoreMapClient() {
  return <StoreMap />
}

export default StoreMapClient
