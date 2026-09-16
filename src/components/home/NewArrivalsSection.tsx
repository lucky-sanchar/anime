import React from 'react';
import { Sparkles, Calendar, ArrowRight, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface NewArrivalsSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  products,
  onQuickView,
  onAddToCart,
}) => {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 3);

  return (
    <section className="py-20 bg-[#07070b] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fresh Studio Pressings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              NEW ARRIVALS ARCHIVE
            </h2>
            <p className="text-sm text-white/50 mt-1 max-w-xl">
              Recently completed 8K compositions fresh off our calibrated 12-color archival giclée printers.
            </p>
          </div>
        </div>

        {/* Visually Distinct New Arrivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-[#0e0e16] border border-cyan-500/20 hover:border-cyan-400/50 p-4 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              {/* Top Tag & Date */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono text-[10px] tracking-wider uppercase border border-cyan-500/30">
                  New Release
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/40 font-mono">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  Season 2026
                </span>
              </div>

              {/* Artwork Box */}
              <div
                onClick={() => onQuickView(product)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#06060a] border border-white/10 cursor-pointer"
              >
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <AnimeArtwork artId={product.artId} showStamp={true} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(product);
                  }}
                  className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-black/70 hover:bg-black text-white text-xs border border-white/20 backdrop-blur-md transition-all flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Details */}
              <div className="mt-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3
                    onClick={() => onQuickView(product)}
                    className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer font-display"
                  >
                    {product.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-cyan-300">
                    ${product.price}
                  </span>
                </div>

                <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-purple-400 font-mono">
                    {product.category}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-black text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-cyan-400 transition-all flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Collect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
