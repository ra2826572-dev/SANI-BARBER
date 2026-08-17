import React from 'react';
import { CheckCircle, Sparkles, HeartHandshake, Shield, Scissors, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const About: React.FC = () => {
  const feedbackHighlights = [
    {
      title: 'Clean Environment',
      description: 'Dedicated to hygiene with sanitized cutting tools, clean chairs, and an organized workspace.'
    },
    {
      title: 'Comfortable Experience',
      description: 'Relaxed atmosphere where clients of all ages can enjoy unhurried, attentive grooming.'
    },
    {
      title: 'Good Grooming Work',
      description: 'Careful scissor and clipper techniques designed to suit your individual head shape and style preference.'
    },
    {
      title: 'Quality Products',
      description: 'Utilizing respected hair care and beard grooming formulas to keep hair refreshed and healthy.'
    },
    {
      title: 'Professional Service',
      description: 'Courteous attention and consistent standards for everyday haircuts and special grooming.'
    }
  ];

  const handleScrollToLocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#location');
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
    <section id="about" className="relative py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered accents */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Gold decorative border backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-neutral-900 to-amber-700/20 rounded-2xl blur-md"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop"
                  alt="Sani Barber professional grooming environment in Faisalabad"
                  className="w-full h-[420px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>

                {/* Floating summary info tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Scissors className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-400">Location In Faisalabad</div>
                      <div className="text-sm font-bold text-neutral-100">Ghulistaan Rd, Gulshan Colony</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Feedback Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Barber Identity</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
                About Sani Barber
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <strong className="text-neutral-100 font-semibold">Sani Barber Faisalabad</strong> provides a clean, comfortable, and organized grooming environment for residents and visitors across Faisalabad. Located on Ghulistaan Road in Gulshan Colony, the shop is dedicated to offering dependable grooming services with attentive customer care.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Based on real customer feedback, visitors consistently appreciate the well-maintained shop setting, friendly attention, and quality results for both everyday cuts and detailed beard styling.
            </p>

            {/* Structured Feedback Points Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {feedbackHighlights.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/30 transition-all flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-200 font-sans">{item.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visit Sani Barber CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#location"
                id="about-visit-cta-btn"
                onClick={handleScrollToLocation}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all inline-flex items-center gap-2"
              >
                <span>Visit Sani Barber</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors py-2 px-3"
              >
                View Services →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
