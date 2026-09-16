import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Layers,
  Flame,
  Info
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'collection', label: 'Collection' },
    { id: 'categories', label: 'Categories' },
    { id: 'gallery', label: 'Exhibition' },
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'about', label: 'Atelier Story' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-rose-500 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090e]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logo Crest */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-700 to-black border border-purple-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.35)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all">
              <span className="font-mono font-bold text-white text-base tracking-tighter">
                影
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg tracking-[0.2em] text-white group-hover:text-purple-300 transition-colors">
                  KAGE
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 tracking-widest">
                  8K
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase">
                Anime Art Atelier
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Trigger */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              aria-label="Search original anime artwork"
              className="p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors relative"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Trigger */}
            <button
              id="nav-wishlist-btn"
              onClick={onOpenWishlist}
              aria-label="View saved wishlist"
              className="p-2.5 rounded-full text-white/70 hover:text-rose-400 hover:bg-white/10 transition-colors relative"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center shadow-md animate-in zoom-in-50">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              aria-label="View shopping cart"
              className="p-2.5 rounded-full text-white/90 hover:text-purple-300 hover:bg-white/10 transition-colors relative"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center shadow-md animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a12]/95 backdrop-blur-2xl border-b border-white/10 px-5 py-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>8K Native Archival Atelier</span>
              <span className="font-mono text-purple-400">Edition 2026</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
