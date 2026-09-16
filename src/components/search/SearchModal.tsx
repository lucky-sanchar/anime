import React, { useState, useMemo } from 'react';
import { Search, X, Tag, ArrowUpRight, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract top tags
  const popularTags = useMemo(() => {
    const tagSet = new Set<string>();
    products.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).slice(0, 8);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesText =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTag = !selectedTag || p.tags.includes(selectedTag);

      return matchesText && matchesTag;
    });
  }, [products, query, selectedTag]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#0f0f18] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-[#131320]">
          <Search className="w-5 h-5 text-purple-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by artwork name, category, or tag (e.g. Ronin, Cyber, Moon, Katana)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-white/40 hover:text-white text-xs px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tag Filters Row */}
        <div className="px-5 py-3 border-b border-white/5 bg-[#0a0a10] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-white/40 flex items-center gap-1 shrink-0">
            <Tag className="w-3 h-3" /> Quick Filter:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-white/40 text-sm">
              No original anime artworks found matching <strong className="text-white">"{query}"</strong>.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 cursor-pointer flex items-center justify-between gap-4 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 aspect-[3/4] rounded-md overflow-hidden bg-[#07070b] border border-white/10 shrink-0">
                    <AnimeArtwork artId={product.artId} showStamp={false} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors font-display">
                        {product.name}
                      </h4>
                      <span className="text-[10px] text-purple-400 font-mono">
                        {product.kanjiTitle}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 line-clamp-1">{product.tagline}</p>
                    <div className="flex gap-1.5 mt-1">
                      <span className="text-[10px] px-1.5 py-0.2 bg-white/5 text-white/60 rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-sm font-bold text-white">
                    ${product.price}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
