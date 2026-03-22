export function MelbourneMap() {
  const suburbs = [
    { name: "Preston", x: 192, y: 310 },
    { name: "Reservoir", x: 185, y: 275 },
    { name: "Bundoora", x: 220, y: 240 },
    { name: "Lalor", x: 175, y: 210 },
    { name: "Thomastown", x: 155, y: 195 },
    { name: "Mill Park", x: 230, y: 185 },
    { name: "Epping", x: 160, y: 155 },
    { name: "South Morang", x: 255, y: 150 },
    { name: "Doreen", x: 280, y: 115 },
    { name: "Mernda", x: 265, y: 90 },
    { name: "Wollert", x: 175, y: 100 },
    { name: "Craigieburn", x: 110, y: 85 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Map of Melbourne's northern suburbs serviced by Grounded Electrical"
        role="img"
      >
        {/* Melbourne CBD reference area */}
        <rect x="160" y="340" width="80" height="40" rx="6" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="1" />
        <text x="200" y="365" textAnchor="middle" fill="#2563EB" fontSize="11" fontWeight="600" fontFamily="system-ui">Melbourne CBD</text>

        {/* Major roads / highways - simplified */}
        <path d="M200 380 L200 50" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
        <path d="M50 250 L350 250" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
        <path d="M100 350 L300 60" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <path d="M300 350 L100 60" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

        {/* Service area boundary */}
        <path
          d="M70 100 Q90 55 175 60 Q260 55 310 80 Q340 100 320 140 Q300 170 310 210 Q315 250 280 280 Q250 310 210 330 Q170 340 140 310 Q110 280 90 240 Q70 200 60 160 Q55 130 70 100 Z"
          fill="#2563EB"
          fillOpacity="0.06"
          stroke="#2563EB"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Connection lines from markers to service area */}
        {suburbs.map((suburb) => (
          <circle
            key={`ring-${suburb.name}`}
            cx={suburb.x}
            cy={suburb.y}
            r="18"
            fill="#2563EB"
            fillOpacity="0.04"
          />
        ))}

        {/* Suburb markers */}
        {suburbs.map((suburb) => (
          <g key={suburb.name}>
            {/* Outer pulse ring */}
            <circle cx={suburb.x} cy={suburb.y} r="8" fill="#2563EB" fillOpacity="0.1">
              <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Pin dot */}
            <circle cx={suburb.x} cy={suburb.y} r="5" fill="#2563EB" stroke="white" strokeWidth="2" />
            {/* Label */}
            <text
              x={suburb.x}
              y={suburb.y - 12}
              textAnchor="middle"
              fill="#111827"
              fontSize="10"
              fontWeight="600"
              fontFamily="system-ui"
            >
              {suburb.name}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(10, 370)">
          <circle cx="6" cy="6" r="4" fill="#2563EB" stroke="white" strokeWidth="1.5" />
          <text x="16" y="10" fill="#6B7280" fontSize="9" fontFamily="system-ui">Service area</text>
        </g>
      </svg>
    </div>
  );
}
