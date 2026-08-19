import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  caption: string;
  details?: string;
  categoryBadge?: string;
  numberTag?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg,
  afterImg,
  title,
  caption,
  details,
  categoryBadge,
  numberTag,
  aspectRatio = 'aspect-[4/3] md:aspect-[16/10]',
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 3) percentage = 3;
      if (percentage > 97) percentage = 97;
      setSliderPos(percentage);
    },
    []
  );

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
      {/* Visual Comparison Stage */}
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} select-none overflow-hidden cursor-ew-resize group bg-[#e9e7df]`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImg}
          alt={`Après: ${title}`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER Tag - Editorial Minimalist */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-[0.2em] uppercase bg-[#4a5d23] text-white shadow-sm">
            <Sparkles className="w-3 h-3 text-emerald-200" />
            APRÈS
          </span>
        </div>

        {/* Number tag top left */}
        {numberTag && (
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-sans font-bold tracking-[0.2em] uppercase bg-black/60 backdrop-blur-sm text-white/90">
              {numberTag}
            </span>
          </div>
        )}

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImg}
            alt={`Avant: ${title}`}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.95]"
          />
          {/* BEFORE Tag */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-[0.2em] uppercase bg-black/75 backdrop-blur-sm text-stone-200 shadow-sm border border-white/20">
              AVANT
            </span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle Knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#4a5d23] shadow-lg flex items-center justify-center border-2 border-[#4a5d23] group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Hover Hint */}
        <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-sans uppercase tracking-widest text-white/90 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          Glisser
        </div>
      </div>

      {/* Caption & Context Block */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">
              {title}
            </h3>
            {categoryBadge && (
              <span className="shrink-0 px-3 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#f0f2eb] text-[#4a5d23]">
                {categoryBadge}
              </span>
            )}
          </div>
          <p className="text-xs font-sans uppercase tracking-wider text-[#4a5d23] font-semibold mb-2">
            {caption}
          </p>
          {details && (
            <p className="text-xs font-sans text-black/60 leading-relaxed">
              {details}
            </p>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-sans text-black/60">
          <div className="flex items-center gap-1.5 text-[#4a5d23] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4a5d23]" />
            <span>Finition soignée & évacuation</span>
          </div>
          <button
            type="button"
            onClick={() => setSliderPos(sliderPos > 50 ? 15 : 85)}
            className="text-black/50 hover:text-black font-sans uppercase tracking-widest text-[10px] font-bold underline transition-colors cursor-pointer"
          >
            {sliderPos > 50 ? 'Avant' : 'Après'}
          </button>
        </div>
      </div>
    </div>
  );
};
