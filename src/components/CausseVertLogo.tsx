import React from 'react';

interface CausseVertLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const CausseVertLogo: React.FC<CausseVertLogoProps> = ({
  className = '',
  size = 64,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm select-none"
        aria-label="Logo Causse Vert"
      >
        {/* Outer Circular Ring */}
        <circle cx="200" cy="200" r="192" fill="#1C3F24" />
        <circle cx="200" cy="200" r="184" fill="#F8F6EB" stroke="#1C3F24" strokeWidth="2" />
        <circle cx="200" cy="200" r="178" fill="#F8F6EB" stroke="#2D5A37" strokeWidth="3" />

        {/* Clip Path for the landscape inside upper half */}
        <defs>
          <clipPath id="landscape-clip">
            <circle cx="200" cy="200" r="172" />
          </clipPath>
        </defs>

        <g clipPath="url(#landscape-clip)">
          {/* Sky tint */}
          <rect x="20" y="20" width="360" height="200" fill="#F2EFE1" />

          {/* Distant Causse Plateaus / Hills */}
          <path
            d="M 30 155 Q 85 110 135 125 T 200 145 T 290 120 T 370 150 L 370 230 L 30 230 Z"
            fill="#D5CDAB"
            stroke="#9C9271"
            strokeWidth="1.5"
          />
          {/* Plateau rock steps (falaises calcaires du Quercy) */}
          <path
            d="M 60 128 L 110 126 L 130 135 L 50 138 Z"
            fill="#C4BA92"
          />
          <path
            d="M 270 125 L 330 122 L 345 132 L 255 135 Z"
            fill="#C4BA92"
          />
          
          {/* Far fields / bocage */}
          <path
            d="M 30 160 Q 120 150 200 165 T 370 158 L 370 230 L 30 230 Z"
            fill="#B9C7A1"
          />

          {/* Dry Stone Wall (Muret en pierres sèches du Lot) */}
          <g>
            <rect x="150" y="165" width="220" height="42" fill="#C9C2A9" rx="2" stroke="#6F654D" strokeWidth="1" />
            {/* Stone textures */}
            <path d="M 160 165 L 160 178 M 190 165 L 190 178 M 230 165 L 230 178 M 270 165 L 270 178 M 310 165 L 310 178 M 350 165 L 350 178" stroke="#7A7056" strokeWidth="1.2" />
            <path d="M 150 178 L 370 178" stroke="#7A7056" strokeWidth="1.2" />
            <path d="M 175 178 L 175 192 M 210 178 L 210 192 M 250 178 L 250 192 M 290 178 L 290 192 M 330 178 L 330 192" stroke="#7A7056" strokeWidth="1.2" />
            <path d="M 150 192 L 370 192" stroke="#7A7056" strokeWidth="1.2" />
            <path d="M 165 192 L 165 207 M 195 192 L 195 207 M 235 192 L 235 207 M 275 192 L 275 207 M 320 192 L 320 207" stroke="#7A7056" strokeWidth="1.2" />
          </g>

          {/* Lawn Ground */}
          <path
            d="M 30 206 C 120 203 280 203 370 216 L 370 230 L 30 230 Z"
            fill="#568A40"
          />

          {/* Left Hedge (Haie taillée au cordeau) */}
          <g>
            {/* Hedge base block */}
            <path
              d="M 40 140 L 175 150 L 175 214 L 38 214 Z"
              fill="#184323"
            />
            {/* Top trimmed surface with highlights */}
            <path
              d="M 40 140 L 175 150 L 180 153 L 42 144 Z"
              fill="#2F6838"
            />
            {/* Leaf texture overlays on hedge */}
            <circle cx="65" cy="155" r="7" fill="#26552F" />
            <circle cx="85" cy="150" r="9" fill="#204A28" />
            <circle cx="115" cy="152" r="8" fill="#2D6036" />
            <circle cx="145" cy="155" r="9" fill="#204A28" />
            <circle cx="55" cy="175" r="10" fill="#13381B" />
            <circle cx="85" cy="170" r="11" fill="#1E4726" />
            <circle cx="120" cy="170" r="12" fill="#24512C" />
            <circle cx="155" cy="170" r="10" fill="#173E1F" />
            <circle cx="70" cy="195" r="10" fill="#103217" />
            <circle cx="105" cy="195" r="11" fill="#1B4222" />
            <circle cx="140" cy="195" r="10" fill="#12351A" />
          </g>

          {/* Lawnmower on the right */}
          <g transform="translate(245, 150)">
            {/* Handlebars */}
            <path d="M 98 15 L 68 50 L 52 50" stroke="#163A24" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Catcher bag / chassis */}
            <path d="M 52 40 L 85 43 L 83 62 L 48 62 Z" fill="#1B4725" stroke="#123219" strokeWidth="2" />
            {/* Engine block */}
            <rect x="25" y="44" width="30" height="15" rx="3" fill="#2B6B38" stroke="#153B1E" strokeWidth="2" />
            <rect x="32" y="38" width="16" height="8" rx="2" fill="#14341B" />
            {/* Front & Rear Wheels */}
            <circle cx="28" cy="65" r="8" fill="#14341B" stroke="#E3E0CE" strokeWidth="2" />
            <circle cx="28" cy="65" r="3" fill="#A8A490" />
            <circle cx="74" cy="63" r="10" fill="#14341B" stroke="#E3E0CE" strokeWidth="2" />
            <circle cx="74" cy="63" r="4" fill="#A8A490" />
          </g>

          {/* Central Mature Tree (Chêne / Arbre du Causse) */}
          <g>
            {/* Trunk */}
            <path
              d="M 195 212 C 196 175 192 145 185 125 C 182 118 178 112 170 102 M 195 140 C 202 125 210 112 222 98 M 194 165 C 208 152 216 138 226 122 M 205 212 C 204 175 208 145 215 125"
              stroke="#1C3F24"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Detailed Canopy Leaves */}
            {/* Outer foliage clumps */}
            <ellipse cx="200" cy="68" rx="14" ry="12" fill="#3D7438" />
            <ellipse cx="170" cy="74" rx="15" ry="13" fill="#4B8544" />
            <ellipse cx="230" cy="74" rx="15" ry="13" fill="#4B8544" />
            <ellipse cx="145" cy="90" rx="16" ry="14" fill="#31632D" />
            <ellipse cx="255" cy="90" rx="16" ry="14" fill="#31632D" />
            <ellipse cx="132" cy="112" rx="14" ry="12" fill="#265123" />
            <ellipse cx="268" cy="112" rx="14" ry="14" fill="#265123" />
            <ellipse cx="160" cy="120" rx="14" ry="12" fill="#1E441B" />
            <ellipse cx="240" cy="120" rx="14" ry="12" fill="#1E441B" />

            {/* Core leaves cluster */}
            <circle cx="200" cy="92" r="28" fill="#3E7738" />
            <circle cx="178" cy="98" r="22" fill="#2F632B" />
            <circle cx="222" cy="98" r="22" fill="#2F632B" />
            <circle cx="200" cy="118" r="20" fill="#245121" />

            {/* Individual leaf accents */}
            <path d="M 200 42 Q 207 48 200 58 Q 193 48 200 42 Z" fill="#5A9652" />
            <path d="M 165 52 Q 174 54 172 65 Q 162 60 165 52 Z" fill="#5A9652" />
            <path d="M 235 52 Q 238 60 228 65 Q 226 54 235 52 Z" fill="#5A9652" />
            <path d="M 135 72 Q 145 74 140 85 Q 130 80 135 72 Z" fill="#5A9652" />
            <path d="M 265 72 Q 270 80 260 85 Q 255 74 265 72 Z" fill="#5A9652" />
          </g>

          {/* Clean dividing curved baseline */}
          <path
            d="M 35 214 Q 200 206 365 214"
            stroke="#1C3F24"
            strokeWidth="3.5"
            fill="none"
          />
        </g>

        {/* Lower Badge Area with Brand Typography */}
        <g>
          {/* "CAUSSE" Text */}
          <text
            x="200"
            y="272"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="46"
            fontWeight="800"
            letterSpacing="6"
            fill="#163A24"
          >
            CAUSSE
          </text>

          {/* Decorative Divider with "VERT" */}
          <line x1="72" y1="298" x2="124" y2="298" stroke="#2D5A37" strokeWidth="2.5" strokeLinecap="round" />
          <text
            x="200"
            y="308"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="32"
            fontWeight="800"
            letterSpacing="10"
            fill="#265B33"
          >
            VERT
          </text>
          <line x1="276" y1="298" x2="328" y2="298" stroke="#2D5A37" strokeWidth="2.5" strokeLinecap="round" />

          {/* Little Leaf Accent */}
          <path
            d="M 200 317 C 205 312 212 316 208 322 C 200 326 200 326 200 326 C 200 326 200 326 192 322 C 188 316 195 312 200 317 Z"
            fill="#2D5A37"
          />

          {/* Subtitle "ENTRETIEN DE HAIES ET JARDINS" */}
          <text
            x="200"
            y="340"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="2.5"
            fill="#1D3E25"
          >
            ENTRETIEN DE HAIES
          </text>
          <text
            x="200"
            y="358"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="13"
            fontWeight="700"
            letterSpacing="2.5"
            fill="#1D3E25"
          >
            ET JARDINS
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-[#163A24] leading-tight">
            Causse Vert
          </span>
          <span className="text-[11px] font-semibold text-[#3D6B47] uppercase tracking-wider">
            Lacapelle-Marival & Figeac
          </span>
        </div>
      )}
    </div>
  );
};
