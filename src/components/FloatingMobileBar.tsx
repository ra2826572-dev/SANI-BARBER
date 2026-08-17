import React from 'react';
import { Calendar, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getShopStatus } from '../utils/timeUtils';

interface FloatingMobileBarProps {
  onBookClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onBookClick }) => {
  const shopStatus = getShopStatus();

  return (
    <div
      id="floating-mobile-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-amber-500/20 px-4 py-2.5 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 text-amber-400" />
          <span>Directions</span>
        </a>

        <button
          type="button"
          onClick={onBookClick}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
