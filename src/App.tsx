import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { QuoteEstimator } from './components/QuoteEstimator';
import { About } from './components/About';
import { ServiceArea } from './components/ServiceArea';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Phone, CalendarCheck } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Taille de Haies');
  const [selectedTown, setSelectedTown] = useState('Lacapelle-Marival');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleApplyEstimate = (data: { service: string; notes: string }) => {
    setSelectedService(data.service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTown = (town: string) => {
    setSelectedTown(town);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfcf8] text-[#1a1a1a] selection:bg-[#4a5d23] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Services Section */}
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* 3. Before/After Gallery: "La Preuve par l'Image" */}
        <BeforeAfterGallery />

        {/* 4. Interactive Cost Estimator */}
        <QuoteEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 5. About Section: Trust, Equipment & Passion */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6. Service Area: Lacapelle-Marival, Figeac & Lot */}
        <ServiceArea onSelectTown={handleSelectTown} />

        {/* 7. Contact & Devis Section */}
        <ContactSection
          initialService={selectedService}
          initialTown={selectedTown}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Quote Modal */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Mobile Floating Direct Call / Devis Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fdfcf8]/95 backdrop-blur-md border-t border-black/10 p-2.5 shadow-xl flex items-center gap-2">
        <a
          href="tel:0647325535"
          className="flex-1 py-3 px-3 rounded-full bg-[#4a5d23] text-white font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-200" />
          <span>06 47 32 55 35</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenQuoteModal()}
          className="py-3 px-4 rounded-full bg-[#f0f2eb] text-[#1a1a1a] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 border border-black/10"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#4a5d23]" />
          <span>Devis</span>
        </button>
      </div>
    </div>
  );
}
