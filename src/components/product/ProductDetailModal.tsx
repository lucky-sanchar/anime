import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  Maximize2,
  Layers,
  Home,
  ZoomIn
} from 'lucide-react';
import { Product, ProductSize, FrameOption } from '../../types';
import { AnimeArtwork } from '../art/AnimeArtwork';
import { FRAME_OPTIONS } from '../../data/framesAndSizes';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: ProductSize, frame: FrameOption, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

type PreviewPerspective = 'art' | 'framed' | 'room' | 'macro';

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[1] || product.sizes[0]);
  const [selectedFrame, setSelectedFrame] = useState<FrameOption>(FRAME_OPTIONS[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [perspective, setPerspective] = useState<PreviewPerspective>('art');
  const [isAdded, setIsAdded] = useState(false);

  // Dynamic calculated price
  const calculatePrice = () => {
    const base = Math.round(product.price * selectedSize.priceModifier);
    return (base + selectedFrame.price) * quantity;
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedFrame, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop with strong blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0c0c14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        {/* Header Close & Badge bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#11111b]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold font-mono">
              {product.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-white/50 font-mono tracking-wider">
              {product.edition}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="detail-wishlist-toggle"
              onClick={() => onToggleWishlist(product.id)}
              className={`p-2 rounded-full border transition-all ${
                isWishlisted
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              id="detail-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Art Visualizer & Perspectives */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-xl overflow-hidden bg-[#07070c] border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Perspective 1: Pure 8K Master Artwork */}
              {perspective === 'art' && (
                <div className="w-full h-full p-2 transition-all duration-500">
                  <AnimeArtwork artId={product.artId} showStamp={true} />
                </div>
              )}

              {/* Perspective 2: Custom Selected Frame Mode */}
              {perspective === 'framed' && (
                <div className="p-8 w-full h-full flex items-center justify-center transition-all duration-500">
                  <div
                    className={`relative w-full h-full ${selectedFrame.borderStyle} transition-all duration-300 rounded-sm overflow-hidden bg-[#06060a]`}
                  >
                    <AnimeArtwork artId={product.artId} showStamp={true} />
                  </div>
                </div>
              )}

              {/* Perspective 3: Living Room Gallery Studio Mockup */}
              {perspective === 'room' && (
                <div className="relative w-full h-full bg-[#12121c] flex flex-col justify-between p-6 transition-all duration-500 overflow-hidden">
                  {/* Subtle luxury dark room wall background with spotlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
                  
                  {/* Wall Mounted Art */}
                  <div className="relative z-10 w-44 mx-auto my-auto shadow-[0_30px_60px_rgba(0,0,0,0.9)] ring-2 ring-white/10">
                    <div className={selectedFrame.borderStyle}>
                      <AnimeArtwork artId={product.artId} showStamp={true} />
                    </div>
                  </div>

                  {/* Designer Lounge Sofa Silhouette at bottom */}
                  <div className="relative z-10 w-full h-16 bg-[#08080f] rounded-t-2xl border-t border-white/5 flex items-center justify-center text-[10px] text-white/30 uppercase tracking-widest">
                    Living Room Scale Preview (18×24" Hanging)
                  </div>
                </div>
              )}

              {/* Perspective 4: Macro 8K Texture Zoom */}
              {perspective === 'macro' && (
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center p-2">
                  <div className="w-full h-full transform scale-150 transition-transform duration-700">
                    <AnimeArtwork artId={product.artId} showStamp={true} />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded border border-white/20 text-[10px] text-emerald-400 font-mono">
                    300 DPI Archival Cotton Rag Fiber
                  </div>
                </div>
              )}

              {/* High-res resolution tag */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 text-[10px] font-mono text-purple-300">
                {product.resolution}
              </div>
            </div>

            {/* Perspectives Selector Strip */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setPerspective('art')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border transition-all ${
                  perspective === 'art'
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>8K Master</span>
              </button>

              <button
                onClick={() => setPerspective('framed')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border transition-all ${
                  perspective === 'framed'
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Framed</span>
              </button>

              <button
                onClick={() => setPerspective('room')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border transition-all ${
                  perspective === 'room'
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Wall View</span>
              </button>

              <button
                onClick={() => setPerspective('macro')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border transition-all ${
                  perspective === 'macro'
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Texture</span>
              </button>
            </div>
          </div>

          {/* Right Column: Configurations, Customizer & Commerce Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="space-y-5">
              {/* Title & Kanji */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono text-purple-400 font-bold">
                    {product.kanjiTitle}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                    <span>★ {product.rating}</span>
                    <span className="text-white/40">({product.reviewsCount} reviews)</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
                  {product.name}
                </h2>
                <p className="text-sm text-purple-300/80 italic mt-1">
                  "{product.tagline}"
                </p>
              </div>

              {/* Artwork Description & Narrative Lore */}
              <div className="space-y-2 bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.06]">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-white/50 italic">
                  <span className="text-purple-400 font-semibold not-italic">Atelier Lore: </span>
                  {product.lore}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-white uppercase tracking-wider">Select Print Dimensions:</span>
                  <span className="text-white/40 font-mono">{selectedSize.dimensions}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSize(sz)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedSize.id === sz.id
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.2)]'
                          : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{sz.name}</span>
                        {sz.popular && (
                          <span className="text-[9px] bg-purple-500/30 text-purple-200 px-1.5 py-0.5 rounded font-mono">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-white/40 mt-0.5">{sz.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Selector */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-white uppercase tracking-wider">Select Framing Finish:</span>
                  <span className="text-white/40 font-mono">
                    {selectedFrame.price > 0 ? `+$${selectedFrame.price}` : 'Included'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FRAME_OPTIONS.map((frame) => (
                    <button
                      key={frame.id}
                      onClick={() => setSelectedFrame(frame)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedFrame.id === frame.id
                          ? 'bg-purple-600/20 border-purple-500 text-white'
                          : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span>{frame.name}</span>
                        <span className="font-mono text-purple-300">
                          {frame.price === 0 ? '$0' : `+$${frame.price}`}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/40 mt-1 line-clamp-1">{frame.material}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Summary Price Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">Qty:</span>
                  <div className="flex items-center bg-white/5 border border-white/15 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1.5 font-mono text-sm text-white font-semibold min-w-[32px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-white/40 uppercase">Total Investment:</span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    ${calculatePrice()}
                  </span>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                id="modal-add-to-cart-cta"
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/40 active:scale-[0.98]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Added to Cart Portfolio!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add {selectedSize.name} to Cart • ${calculatePrice()}</span>
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-white/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Museum 100-Year Color Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Free Insured Heavy-Tube Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
