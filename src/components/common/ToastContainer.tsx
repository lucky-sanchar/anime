import React from 'react';
import { ShoppingBag, Heart, CheckCircle2, X } from 'lucide-react';
import { ToastMessage } from '../../types';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-60 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isCart = toast.type === 'cart';
        const isWishlist = toast.type === 'wishlist';

        return (
          <div
            key={toast.id}
            className="pointer-events-auto p-4 rounded-xl bg-[#12121e]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  isCart
                    ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                    : isWishlist
                    ? 'bg-rose-600/20 text-rose-400 border border-rose-500/30'
                    : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {isCart && <ShoppingBag className="w-4 h-4" />}
                {isWishlist && <Heart className="w-4 h-4 fill-current" />}
                {!isCart && !isWishlist && <CheckCircle2 className="w-4 h-4" />}
              </div>

              <div>
                <div className="text-xs font-semibold text-white font-display">
                  {toast.title}
                </div>
                {toast.description && (
                  <div className="text-[11px] text-white/50 mt-0.5">
                    {toast.description}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-white/40 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
