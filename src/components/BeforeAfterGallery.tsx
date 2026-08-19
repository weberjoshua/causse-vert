import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Sparkles, CheckCheck, Eye, Layers, ShieldCheck, Phone, MapPin } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haies' | 'pelouses'>('all');
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  const realisations = [
    {
      id: 'block-1-coniferes',
      number: 'PHOTO 01',
      category: 'haies',
      badge: 'Conifères',
      title: 'Taille de conifères',
      caption: 'Alignement géométrique parfait et dégagement de bordure',
      location: 'Lacapelle-Marival (46120)',
      beforeImg: 'https://images.unsplash.com/photo-1599818816941-b1e944d15446?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
      specs: 'Haie de 35 mètres linéaires • Hauteur 2,40 m',
      description:
        'Reprise complète d’une haie de conifères débordant largement sur la pelouse. Coupe droite au millimètre, suppression du bois mort et profilage régulier.',
      results: [
        'Réduction de 40 cm en épaisseur sans trouer le feuillage',
        'Nettoyage et évacuation de 4 m³ de branchages',
        'Finitions nettes au ras du muret en pierre',
      ],
    },
    {
      id: 'block-2-feuillue',
      number: 'PHOTO 02',
      category: 'haies',
      badge: 'Haie Feuillue',
      title: 'Restructuration de haie feuillue',
      caption: 'Transformation d’une haie dégarnie en mur végétal structuré',
      location: 'Environs de Figeac (46100)',
      beforeImg: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      specs: 'Haie mixte feuillue • Longueur 25 mètres',
      description:
        'Restructuration en profondeur d’une haie d’arbustes feuillus clairsemée. Élagage pour stimuler les pousses basses et sculpture rectangulaire au cordeau.',
      results: [
        'Stimulation de la repousse dense sur toute la hauteur',
        'Alignement parfait le long de la clôture bois',
        'Lames désinfectées pour protéger la santé des arbustes',
      ],
    },
    {
      id: 'block-3-pelouse-friche',
      number: 'PHOTO 03',
      category: 'pelouses',
      badge: 'Remise en État',
      title: 'Remise en état terrain & tonte',
      caption: 'Fauche de hautes herbes suivie d’une tonte d’agrément à bandes',
      location: 'Secteur Gramat - Lacapelle (46)',
      beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
      specs: 'Terrain de 1 200 m² en friche',
      description:
        'Terrain non tondu depuis le début de saison avec herbes hautes. Débroussaillage en deux passes puis tonte de finition à rouleau avec alternance de bandes.',
      results: [
        'Passage d’une friche sauvage à une pelouse d’apparat',
        'Dégagement soigné autour de l’abri de jardin',
        'Mulching fertilisant et coupe-bordures au millimètre',
      ],
    },
  ];

  const filteredRealisations = realisations.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="realisations" className="py-20 bg-[#fdfcf8] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
            Galerie Réalisations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight italic">
            La Preuve par l'Image
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-black/60 font-sans leading-relaxed">
            Chantiers récents dans le Lot : taille de conifères, haies feuillues et tonte de précision.
          </p>
        </div>

        {/* Filter and View Mode Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-3 rounded-full border border-black/5 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 px-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'bg-transparent text-black/60 hover:text-black hover:bg-[#f0f2eb]'
              }`}
            >
              Tous (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('haies')}
              className={`px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'haies'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'bg-transparent text-black/60 hover:text-black hover:bg-[#f0f2eb]'
              }`}
            >
              Taille de Haies (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pelouses')}
              className={`px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'pelouses'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'bg-transparent text-black/60 hover:text-black hover:bg-[#f0f2eb]'
              }`}
            >
              Pelouse & Tonte (1)
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 text-xs font-sans font-semibold text-black/60 w-full sm:w-auto justify-end px-2">
            <div className="inline-flex rounded-full bg-[#f0f2eb] p-1 border border-black/5">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-widest transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-white text-[#4a5d23] shadow-sm font-bold'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Curseur
              </button>
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-widest transition-all cursor-pointer ${
                  viewMode === 'side-by-side'
                    ? 'bg-white text-[#4a5d23] shadow-sm font-bold'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Côte à côte
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredRealisations.map((item) => (
            <div key={item.id} className="flex flex-col h-full">
              {viewMode === 'slider' ? (
                <BeforeAfterSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                  caption={item.caption}
                  details={item.description}
                  categoryBadge={item.badge}
                  numberTag={item.number}
                />
              ) : (
                <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden flex flex-col h-full">
                  <div className="grid grid-cols-2 gap-0.5 bg-[#e9e7df] aspect-[4/3] relative">
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.beforeImg}
                        alt={`Avant: ${item.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-stone-200 text-[9px] font-sans font-bold uppercase tracking-widest rounded-full">
                        AVANT
                      </span>
                    </div>
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.afterImg}
                        alt={`Après: ${item.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#4a5d23] text-white text-[9px] font-sans font-bold uppercase tracking-widest rounded-full">
                        APRÈS
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#4a5d23] bg-[#f0f2eb] px-3 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                        <span className="text-[10px] font-sans uppercase tracking-widest text-black/50">
                          {item.number}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-sans text-black/60 mb-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/5 space-y-1.5 text-xs font-sans text-black/70">
                      {item.results.map((res, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCheck className="w-3.5 h-3.5 text-[#4a5d23] shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Editorial Realisation Summary Row (Photo 01, 02, 03 + Localisation card from Design HTML) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#f0f2eb] rounded-2xl flex flex-col p-4 relative overflow-hidden border border-black/5">
            <div className="absolute top-3 right-3 text-[10px] font-bold font-sans opacity-30 tracking-widest">PHOTO 01</div>
            <div className="text-2xl mb-2">🌲</div>
            <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#1a1a1a]">Taille de conifères</span>
            <span className="text-[11px] font-sans text-black/50 mt-0.5">Haie droite au cordeau</span>
          </div>

          <div className="bg-[#f0f2eb] rounded-2xl flex flex-col p-4 relative overflow-hidden border border-black/5">
            <div className="absolute top-3 right-3 text-[10px] font-bold font-sans opacity-30 tracking-widest">PHOTO 02</div>
            <div className="text-2xl mb-2">🍂</div>
            <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#1a1a1a]">Restructuration haie</span>
            <span className="text-[11px] font-sans text-black/50 mt-0.5">Densification végétale</span>
          </div>

          <div className="bg-[#f0f2eb] rounded-2xl flex flex-col p-4 relative overflow-hidden border border-black/5">
            <div className="absolute top-3 right-3 text-[10px] font-bold font-sans opacity-30 tracking-widest">PHOTO 03</div>
            <div className="text-2xl mb-2">🌱</div>
            <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#1a1a1a]">Remise en état terrain</span>
            <span className="text-[11px] font-sans text-black/50 mt-0.5">Finition à bandes</span>
          </div>

          <div className="bg-[#4a5d23] rounded-2xl flex flex-col p-4 text-white justify-center shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-emerald-200 mb-1">Localisation</span>
            <span className="text-sm font-bold font-serif">Lacapelle-Marival, Figeac & Lot</span>
            <div className="mt-2.5 w-10 h-[1px] bg-white/40"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
