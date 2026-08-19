import React from 'react';
import { ShieldCheck, HeartHandshake, Leaf, Wrench, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { CausseVertLogo } from './CausseVertLogo';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="a-propos" className="py-20 bg-[#fdfcf8] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Portrait Block */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Background offset card */}
              <div className="absolute -inset-4 bg-[#f0f2eb] rounded-3xl -rotate-1 transform -z-10 border border-black/5" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#e9e7df] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1000&q=85"
                  alt="Artisan paysagiste Causse Vert avec équipement professionnel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 text-[#1a1a1a] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif font-bold text-base text-[#1a1a1a] italic">
                        Causse Vert
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-black/60 font-sans font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#4a5d23]" />
                        <span>Lacapelle-Marival (46120)</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#f0f2eb] flex items-center justify-center text-[#4a5d23]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Equipment Pill */}
              <div className="absolute -bottom-4 -right-2 hidden sm:flex items-center gap-2.5 bg-[#4a5d23] text-white px-4 py-2 rounded-full shadow-md">
                <Wrench className="w-4 h-4 text-emerald-200" />
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest">
                  Parc Honda & Stihl
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Quote */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
              À Propos de Causse Vert
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight italic leading-tight">
              L'Art de l'Entretien Végétal & du Travail Soigné
            </h2>

            {/* Core User Quote in Editorial Style */}
            <div className="p-6 rounded-3xl bg-[#f0f2eb] border-l-4 border-[#4a5d23] text-[#1a1a1a] text-base sm:text-lg leading-relaxed font-serif italic">
              “Passionné par l'entretien des espaces verts, j'interviens chez les particuliers et les professionnels pour transformer vos jardins. Équipé de matériel professionnel (Honda, etc.), je garantis un travail soigné, ponctuel et respectueux de la biodiversité locale.”
            </div>

            <p className="text-black/70 text-xs sm:text-sm font-sans leading-relaxed">
              Basé à <strong>Lacapelle-Marival</strong> dans le Lot, j’apporte une attention toute particulière aux spécificités de notre terroir : murets de pierres sèches, haies bocagères du Quercy, pelouses d’ornement et massifs. Chaque intervention est pensée pour préserver la santé de vos végétaux avec une esthétique nette.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-black/5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#4a5d23] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">Matériel Professionnel</h4>
                  <p className="text-[11px] font-sans text-black/55 mt-0.5">Tondeuses Honda et taille-haies de précision affûtés régulièrement.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-black/5 shadow-xs">
                <Leaf className="w-4 h-4 text-[#4a5d23] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">Éco-Responsable</h4>
                  <p className="text-[11px] font-sans text-black/55 mt-0.5">Respect des périodes de nidification et compostage des résidus.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-black/5 shadow-xs">
                <HeartHandshake className="w-4 h-4 text-[#4a5d23] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">Conseils Personnalisés</h4>
                  <p className="text-[11px] font-sans text-black/55 mt-0.5">Recommandations sur les cycles de coupe et la vigueur du gazon.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-black/5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#4a5d23] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">Propreté Finale</h4>
                  <p className="text-[11px] font-sans text-black/55 mt-0.5">Soufflage et nettoyage méticuleux des terrasses et allées.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="tel:0647325535"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4a5d23] hover:bg-[#38471b] text-white font-sans font-bold text-xs uppercase tracking-widest shadow transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>06 47 32 55 35</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#f0f2eb] hover:bg-[#e2e6d9] text-[#1a1a1a] font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <span>Demander une visite gratuite</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
