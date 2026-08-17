import React, { useState } from 'react';
import { Scissors, Sparkles, Clock, Calendar, Check, ArrowRight, Tag, HelpCircle } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hair', 'Beard', 'Styling', 'Kids', 'Packages'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const handleBookService = (serviceId: string) => {
    onSelectServiceForBooking(serviceId);
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
    <section id="services" className="relative py-20 lg:py-28 bg-neutral-950/80 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5" />
            <span>Grooming Menu</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
            Our Grooming Services
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Quality haircuts, beard grooming, and styling tailored to your preference in a comfortable, clean environment.
          </p>

          {/* Pricing transparency note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
            <Tag className="w-3.5 h-3.5 text-amber-400" />
            <span>All services are priced upon request. Contact the shop for the most current price list.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-neutral-900/70 border border-neutral-800/90 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col overflow-hidden"
            >
              {/* Service Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                <img
                  src={service.image}
                  alt={`${service.name} at Sani Barber Faisalabad`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent"></div>
                
                {/* Popular / Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/85 backdrop-blur-sm border border-neutral-800 text-neutral-300">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-neutral-950 shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>

                {service.durationEstimated && (
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-950/85 text-neutral-300 border border-neutral-800/80 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{service.durationEstimated}</span>
                  </div>
                )}
              </div>

              {/* Service Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 space-y-3">
                  {/* Price Placeholder (Strictly as specified) */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-medium">Pricing</span>
                    <span className="font-semibold text-amber-400/95 bg-neutral-950 px-2.5 py-1 rounded border border-amber-500/20">
                      {service.priceNote}
                    </span>
                  </div>

                  {/* Book Now Action */}
                  <button
                    type="button"
                    id={`book-service-${service.id}-btn`}
                    onClick={() => handleBookService(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 text-neutral-200 hover:text-neutral-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-[0.98]"
                  >
                    <Calendar className="w-4 h-4 text-amber-400 group-hover/btn:text-neutral-950 transition-colors" />
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Note for Business Owner & Customers */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-400">
            Have a custom hairstyle or grooming inquiry in mind? Walk-ins are always welcomed during opening hours (9:00 AM – 11:55 PM) or request an appointment in advance.
          </p>
        </div>

      </div>
    </section>
  );
};
