import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Compass, ChevronDown } from 'lucide-react';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface HeroSectionProps {
  onExplore: () => void;
  onViewBestSellers: () => void;
  onInspectHeroArt: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onViewBestSellers,
  onInspectHeroArt,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#07070b]"
    >
      {/* Cinematic Ambient Background Glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[140px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[150px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
        }}
      />

      {/* Subtle Floating Light Particles in Canvas/CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute rounded-full bg-purple-400/40 animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 37) % 95}%`,
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${(i % 3) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography, Value Proposition & Actions */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Studio Prestige Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest text-purple-300 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>ORIGINAL 8K ATELIER ARCHIVE</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">NO RESELLERS</span>
          </div>

          {/* Strong Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white font-display leading-[1.08]">
              ART THAT <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                FEELS ALIVE.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Premium 8K anime-inspired artwork for your space. Hand-rendered original compositions printed on 310gsm archival cotton rag with lifetime luminance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              id="hero-explore-btn"
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all active:scale-95 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-bestsellers-btn"
              onClick={onViewBestSellers}
              className="w-full sm:w-auto px-7 py-4 bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs tracking-widest uppercase rounded-xl border border-white/15 flex items-center justify-center gap-2 backdrop-blur-md transition-all active:scale-95"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>View Best Sellers</span>
            </button>
          </div>

          {/* Key Print Specifications Strip */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white">8,192 px</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Ultra-Res Master</div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white">100 Yrs</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Colorfast Guarantee</div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white">Zero</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Copyright Clones</div>
            </div>
          </div>
        </div>

        {/* Right Column: Parallax Master Artwork Feature Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={onInspectHeroArt}
            className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] cursor-pointer group will-change-transform"
            style={{
              transform: `perspective(1200px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
          >
            {/* Outer Soft Light Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-rose-600/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Frame Body */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0a0a10] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <AnimeArtwork artId="crimson-ronin" showStamp={true} />

                {/* Overlaid Hero Badge */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-mono text-rose-400 tracking-wider">
                      Featured Masterwork
                    </div>
                    <div className="text-base font-semibold text-white font-display">
                      Crimson Ronin
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-white/50 line-through">$120</div>
                    <div className="text-lg font-mono font-bold text-white">$89</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Inspection Prompt Pill */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-purple-600 text-white font-mono text-[10px] tracking-widest uppercase shadow-lg border border-purple-400/40 flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-3 h-3" />
              Click to Inspect
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-1 text-white/30 text-[10px] uppercase tracking-widest animate-pulse">
          <span>Scroll down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
