import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { AnimeArtwork } from '../art/AnimeArtwork';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#09090e]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-36 aspect-[3/4] mx-auto rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
          <AnimeArtwork artId="void-slayer" showStamp={false} />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
            Dimensional Singularity • 404
          </span>
          <h2 className="text-3xl font-bold text-white font-display">
            LOST IN THE VOID
          </h2>
          <p className="text-xs text-white/50 leading-relaxed max-w-sm mx-auto">
            The masterwork coordinate you requested has drifted beyond our archive into the dimensional rift.
          </p>
        </div>

        <button
          onClick={onReturnHome}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-2 mx-auto transition-all shadow-lg active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Return to Atelier Gallery</span>
        </button>
      </div>
    </div>
  );
};
