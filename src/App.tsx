import React, { useState, useEffect } from 'react';
import { Product, CartItem, ProductCategory, ProductSize, FrameOption, ToastMessage } from './types';
import { PRODUCTS } from './data/products';
import { STANDARD_SIZES, FRAME_OPTIONS } from './data/framesAndSizes';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { ExhibitionShowcase } from './components/home/ExhibitionShowcase';
import { CategoryGrid } from './components/home/CategoryGrid';
import { FeaturedSpotlight } from './components/home/FeaturedSpotlight';
import { BestSellersSection } from './components/home/BestSellersSection';
import { NewArrivalsSection } from './components/home/NewArrivalsSection';
import { CollectionSection } from './components/collection/CollectionSection';
import { AboutSection } from './components/home/AboutSection';
import { FaqSection } from './components/home/FaqSection';
import { Footer } from './components/layout/Footer';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { WishlistDrawer } from './components/wishlist/WishlistDrawer';
import { SearchModal } from './components/search/SearchModal';
import { ToastContainer } from './components/common/ToastContainer';
import { BackToTopButton } from './components/common/BackToTopButton';
import { NotFoundView } from './components/common/NotFoundView';

const CART_STORAGE_KEY = 'kage_anime_cart_v1';
const WISHLIST_STORAGE_KEY = 'kage_anime_wishlist_v1';

export default function App() {
  // Cart State with LocalStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State with LocalStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [activeSection, setActiveSection] = useState('hero');
  const [is404Mode, setIs404Mode] = useState(false);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  // Toast Helper
  const addToast = (title: string, description?: string, type?: 'success' | 'info' | 'cart' | 'wishlist') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Operations
  const handleAddToCart = (
    product: Product,
    size: ProductSize = product.sizes[1] || STANDARD_SIZES[0],
    frame: FrameOption = FRAME_OPTIONS[0],
    quantity: number = 1
  ) => {
    const basePrice = Math.round(product.price * size.priceModifier);
    const unitPrice = basePrice + frame.price;
    const itemId = `${product.id}-${size.id}-${frame.id}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, size, frame, quantity, unitPrice }];
    });

    addToast(
      `${product.name} Added`,
      `${size.name} • ${frame.name} (${quantity} ${quantity > 1 ? 'prints' : 'print'})`,
      'cart'
    );
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    const item = cartItems.find((i) => i.id === itemId);
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
    if (item) {
      addToast(`Removed from Portfolio`, item.product.name, 'info');
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    addToast('Portfolio Cleared', 'All artworks removed from cart', 'info');
  };

  // Wishlist Operations
  const handleToggleWishlist = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    if (wishlistIds.includes(productId)) {
      setWishlistIds((prev) => prev.filter((id) => id !== productId));
      addToast('Removed from Wishlist', product.name, 'wishlist');
    } else {
      setWishlistIds((prev) => [...prev, productId]);
      addToast('Archived in Wishlist', product.name, 'wishlist');
    }
  };

  // Navigation Helper
  const scrollToSection = (sectionId: string) => {
    setIs404Mode(false);
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -70;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const cartProductIds = cartItems.map((item) => item.product.id);
  const featuredProduct = PRODUCTS.find((p) => p.artId === 'neon-shogun') || PRODUCTS[1];

  return (
    <div className="min-h-screen bg-[#09090e] text-[#f1f1f6] flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Sticky Translucent Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      {is404Mode ? (
        <main className="flex-1 pt-20">
          <NotFoundView onReturnHome={() => setIs404Mode(false)} />
        </main>
      ) : (
        <main className="flex-1">
          {/* 1. Cinematic Hero Section */}
          <HeroSection
            onExplore={() => scrollToSection('collection')}
            onViewBestSellers={() => scrollToSection('best-sellers')}
            onInspectHeroArt={() => setInspectingProduct(PRODUCTS[0])}
          />

          {/* 2. Interactive Artwork Gallery Horizontal Showcase */}
          <ExhibitionShowcase
            products={PRODUCTS}
            onSelectProduct={(p) => setInspectingProduct(p)}
          />

          {/* 3. Product Categories Grid */}
          <CategoryGrid
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />

          {/* 4. Featured Centerpiece Masterwork */}
          <FeaturedSpotlight
            product={featuredProduct}
            onInspect={(p) => setInspectingProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
          />

          {/* 5. Best Sellers Section */}
          <BestSellersSection
            products={PRODUCTS}
            onQuickView={(p) => setInspectingProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />

          {/* 6. New Arrivals Archive */}
          <NewArrivalsSection
            products={PRODUCTS}
            onQuickView={(p) => setInspectingProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
          />

          {/* 7. Master Collection with Filter, Search & Sort */}
          <CollectionSection
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onQuickView={(p) => setInspectingProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            cartProductIds={cartProductIds}
          />

          {/* 8. Studio Story & Craftsmanship Pillars */}
          <AboutSection />

          {/* 9. FAQ Accordion */}
          <FaqSection />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('collection');
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={inspectingProduct}
        isOpen={!!inspectingProduct}
        onClose={() => setInspectingProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={inspectingProduct ? wishlistIds.includes(inspectingProduct.id) : false}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onContinueShopping={() => {
          setIsCartOpen(false);
          scrollToSection('collection');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistedProducts={wishlistedProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
        onSelectProduct={(p) => setInspectingProduct(p)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setInspectingProduct(p)}
      />

      {/* Floating Back to Top Button */}
      <BackToTopButton />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
