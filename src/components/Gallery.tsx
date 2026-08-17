import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, Info, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Haircuts', 'Beard', 'Styling', 'Shop Interior', 'Grooming', 'Kids'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-neutral-950/90 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
            Style & Grooming Gallery
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Explore grooming styles, clean cuts, and barbering techniques inspired by modern aesthetics and classic care.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/60 px-3.5 py-1.5 rounded-full border border-neutral-800">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated style & grooming references for Sani Barber clients in Faisalabad</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/90 hover:border-amber-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-neutral-300">
                    {item.category}
                  </span>
                </div>

                {/* Click to expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-950/70 border border-neutral-700 flex items-center justify-center text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                </div>

                {/* Caption & Title at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-base font-bold text-neutral-100 group-hover:text-amber-300 transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-neutral-900 border border-amber-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              id="gallery-modal-close-btn"
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-200 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {activeModalImage.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-neutral-100 mt-2 font-heading">
                  {activeModalImage.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {activeModalImage.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveModalImage(null);
                  const el = document.querySelector('#appointment');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-colors"
              >
                Request Appointment
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
