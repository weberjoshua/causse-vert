import React, { useState, useEffect } from 'react';
import { CausseVertLogo } from './CausseVertLogo';
import { Phone, Menu, X, CalendarCheck, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Nos Réalisations', href: '#realisations' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Zone', href: '#zone' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Editorial Micro-ticker Bar */}
      <div className="bg-[#4a5d23] text-white text-[10px] sm:text-[11px] py-2 px-4 uppercase tracking-[0.2em] font-sans font-medium text-center flex items-center justify-center gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 opacity-90">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-white" />
          <span>Artisan du Lot (46) • Lacapelle-Marival & Figeac</span>
        </span>
        <span className="hidden md:inline-block opacity-40">•</span>
        <span className="hidden md:inline-block opacity-90">
          Matériel Professionnel Honda
        </span>
        <span className="hidden md:inline-block opacity-40">•</span>
        <a
          href="tel:0647325535"
          className="font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Tél : 06 47 32 55 35
        </a>
      </div>

      {/* Main Editorial Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fdfcf8]/95 backdrop-blur-md shadow-sm border-b border-black/10 py-3'
            : 'bg-[#fdfcf8] border-b border-black/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <div className="flex items-center gap-4">
            <a
              href="#accueil"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a5d23] rounded-lg"
              aria-label="Causse Vert"
            >
              <CausseVertLogo size={44} />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a] group-hover:text-[#4a5d23] transition-colors leading-none italic">
                  Causse Vert
                </span>
                <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-black/50 mt-1 font-semibold">
                  Espaces Verts & Paysage
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Editorial Minimalist Style) */}
            <nav className="hidden lg:flex items-center gap-6 ml-4 pl-6 border-l border-black/10" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-black/60 hover:text-black hover:border-b hover:border-black transition-all py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Zone 3: Editorial CTA Block (Phone & Quote) */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0647325535"
              className="hidden sm:flex flex-col items-end group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a5d23] rounded-lg p-1"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#4a5d23] font-bold font-sans">
                Devis Gratuit
              </span>
              <span className="text-lg sm:text-xl font-sans font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#4a5d23] transition-colors leading-tight">
                06 47 32 55 35
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#4a5d23] hover:bg-[#39481b] text-white text-xs font-sans font-bold uppercase tracking-widest shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Demander un Devis</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-black/80 hover:bg-black/5 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/10 bg-[#fdfcf8] px-5 pt-4 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs uppercase tracking-[0.15em] font-sans font-semibold text-black/70 hover:bg-[#f0f2eb] hover:text-[#4a5d23]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-black/10 flex flex-col gap-2">
              <a
                href="tel:0647325535"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#4a5d23] text-white font-sans font-bold text-xs uppercase tracking-widest shadow"
              >
                <Phone className="w-4 h-4" />
                06 47 32 55 35
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#f0f2eb] hover:bg-[#e4e7db] text-[#1a1a1a] font-sans font-bold text-xs uppercase tracking-widest cursor-pointer"
              >
                Demander un devis en ligne
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
