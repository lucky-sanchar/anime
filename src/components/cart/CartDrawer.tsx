import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
}) => {
  const [showDemoCheckoutModal, setShowDemoCheckoutModal] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const shippingThreshold = 150;
  const isFreeShipping = subtotal >= shippingThreshold || subtotal === 0;
  const shippingCost = isFreeShipping ? 0 : 15;
  const total = subtotal + shippingCost;
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-50">
        <div className="w-screen max-w-md bg-[#0e0e16] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#12121e]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-purple-400" />
              <h2 className="text-base font-semibold text-white tracking-wider uppercase font-display">
                Collector Portfolio ({totalItemCount})
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  id="clear-cart-btn"
                  onClick={onClearCart}
                  title="Clear all artwork"
                  className="text-xs text-white/40 hover:text-rose-400 transition-colors px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                id="close-cart-btn"
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="px-5 py-3 bg-[#161624] border-b border-white/5 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-400">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="font-medium">You have unlocked complimentary global tube shipping!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Add <strong className="text-purple-300 font-mono">${shippingThreshold - subtotal}</strong> more for free insured shipping</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">Your Portfolio is Empty</h3>
                  <p className="text-xs text-white/40 mt-1 max-w-xs">
                    Curate your space with native 8K original anime masterworks and museum-grade framing.
                  </p>
                </div>
                <button
                  id="empty-cart-explore-btn"
                  onClick={onContinueShopping}
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-lg"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all flex gap-3.5"
                >
                  {/* Artwork Thumbnail */}
                  <div className="w-20 aspect-[3/4] rounded-lg overflow-hidden shrink-0 bg-[#07070b] border border-white/10 relative">
                    <AnimeArtwork artId={item.product.artId} showStamp={false} />
                  </div>

                  {/* Item Specs & Quantities */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-semibold text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-white/30 hover:text-rose-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-purple-300/80 font-mono mt-0.5">
                        {item.size.name} ({item.size.dimensions})
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5">
                        Finish: {item.frame.name}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/5">
                      {/* Quantity control */}
                      <div className="flex items-center bg-white/5 border border-white/10 rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-white/60 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-white/60 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="font-mono text-sm font-semibold text-white">
                        ${item.unitPrice * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 bg-[#12121e] border-t border-white/10 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">${subtotal}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Archival Tube Shipping:</span>
                  <span className="font-mono text-white">
                    {isFreeShipping ? 'FREE' : `$${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-white/10">
                  <span>Total Investment:</span>
                  <span className="font-mono text-lg text-purple-300">${total}</span>
                </div>
              </div>

              {/* Checkout Preview Button */}
              <button
                id="checkout-preview-btn"
                onClick={() => setShowDemoCheckoutModal(true)}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all active:scale-95"
              >
                <span>Checkout Preview</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="continue-shopping-btn"
                onClick={onContinueShopping}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-medium uppercase tracking-wider rounded-lg border border-white/10 transition-all text-center"
              >
                Continue Browsing Gallery
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certificate of Authenticity & Signed Seal included</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {showDemoCheckoutModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="w-full max-w-md bg-[#13131f] border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-white font-display">
                Demo Checkout Notice
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Payment integration is currently unavailable. This is a demo checkout.
              </p>
              <p className="text-[11px] text-white/40 pt-1">
                This project represents a high-end anime fine art e-commerce experience. Your cart selections are preserved locally in your browser session.
              </p>
            </div>

            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10 text-xs font-mono text-white/80 space-y-1">
              <div className="flex justify-between">
                <span>Selected Artworks:</span>
                <span>{totalItemCount} Prints</span>
              </div>
              <div className="flex justify-between">
                <span>Order Total:</span>
                <span className="text-purple-300 font-bold">${total}</span>
              </div>
            </div>

            <button
              onClick={() => setShowDemoCheckoutModal(false)}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-all shadow-lg"
            >
              Understood • Return to Atelier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
