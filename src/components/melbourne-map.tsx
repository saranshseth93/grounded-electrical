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
const ZOOM = 10;

export function MelbourneMap() {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    Marker: typeof import("react-leaflet").Marker;
    Tooltip: typeof import("react-leaflet").Tooltip;
    Circle: typeof import("react-leaflet").Circle;
  } | null>(null);

  const [icons, setIcons] = useState<{
    pin: import("leaflet").DivIcon;
  } | null>(null);

  useEffect(() => {
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

      setIcons({
        pin: new L.DivIcon({
          className: "",
          iconSize: [12, 12],
          iconAnchor: [6, 6],
          html: `<div style="width:12px;height:12px;background:#2563EB;border:2.5px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>`,
        }),
      });
    });
  }, []);

  if (!MapComponents || !icons) {
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
        dragging={true}
        style={{ width: "100%", height: "100%" }}
        attributionControl={true}
        zoomControl={true}
      >
        {/* Clean minimal tile layer */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Service area circle */}
        <Circle
          center={[-37.64, 145.03]}
          radius={14000}
          pathOptions={{
            color: "#2563EB",
            fillColor: "#2563EB",
            fillOpacity: 0.05,
            weight: 1.5,
            dashArray: "6 4",
          }}
        />

        {/* Suburb markers with permanent labels */}
        {suburbs.map((suburb) => (
          <Marker
            key={suburb.name}
            position={[suburb.lat, suburb.lng]}
            icon={icons.pin}
          >
            <Tooltip
              direction="right"
              offset={[10, 0]}
              permanent={true}
              className="leaflet-suburb-label"
            >
              {suburb.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Custom tooltip styles injected */}
      <style>{`
        .leaflet-suburb-label {
          background: none !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          font-size: 12px !important;
          font-weight: 600 !important;
          color: #111827 !important;
          text-shadow:
            -1px -1px 0 #F9FAFB,
            1px -1px 0 #F9FAFB,
            -1px 1px 0 #F9FAFB,
            1px 1px 0 #F9FAFB,
            0 0 4px rgba(249,250,251,0.8) !important;
          white-space: nowrap !important;
        }
        .leaflet-suburb-label::before {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
