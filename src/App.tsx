import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Services } from './components/Services';
import { KidsSection } from './components/KidsSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('haircut');

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleScrollToAppointment = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBookingModal={() => handleScrollToAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Highlights />
        <About />
        <Services onSelectServiceForBooking={handleSelectService} />
        <KidsSection onBookVisit={handleScrollToAppointment} />
        <Gallery />
        <Reviews />
        <LocationSection />
        <AppointmentSection preSelectedServiceId={selectedServiceId} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Action Bar */}
      <FloatingMobileBar onBookClick={() => handleScrollToAppointment()} />
    </div>
  );
}
