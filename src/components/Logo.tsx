import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", lightMode = false }) => {
  const textColor = lightMode ? "text-white" : "text-[#1a1a1a]";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        {/* Gear Icon Base */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-[#9F1239] w-full h-full absolute top-0 left-0"
        >
          <path 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" 
            className="opacity-20" 
            stroke="none" 
            fill="currentColor"
          />
          <path d="M10.3 2.3a10.05 10.05 0 0 1 3.4 0" />
          <path d="M16.4 4.1a10.05 10.05 0 0 1 2.5 2.5" />
          <path d="M19.9 9.7a10.05 10.05 0 0 1 0 3.4" />
          <path d="M17.9 16.4a10.05 10.05 0 0 1-2.5 2.5" />
          <path d="M13.7 19.9a10.05 10.05 0 0 1-3.4 0" />
          <path d="M7.6 17.9a10.05 10.05 0 0 1-2.5-2.5" />
          <path d="M4.1 13.7a10.05 10.05 0 0 1 0-3.4" />
          <path d="M6.1 7.6a10.05 10.05 0 0 1 2.5-2.5" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 8v-1" />
          <path d="M12 17v-1" />
          <path d="M16 12h1" />
          <path d="M7 12h1" />
        </svg>
        
        {/* Lightning Bolt Overlay */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="text-[#FFD700] w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-sm"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-lg tracking-tight ${textColor}`}>
          Mestre das
        </span>
        <span className={`font-bold text-lg tracking-tight ${textColor} -mt-1`}>
          Ferramentas
        </span>
      </div>
    </div>
  );
};