import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface FeaturedSpotlightProps {
  product: Product;
  onInspect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FeaturedSpotlight: React.FC<FeaturedSpotlightProps> = ({
  product,
  onInspect,
  onAddToCart,
}) => {
  return (
    <section className="py-24 bg-[#08080e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0e0e18] shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Atelier Centerpiece</span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-purple-400 font-mono text-sm tracking-widest mb-1">
                  <span>{product.kanjiTitle}</span>
                  <span>•</span>
                  <span>{product.edition}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                  {product.name}
                </h2>
                <p className="text-base text-purple-200/80 italic mt-2">
                  "{product.tagline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/60 space-y-2">
                <div className="font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Curator’s Technical Analysis</span>
                </div>
                <p className="leading-relaxed">
                  {product.artistNote}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onInspect(product)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-widest uppercase rounded-xl flex items-center gap-3 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all active:scale-95"
                >
                  <span>Inspect Masterwork In Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="font-mono text-2xl font-bold text-white pl-2">
                  ${product.price}
                  <span className="text-xs text-white/40 font-normal font-sans ml-2 uppercase">Starting price</span>
                </div>
              </div>
            </div>

            {/* Right Artwork Showcase Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => onInspect(product)}
                className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-2 bg-[#08080f] group cursor-pointer hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <AnimeArtwork artId={product.artId} showStamp={true} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-300 border border-white/15 backdrop-blur-md">
                    Click to View In Room
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
