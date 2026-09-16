import React, { useState, useMemo } from 'react';
import {
  Filter,
  ArrowUpDown,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
  Search
} from 'lucide-react';
import { Product, ProductCategory, SortOption } from '../../types';
import { CATEGORIES } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

interface CollectionSectionProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  cartProductIds: string[];
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  cartProductIds,
}) => {
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<'all' | 'under90' | '90to100' | 'over100'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange === 'under90') {
      list = list.filter((p) => p.price < 90);
    } else if (priceRange === '90to100') {
      list = list.filter((p) => p.price >= 90 && p.price <= 100);
    } else if (priceRange === 'over100') {
      list = list.filter((p) => p.price > 100);
    }

    // Inline search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortOption) {
      case 'popular':
        list.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return list;
  }, [products, selectedCategory, priceRange, searchQuery, sortOption]);

  const resetFilters = () => {
    onSelectCategory('All');
    setPriceRange('all');
    setSearchQuery('');
    setSortOption('featured');
  };

  return (
    <section id="collection" className="py-24 bg-[#09090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-purple-400 font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Atelier Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              ORIGINAL ARTWORKS
            </h2>
            <p className="text-sm text-white/50 mt-1 max-w-xl">
              Authentic Japanese-inspired digital anime masterpieces rendered in native 8K. Every piece is strictly unique and fictional.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <span>Showing:</span>
            <strong className="text-purple-300 font-bold">{filteredAndSortedProducts.length}</strong>
            <span>of {products.length} Masterworks</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#10101a] border border-white/10 rounded-2xl p-4 mb-8 space-y-4 shadow-xl">
          {/* Top Row: Categories Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search, Price Filters & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
            {/* Inline Quick Search */}
            <div className="relative flex-1 min-w-[220px] max-w-sm">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by keyword (e.g. Katana, Dragon)..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-white/40 outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Price Filter Pills */}
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="text-[11px] uppercase tracking-wider text-white/40 mr-1 hidden sm:inline">
                Price:
              </span>
              <button
                onClick={() => setPriceRange('all')}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  priceRange === 'all'
                    ? 'bg-white/15 text-white font-medium'
                    : 'bg-white/[0.03] text-white/50 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setPriceRange('under90')}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  priceRange === 'under90'
                    ? 'bg-white/15 text-white font-medium'
                    : 'bg-white/[0.03] text-white/50 hover:text-white'
                }`}
              >
                &lt; $90
              </button>
              <button
                onClick={() => setPriceRange('90to100')}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  priceRange === '90to100'
                    ? 'bg-white/15 text-white font-medium'
                    : 'bg-white/[0.03] text-white/50 hover:text-white'
                }`}
              >
                $90 - $100
              </button>
              <button
                onClick={() => setPriceRange('over100')}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  priceRange === 'over100'
                    ? 'bg-white/15 text-white font-medium'
                    : 'bg-white/[0.03] text-white/50 hover:text-white'
                }`}
              >
                $100+
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-[#181826] text-white/80 border border-white/15 rounded-xl px-3 py-1.5 text-xs outline-none cursor-pointer focus:border-purple-400"
              >
                <option value="featured">Sort: Atelier Featured</option>
                <option value="popular">Sort: Most Popular</option>
                <option value="newest">Sort: New Releases</option>
                <option value="price-asc">Sort: Price Low → High</option>
                <option value="price-desc">Sort: Price High → Low</option>
              </select>

              {(selectedCategory !== 'All' || priceRange !== 'all' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  title="Reset all filters"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-rose-400 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#0f0f18] border border-white/10 space-y-4">
            <SlidersHorizontal className="w-10 h-10 text-white/20 mx-auto" />
            <div>
              <h3 className="text-lg font-bold text-white font-display">No Artworks Found</h3>
              <p className="text-xs text-white/40 mt-1 max-w-md mx-auto">
                No original anime masterworks matched your selected filter criteria.
              </p>
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
                isInCart={cartProductIds.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
