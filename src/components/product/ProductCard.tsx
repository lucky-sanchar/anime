import React from 'react';
import { Heart, Eye, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';
import { ParallaxTiltCard } from '../common/ParallaxTiltCard';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  isInCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isInCart = false,
}) => {
  return (
    <ParallaxTiltCard
      glowColor={product.palette.glow || 'rgba(168, 85, 247, 0.35)'}
      className="bg-[#101018] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Artwork Container */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#07070b] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* SVG Master Artwork with hover zoom */}
        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
          <AnimeArtwork artId={product.artId} showStamp={true} />
        </div>

        {/* Subtle Dark Vignette gradient over art */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-black/25 opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20 pointer-events-none">
          {product.isBestSeller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full backdrop-blur-md">
              New Master
            </span>
          )}
          <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-black/60 text-white/70 border border-white/10 rounded backdrop-blur-md">
            8K Giclée
          </span>
        </div>

        {/* Wishlist Button (Always accessible, top-right) */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-20 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 ${
            isWishlisted
              ? 'bg-rose-500/90 text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]'
              : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/80 hover:scale-110'
          }`}
        >
          <Heart className={`w-4 h-4 transition-transform ${isWishlisted ? 'fill-current scale-110' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Eye className="w-4 h-4 text-purple-300" />
            <span>Inspect 8K Details</span>
          </button>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#101018]">
        <div>
          {/* Category & Kanji */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-purple-400/90 font-medium tracking-wider uppercase text-[11px]">
              {product.category}
            </span>
            <span className="text-white/30 font-mono text-[11px] tracking-widest">
              {product.kanjiTitle}
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors cursor-pointer line-clamp-1 font-display"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-white/50 line-clamp-2 mt-1 mb-3 leading-relaxed">
            {product.tagline}
          </p>

          {/* Available Sizes preview pills */}
          <div className="flex items-center gap-1.5 flex-wrap mb-4">
            <span className="text-[10px] text-white/40 uppercase tracking-wider">Sizes:</span>
            {['12×18"', '18×24"', '24×36"'].map((sz) => (
              <span
                key={sz}
                className="text-[10px] px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-white/70"
              >
                {sz}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/40 uppercase tracking-wider">From</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white font-mono">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-white/40 line-through font-mono">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            id={`add-to-cart-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-200 ${
              isInCart
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] active:scale-95'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>In Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </ParallaxTiltCard>
  );
};
