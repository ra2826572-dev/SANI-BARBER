import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Share2, Instagram, Facebook, Copy, Check, ExternalLink, HelpCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ContactSectionProps {
  onOpenOwnerGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOwnerGuide }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-neutral-950/90 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
            Contact Sani Barber
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Reach out or visit us in person. Official contact placeholders are marked clearly below until updated by the business owner.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Address */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Shop Location
                </div>
                <h3 className="text-base font-bold text-neutral-100">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center gap-2">
              <a
                href={BUSINESS_INFO.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-750 text-neutral-200 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.address.full, 'address')}
                className="py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-750 text-neutral-300 text-xs font-semibold transition-colors cursor-pointer"
                title="Copy Address"
              >
                {copiedField === 'address' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
              </button>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Working Hours
                </div>
                <h3 className="text-base font-bold text-neutral-100">
                  9:00 AM – 11:55 PM Daily
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Open every day Monday through Sunday (PKT, UTC+5).
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open 7 Days a Week</span>
              </span>
            </div>
          </div>

          {/* Card 3: Phone Placeholder */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Phone Number
                </div>
                <h3 className="text-base font-bold text-neutral-300">
                  {BUSINESS_INFO.placeholders.phone}
                </h3>
                <p className="text-xs text-neutral-500">
                  Direct phone line placeholder awaiting shop configuration.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <span className="text-[11px] text-neutral-500 italic">
                Walk-ins welcomed at shop location
              </span>
            </div>
          </div>

          {/* Card 4: WhatsApp Placeholder */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  WhatsApp Contact
                </div>
                <h3 className="text-base font-bold text-neutral-300">
                  {BUSINESS_INFO.placeholders.whatsapp}
                </h3>
                <p className="text-xs text-neutral-500">
                  Official WhatsApp line placeholder.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <span className="text-[11px] text-neutral-500 italic">
                To be added by shop owner
              </span>
            </div>
          </div>

          {/* Card 5: Email Placeholder */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Email Inquiries
                </div>
                <h3 className="text-base font-bold text-neutral-300">
                  {BUSINESS_INFO.placeholders.email}
                </h3>
                <p className="text-xs text-neutral-500">
                  Business email placeholder.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <span className="text-[11px] text-neutral-500 italic">
                Contact via appointment form or in-person visit
              </span>
            </div>
          </div>

          {/* Card 6: Social Media Placeholders */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                <Share2 className="w-6 h-6 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Social Channels
                </div>
                <h3 className="text-base font-bold text-neutral-300">
                  {BUSINESS_INFO.placeholders.instagram}
                </h3>
                <p className="text-xs text-neutral-500">
                  Facebook & Instagram links to be linked.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center gap-3">
              <span className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                <Facebook className="w-3.5 h-3.5 text-neutral-500" />
                <span>Profiles to be added</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
