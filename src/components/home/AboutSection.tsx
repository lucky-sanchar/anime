import React from 'react';
import { Sparkles, Shield, Palette, Layers, Award, Printer } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Palette,
      title: '100% Original Fictional Lore',
      desc: 'Conceived from the ground up by visionary concept illustrators. We invent unique anime worlds, characters, and mythology—completely free from copyrighted clones or franchises.'
    },
    {
      icon: Layers,
      title: 'Native 8,192px Precision',
      desc: 'Rendered at uncompromising 8K master resolutions. Every katana edge, atmospheric rain streak, and glowing kanji seal remains razor-sharp even when printed at monumental 4-foot wall dimensions.'
    },
    {
      icon: Printer,
      title: 'Museum Giclée Archival Rag',
      desc: 'Executed on German 310gsm Hahnemühle Photo Rag utilizing 12-channel Lucia PRO pigment ink formulations, verified to resist light degradation and fading for over 100 years.'
    },
    {
      icon: Award,
      title: 'Signed Atelier Seal & Certificate',
      desc: 'Each physical shipment arrives with a serialized Certificate of Authenticity and an embossed traditional vermilion Hanko seal (影スタジオ) verifying its gallery origin.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#08080d] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Decorative Crest */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[24vw] font-bold text-white/[0.015] font-display pointer-events-none select-none">
        影
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Atelier Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display leading-tight">
              WHERE ANIME ELEVATES TO FINE ART.
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              KAGE was founded with a singular artistic ambition: to liberate anime art from cheap paper posters and plastic merchandise, transforming it into museum-grade contemporary gallery installations.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Our collective of digital painters and creative directors blend feudal Japanese sumi-e philosophy, neo-Tokyo cyberpunk futurism, and dramatic cinematic lighting into evocative original universes.
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
                Copyright Integrity Pledge
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                We believe true artistry demands original invention. None of our artworks depict, recreate, or scrape copyrighted intellectual property. Every stroke, character silhouette, and narrative motif is the proud original work of our independent studio.
              </p>
            </div>
          </div>

          {/* Right Pillar Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0f0f18] border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-3 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
