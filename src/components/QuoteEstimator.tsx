import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteEstimatorProps {
  onApplyEstimate: (data: { service: string; notes: string }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onApplyEstimate }) => {
  const [activeTab, setActiveTab] = useState<'haie' | 'pelouse' | 'remise'>('haie');
  
  // Hedge parameters
  const [hedgeLength, setHedgeLength] = useState<number>(30);
  const [hedgeHeight, setHedgeHeight] = useState<'standard' | 'haute'>('standard');
  const [hedgeSides, setHedgeSides] = useState<'1' | '2' | '3'>('2');
  
  // Lawn parameters
  const [lawnArea, setLawnArea] = useState<number>(800);
  const [grassHeight, setGrassHeight] = useState<'normal' | 'haute'>('normal');
  const [includeEdging, setIncludeEdging] = useState<boolean>(true);
  
  // Options
  const [includeEvacuation, setIncludeEvacuation] = useState<boolean>(true);

  const calculateTotal = () => {
    let base = 0;

    if (activeTab === 'haie') {
      const pricePerMeter = hedgeHeight === 'standard' ? 4.5 : 7.0;
      const sidesMultiplier = hedgeSides === '1' ? 0.7 : hedgeSides === '2' ? 1.0 : 1.3;
      base = hedgeLength * pricePerMeter * sidesMultiplier;
    } else if (activeTab === 'pelouse') {
      const rate = grassHeight === 'normal' ? 0.08 : 0.14;
      base = Math.max(45, lawnArea * rate);
      if (includeEdging) base += 20;
    } else {
      base = 180 + (lawnArea * 0.12);
    }

    if (includeEvacuation) {
      base += activeTab === 'haie' ? Math.max(30, hedgeLength * 1.5) : 35;
    }

    const minPrice = Math.round(base * 0.9);
    const maxPrice = Math.round(base * 1.15);
    return { min: minPrice, max: maxPrice };
  };

  const estimate = calculateTotal();

  const handleSendToForm = () => {
    let service = 'Taille de Haies';
    let notes = `Estimation simulée : ${estimate.min}€ - ${estimate.max}€ TTC. `;
    if (activeTab === 'haie') {
      service = 'Taille de Haies';
      notes += `Haie de ${hedgeLength}m, hauteur ${hedgeHeight === 'standard' ? '< 2m' : '> 2m'}, ${hedgeSides} faces. Évacuation: ${includeEvacuation ? 'Oui' : 'Non'}.`;
    } else if (activeTab === 'pelouse') {
      service = 'Tonte de Pelouse';
      notes += `Pelouse de ${lawnArea}m², état ${grassHeight}. Évacuation: ${includeEvacuation ? 'Oui' : 'Non'}.`;
    } else {
      service = 'Remise en état de friche';
      notes += `Remise au propre intégrale pour surface de ${lawnArea}m².`;
    }

    onApplyEstimate({ service, notes });
  };

  return (
    <section className="py-16 bg-[#fdfcf8] border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
            Simulateur Express
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] italic">
            Estimez le Budget de Votre Projet
          </h2>
          <p className="text-xs uppercase tracking-[0.15em] text-black/60 font-sans">
            Fourchette indicative en direct selon les dimensions de votre jardin.
          </p>
        </div>

        <div className="bg-[#f0f2eb] rounded-3xl border border-black/5 p-6 sm:p-8 shadow-sm">
          
          {/* Tab Selector */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-white rounded-full mb-8 shadow-xs border border-black/5">
            <button
              type="button"
              onClick={() => setActiveTab('haie')}
              className={`py-2.5 px-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'haie'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              Taille de Haie
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pelouse')}
              className={`py-2.5 px-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'pelouse'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              Tonte Pelouse
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('remise')}
              className={`py-2.5 px-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'remise'
                  ? 'bg-[#4a5d23] text-white shadow-sm'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              Remise en État
            </button>
          </div>

          {/* Form Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-5 bg-white p-6 rounded-2xl border border-black/5 shadow-xs">
              {activeTab === 'haie' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-sans font-bold text-black/80 mb-1.5">
                      <span>Longueur de haie</span>
                      <span className="text-[#4a5d23] font-extrabold">{hedgeLength} mètres</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      step="5"
                      value={hedgeLength}
                      onChange={(e) => setHedgeLength(Number(e.target.value))}
                      className="w-full h-2 bg-[#e9e7df] rounded-lg appearance-none cursor-pointer accent-[#4a5d23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-black/80 mb-2">
                      Hauteur de la haie
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setHedgeHeight('standard')}
                        className={`p-2.5 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                          hedgeHeight === 'standard'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        Moins de 2 m
                      </button>
                      <button
                        type="button"
                        onClick={() => setHedgeHeight('haute')}
                        className={`p-2.5 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                          hedgeHeight === 'haute'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        Plus de 2 m
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-black/80 mb-2">
                      Faces à tailler
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setHedgeSides('1')}
                        className={`p-2 rounded-xl text-xs text-center border cursor-pointer ${
                          hedgeSides === '1'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        1 Face
                      </button>
                      <button
                        type="button"
                        onClick={() => setHedgeSides('2')}
                        className={`p-2 rounded-xl text-xs text-center border cursor-pointer ${
                          hedgeSides === '2'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        2 Faces
                      </button>
                      <button
                        type="button"
                        onClick={() => setHedgeSides('3')}
                        className={`p-2 rounded-xl text-xs text-center border cursor-pointer ${
                          hedgeSides === '3'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        2 F + Dessus
                      </button>
                    </div>
                  </div>
                </>
              )}

              {(activeTab === 'pelouse' || activeTab === 'remise') && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-sans font-bold text-black/80 mb-1.5">
                      <span>Surface du terrain</span>
                      <span className="text-[#4a5d23] font-extrabold">{lawnArea} m²</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="3500"
                      step="100"
                      value={lawnArea}
                      onChange={(e) => setLawnArea(Number(e.target.value))}
                      className="w-full h-2 bg-[#e9e7df] rounded-lg appearance-none cursor-pointer accent-[#4a5d23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-black/80 mb-2">
                      État de la pelouse
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setGrassHeight('normal')}
                        className={`p-2.5 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                          grassHeight === 'normal'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        Entretien courant
                      </button>
                      <button
                        type="button"
                        onClick={() => setGrassHeight('haute')}
                        className={`p-2.5 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                          grassHeight === 'haute'
                            ? 'bg-[#f0f2eb] border-[#4a5d23] text-[#4a5d23] font-bold'
                            : 'bg-white border-black/10 text-black/70'
                        }`}
                      >
                        Herbes hautes / Friche
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-2 border-t border-black/5">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeEvacuation}
                    onChange={(e) => setIncludeEvacuation(e.target.checked)}
                    className="w-4 h-4 rounded text-[#4a5d23] focus:ring-[#4a5d23]"
                  />
                  <span className="text-xs font-sans text-black/70 font-medium">
                    Inclure l'évacuation des déchets végétaux
                  </span>
                </label>
              </div>
            </div>

            {/* Estimation Result Card */}
            <div className="bg-[#4a5d23] text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest bg-white/20 text-white mb-4">
                  <Sparkles className="w-3 h-3 text-emerald-200" />
                  <span>Fourchette Estimative</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-sans uppercase tracking-wider text-emerald-100">Budget estimé TTC :</div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white italic">
                    {estimate.min} € – {estimate.max} €
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 space-y-2 text-xs font-sans text-emerald-100">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Matériel professionnel Honda inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Nettoyage & soufflage des allées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Visite préalable gratuite et sans engagement</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleSendToForm}
                  className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-stone-100 text-[#4a5d23] font-sans font-bold text-xs uppercase tracking-widest shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Confirmer avec cette estimation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
