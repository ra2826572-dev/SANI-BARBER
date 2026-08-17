import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Copy, 
  Check, 
  Phone, 
  ExternalLink, 
  Compass, 
  Building2, 
  Car, 
  Languages, 
  Layers, 
  Maximize2 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { OpeningHours } from './OpeningHours';

export const LocationSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'en' | 'ur' | null>(null);
  const [addressLanguage, setAddressLanguage] = useState<'en' | 'ur'>('en');
  const [mapTheme, setMapTheme] = useState<'dark' | 'standard'>('dark');

  const handleCopyAddress = (type: 'en' | 'ur') => {
    const textToCopy = type === 'en' ? BUSINESS_INFO.address.full : BUSINESS_INFO.address.urduFull;
    navigator.clipboard.writeText(textToCopy);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="location" className="relative py-20 lg:py-28 bg-neutral-950/90 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Map & Location • لوکیشن اور پتہ</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
            Find Sani Barber in Faisalabad
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Conveniently located on Ghulistaan Road in Gulshan Colony, Faisalabad. Get instant live GPS directions or copy the local address.
          </p>
        </div>

        {/* 2-Column Layout: Map & Info on Left, Opening Hours on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map & Address Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Address Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl space-y-5">
              
              {/* Header with Language Selector */}
              <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Official Location Details
                  </span>
                </div>

                {/* Language Switcher */}
                <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setAddressLanguage('en')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      addressLanguage === 'en'
                        ? 'bg-amber-500 text-neutral-950 shadow'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddressLanguage('ur')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      addressLanguage === 'ur'
                        ? 'bg-amber-500 text-neutral-950 shadow'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    اردو
                  </button>
                </div>
              </div>

              {/* Address Body */}
              <div className="space-y-2">
                {addressLanguage === 'en' ? (
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-100 font-sans leading-snug">
                      {BUSINESS_INFO.address.full}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      <strong className="text-neutral-300">Landmark:</strong> {BUSINESS_INFO.address.landmark}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1 text-right" dir="rtl">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-300 font-sans leading-snug">
                      {BUSINESS_INFO.address.urduFull}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      <strong className="text-neutral-300">نشان دہی:</strong> {BUSINESS_INFO.address.landmarkUrdu}
                    </p>
                  </div>
                )}

                {/* Area Tag Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] font-medium text-neutral-300">
                    Gulshan Colony
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] font-medium text-neutral-300">
                    Ghulistaan Road
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] font-medium text-neutral-300">
                    Freed Colony
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-medium text-amber-400">
                    Faisalabad (38000)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="map-get-directions-btn"
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>

                <button
                  type="button"
                  id="map-copy-address-btn"
                  onClick={() => handleCopyAddress(addressLanguage)}
                  className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-neutral-200 hover:text-white border border-neutral-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedType === addressLanguage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>{addressLanguage === 'ur' ? 'پتہ کاپی کریں' : 'Copy Address'}</span>
                    </>
                  )}
                </button>

                <a
                  href={BUSINESS_INFO.address.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="map-apple-maps-btn"
                  className="py-2.5 px-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Apple / iOS Maps</span>
                </a>
              </div>

              {/* Ride Booking Tip */}
              <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-center gap-2.5 text-xs text-neutral-400">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong className="text-neutral-300">Ride App Tip:</strong> Search <span className="text-amber-300">"Plot 248 Ghulistaan Rd, Gulshan Colony"</span> on Bykea, InDrive, or Yango.
                </span>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl h-80 sm:h-96 w-full group">
              <iframe
                title="Sani Barber Faisalabad Google Map Location"
                src={BUSINESS_INFO.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: mapTheme === 'dark' ? 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' : 'none' 
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-300"
              ></iframe>

              {/* Top Controls Overlay */}
              <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
                <div className="pointer-events-auto p-2 sm:px-3 sm:py-1.5 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-xs font-semibold text-neutral-200 flex items-center gap-2 shadow-lg">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="truncate">Gulshan Colony, Faisalabad</span>
                </div>

                <div className="pointer-events-auto flex items-center gap-1.5 bg-neutral-950/90 backdrop-blur-md p-1 rounded-lg border border-neutral-800 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setMapTheme(mapTheme === 'dark' ? 'standard' : 'dark')}
                    className="px-2 py-1 rounded text-[11px] font-semibold text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                    title="Toggle Map Style"
                  >
                    <Layers className="w-3 h-3 text-amber-400" />
                    <span>{mapTheme === 'dark' ? 'Standard Map' : 'Dark Map'}</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded text-neutral-400 hover:text-amber-400 transition-colors"
                    title="Open Fullscreen in Google Maps"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Opening Hours Component */}
          <div className="lg:col-span-5 flex flex-col">
            <OpeningHours />
          </div>

        </div>

      </div>
    </section>
  );
};
