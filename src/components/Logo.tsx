import React from 'react';
import logoImg from '../assets/images/syntheriq_logo_1786547720568.jpg';

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'mark-only' | 'full-stacked';
}

export const Logo: React.FC<LogoProps> = ({
  showTagline = false,
  className = '',
  size = 'md',
  variant = 'horizontal',
}) => {
  // Size mappings
  const imgDimensions = {
    sm: 'w-8 h-8 md:w-9 md:h-9',
    md: 'w-10 h-10 md:w-11 md:h-11',
    lg: 'w-14 h-14 md:w-16 md:h-16',
    xl: 'w-24 h-24 md:w-32 md:h-32',
  }[size];

  const textSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
  }[size];

  const subtextSizes = {
    sm: 'text-[9px] md:text-[10px]',
    md: 'text-[10px] md:text-[11px]',
    lg: 'text-xs md:text-sm',
    xl: 'text-sm md:text-base',
  }[size];

  if (variant === 'full-stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-purple-100/80 bg-white p-1 max-w-[220px] transition-transform duration-300 hover:scale-105">
          <img
            src={logoImg}
            alt="Syntheriq Technologies Official Logo"
            className="w-full h-auto object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        {showTagline && (
          <span className="text-xs sm:text-sm text-slate-500 font-medium italic mt-2 tracking-wide">
            Engineering the Future
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* Official Uploaded Logo Asset */}
      <div className={`relative flex-shrink-0 ${imgDimensions} rounded-xl overflow-hidden shadow-sm border border-purple-100/80 group-hover:shadow-md group-hover:scale-105 transition-all duration-300 bg-white p-0.5`}>
        <img
          src={logoImg}
          alt="Syntheriq Technologies Official Logo"
          className="w-full h-full object-contain rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline">
            <span className={`font-heading font-extrabold ${textSizes} tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors`}>
              SYNTHERIQ
            </span>
          </div>
          <div className="flex items-center gap-1.5 -mt-1">
            <span className={`${subtextSizes} font-semibold tracking-[0.22em] text-indigo-600 uppercase font-mono`}>
              TECHNOLOGIES
            </span>
          </div>
          {showTagline && (
            <span className="text-[11px] text-slate-500 font-medium italic mt-0.5">
              Engineering the Future
            </span>
          )}
        </div>
      )}
    </div>
  );
};
