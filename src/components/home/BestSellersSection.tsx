import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface BestSellersSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers" className="py-20 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Acclaimed by Collectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              HALL OF MASTERWORKS
            </h2>
            <p className="text-sm text-white/50 mt-1 max-w-xl">
              Our most coveted original anime prints. Highly sought by private collectors, studios, and modern luxury spaces worldwide.
            </p>
          </div>

          <div className="text-xs font-mono text-white/40 self-start md:self-auto">
            Ranked by Global Atelier Demands
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, idx) => (
            <div key={product.id} className="relative">
              {/* Gold Ranking Rank Crown Badge */}
              <div className="absolute -top-3 -left-3 z-30 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-mono font-black text-xs flex items-center justify-center shadow-lg border-2 border-[#101018]">
                #{idx + 1}
              </div>
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
