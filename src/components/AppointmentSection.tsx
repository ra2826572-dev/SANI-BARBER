import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle2, Scissors, Sparkles, Send, Copy, Check, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  preSelectedServiceId?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ preSelectedServiceId }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    serviceId: preSelectedServiceId || 'haircut',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [submittedRequest, setSubmittedRequest] = useState<AppointmentFormData | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedServiceId }));
    }
  }, [preSelectedServiceId]);

  // Set default date to today's date formatted YYYY-MM-DD
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, preferredDate: today }));
  }, []);

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
    '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM',
    '08:00 PM', '09:30 PM', '10:30 PM'
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number so the shop can reach you';
    } else if (formData.phoneNumber.trim().length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Record appointment submission in local state
      setSubmittedRequest({ ...formData });
    }
  };

  const selectedServiceObj = SERVICES_LIST.find(s => s.id === (submittedRequest?.serviceId || formData.serviceId));

  const handleCopySummary = () => {
    if (!submittedRequest) return;
    const summaryText = `*Appointment Request - Sani Barber Faisalabad*\nName: ${submittedRequest.fullName}\nPhone: ${submittedRequest.phoneNumber}\nService: ${selectedServiceObj?.name || 'Haircut'}\nDate: ${submittedRequest.preferredDate}\nTime: ${submittedRequest.preferredTime}\nNotes: ${submittedRequest.notes || 'None'}\n\nShop Address: ${BUSINESS_INFO.address.full}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="appointment" className="relative py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Easy Scheduling</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-100 tracking-tight">
            Book an Appointment
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Request your preferred date, time slot, and grooming service. We look forward to welcoming you at our Gulshan Colony shop.
          </p>
        </div>

        {/* Main Appointment Box */}
        <div className="max-w-3xl mx-auto">
          {submittedRequest ? (
            /* Success & Clear Request Received Confirmation */
            <div
              id="appointment-success-container"
              className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-emerald-500/40 shadow-2xl space-y-6 text-center animate-fade-in"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Request Received
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-100">
                  Thank You, {submittedRequest.fullName}!
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
                  <strong className="text-amber-300 font-semibold">Your appointment request has been received.</strong> The shop will contact you to confirm availability.
                </p>
              </div>

              {/* Request Summary Receipt */}
              <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-left space-y-3 max-w-lg mx-auto text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-neutral-900">
                  <span className="text-neutral-400">Customer:</span>
                  <span className="font-bold text-neutral-200">{submittedRequest.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-900">
                  <span className="text-neutral-400">Phone:</span>
                  <span className="font-bold text-neutral-200">{submittedRequest.phoneNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-900">
                  <span className="text-neutral-400">Selected Service:</span>
                  <span className="font-bold text-amber-400">{selectedServiceObj?.name || 'Haircut'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-900">
                  <span className="text-neutral-400">Preferred Date:</span>
                  <span className="font-bold text-neutral-200">{submittedRequest.preferredDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-900">
                  <span className="text-neutral-400">Preferred Time:</span>
                  <span className="font-bold text-neutral-200">{submittedRequest.preferredTime}</span>
                </div>
                {submittedRequest.notes && (
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Notes:</span>
                    <span className="font-normal text-neutral-300 text-right">{submittedRequest.notes}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons in Success Screen */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  id="copy-appointment-summary-btn"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Summary Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copy Request Summary</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  id="book-another-appointment-btn"
                  onClick={() => {
                    setSubmittedRequest(null);
                    setFormData(prev => ({
                      ...prev,
                      fullName: '',
                      phoneNumber: '',
                      notes: ''
                    }));
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Book Another Request
                </button>
              </div>

              <div className="text-[11px] text-neutral-500 pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Walk-ins are also welcome daily 9:00 AM – 11:55 PM</span>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form
              id="appointment-booking-form"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800/90 shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="appointment-full-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="appointment-full-name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-neutral-800 focus:border-amber-500'
                      } text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="appointment-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="appointment-phone"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border ${
                        errors.phoneNumber ? 'border-rose-500 focus:ring-rose-500' : 'border-neutral-800 focus:border-amber-500'
                      } text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="appointment-service-select" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Select Grooming Service <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Scissors className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="appointment-service-select"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer"
                  >
                    {SERVICES_LIST.map((service) => (
                      <option key={service.id} value={service.id} className="bg-neutral-900 text-neutral-100">
                        {service.name} ({service.category}) — {service.priceNote}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="appointment-date" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      id="appointment-date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer [color-scheme:dark]"
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-400">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <label htmlFor="appointment-time-slot" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Preferred Time Slot <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="appointment-time-slot"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-neutral-900 text-neutral-100">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Message / Notes */}
              <div className="space-y-2">
                <label htmlFor="appointment-notes" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Message / Special Request <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <textarea
                    id="appointment-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific cut instructions, questions, or requirements..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  ></textarea>
                </div>
              </div>

              {/* Transparent Disclaimer Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <p className="font-semibold text-neutral-300">
                  Booking Confirmation Notice:
                </p>
                <p>
                  Submitting this request alerts the shop to your preferred time. The barber shop will reach out to confirm your scheduled slot.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-appointment-request-btn"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Request Appointment</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
