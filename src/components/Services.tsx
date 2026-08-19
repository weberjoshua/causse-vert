import React from 'react';
import { Scissors, Sparkles, Shovel, CheckCircle, ArrowRight, ShieldCheck, Clock, Recycle } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'taille-haies',
      number: 'SERVICE 01',
      title: 'Taille de Haies',
      tagline: 'Une taille précise pour des haies denses, saines et parfaitement alignées.',
      description:
        'Taille d’entretien, de restructuration ou de rabattage au cordeau. Intervention sur conifères (thuyas, cyprès), lauriers, troènes, charmilles et haies bocagères du Quercy.',
      image: 'https://images.unsplash.com/photo-1599818816941-b1e944d15446?auto=format&fit=crop&w=1000&q=80',
      icon: Scissors,
      features: [
        'Alignement au cordeau et coupe au millimètre',
        'Rabattage et réduction en hauteur/largeur',
        'Nettoyage du pied et évacuation soignée',
        'Affûtage et désinfection des lames',
      ],
    },
    {
      id: 'tonte-pelouse',
      number: 'SERVICE 02',
      title: 'Tonte de Pelouse',
      tagline: 'De la remise en état de pelouses hautes à la tonte de finition avec bandes décoratives.',
      description:
        'Sublimez votre gazon avec une coupe nette et régulière. Tonte d’agrément à rouleau bicolore, débroussaillage de hautes herbes et finitions impeccables des bordures.',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1000&q=80',
      icon: Sparkles,
      features: [
        'Tonte à rouleau avec bandes décoratives',
        'Remise en état de pelouses denses et hautes',
        'Découpe des bordures au rotofil',
        'Ramassage intégral ou mulching pro',
      ],
    },
    {
      id: 'entretien-jardins',
      number: 'SERVICE 03',
      title: 'Entretien de Jardins',
      tagline: 'Désherbage, nettoyage saisonnier et remise au propre complète de vos extérieurs.',
      description:
        'Un jardin impeccable tout au long de l’année : désherbage manuel soigné, binage des massifs, ramassage des feuilles mortes et évacuation des déchets verts vers le compost.',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1000&q=80',
      icon: Shovel,
      features: [
        'Désherbage manuel et binage des massifs',
        'Ramassage et soufflage des feuilles',
        'Taille des arbustes à fleurs et haies libres',
        'Évacuation et recyclage des déchets',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#fdfcf8] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
            Savoir-Faire Artisanal
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight italic">
            Nos Prestations d'Excellence
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-black/60 font-sans leading-relaxed">
            Intervention ponctuelle ou contrat annuel d’entretien dans le Lot (46).
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e9e7df]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Micro Index Number */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/95 text-[#4a5d23] shadow-sm font-sans">
                      {srv.number}
                    </span>
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#4a5d23] text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-emerald-200" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-sans uppercase tracking-wider text-[#4a5d23] font-semibold">
                      {srv.tagline}
                    </p>
                    <p className="text-xs text-black/65 leading-relaxed font-sans">
                      {srv.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-black/5 space-y-2 text-xs font-sans text-black/75">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#4a5d23] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-black/5">
                    <button
                      type="button"
                      onClick={() => onSelectService(srv.title)}
                      className="w-full py-3 px-4 rounded-full bg-[#f0f2eb] hover:bg-[#4a5d23] text-[#1a1a1a] hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Guarantees Row */}
        <div className="bg-[#f0f2eb] rounded-3xl border border-black/5 p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#4a5d23] flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-1">
                  Matériel Pro Honda & Stihl
                </h4>
                <p className="text-xs font-sans text-black/60 leading-relaxed">
                  Tracteurs tondeuses, taille-haies et outillage thermique haut de gamme avec affûtage régulier.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#4a5d23] flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-1">
                  Ponctualité & Réactivité
                </h4>
                <p className="text-xs font-sans text-black/60 leading-relaxed">
                  Visite d'évaluation gratuite et devis détaillé transmis sous 24 heures ouvrées.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#4a5d23] flex items-center justify-center shrink-0 shadow-sm">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-1">
                  Évacuation & Propreté
                </h4>
                <p className="text-xs font-sans text-black/60 leading-relaxed">
                  Chantier toujours rendu parfaitement propre et valorisation compost des déchets verts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
