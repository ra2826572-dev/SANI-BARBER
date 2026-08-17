import React from 'react';
import { Star, MapPin, Calendar, Navigation, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getShopStatus } from '../utils/timeUtils';

export const Hero: React.FC = () => {
  const shopStatus = getShopStatus();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950"
    >
      {/* Ambient background glow & luxury texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,83,9,0.08),transparent_50%)] pointer-events-none" />
      
      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Trust Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badges: Location & Status */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur-sm shadow-inner">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Gulshan Colony, Faisalabad</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Open Daily 9:00 AM – 11:55 PM</span>
              </div>
            </div>

            {/* Main Heading & Tagline */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-5xl xl:text-6xl font-extrabold text-neutral-100 tracking-tight leading-[1.15]">
                SANI BARBER <br />
                <span className="gold-gradient-text">FAISALABAD</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-200 tracking-normal font-heading">
                Sharp Cuts. Clean Style. Professional Grooming.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional barbering and grooming in Faisalabad, with a clean environment and a focus on quality service.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#appointment"
                id="hero-book-appointment-btn"
                onClick={(e) => handleScrollTo(e, '#appointment')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-neutral-950 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
              </a>

              <a
                href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-get-directions-btn"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-850 text-neutral-200 hover:text-neutral-100 font-semibold text-base border border-neutral-800 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm group"
              >
                <Navigation className="w-5 h-5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 border-t border-neutral-900 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                <div className="flex items-center gap-1 text-amber-400 font-bold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.6</span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 font-medium">Google Rating</p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                <div className="text-neutral-100 font-bold text-base sm:text-lg">
                  22 Reviews
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 font-medium">Customer Verified</p>
              </div>

              <div className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                <div className="flex items-center gap-1 text-emerald-400 font-bold text-base sm:text-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Open Daily</span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 font-medium">Mon – Sun Schedule</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold glow and border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 via-amber-600/20 to-neutral-800 rounded-2xl blur-lg opacity-75"></div>

              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-amber-500/30 shadow-2xl">
                {/* Main Hero Barber Image */}
                <div className="relative aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden bg-neutral-950">
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop"
                    alt="Sani Barber Shop Faisalabad grooming atmosphere"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Clean & Sanitized Station</span>
                  </div>

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                          Barber Shop & Hair Grooming
                        </div>
                        <div className="text-sm font-bold text-neutral-100 mt-0.5">
                          Freed Colony, Faisalabad
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 text-amber-400 font-bold text-xs border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>4.6 / 5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
