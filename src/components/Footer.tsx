import React from 'react';
import { Scissors, MapPin, Clock, Star, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Kids Grooming', href: '#kids' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Find Us', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer id="main-footer" className="bg-black border-t border-neutral-900 text-neutral-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-neutral-100">
                SANI BARBER
              </span>
            </div>

            <p className="text-sm font-semibold text-neutral-200 font-heading">
              Sharp Cuts. Clean Style. Professional Grooming.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Professional barber shop and hair grooming destination on Ghulistaan Road, Freed Colony, Gulshan Colony, Faisalabad, Pakistan.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.6 / 5.0 (22 Google Reviews)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-200">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Location & Schedule */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-200">
              Business Location & Hours
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-neutral-300">
                  9:00 AM – 11:55 PM Daily (Mon – Sun)
                </span>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-neutral-400 mb-2">Social Channels</div>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 transition-colors cursor-not-allowed" title="Instagram profile to be added">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 transition-colors cursor-not-allowed" title="Facebook page to be added">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-neutral-500">Social media links to be added</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Sani Barber Faisalabad. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Faisalabad, Pakistan</span>
            <span>•</span>
            <span>Gulshan Colony</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
