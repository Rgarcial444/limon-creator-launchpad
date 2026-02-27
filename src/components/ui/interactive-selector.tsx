import React, { useState, useEffect } from 'react';
import { ExternalLink, Tent, Flame, Droplets, Sparkles, Compass } from 'lucide-react';

export interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  url?: string;
}

interface InteractiveSelectorProps {
  options: SelectorOption[];
  title?: string;
  subtitle?: string;
}

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  options,
  title = "Portafolio",
  subtitle = "Proyectos y empresas que confían en nosotros.",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [options.length]);

  if (options.length === 0) return null;

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-background">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fadeInTop">
          {title}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-md mx-auto animate-fadeInTop delay-300">
          {subtitle}
        </p>
      </div>

      {/* Options — horizontal on desktop, vertical on mobile */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-4 w-full max-w-6xl md:h-[420px]">
        {options.map((option, index) => {
          const isActive = index === activeIndex;
          const isAnimated = animatedOptions.includes(index);

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => handleOptionClick(index)}
              onKeyDown={(e) => e.key === 'Enter' && handleOptionClick(index)}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out
                ${isActive
                  ? 'md:flex-[4] flex-[none] h-64 md:h-full'
                  : 'md:flex-[1] flex-[none] h-20 md:h-full'
                }
                ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
              `}
              style={{
                transition: 'flex 0.7s ease, opacity 0.6s ease, transform 0.6s ease, height 0.7s ease',
              }}
            >
              {/* Shadow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`} />

              {/* Background image */}
              <img
                src={option.image}
                alt={option.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                loading="lazy"
              />

              {/* Label */}
              <div className={`absolute z-20 transition-all duration-500 ${isActive ? 'bottom-6 left-6 right-6' : 'bottom-0 left-0 right-0 p-3 md:bottom-6 md:left-4 md:right-4'}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground transition-all duration-500 ${isActive ? 'w-12 h-12' : 'w-9 h-9'}`}>
                    {option.icon}
                  </div>
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 max-w-full' : 'opacity-100 md:opacity-0 md:max-w-0 md:overflow-hidden'}`}>
                    <p className="text-white font-bold text-sm sm:text-base truncate">
                      {option.title}
                    </p>
                    <p className={`text-white/70 text-xs sm:text-sm truncate transition-all duration-500 ${isActive ? 'max-h-6' : 'max-h-0 overflow-hidden md:max-h-0'}`}>
                      {option.description}
                    </p>
                  </div>
                  {isActive && option.url && (
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 transition-all"
                    >
                      Visitar <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeInFromTop {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
