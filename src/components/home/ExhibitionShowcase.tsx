import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Eye } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface ExhibitionShowcaseProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ExhibitionShowcase: React.FC<ExhibitionShowcaseProps> = ({
  products,
  onSelectProduct,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="gallery" className="py-24 bg-[#090910] border-y border-white/[0.06] relative overflow-hidden">
      {/* Background Japanese Calligraphy Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold text-white/[0.015] font-display pointer-events-none select-none">
        展覧会
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immersive Exhibition Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              THE 8K MASTER GALLERY
            </h2>
            <p className="text-sm text-white/50 max-w-xl mt-1">
              Scroll through curated exhibition pieces. Every artwork is an original universe conceived and rendered in extreme resolution.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="w-[300px] sm:w-[380px] shrink-0 snap-center group relative cursor-pointer"
          >
            {/* Museum Exhibition Plaque Card */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0a0a12] border border-white/10 group-hover:border-purple-500/40 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(147,51,234,0.2)]">
              {/* Artwork */}
              <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                <AnimeArtwork artId={product.artId} showStamp={true} />
              </div>

              {/* Dramatic Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Corner Exhibition Index */}
              <div className="absolute top-4 left-4 font-mono text-xs text-white/40 bg-black/60 px-2.5 py-1 rounded border border-white/10 backdrop-blur-md">
                EXHIBIT #{String(idx + 1).padStart(2, '0')}
              </div>

              {/* View Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-4 py-2 rounded-full bg-purple-600/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-purple-400/40 flex items-center gap-2 shadow-xl">
                  <Eye className="w-4 h-4" />
                  <span>Inspect Masterwork</span>
                </div>
              </div>

              {/* Bottom Plaque Information */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">
                    {product.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {product.kanjiTitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-display mt-1 group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-white/60 line-clamp-1 mt-1 font-light">
                  {product.tagline}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs text-white/40 font-mono">Archival Fine Art</span>
                  <span className="font-mono text-base font-bold text-white">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
