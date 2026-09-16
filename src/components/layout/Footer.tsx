import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 text-white/70 relative overflow-hidden">
      {/* Newsletter VIP Club Banner */}
      <div className="border-b border-white/[0.08] bg-gradient-to-r from-purple-950/30 via-[#0a0a14] to-cyan-950/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Inner Circle Protocol</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                JOIN THE ATELIER ARCHIVE
              </h3>
              <p className="text-xs sm:text-sm text-white/50 max-w-md">
                Receive private access to limited 8K print batches, new original character lore, and 10% off your first museum piece.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-[#11111c] border border-white/15 rounded-xl p-1.5 focus-within:border-purple-500 shadow-xl transition-all">
                  <Mail className="w-4 h-4 text-white/40 ml-3 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your collector email address..."
                    className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-white/30 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 shrink-0 transition-all shadow-md active:scale-95"
                  >
                    <span>{subscribed ? 'Enrolled' : 'Subscribe'}</span>
                    {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-400 font-mono pl-1 animate-in fade-in">
                    ✓ Welcome to the Inner Circle. Use code <strong className="underline">KAGE8K</strong> for 10% off.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-700 to-black border border-purple-400/30 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg">
                影
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-[0.2em] text-white">
                  KAGE
                </span>
                <span className="text-[10px] block font-mono text-purple-400 tracking-widest uppercase">
                  8K Anime Art Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm font-light">
              Crafting museum-grade original anime wall art, archival Giclée prints, and luxury titanium framing for collectors who demand uncompromising visual depth.
            </p>

            <div className="flex items-center gap-3 text-white/50 pt-2">
              <span className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all">
                <Youtube className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all">
                <Globe className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Column: Collection */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Collection
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-white transition-colors">
                  All 8K Masterworks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('best-sellers')} className="hover:text-white transition-colors">
                  Hall of Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Exhibition Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Thematic Genres
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Genres */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Curated Genres
            </h4>
            <ul className="space-y-2 text-xs">
              {['Samurai', 'Cyber Anime', 'Dark Fantasy', 'Japanese Art', 'Mythical'].map((c) => (
                <li key={c}>
                  <button
                    onClick={() => {
                      onSelectCategory(c);
                      onNavigate('collection');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Atelier & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Client Care & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  Global Shipping & Packing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Atelier Lore & Ethics
                </button>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  100-Year Color Guarantee
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Certificate of Authenticity
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Privacy Policy & Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 KAGE Art Atelier. All rights reserved. 100% Original Anime Concept Art.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>NATIVE 8192 PX MASTER</span>
            <span>•</span>
            <span>GERMAN HAHNEMÜHLE RAG</span>
            <span>•</span>
            <span>GLOBAL DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
