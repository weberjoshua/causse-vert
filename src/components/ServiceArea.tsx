import React, { useState } from 'react';
import { MapPin, Navigation, Check, Phone } from 'lucide-react';

interface ServiceAreaProps {
  onSelectTown?: (town: string) => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onSelectTown }) => {
  const [selectedZone, setSelectedZone] = useState<string>('Lacapelle-Marival');

  const towns = [
    { name: 'Lacapelle-Marival', cp: '46120', zone: 'Centre (Base)', distance: '0 km' },
    { name: 'Figeac', cp: '46100', zone: 'Bassin Figeacois', distance: '15 km' },
    { name: 'Gramat', cp: '46500', zone: 'Causse de Gramat', distance: '18 km' },
    { name: 'Saint-Céré', cp: '46400', zone: 'Vallée de la Bave', distance: '22 km' },
    { name: 'Aynac', cp: '46120', zone: 'Haut Ségala', distance: '7 km' },
    { name: 'Leyme', cp: '46120', zone: 'Environs', distance: '9 km' },
    { name: 'Assier', cp: '46320', zone: 'Causse & Gare', distance: '14 km' },
    { name: 'Cardaillac', cp: '46100', zone: 'Village Médiéval', distance: '10 km' },
    { name: 'Théminettes', cp: '46120', zone: 'Environs', distance: '4 km' },
    { name: 'Rudelle', cp: '46120', zone: 'Environs', distance: '6 km' },
    { name: 'Livernon', cp: '46320', zone: 'Causse', distance: '18 km' },
    { name: 'Sousceyrac-en-Quercy', cp: '46190', zone: 'Ségala Lotois', distance: '24 km' },
    { name: 'Latronquière', cp: '46210', zone: 'Ségala', distance: '20 km' },
    { name: 'Capdenac', cp: '46100', zone: 'Vallée du Lot', distance: '21 km' },
  ];

  return (
    <section id="zone" className="py-20 bg-[#fdfcf8] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
            Zone d'Intervention
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] italic">
            Où Intervenons-Nous dans le Lot (46) ?
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-black/60 font-sans">
            Rayon d'action principal autour de <strong>Lacapelle-Marival</strong> et <strong>Figeac</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Towns Grid */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <span className="text-[10px] font-sans font-bold uppercase text-black/50 tracking-widest">
                Communes desservies régulièrement
              </span>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#4a5d23]">
                Rayon ~30 km
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {towns.map((town) => {
                const isSelected = selectedZone === town.name;
                return (
                  <button
                    key={town.name}
                    type="button"
                    onClick={() => {
                      setSelectedZone(town.name);
                      if (onSelectTown) onSelectTown(town.name);
                    }}
                    className={`p-3 rounded-2xl text-left border text-xs transition-all flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#4a5d23] text-white border-[#4a5d23] shadow-xs font-semibold'
                        : 'bg-[#f0f2eb] hover:bg-[#e4e7dc] text-[#1a1a1a] border-transparent'
                    }`}
                  >
                    <div className="font-medium truncate">{town.name}</div>
                    <div className={`text-[10px] font-sans mt-1 ${isSelected ? 'text-emerald-100' : 'text-black/50'}`}>
                      {town.cp} • {town.distance}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#f0f2eb] border border-black/5 flex items-start gap-3 text-xs font-sans text-black/75">
              <MapPin className="w-4 h-4 text-[#4a5d23] shrink-0 mt-0.5" />
              <div>
                <strong>Votre commune n’est pas dans la liste ?</strong> Nous intervenons également dans les hameaux et villages voisins du Lot sur simple demande.
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="lg:col-span-4 bg-[#4a5d23] text-white p-7 sm:p-8 rounded-3xl shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-sans font-bold text-emerald-200 tracking-widest">
                  Siège Artisanal
                </div>
                <div className="font-serif text-lg font-bold text-white">
                  Lacapelle-Marival (46120)
                </div>
              </div>
            </div>

            <p className="text-xs font-sans text-emerald-100 leading-relaxed">
              Intervention à domicile pour l’entretien de votre résidence principale, secondaire, et gîtes du Quercy.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/20 text-xs font-sans text-white/90">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-200" />
                <span>Déplacement gratuit pour visite préalable</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-200" />
                <span>Devis détaillé sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-200" />
                <span>Facturation claire & transparente</span>
              </div>
            </div>

            <a
              href="tel:0647325535"
              className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-stone-100 text-[#4a5d23] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>06 47 32 55 35</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
