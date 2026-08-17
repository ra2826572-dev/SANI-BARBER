import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Check, AlertCircle, ShieldCheck, Sparkles, Moon, Sun } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getShopStatus, ShopStatus } from '../utils/timeUtils';

export const OpeningHours: React.FC = () => {
  const [status, setStatus] = useState<ShopStatus>(getShopStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getShopStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="opening-hours-card" className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl flex flex-col justify-between">
      <div>
        {/* Header & Live Indicator */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Schedule</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-neutral-100 font-heading">
              Opening Hours
            </h3>
          </div>

          <div className="text-right">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                status.isOpen
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60 shadow-lg shadow-emerald-900/20'
                  : 'bg-rose-950/80 text-rose-300 border-rose-700/60'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
              <span>{status.statusText}</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-1 font-medium">
              {status.subText}
            </div>
          </div>
        </div>

        {/* Daily Schedule List */}
        <div className="py-4 space-y-2.5">
          {BUSINESS_INFO.hours.days.map((item, idx) => (
            <div
              key={item.day}
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-neutral-950/60 border border-neutral-800/60 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>{item.day}</span>
              </div>
              <div className="text-amber-300 font-semibold">
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Note */}
      <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-neutral-200">Open 7 Days a Week</span>
        </div>
        <span className="text-neutral-400">PKT (UTC+5)</span>
      </div>
    </div>
  );
};
