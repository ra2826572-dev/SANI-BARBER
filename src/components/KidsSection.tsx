import React from 'react';
import { Smile, CheckCircle, Calendar, Shield, Heart, Sparkles } from 'lucide-react';
import kidsBarberHaircutImg from '../assets/images/kids_barber_haircut_1786958941635.jpg';

interface KidsSectionProps {
  onBookVisit: (serviceId?: string) => void;
}

export const KidsSection: React.FC<KidsSectionProps> = ({ onBookVisit }) => {
  const points = [
    'Patient and gentle haircut experience for children',
    'Comfortable, air-cooled, and family-friendly setting',
    'Clean, well-maintained grooming tools and stations',
    'Suitable for regular school cuts or special festive occasions'
  ];

  const handleBooking = () => {
    onBookVisit('kids-haircut');
    const element = document.querySelector('#appointment');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="kids" className="relative py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-amber-500/20 p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5" />
                <span>Family Friendly Service</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
                  Grooming for Everyone
                </h2>
                <p className="text-lg sm:text-xl font-medium text-amber-300/90 font-heading">
                  Professional grooming in a comfortable environment for adults and kids.
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                We understand that haircuts for children need a gentle, attentive touch. Sani Barber Faisalabad provides an organized, calm atmosphere where both young boys and adults feel at ease during their grooming session.
              </p>

              {/* Point checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  type="button"
                  id="kids-book-visit-btn"
                  onClick={handleBooking}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Visit</span>
                </button>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
                  <img
                    src={kidsBarberHaircutImg}
                    alt="Welcoming haircut experience for kids at Sani Barber"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-200">Welcoming to Families</div>
                      <div className="text-[11px] text-neutral-400">Attentive care for both adults & children</div>
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
