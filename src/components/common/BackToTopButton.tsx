import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-[#141422]/90 hover:bg-purple-600 text-white/70 hover:text-white border border-white/10 hover:border-purple-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
