import React from 'react';
import { X, Heart, Trash2, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistedProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-50">
        <div className="w-screen max-w-md bg-[#0e0e16] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#12121e]">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
              <h2 className="text-base font-semibold text-white tracking-wider uppercase font-display">
                Wishlist Archive ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">No Saved Masterworks</h3>
                  <p className="text-xs text-white/40 mt-1 max-w-xs">
                    Click the heart icon on any artwork to archive it in your personal wishlist collection.
                  </p>
                </div>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all flex gap-3.5 items-center"
                >
                  <div
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-16 aspect-[3/4] rounded-lg overflow-hidden shrink-0 bg-[#07070b] border border-white/10 cursor-pointer"
                  >
                    <AnimeArtwork artId={product.artId} showStamp={false} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] text-purple-400 font-mono uppercase tracking-wider">
                          {product.category}
                        </span>
                        <h4
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="text-sm font-semibold text-white hover:text-purple-300 cursor-pointer transition-colors"
                        >
                          {product.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-white/30 hover:text-rose-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                      <span className="font-mono text-xs font-semibold text-white">
                        From ${product.price}
                      </span>
                      <button
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="px-3 py-1.5 bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white rounded-lg text-xs font-medium flex items-center gap-1.5 border border-purple-500/40 transition-all"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistedProducts.length > 0 && (
            <div className="p-4 bg-[#12121e] border-t border-white/10 text-center text-xs text-white/40">
              <span className="flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Wishlist saved in local browser storage
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
