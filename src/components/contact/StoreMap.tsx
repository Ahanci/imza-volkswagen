'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// İmza Volkswagen — İvedik Sanayi, Ankara
const POSITION: [number, number] = [39.99285, 32.76440]

// Marka renginde pin (harici görsel gerektirmez, CSP uyumlu)
const storeIcon = L.divIcon({
  className: '',
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="#2563EB" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#ffffff"/></svg>`,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -34],
})

export function StoreMap() {
  return (
    <div className="h-full w-full isolate">
      <MapContainer
        center={POSITION}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> katkıda bulunanlar'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION} icon={storeIcon}>
          <Popup>
            <strong>İmza Volkswagen</strong>
            <br />
            İvedik Sanayi Bölgesi
            <br />
            Altındağ / Ankara
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default StoreMap
