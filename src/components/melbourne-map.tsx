"use client";

import { useEffect, useState } from "react";

const suburbs = [
  { name: "Wollert", lat: -37.5667, lng: 145.0833 },
  { name: "Epping", lat: -37.65, lng: 145.0333 },
  { name: "South Morang", lat: -37.65, lng: 145.1 },
  { name: "Craigieburn", lat: -37.6, lng: 144.9417 },
  { name: "Mernda", lat: -37.6, lng: 145.1 },
  { name: "Doreen", lat: -37.6, lng: 145.15 },
  { name: "Mill Park", lat: -37.6667, lng: 145.0667 },
  { name: "Lalor", lat: -37.6667, lng: 145.0167 },
  { name: "Thomastown", lat: -37.6833, lng: 145.0167 },
  { name: "Bundoora", lat: -37.7, lng: 145.0667 },
  { name: "Reservoir", lat: -37.7167, lng: 145.0167 },
  { name: "Preston", lat: -37.75, lng: 145.0167 },
];

const CENTER: [number, number] = [-37.65, 145.03];
const ZOOM = 11;

export function MelbourneMap() {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    Marker: typeof import("react-leaflet").Marker;
    Tooltip: typeof import("react-leaflet").Tooltip;
    Circle: typeof import("react-leaflet").Circle;
  } | null>(null);

  const [icon, setIcon] = useState<import("leaflet").Icon | null>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([rl, L]) => {
      setMapComponents({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Tooltip: rl.Tooltip,
        Circle: rl.Circle,
      });

      setIcon(
        new L.Icon({
          iconUrl: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42"><path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z" fill="#2563EB"/><circle cx="16" cy="15" r="6.5" fill="white"/><path d="M16.5 10L14 16h3l-1 5 4.5-7h-3l2-4z" fill="#F59E0B"/></svg>`),
          iconSize: [32, 42],
          iconAnchor: [16, 42],
          tooltipAnchor: [0, -42],
        })
      );
    });
  }, []);

  if (!MapComponents || !icon) {
    return (
      <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl bg-gray-100 border border-border flex items-center justify-center">
        <div className="text-muted text-sm">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Tooltip, Circle } = MapComponents;

  return (
    <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
        attributionControl={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Service area circle */}
        <Circle
          center={[-37.64, 145.03]}
          radius={14000}
          pathOptions={{
            color: "#2563EB",
            fillColor: "#2563EB",
            fillOpacity: 0.06,
            weight: 1.5,
            dashArray: "6 4",
          }}
        />

        {/* Suburb markers */}
        {suburbs.map((suburb) => (
          <Marker
            key={suburb.name}
            position={[suburb.lat, suburb.lng]}
            icon={icon}
          >
            <Tooltip
              direction="top"
              permanent={false}
              className="!bg-dark !text-white !border-0 !rounded-lg !px-3 !py-1.5 !text-sm !font-semibold !shadow-lg"
            >
              {suburb.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
