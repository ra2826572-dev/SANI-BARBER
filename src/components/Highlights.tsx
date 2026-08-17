import React from 'react';
import { Star, MessageSquareQuote, CalendarDays, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Highlights: React.FC = () => {
  const cards = [
    {
      id: 'highlight-rating',
      value: '4.6★',
      label: 'Customer Rating',
      detail: 'Based on genuine Google Reviews in Faisalabad',
      icon: Star,
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      badge: 'Google Verified'
    },
    {
      id: 'highlight-reviews',
      value: '22+',
      label: 'Reviews',
      detail: 'Praising clean environment & sharp grooming work',
      icon: MessageSquareQuote,
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      badge: 'Customer Feedback'
    },
    {
      id: 'highlight-days',
      value: '7 Days',
      label: 'Open Every Day',
      detail: 'Monday through Sunday consistent schedule',
      icon: CalendarDays,
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      badge: 'All Week'
    },
    {
      id: 'highlight-hours',
      value: '9 AM – 11:55 PM',
      label: 'Daily Hours',
      detail: 'Late evening hours for convenient visits',
      icon: Clock,
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      badge: 'Extended Hours'
    }
  ];

  return (
    <section id="highlights" className="relative py-12 bg-neutral-950/90 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className={`relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 ${card.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-500/40 transition-all">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-950/80 px-2.5 py-1 rounded-full border border-neutral-800">
                      {card.badge}
                    </span>
                  </div>

                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {card.value}
                  </div>

                  <div className="text-sm font-semibold text-neutral-200 mt-1">
                    {card.label}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-800/60 leading-relaxed">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
