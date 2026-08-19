import React from 'react';
import { CausseVertLogo } from './CausseVertLogo';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdfcf8] text-[#1a1a1a] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Logo & Brand Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <CausseVertLogo size={46} />
              <div>
                <span className="font-serif text-2xl font-bold text-[#1a1a1a] tracking-tight leading-none block italic">
                  Causse Vert
                </span>
                <span className="text-[10px] font-sans font-semibold text-[#4a5d23] uppercase tracking-[0.2em] block mt-1">
                  Espaces Verts & Paysage
                </span>
              </div>
            </div>

            <p className="text-xs font-sans text-black/60 leading-relaxed max-w-sm">
              Artisan spécialisé dans la taille de haies millimétrée, la tonte soignée avec finitions décoratives et l’entretien complet des espaces verts à Lacapelle-Marival et dans tout le Lot.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-sans text-black/50">
              <Shield className="w-3.5 h-3.5 text-[#4a5d23] shrink-0" />
              <span>Assurance Responsabilité Civile Professionnelle</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#4a5d23] border-b border-black/5 pb-2">
              Plan du site
            </h4>
            <ul className="space-y-2 text-xs font-sans font-medium text-black/60">
              <li>
                <a href="#accueil" className="hover:text-black transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-black transition-colors">
                  Nos Réalisations
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-black transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#zone" className="hover:text-black transition-colors">
                  Zone d'Intervention
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Demande de Devis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#4a5d23] border-b border-black/5 pb-2">
              Prestations
            </h4>
            <ul className="space-y-2 text-xs font-sans text-black/60">
              <li>• Taille de conifères</li>
              <li>• Haies feuillues du Quercy</li>
              <li>• Tonte de finition à bandes</li>
              <li>• Remise en état de friches</li>
              <li>• Évacuation déchets verts</li>
            </ul>
          </div>

          {/* Col 4: Coordonnées Complètes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#4a5d23] border-b border-black/5 pb-2">
              Coordonnées
            </h4>
            
            <div className="space-y-2.5 text-xs font-sans text-black/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#4a5d23] shrink-0 mt-0.5" />
                <span>467 Rte de Figeac, 46120 Lacapelle-Marival</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#4a5d23] shrink-0" />
                <a href="tel:0647325535" className="font-bold text-[#1a1a1a] hover:text-[#4a5d23] transition-colors">
                  06 47 32 55 35
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#4a5d23] shrink-0" />
                <a href="mailto:caussevert@gmail.com" className="text-black/70 hover:text-black transition-colors break-all">
                  caussevert@gmail.com
                </a>
              </div>

              <div className="pt-2 border-t border-black/5 text-[11px] text-black/60">
                <strong className="text-[#1a1a1a]">Zone d'intervention :</strong> Lacapelle-Marival, Figeac, et alentours (Lot 46).
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Bar */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans uppercase tracking-[0.2em] text-black/50">
          <div className="flex flex-wrap gap-6 items-center">
            <span>📍 467 Rte de Figeac, 46120 Lacapelle-Marival</span>
            <span>📧 caussevert@gmail.com</span>
          </div>
          <div>
            © {new Date().getFullYear()} Causse Vert — Espaces Verts & Paysage
          </div>
        </div>

      </div>
    </footer>
  );
};
