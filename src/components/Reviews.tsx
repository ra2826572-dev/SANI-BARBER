import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { AUTHENTIC_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Customer Satisfaction</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
              What Our Customers Say
            </h2>

            <p className="text-base text-neutral-400 font-normal">
              Authentic Google customer reviews from clients in Faisalabad sharing their experiences at Sani Barber.
            </p>
          </div>

          {/* Rating Summary Badge Box */}
          <div className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-6 self-start lg:self-auto shadow-xl">
            <div className="text-center border-r border-neutral-800 pr-6">
              <div className="font-heading text-4xl sm:text-5xl font-black text-amber-400">
                4.6
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-neutral-100">
                Based on 22 Reviews
              </div>
              <div className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Business Verified</span>
              </div>
              <a
                href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium mt-2 transition-colors"
              >
                <span>Read More Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Authentic Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {AUTHENTIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="relative p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div>
                {/* Quote Icon watermark */}
                <MessageSquareQuote className="w-8 h-8 text-neutral-800 group-hover:text-amber-500/20 transition-colors mb-4" />

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic font-serif">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-neutral-950 font-bold flex items-center justify-center text-sm shadow-md">
                  {review.avatarText}
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {review.author}
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>{review.date || 'Verified Customer'}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Review Note & Google Action */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="reviews-google-cta-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-amber-300 border border-neutral-800 hover:border-amber-500/30 text-xs sm:text-sm font-semibold transition-all shadow-md"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Read All 22 Customer Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
};
