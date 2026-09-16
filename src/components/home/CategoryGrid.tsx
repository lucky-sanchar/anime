import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { ProductCategory } from '../../types';

interface CategoryGridProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  // Map decorative accents for category visual cards
  const categoryAccents: Record<string, { bgGrad: string; glow: string; glyph: string }> = {
    Samurai: {
      bgGrad: 'from-red-950/40 via-rose-900/20 to-black',
      glow: 'rgba(239, 68, 68, 0.3)',
      glyph: '武士',
    },
    'Cyber Anime': {
      bgGrad: 'from-cyan-950/40 via-blue-900/20 to-black',
      glow: 'rgba(6, 182, 212, 0.3)',
      glyph: '電脳',
    },
    'Dark Fantasy': {
      bgGrad: 'from-purple-950/40 via-fuchsia-900/20 to-black',
      glow: 'rgba(168, 85, 247, 0.3)',
      glyph: '暗黒',
    },
    'Japanese Art': {
      bgGrad: 'from-indigo-950/40 via-slate-900/20 to-black',
      glow: 'rgba(99, 102, 241, 0.3)',
      glyph: '和風',
    },
    Mythical: {
      bgGrad: 'from-sky-950/40 via-teal-900/20 to-black',
      glow: 'rgba(14, 165, 233, 0.3)',
      glyph: '神話',
    },
    'Minimal Anime': {
      bgGrad: 'from-zinc-900/40 via-stone-900/20 to-black',
      glow: 'rgba(212, 212, 216, 0.25)',
      glyph: '禅微',
    },
    Cinematic: {
      bgGrad: 'from-emerald-950/40 via-teal-900/20 to-black',
      glow: 'rgba(16, 185, 129, 0.3)',
      glyph: '映画',
    },
    'Shonen-Inspired': {
      bgGrad: 'from-amber-950/40 via-orange-900/20 to-black',
      glow: 'rgba(245, 158, 11, 0.3)',
      glyph: '少年',
    },
    All: {
      bgGrad: 'from-purple-950/30 via-indigo-900/20 to-black',
      glow: 'rgba(147, 51, 234, 0.25)',
      glyph: '全集',
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#07070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-purple-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thematic Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            CURATED GENRES
          </h2>
          <p className="text-sm text-white/50">
            Explore diverse anime aesthetic disciplines from feudal ink warfare to rain-drenched cyberpunk megastructures.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.filter(c => c.id !== 'All').map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const style = categoryAccents[cat.id] || categoryAccents.All;

            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id as ProductCategory);
                  const coll = document.getElementById('collection');
                  if (coll) coll.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-44 ${
                  isSelected
                    ? 'border-purple-500 bg-[#121222] shadow-[0_0_25px_rgba(147,51,234,0.3)]'
                    : 'border-white/[0.08] bg-[#0d0d15] hover:border-white/20 hover:bg-[#11111c]'
                }`}
              >
                {/* Subtle Ambient Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${style.bgGrad} opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Background Japanese Calligraphy Glyph */}
                <div className="absolute right-3 bottom-2 text-6xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors font-display select-none pointer-events-none">
                  {style.glyph}
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-xs text-white/40 group-hover:text-purple-300 transition-colors">
                    {cat.count} Masterworks
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-purple-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 line-clamp-1 font-light">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
