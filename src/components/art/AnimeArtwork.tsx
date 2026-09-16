import React from 'react';

interface AnimeArtworkProps {
  artId: string;
  className?: string;
  interactive?: boolean;
  showStamp?: boolean;
  showFrameEffect?: boolean;
}

export const AnimeArtwork: React.FC<AnimeArtworkProps> = ({
  artId,
  className = '',
  showStamp = true,
}) => {
  // Render high-precision original anime-inspired vector masterworks
  const renderArtworkContent = () => {
    switch (artId) {
      case 'crimson-ronin':
        return (
          <g>
            <defs>
              <linearGradient id="cr-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a0507" />
                <stop offset="40%" stopColor="#2b080d" />
                <stop offset="75%" stopColor="#150406" />
                <stop offset="100%" stopColor="#0a0203" />
              </linearGradient>
              <radialGradient id="cr-moon" cx="50%" cy="32%" r="42%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="85%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </radialGradient>
              <radialGradient id="cr-glow" cx="50%" cy="32%" r="65%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.45)" />
                <stop offset="60%" stopColor="rgba(185, 28, 28, 0.15)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <linearGradient id="cr-blade" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#fca5a5" />
                <stop offset="70%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <filter id="cr-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* Canvas Base */}
            <rect width="600" height="800" fill="url(#cr-bg)" />

            {/* Moon Ambient Glow */}
            <circle cx="300" cy="270" r="240" fill="url(#cr-glow)" filter="url(#cr-blur)" />
            
            {/* Celestial Blood Moon */}
            <circle cx="300" cy="270" r="150" fill="url(#cr-moon)" />
            {/* Moon surface textures & eclipse rim */}
            <circle cx="280" cy="250" r="145" fill="none" stroke="#fca5a5" strokeWidth="1.5" opacity="0.6" />
            <path d="M220 220 Q280 180 360 210 Q320 300 240 280 Z" fill="#991b1b" opacity="0.3" />
            <circle cx="370" cy="310" r="22" fill="#7f1d1d" opacity="0.4" />
            <circle cx="240" cy="230" r="18" fill="#7f1d1d" opacity="0.35" />

            {/* Japanese decorative sun rays / sacred geometry circle */}
            <circle cx="300" cy="270" r="190" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="6,12" opacity="0.4" />
            <circle cx="300" cy="270" r="215" fill="none" stroke="#f87171" strokeWidth="0.75" strokeDasharray="3,18" opacity="0.3" />

            {/* Mountain Crags in Distance */}
            <polygon points="0,580 120,490 260,560 380,480 490,540 600,470 600,800 0,800" fill="#140305" opacity="0.9" />
            <polygon points="0,640 180,570 320,620 460,560 600,610 600,800 0,800" fill="#0c0203" />

            {/* Torii Gate on distant ridge */}
            <g transform="translate(100, 460) scale(0.45)" fill="#ef4444" opacity="0.85">
              <rect x="20" y="20" width="160" height="12" rx="4" />
              <rect x="10" y="8" width="180" height="10" rx="3" />
              <rect x="40" y="20" width="12" height="90" />
              <rect x="148" y="20" width="12" height="90" />
              <rect x="35" y="44" width="130" height="8" />
            </g>

            {/* Foreground Cliff Overlook */}
            <path d="M120 800 L240 640 L380 650 L480 800 Z" fill="#080102" />

            {/* Samurai Hero Silhouette with dramatic lighting */}
            <g transform="translate(250, 460)">
              {/* Cloak / Haori flow */}
              <path d="M20 70 Q-40 110 -60 170 Q-10 160 20 140 Q60 175 110 180 Q80 120 45 70 Z" fill="#180407" stroke="#ef4444" strokeWidth="0.8" opacity="0.95" />
              
              {/* Torso & Armor */}
              <path d="M15 55 L45 55 L55 120 L5 120 Z" fill="#0f0204" />
              {/* Hakama Pants */}
              <path d="M5 120 L-10 200 L25 200 L30 140 L35 200 L70 200 L55 120 Z" fill="#080102" />
              
              {/* Head & Kasa/Straw Hat */}
              <path d="M-15 45 Q30 20 75 45 L30 25 Z" fill="#0a0203" stroke="#f87171" strokeWidth="1" />
              <circle cx="30" cy="48" r="14" fill="#180407" />
              {/* Tasseled Knot */}
              <path d="M28 45 L20 75 M32 45 L40 75" stroke="#dc2626" strokeWidth="1.5" />

              {/* Katana Scabbard on Hip */}
              <line x1="10" y1="100" x2="-55" y2="135" stroke="#7f1d1d" strokeWidth="4" strokeLinecap="round" />
              <line x1="-55" y1="135" x2="-65" y2="140" stroke="#fca5a5" strokeWidth="3" />

              {/* Drawn Flaming Muramasa Katana */}
              <path d="M45 85 Q110 40 170 -10" stroke="url(#cr-blade)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M45 85 Q110 40 170 -10" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
              {/* Katana Slash Light Arc */}
              <path d="M30 110 Q120 20 190 -30" stroke="rgba(239,68,68,0.4)" strokeWidth="8" filter="url(#cr-blur)" fill="none" />
              {/* Katana Tsuba guard and hilt */}
              <line x1="45" y1="85" x2="35" y2="92" stroke="#f59e0b" strokeWidth="5" />
              <line x1="35" y1="92" x2="18" y2="105" stroke="#1f2937" strokeWidth="4" />
            </g>

            {/* Swirling Ember & Sakura Petals */}
            {[
              { cx: 180, cy: 380, r: 3, o: 0.8 },
              { cx: 210, cy: 430, r: 2, o: 0.9 },
              { cx: 390, cy: 340, r: 4, o: 0.7 },
              { cx: 440, cy: 410, r: 2.5, o: 0.85 },
              { cx: 470, cy: 500, r: 3.5, o: 0.75 },
              { cx: 150, cy: 560, r: 2, o: 0.9 },
              { cx: 340, cy: 620, r: 3, o: 0.8 },
              { cx: 270, cy: 680, r: 2.5, o: 0.9 },
              { cx: 410, cy: 650, r: 3, o: 0.7 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#fca5a5" opacity={p.o} />
            ))}
            
            {/* Hand-drawn Sakura petal shapes */}
            <path d="M160 320 C165 315 175 320 170 330 C165 335 155 330 160 320 Z" fill="#ef4444" opacity="0.75" />
            <path d="M420 290 C425 285 435 290 430 300 C425 305 415 300 420 290 Z" fill="#f87171" opacity="0.8" />
            <path d="M380 440 C385 435 395 440 390 450 C385 455 375 450 380 440 Z" fill="#fca5a5" opacity="0.7" />
          </g>
        );

      case 'neon-shogun':
        return (
          <g>
            <defs>
              <linearGradient id="ns-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#040b17" />
                <stop offset="45%" stopColor="#06182e" />
                <stop offset="85%" stopColor="#030712" />
              </linearGradient>
              <linearGradient id="ns-cyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="ns-pink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#ns-bg)" />

            {/* Cyber City Skyscrapers Background */}
            <g opacity="0.75">
              <rect x="40" y="240" width="90" height="480" fill="#061224" />
              <rect x="140" y="160" width="80" height="560" fill="#081830" />
              <rect x="230" y="220" width="140" height="500" fill="#051020" />
              <rect x="380" y="140" width="100" height="580" fill="#091b36" />
              <rect x="490" y="260" width="80" height="460" fill="#050e1c" />

              {/* Glowing Cyber Grid Windows */}
              {Array.from({ length: 18 }).map((_, i) => (
                <rect key={`w1-${i}`} x={155 + (i % 3) * 20} y={200 + Math.floor(i / 3) * 40} width="8" height="14" fill="#06b6d4" opacity="0.6" />
              ))}
              {Array.from({ length: 24 }).map((_, i) => (
                <rect key={`w2-${i}`} x={395 + (i % 4) * 20} y={180 + Math.floor(i / 4) * 35} width="6" height="12" fill="#38bdf8" opacity="0.5" />
              ))}

              {/* Neon Kanji Billboards */}
              <rect x="60" y="320" width="45" height="130" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
              <text x="82" y="360" fill="#22d3ee" fontSize="22" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">電</text>
              <text x="82" y="395" fill="#22d3ee" fontSize="22" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">脳</text>
              <text x="82" y="430" fill="#22d3ee" fontSize="22" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">界</text>

              <rect x="505" y="340" width="45" height="110" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
              <text x="527" y="380" fill="#fb7185" fontSize="20" textAnchor="middle" fontWeight="bold">将</text>
              <text x="527" y="415" fill="#fb7185" fontSize="20" textAnchor="middle" fontWeight="bold">軍</text>
            </g>

            {/* Holographic HUD Projection Grid */}
            <circle cx="300" cy="380" r="180" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4,8" opacity="0.4" />
            <circle cx="300" cy="380" r="230" fill="none" stroke="#38bdf8" strokeWidth="0.75" opacity="0.25" />
            <line x1="80" y1="380" x2="520" y2="380" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.4" />
            <line x1="300" y1="160" x2="300" y2="600" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.4" />

            {/* Neon Shogun Armor & Kabuto Bust */}
            <g transform="translate(300, 390)">
              {/* Massive Pauldrons */}
              <path d="M-150 140 L-90 80 L-50 110 L-70 190 L-140 210 Z" fill="#0b1728" stroke="#06b6d4" strokeWidth="1.5" />
              <path d="M150 140 L90 80 L50 110 L70 190 L140 210 Z" fill="#0b1728" stroke="#06b6d4" strokeWidth="1.5" />

              {/* Chest Plate with Core Glow */}
              <path d="M-60 100 L60 100 L45 230 L-45 230 Z" fill="#07101d" stroke="#1e293b" strokeWidth="2" />
              <polygon points="0,130 25,160 0,190 -25,160" fill="#06b6d4" opacity="0.9" />
              <polygon points="0,138 15,160 0,182 -15,160" fill="#ffffff" />

              {/* Neck & Gorget */}
              <path d="M-35 80 L35 80 L45 105 L-45 105 Z" fill="#0f172a" />

              {/* Kabuto Helmet & Face Mask */}
              <path d="M-55 20 Q0 -25 55 20 L50 75 Q0 90 -50 75 Z" fill="#060c17" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Menpo / Cyber Visor Face */}
              <path d="M-32 35 L32 35 L25 70 L0 80 L-25 70 Z" fill="#020617" />
              {/* Glowing Cyber Visor Slit */}
              <rect x="-28" y="42" width="56" height="7" rx="3.5" fill="#22d3ee" />
              <rect x="-24" y="44" width="48" height="3" rx="1.5" fill="#ffffff" />

              {/* Giant Holographic Horns / Kuwagata Crest */}
              <path d="M-15 15 Q-70 -70 -130 -90 Q-70 -30 -30 -10 Z" fill="url(#ns-cyan)" opacity="0.95" />
              <path d="M15 15 Q70 -70 130 -90 Q70 -30 30 -10 Z" fill="url(#ns-cyan)" opacity="0.95" />
              {/* Center Crest Disc */}
              <circle cx="0" cy="5" r="16" fill="#040814" stroke="#06b6d4" strokeWidth="2" />
              <polygon points="0,-6 6,5 -6,5" fill="#22d3ee" />
            </g>

            {/* Diagonal Rain Streaks */}
            {Array.from({ length: 28 }).map((_, i) => (
              <line
                key={`rain-${i}`}
                x1={(i * 24) % 600}
                y1={(i * 37) % 750}
                x2={((i * 24) % 600) + 18}
                y2={((i * 37) % 750) + 60}
                stroke="#38bdf8"
                strokeWidth="0.75"
                opacity={0.15 + (i % 5) * 0.08}
              />
            ))}
          </g>
        );

      case 'moonlit-wanderer':
        return (
          <g>
            <defs>
              <linearGradient id="mw-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#080918" />
                <stop offset="50%" stopColor="#141838" />
                <stop offset="85%" stopColor="#1e2246" />
                <stop offset="100%" stopColor="#0b0d1e" />
              </linearGradient>
              <radialGradient id="mw-moon" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e0e7ff" />
                <stop offset="90%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#818cf8" />
              </radialGradient>
            </defs>

            <rect width="600" height="800" fill="url(#mw-sky)" />

            {/* Giant Silver Moon */}
            <circle cx="300" cy="300" r="160" fill="url(#mw-moon)" />
            <circle cx="300" cy="300" r="180" fill="none" stroke="#a5b4fc" strokeWidth="1" opacity="0.3" />
            <circle cx="300" cy="300" r="220" fill="none" stroke="#818cf8" strokeWidth="0.75" strokeDasharray="8,12" opacity="0.2" />

            {/* Delicate Moon Craters in Sumi Style */}
            <path d="M260 260 Q320 230 350 280 Q310 340 250 310 Z" fill="#818cf8" opacity="0.12" />
            <circle cx="240" cy="330" r="24" fill="#6366f1" opacity="0.1" />
            <circle cx="370" cy="270" r="18" fill="#6366f1" opacity="0.1" />

            {/* Weeping Willow Tree Silhouettes */}
            <path d="M0 0 Q100 120 180 180 Q250 220 280 230" fill="none" stroke="#090a18" strokeWidth="6" />
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={`leaf-${i}`}
                d={`M${50 + i * 16} ${80 + (i % 4) * 25} Q${60 + i * 16} ${160 + (i % 5) * 30} ${40 + i * 16} ${240 + (i % 6) * 35}`}
                fill="none"
                stroke="#121530"
                strokeWidth="1.75"
                opacity="0.8"
              />
            ))}

            {/* Distant Mountain Layers */}
            <polygon points="0,540 160,460 310,510 470,440 600,500 600,800 0,800" fill="#0d0f26" />
            <polygon points="0,610 200,540 370,590 530,530 600,570 600,800 0,800" fill="#060714" />

            {/* Foreground Solitary Cliff */}
            <path d="M0 720 Q180 650 320 660 L380 800 L0 800 Z" fill="#04050d" />

            {/* Wanderer Silhouette */}
            <g transform="translate(230, 520)">
              {/* Cloak in Wind */}
              <path d="M20 50 Q-30 80 -45 140 Q-10 135 20 120 Q50 145 75 140 Q60 90 40 50 Z" fill="#020308" stroke="#818cf8" strokeWidth="0.8" />
              {/* Wide Straw Hat (Kasa) */}
              <path d="M-20 40 Q30 18 80 40 L30 25 Z" fill="#020308" stroke="#c7d2fe" strokeWidth="1" />
              {/* Bamboo Walking Staff */}
              <line x1="68" y1="40" x2="80" y2="150" stroke="#a5b4fc" strokeWidth="2.5" />
            </g>

            {/* Bioluminescent Spirit Butterflies */}
            {[
              { x: 190, y: 440, s: 0.8 },
              { x: 330, y: 460, s: 1.1 },
              { x: 380, y: 390, s: 0.7 },
              { x: 160, y: 370, s: 0.6 },
              { x: 270, y: 490, s: 0.9 },
            ].map((b, i) => (
              <g key={`bf-${i}`} transform={`translate(${b.x}, ${b.y}) scale(${b.s})`}>
                <circle cx="0" cy="0" r="10" fill="rgba(165,180,252,0.25)" />
                <path d="M-8 -6 Q0 -2 -2 6 Q-6 2 -8 -6 Z" fill="#c7d2fe" />
                <path d="M8 -6 Q0 -2 2 6 Q6 2 8 -6 Z" fill="#c7d2fe" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>
            ))}
          </g>
        );

      case 'spirit-of-the-storm':
        return (
          <g>
            <defs>
              <linearGradient id="st-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#031124" />
                <stop offset="50%" stopColor="#082245" />
                <stop offset="85%" stopColor="#041226" />
                <stop offset="100%" stopColor="#020813" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#st-bg)" />

            {/* Storm Clouds Vortex */}
            <circle cx="300" cy="360" r="260" fill="none" stroke="#1e3a8a" strokeWidth="40" opacity="0.3" strokeDasharray="140,40" />
            <circle cx="300" cy="360" r="200" fill="none" stroke="#0284c7" strokeWidth="25" opacity="0.4" strokeDasharray="80,50" />
            <circle cx="300" cy="360" r="130" fill="none" stroke="#38bdf8" strokeWidth="12" opacity="0.5" strokeDasharray="40,30" />

            {/* Celestial Thunder Dragon Arc */}
            <path
              d="M80 200 Q200 80 340 160 Q480 240 460 400 Q440 520 280 500 Q140 480 180 320"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeDasharray="6,12"
              opacity="0.85"
            />
            {/* Dragon Eye & Whiskers */}
            <circle cx="170" cy="220" r="5" fill="#ffffff" />
            <path d="M165 225 Q130 260 110 320" fill="none" stroke="#7dd3fc" strokeWidth="2" />
            <path d="M175 220 Q200 240 230 280" fill="none" stroke="#7dd3fc" strokeWidth="2" />

            {/* Raijin Thunder Drum Halo Ring */}
            <g transform="translate(300, 360)">
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const dx = Math.cos(angle) * 150;
                const dy = Math.sin(angle) * 150;
                return (
                  <g key={`drum-${i}`} transform={`translate(${dx}, ${dy})`}>
                    <circle cx="0" cy="0" r="16" fill="#071830" stroke="#38bdf8" strokeWidth="2" />
                    {/* Tomoe 3-swirl symbol inside drum */}
                    <circle cx="0" cy="-4" r="3.5" fill="#38bdf8" />
                    <circle cx="-4" cy="3" r="3.5" fill="#38bdf8" />
                    <circle cx="4" cy="3" r="3.5" fill="#38bdf8" />
                  </g>
                );
              })}
            </g>

            {/* Central Thunder Warrior Figure */}
            <g transform="translate(300, 360)">
              {/* Wild electric hair */}
              <path d="M-35 -70 Q0 -120 40 -65 Q60 -40 25 -30 Q-60 -40 -35 -70 Z" fill="#38bdf8" opacity="0.9" />
              <path d="M-25 -65 Q0 -105 30 -60" fill="#ffffff" />
              {/* Torso & dynamic stance */}
              <polygon points="-25,-30 25,-30 35,40 -35,40" fill="#08172c" stroke="#38bdf8" strokeWidth="1" />
              
              {/* Dual Lightning Katana Blades */}
              <line x1="-30" y1="0" x2="-140" y2="-80" stroke="#ffffff" strokeWidth="3" />
              <line x1="-30" y1="0" x2="-140" y2="-80" stroke="#38bdf8" strokeWidth="7" opacity="0.5" />
              
              <line x1="30" y1="0" x2="150" y2="-90" stroke="#ffffff" strokeWidth="3" />
              <line x1="30" y1="0" x2="150" y2="-90" stroke="#38bdf8" strokeWidth="7" opacity="0.5" />
            </g>

            {/* Branching Jagged Lightning Strikes */}
            <path d="M300 0 L280 90 L330 140 L300 230" fill="none" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M480 80 L440 150 L470 190 L420 280" fill="none" stroke="#7dd3fc" strokeWidth="2" />
            <path d="M120 140 L160 210 L130 260 L180 340" fill="none" stroke="#7dd3fc" strokeWidth="2" />
          </g>
        );

      case 'cyber-samurai':
        return (
          <g>
            <defs>
              <linearGradient id="cs-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12061e" />
                <stop offset="60%" stopColor="#1c0a2f" />
                <stop offset="100%" stopColor="#090210" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#cs-bg)" />

            {/* Back Alley Perspective */}
            <polygon points="0,0 220,380 220,800 0,800" fill="#0c0414" />
            <polygon points="600,0 380,380 380,800 600,800" fill="#140622" />
            <polygon points="220,380 380,380 380,800 220,800" fill="#08020d" />

            {/* Neon Alley Signs */}
            <rect x="40" y="160" width="30" height="120" fill="#2e1065" stroke="#c084fc" strokeWidth="1.5" />
            <text x="55" y="200" fill="#e879f9" fontSize="18" textAnchor="middle" fontWeight="bold">刺</text>
            <text x="55" y="235" fill="#e879f9" fontSize="18" textAnchor="middle" fontWeight="bold">客</text>
            <text x="55" y="270" fill="#e879f9" fontSize="18" textAnchor="middle" fontWeight="bold">九</text>

            <rect x="520" y="190" width="35" height="100" fill="#4a044e" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="537" y="230" fill="#fb7185" fontSize="18" textAnchor="middle" fontWeight="bold">夜</text>
            <text x="537" y="265" fill="#fb7185" fontSize="18" textAnchor="middle" fontWeight="bold">市</text>

            {/* Wet Ground Reflective Strips */}
            <ellipse cx="300" cy="680" rx="140" ry="25" fill="#a855f7" opacity="0.15" />
            <line x1="240" y1="620" x2="360" y2="620" stroke="#c084fc" strokeWidth="2" opacity="0.4" />
            <line x1="200" y1="700" x2="400" y2="700" stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />

            {/* Crouching Cyber Samurai Figure */}
            <g transform="translate(300, 480)">
              {/* High collar tech coat */}
              <path d="M-40 40 L-60 140 L-20 180 L0 120 L20 180 L60 140 L40 40 Z" fill="#0f051a" stroke="#a855f7" strokeWidth="1" />
              {/* Sleek helmet with glowing purple single visor slit */}
              <polygon points="0,0 25,25 15,50 -15,50 -25,25" fill="#08020e" stroke="#d946ef" strokeWidth="1.5" />
              <line x1="-18" y1="28" x2="18" y2="28" stroke="#f0abfc" strokeWidth="3" />
              <line x1="-12" y1="28" x2="12" y2="28" stroke="#ffffff" strokeWidth="1" />

              {/* Glowing Purple Plasma Katana */}
              <line x1="-30" y1="70" x2="130" y2="0" stroke="#f0abfc" strokeWidth="3" />
              <line x1="-30" y1="70" x2="130" y2="0" stroke="#ffffff" strokeWidth="1" />
              {/* Katana Slash Light Arc */}
              <path d="M-50 110 Q40 20 160 -40" fill="none" stroke="rgba(192,132,252,0.4)" strokeWidth="8" />
            </g>
          </g>
        );

      case 'eclipse-warrior':
        return (
          <g>
            <defs>
              <linearGradient id="ew-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a0b04" />
                <stop offset="45%" stopColor="#2c1206" />
                <stop offset="80%" stopColor="#120703" />
                <stop offset="100%" stopColor="#070201" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#ew-bg)" />

            {/* Total Solar Eclipse - Black Sun */}
            <circle cx="300" cy="280" r="120" fill="#050201" />
            {/* Blinding Coronal Diamond Ring & Sun Flares */}
            <circle cx="300" cy="280" r="122" fill="none" stroke="#f97316" strokeWidth="5" opacity="0.9" />
            <circle cx="300" cy="280" r="130" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
            <circle cx="300" cy="280" r="170" fill="none" stroke="#ea580c" strokeWidth="1" strokeDasharray="10,20" opacity="0.4" />
            {/* Bright diamond flare at 1 o'clock */}
            <circle cx="385" cy="195" r="12" fill="#ffffff" />
            <circle cx="385" cy="195" r="28" fill="#fef08a" opacity="0.4" />

            {/* Volcanic Basalt Ridge */}
            <polygon points="0,580 180,510 320,560 480,490 600,550 600,800 0,800" fill="#140602" />
            <polygon points="0,660 220,600 400,650 600,590 600,800 0,800" fill="#080201" />

            {/* Molten Lava Fissure */}
            <path d="M120 740 Q250 680 340 720 Q440 760 520 710" fill="none" stroke="#f97316" strokeWidth="2.5" />
            <path d="M140 740 Q250 685 340 720" fill="none" stroke="#fef08a" strokeWidth="1" />

            {/* Colossal Berserker Silhouette */}
            <g transform="translate(300, 480)">
              {/* Massive Jagged Greatsword on Back */}
              <polygon points="40,20 120,-110 140,-100 65,30" fill="#060201" stroke="#ea580c" strokeWidth="1.5" />
              <polygon points="120,-110 135,-130 140,-100" fill="#fbbf24" />
              
              {/* Horned Berserker Helm */}
              <circle cx="0" cy="0" r="18" fill="#080201" />
              <path d="M-12 -6 Q-25 -30 -35 -40" fill="none" stroke="#ea580c" strokeWidth="3" />
              <path d="M12 -6 Q25 -30 35 -40" fill="none" stroke="#ea580c" strokeWidth="3" />
              {/* Glowing Red Eye Gaze */}
              <circle cx="4" cy="0" r="2.5" fill="#ef4444" />

              {/* Broad Armored Shoulders & Cape in Embers */}
              <polygon points="-45,15 45,15 35,90 -35,90" fill="#080201" />
              <path d="M-35 25 Q-65 70 -80 140 Q-20 130 0 110" fill="#1c0903" stroke="#f97316" strokeWidth="0.75" />
            </g>

            {/* Drifting Embers */}
            {[
              { x: 220, y: 440 }, { x: 380, y: 390 }, { x: 190, y: 330 }, { x: 410, y: 490 }, { x: 280, y: 550 }
            ].map((pt, i) => (
              <circle key={`emb-${i}`} cx={pt.x} cy={pt.y} r={2 + (i % 2)} fill="#f97316" opacity="0.85" />
            ))}
          </g>
        );

      case 'azure-blade':
        return (
          <g>
            <defs>
              <linearGradient id="ab-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#041525" />
                <stop offset="50%" stopColor="#082b4a" />
                <stop offset="85%" stopColor="#0b3d68" />
                <stop offset="100%" stopColor="#031120" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#ab-bg)" />

            {/* Frosted Torii Gate in Background */}
            <g transform="translate(180, 260) scale(1.3)" fill="#071b30" stroke="#38bdf8" strokeWidth="1" opacity="0.6">
              <rect x="20" y="20" width="160" height="12" rx="3" />
              <rect x="10" y="8" width="180" height="10" rx="2" />
              <rect x="40" y="20" width="14" height="120" />
              <rect x="146" y="20" width="14" height="120" />
              <rect x="35" y="48" width="130" height="8" />
            </g>

            {/* Swirling Water Dragons / Waves */}
            <path
              d="M100 480 C180 360 260 520 340 400 C420 300 500 460 560 380"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              opacity="0.8"
            />
            <path
              d="M120 500 C200 380 280 540 360 420 C440 320 520 480 580 400"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="2"
              opacity="0.9"
            />
            <path
              d="M80 460 C160 340 240 500 320 380 C400 280 480 440 540 360"
              fill="none"
              stroke="#0284c7"
              strokeWidth="8"
              opacity="0.3"
            />

            {/* Swordsman Mid-Air Dash Pose */}
            <g transform="translate(280, 420) rotate(-15)">
              <polygon points="0,0 30,10 40,70 -10,60" fill="#030c18" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="15" cy="-10" r="14" fill="#07182e" />
              
              {/* Drawn Azure Katana */}
              <line x1="25" y1="20" x2="160" y2="-40" stroke="#ffffff" strokeWidth="3" />
              <line x1="25" y1="20" x2="160" y2="-40" stroke="#38bdf8" strokeWidth="7" opacity="0.4" />
            </g>

            {/* Floating Ice Shards & Snowflakes */}
            {Array.from({ length: 24 }).map((_, i) => (
              <polygon
                key={`ice-${i}`}
                points={`${100 + (i * 22) % 440},${150 + (i * 29) % 550} ${105 + (i * 22) % 440},${160 + (i * 29) % 550} ${95 + (i * 22) % 440},${162 + (i * 29) % 550}`}
                fill="#e0f2fe"
                opacity={0.5 + (i % 4) * 0.12}
              />
            ))}
          </g>
        );

      case 'phantom-district':
        return (
          <g>
            <defs>
              <linearGradient id="pd-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#140209" />
                <stop offset="45%" stopColor="#2e0517" />
                <stop offset="85%" stopColor="#100208" />
                <stop offset="100%" stopColor="#050003" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#pd-bg)" />

            {/* Endless Vanishing Torii Corridor (Deep Linear Perspective) */}
            {[
              { s: 0.15, y: 390, op: 0.35 },
              { s: 0.28, y: 400, op: 0.45 },
              { s: 0.45, y: 415, op: 0.6 },
              { s: 0.68, y: 435, op: 0.75 },
              { s: 0.95, y: 460, op: 0.9 },
              { s: 1.35, y: 500, op: 1 },
            ].map((t, i) => (
              <g key={`tori-${i}`} transform={`translate(300, ${t.y}) scale(${t.s}) translate(-300, -300)`} opacity={t.op}>
                {/* Horizontal lintel top */}
                <rect x="160" y="160" width="280" height="16" rx="4" fill="#e11d48" stroke="#fda4af" strokeWidth="1" />
                <rect x="180" y="185" width="240" height="12" fill="#be123c" />
                {/* Vertical pillars */}
                <rect x="210" y="160" width="18" height="280" fill="#9f1239" />
                <rect x="372" y="160" width="18" height="280" fill="#9f1239" />
                {/* Center nameplate */}
                <rect x="285" y="178" width="30" height="40" fill="#4c0519" stroke="#fda4af" strokeWidth="1" />
              </g>
            ))}

            {/* Stone Lanterns with glowing amber cores */}
            <rect x="140" y="560" width="22" height="60" fill="#1f030c" />
            <rect x="136" y="545" width="30" height="18" fill="#f59e0b" opacity="0.8" />
            
            <rect x="440" y="560" width="22" height="60" fill="#1f030c" />
            <rect x="436" y="545" width="30" height="18" fill="#f59e0b" opacity="0.8" />

            {/* Kitsune Mask Cloaked Traveler */}
            <g transform="translate(300, 520)">
              {/* Red traditional umbrella (wagasa) */}
              <ellipse cx="-15" cy="-20" rx="55" ry="18" fill="#be123c" stroke="#fda4af" strokeWidth="1.5" />
              <line x1="-15" y1="-20" x2="-15" y2="70" stroke="#7f1d1d" strokeWidth="3" />
              
              {/* White & Red Kitsune Mask */}
              <ellipse cx="-15" cy="0" rx="14" ry="16" fill="#ffffff" />
              <polygon points="-25,-8 -20,-18 -15,-6" fill="#be123c" />
              <polygon points="-5,-8 -10,-18 -15,-6" fill="#be123c" />
              {/* Slanted Fox Eyes */}
              <line x1="-22" y1="-2" x2="-17" y2="2" stroke="#be123c" strokeWidth="2" />
              <line x1="-8" y1="-2" x2="-13" y2="2" stroke="#be123c" strokeWidth="2" />

              {/* Dark Priest Robes */}
              <path d="M-35 25 L5 25 L20 160 L-50 160 Z" fill="#1a0209" stroke="#e11d48" strokeWidth="0.8" />
            </g>

            {/* Floating Spirit Lanterns in distance */}
            {[
              { x: 260, y: 340 }, { x: 340, y: 350 }, { x: 280, y: 310 }, { x: 320, y: 300 }
            ].map((l, i) => (
              <circle key={`lt-${i}`} cx={l.x} cy={l.y} r={4} fill="#f43f5e" opacity="0.8" />
            ))}
          </g>
        );

      case 'last-guardian':
        return (
          <g>
            <defs>
              <linearGradient id="lg-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#041611" />
                <stop offset="50%" stopColor="#082b22" />
                <stop offset="85%" stopColor="#0f3e32" />
                <stop offset="100%" stopColor="#020d0a" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#lg-bg)" />

            {/* Ancient Forest Canopy Rays */}
            <polygon points="120,0 200,0 340,800 240,800" fill="#34d399" opacity="0.08" />
            <polygon points="320,0 400,0 520,800 420,800" fill="#34d399" opacity="0.08" />

            {/* Giant Colossal Resting Mecha Titan Silhouette */}
            <g transform="translate(300, 430)">
              {/* Mecha Torso & Steel Plates */}
              <path d="M-130 80 L130 80 L100 260 L-100 260 Z" fill="#071914" stroke="#10b981" strokeWidth="1.5" />
              
              {/* Massive Shoulders */}
              <rect x="-180" y="50" width="70" height="80" rx="10" fill="#04120e" stroke="#059669" strokeWidth="1" />
              <rect x="110" y="50" width="70" height="80" rx="10" fill="#04120e" stroke="#059669" strokeWidth="1" />

              {/* Head & Optic Visor */}
              <rect x="-40" y="-30" width="80" height="90" rx="12" fill="#030e0b" stroke="#34d399" strokeWidth="2" />
              {/* Peaceful Single Cyan Eye Optic */}
              <circle cx="0" cy="15" r="16" fill="#047857" />
              <circle cx="0" cy="15" r="8" fill="#6ee7b7" />
              <circle cx="0" cy="15" r="3" fill="#ffffff" />

              {/* Glowing Chest Arc Reactor Node */}
              <circle cx="0" cy="150" r="28" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
              <circle cx="0" cy="150" r="12" fill="#a7f3d0" />

              {/* Overgrown Wisteria Vines Hanging */}
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={`wis-${i}`}
                  d={`M${-160 + i * 28} 60 Q${-150 + i * 28} 120 ${-165 + i * 28} 170`}
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="2.5"
                  opacity="0.8"
                />
              ))}
            </g>

            {/* Small Spirit Bird perched on Mecha finger */}
            <g transform="translate(230, 480) scale(0.6)">
              <ellipse cx="0" cy="0" rx="12" ry="8" fill="#34d399" />
              <circle cx="10" cy="-6" r="6" fill="#a7f3d0" />
            </g>
          </g>
        );

      case 'celestial-ronin':
        return (
          <g>
            <defs>
              <linearGradient id="cel-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#080214" />
                <stop offset="45%" stopColor="#190432" />
                <stop offset="80%" stopColor="#100322" />
                <stop offset="100%" stopColor="#04010a" />
              </linearGradient>
              <radialGradient id="nebula" cx="50%" cy="35%" r="45%">
                <stop offset="0%" stopColor="rgba(192, 132, 252, 0.45)" />
                <stop offset="40%" stopColor="rgba(147, 51, 234, 0.25)" />
                <stop offset="70%" stopColor="rgba(59, 130, 246, 0.15)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>

            <rect width="600" height="800" fill="url(#cel-bg)" />

            {/* Cosmic Nebula Cloud */}
            <circle cx="300" cy="280" r="240" fill="url(#nebula)" />

            {/* Spiral Galaxy Arms */}
            <path d="M300 280 Q420 180 490 260 Q420 380 300 340 Q180 300 160 220" fill="none" stroke="#e879f9" strokeWidth="2" opacity="0.6" strokeDasharray="5,15" />
            <path d="M300 280 Q180 380 110 300 Q180 180 300 220 Q420 260 440 340" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.5" strokeDasharray="5,15" />

            {/* Starfield with hundreds of stars */}
            {Array.from({ length: 48 }).map((_, i) => (
              <circle
                key={`star-${i}`}
                cx={(i * 37 + 13) % 580 + 10}
                cy={(i * 59 + 23) % 500 + 20}
                r={(i % 3) === 0 ? 2 : 1}
                fill={(i % 2) === 0 ? '#ffffff' : '#e9d5ff'}
                opacity={0.4 + (i % 5) * 0.14}
              />
            ))}

            {/* Floating Asteroid Platform */}
            <polygon points="160,620 440,620 490,680 380,740 190,720 120,660" fill="#0e0419" stroke="#9333ea" strokeWidth="1" />

            {/* Cosmic Ronin Figure */}
            <g transform="translate(300, 480)">
              {/* Flowing Astral Haori */}
              <path d="M-30 40 Q-70 80 -80 140 Q0 135 20 110 Q50 145 80 135 Q50 80 30 40 Z" fill="#140624" stroke="#c084fc" strokeWidth="1" />
              
              {/* Starlight Katana Blade radiating cosmic light */}
              <line x1="20" y1="60" x2="140" y2="-40" stroke="#ffffff" strokeWidth="3" />
              <line x1="20" y1="60" x2="140" y2="-40" stroke="#a855f7" strokeWidth="8" opacity="0.4" />
            </g>
          </g>
        );

      case 'kitsune-reverie':
        return (
          <g>
            <defs>
              <linearGradient id="kr-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#040d1a" />
                <stop offset="50%" stopColor="#081e3a" />
                <stop offset="85%" stopColor="#0d2e56" />
                <stop offset="100%" stopColor="#030812" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#kr-bg)" />

            {/* Giant Mystical Moon */}
            <circle cx="300" cy="240" r="140" fill="#dbeafe" opacity="0.9" />

            {/* Nine Ethereal Spirit Fox Tails */}
            <g transform="translate(300, 480)" opacity="0.85">
              {Array.from({ length: 9 }).map((_, i) => {
                const angle = -80 + i * 20;
                return (
                  <path
                    key={`tail-${i}`}
                    d={`M0 50 Q${angle * 2.5} -80 ${angle * 3.2} -180 Q${angle * 1.5} -70 0 50 Z`}
                    fill="url(#ns-cyan)"
                    opacity={0.45}
                    stroke="#e0f2fe"
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* Fox Spirit Maiden Silhouette */}
            <g transform="translate(300, 480)">
              {/* Fox ears */}
              <polygon points="-16,-40 -10,-65 -2,-42" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
              <polygon points="16,-40 10,-65 2,-42" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="0" cy="-30" r="14" fill="#ffffff" />
              
              {/* Ceremonial Kimono */}
              <polygon points="-30,0 30,0 45,160 -45,160" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5" />
              {/* Red Obi Sash */}
              <rect x="-28" y="40" width="56" height="24" fill="#dc2626" />
            </g>

            {/* Floating Azure Spirit Flames */}
            {[
              { x: 180, y: 380 }, { x: 420, y: 370 }, { x: 140, y: 480 }, { x: 450, y: 500 }
            ].map((f, i) => (
              <g key={`fl-${i}`} transform={`translate(${f.x}, ${f.y})`}>
                <circle cx="0" cy="0" r="14" fill="rgba(56,189,248,0.3)" />
                <path d="M0 -16 Q10 -6 0 10 Q-10 -6 0 -16 Z" fill="#7dd3fc" />
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
              </g>
            ))}
          </g>
        );

      case 'void-slayer':
      default:
        return (
          <g>
            <defs>
              <linearGradient id="vs-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#140217" />
                <stop offset="50%" stopColor="#24052a" />
                <stop offset="85%" stopColor="#100213" />
                <stop offset="100%" stopColor="#050006" />
              </linearGradient>
            </defs>

            <rect width="600" height="800" fill="url(#vs-bg)" />

            {/* Shattered Dimensional Glass Mirrors */}
            {[
              { p: "120,140 240,80 200,280", col: "#c084fc", op: 0.3 },
              { p: "380,90 510,160 420,290", col: "#d946ef", op: 0.35 },
              { p: "80,380 220,320 180,520", col: "#f43f5e", op: 0.25 },
              { p: "420,360 540,410 460,560", col: "#a855f7", op: 0.3 },
              { p: "240,40 360,60 300,180", col: "#e879f9", op: 0.4 },
            ].map((shard, i) => (
              <polygon key={`sh-${i}`} points={shard.p} fill={shard.col} opacity={shard.op} stroke="#ffffff" strokeWidth="0.75" />
            ))}

            {/* Singularity Void Core */}
            <circle cx="300" cy="360" r="140" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="12,18" opacity="0.6" />
            <circle cx="300" cy="360" r="80" fill="#040005" stroke="#f0abfc" strokeWidth="2" />
            <circle cx="300" cy="360" r="76" fill="#2e1065" opacity="0.6" />

            {/* Leaping Void Assassin Silhouette */}
            <g transform="translate(300, 360)">
              <polygon points="0,-40 25,-10 15,35 -15,35 -25,-10" fill="#060108" stroke="#d946ef" strokeWidth="1.5" />
              {/* Dual Obsidian Kunai with Violet Trails */}
              <line x1="-30" y1="10" x2="-110" y2="70" stroke="#f0abfc" strokeWidth="3" />
              <line x1="30" y1="10" x2="110" y2="70" stroke="#f0abfc" strokeWidth="3" />
            </g>
          </g>
        );
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* Dynamic 8K Vector Artwork Canvas */}
      <svg
        viewBox="0 0 600 800"
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {renderArtworkContent()}

        {/* Studio Red Hanko Stamp / Certificate Seal */}
        {showStamp && (
          <g transform="translate(515, 715)">
            <rect x="0" y="0" width="56" height="56" rx="4" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" opacity="0.9" />
            <text x="28" y="24" fill="#fef2f2" fontSize="13" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">影</text>
            <text x="28" y="44" fill="#fef2f2" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">スタジオ</text>
          </g>
        )}

        {/* Subtle Archival Giclée Paper Grain Overlay */}
        <rect width="600" height="800" fill="rgba(255,255,255,0.015)" style={{ mixBlendMode: 'overlay' }} />
      </svg>
    </div>
  );
};
