export function HeroIllustration() {
  return (
    <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
      <div className="relative w-[380px] h-[420px]">
        {/* Background glow */}
        <div className="absolute inset-0 scale-110 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 rounded-full blur-[80px]" />

        <svg viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
          {/* House outline */}
          <g opacity="0.9">
            {/* House body */}
            <rect x="90" y="180" width="200" height="160" rx="8" fill="#1a2744" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
            {/* Roof */}
            <path d="M70 185 L190 90 L310 185" stroke="#2563EB" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" fill="none" />
            <path d="M85 185 L190 100 L295 185" fill="#1a2744" />

            {/* Window left */}
            <rect x="115" y="210" width="55" height="50" rx="4" fill="#0f1b2e" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25" />
            <line x1="142.5" y1="210" x2="142.5" y2="260" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="115" y1="235" x2="170" y2="235" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Window glow */}
            <rect x="117" y="212" width="24" height="22" rx="2" fill="#F59E0B" fillOpacity="0.15" />

            {/* Window right */}
            <rect x="210" y="210" width="55" height="50" rx="4" fill="#0f1b2e" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25" />
            <line x1="237.5" y1="210" x2="237.5" y2="260" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="210" y1="235" x2="265" y2="235" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Window glow */}
            <rect x="212" y="212" width="24" height="22" rx="2" fill="#F59E0B" fillOpacity="0.12" />

            {/* Door */}
            <rect x="162" y="280" width="56" height="60" rx="4" fill="#0f1b2e" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="208" cy="313" r="3" fill="#F59E0B" fillOpacity="0.5" />
          </g>

          {/* Lightning bolt - main feature */}
          <g filter="url(#bolt-glow)">
            <path
              d="M200 50 L175 140 L205 140 L185 210 L240 115 L210 115 L230 50 Z"
              fill="url(#bolt-gradient)"
              stroke="#F59E0B"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          </g>

          {/* Power lines */}
          <g opacity="0.3">
            <line x1="0" y1="160" x2="80" y2="155" stroke="#2563EB" strokeWidth="1" />
            <line x1="300" y1="155" x2="380" y2="150" stroke="#2563EB" strokeWidth="1" />
            {/* Pole left */}
            <line x1="75" y1="155" x2="75" y2="340" stroke="#2563EB" strokeWidth="1.5" />
            {/* Pole right */}
            <line x1="305" y1="155" x2="305" y2="340" stroke="#2563EB" strokeWidth="1.5" />
            {/* Wires between poles */}
            <path d="M75 155 Q190 175 305 155" stroke="#2563EB" strokeWidth="0.8" fill="none" />
            <path d="M75 162 Q190 180 305 162" stroke="#2563EB" strokeWidth="0.6" fill="none" />
          </g>

          {/* Electrical sparks */}
          <g opacity="0.7">
            <circle cx="160" cy="120" r="2" fill="#F59E0B">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="230" cy="95" r="1.5" fill="#60a5fa">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="135" r="1.5" fill="#F59E0B">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Shield / safety badge */}
          <g transform="translate(295, 200)">
            <path d="M0 10 L25 0 L50 10 L50 35 Q50 55 25 65 Q0 55 0 35 Z" fill="#1a2744" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M17 32 L23 38 L35 24" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Ground/earth line */}
          <g opacity="0.2">
            <line x1="50" y1="345" x2="330" y2="345" stroke="#6B7280" strokeWidth="1" strokeDasharray="4 4" />
            <text x="190" y="365" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="system-ui">GROUNDED</text>
          </g>

          {/* Defs */}
          <defs>
            <linearGradient id="bolt-gradient" x1="185" y1="50" x2="215" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="bolt-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feFlood floodColor="#F59E0B" floodOpacity="0.3" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Floating stat cards */}
        <div className="absolute -bottom-2 -left-4 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/[0.12] px-4 py-3 shadow-xl">
          <div className="text-xs text-gray-500">Jobs Completed</div>
          <div className="text-xl font-extrabold text-white">500+</div>
        </div>

        <div className="absolute top-8 -right-2 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/[0.12] px-4 py-3 shadow-xl">
          <div className="text-xs text-gray-500">Call-Out Fee</div>
          <div className="text-xl font-extrabold text-accent">$0</div>
        </div>
      </div>
    </div>
  );
}
