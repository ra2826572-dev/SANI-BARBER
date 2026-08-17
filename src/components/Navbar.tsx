import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Clock, MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getShopStatus, ShopStatus } from '../utils/timeUtils';

interface NavbarProps {
  onOpenBookingModal?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopStatus, setShopStatus] = useState<ShopStatus>(getShopStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Refresh shop status every minute
    const interval = setInterval(() => {
      setShopStatus(getShopStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Kids', href: '#kids' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-neutral-950/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="brand-logo-link"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center">
              <Scissors className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-neutral-100 flex items-center gap-1.5">
              SANI BARBER
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400/90">
                FAISALABAD
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                <span className={`w-1.5 h-1.5 rounded-full ${shopStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
                {shopStatus.statusText}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hours pill */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-directions-btn"
            className="px-3 py-2 rounded-lg text-xs font-medium text-neutral-300 hover:text-neutral-100 hover:bg-neutral-900 border border-neutral-800 transition-colors flex items-center gap-1.5"
            title="Directions on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Map</span>
          </a>

          <a
            href="#appointment"
            id="nav-book-appointment-btn"
            onClick={(e) => handleNavClick(e, '#appointment')}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-neutral-950/98 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all"
        >
          <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <div className="text-xs">
                <span className="font-semibold text-neutral-200">Daily: 9:00 AM – 11:55 PM</span>
                <p className="text-[11px] text-neutral-400">Gulshan Colony, Faisalabad</p>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${shopStatus.isOpen ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'}`}>
              {shopStatus.statusText}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-900 grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-center text-sm font-medium flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Directions</span>
            </a>
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, '#appointment')}
              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-center text-sm flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
