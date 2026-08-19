import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, MapPin, Wrench } from 'lucide-react';
import { CausseVertLogo } from './CausseVertLogo';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="accueil" className="py-6 sm:py-8 lg:py-10 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Hero Main Block + Editorial Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Container (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#e9e7df] shadow-inner min-h-[500px] sm:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 md:p-12 group">
            
            {/* Background High Res Landscaping Image with Editorial Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=85"
                alt="Pelouse parfaite taillée à bandes dans le Lot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 z-10" />
            </div>

            {/* Top Bar inside Hero */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>Lacapelle-Marival • Figeac (46)</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[10px] font-sans uppercase tracking-widest font-semibold border border-white/20">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span>Finition Haute Précision</span>
              </div>
            </div>

            {/* Bottom Hero Copy & Editorial Actions */}
            <div className="relative z-20 text-white max-w-2xl pt-24 sm:pt-32">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] font-bold tracking-tighter italic text-white mb-4">
                Redonnez Vie à<br />
                <span className="not-italic text-emerald-200">Votre Jardin.</span>
              </h1>

              <p className="font-sans text-xs sm:text-sm text-white/90 uppercase tracking-[0.18em] leading-relaxed max-w-xl mb-8 font-medium">
                Entretien de haies, tonte de pelouse et soin des espaces verts à Lacapelle-Marival et ses environs.
              </p>

              {/* Editorial Rounded-Full CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#realisations"
                  className="bg-white hover:bg-stone-100 text-[#4a5d23] px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest shadow-md transition-all text-center group/btn inline-flex items-center justify-center gap-2"
                >
                  <span>Voir nos avant/après</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="tel:0647325535"
                  className="bg-transparent hover:bg-white/15 border border-white text-white px-7 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Editorial Sidebar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Top Card: Services Summary in Editorial Style */}
            <div className="bg-white border border-black/5 rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#4a5d23] font-bold font-sans">
                    Services Premium
                  </h2>
                  <CausseVertLogo size={32} />
                </div>

                <div className="space-y-4">
                  {/* Service 1 */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 bg-[#f0f2eb] rounded-xl flex-shrink-0 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      ✂️
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#1a1a1a]">
                        Taille de Haies
                      </h3>
                      <p className="text-[11px] font-sans text-black/60 leading-snug">
                        Précision pour des haies denses, saines et alignées au cordeau.
                      </p>
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 bg-[#f0f2eb] rounded-xl flex-shrink-0 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      🚜
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#1a1a1a]">
                        Tonte de Pelouse
                      </h3>
                      <p className="text-[11px] font-sans text-black/60 leading-snug">
                        Bandes décoratives et finitions soignées à chaque passage.
                      </p>
                    </div>
                  </div>

                  {/* Service 3 */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 bg-[#f0f2eb] rounded-xl flex-shrink-0 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      🌿
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#1a1a1a]">
                        Entretien Complet
                      </h3>
                      <p className="text-[11px] font-sans text-black/60 leading-snug">
                        Désherbage, nettoyage saisonnier et remise au propre intégrale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Quote at Bottom of Card */}
              <div className="pt-5 mt-5 border-t border-black/5">
                <p className="text-[11px] font-serif italic leading-relaxed text-black/75">
                  “Passionné par les espaces verts, je garantis un travail soigné, ponctuel et respectueux de la biodiversité locale.”
                </p>
              </div>
            </div>

            {/* Bottom Two Editorial Highlight Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#4a5d23] rounded-2xl p-4 flex items-center justify-center text-white text-center shadow-sm">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span className="text-[11px] font-bold font-sans uppercase tracking-wider">
                    Matériel Pro Honda
                  </span>
                </div>
              </div>

              <div className="border border-[#4a5d23]/40 bg-[#f0f2eb] rounded-2xl p-4 flex items-center justify-center text-[#4a5d23] text-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#4a5d23]" />
                  <span className="text-[11px] font-bold font-sans uppercase tracking-wider">
                    Devis Gratuit
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
