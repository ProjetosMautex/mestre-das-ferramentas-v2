import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; // true if logo is on a dark background (text is white), false if on a light background (text is dark)
}

export const Logo: React.FC<LogoProps> = ({ className = "", lightMode = false }) => {
  const textColor = lightMode ? "text-white" : "text-[#1a1a1a]";
  const pageBgColor = lightMode ? "#1a1a1a" : "#ffffff";
  
  return (
    <div className={`group flex items-center gap-3 cursor-pointer select-none transition-all duration-300 ${className}`}>
      {/* Premium Emblem Container */}
      <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          <defs>
            {/* Pure Gold/Yellow gradient matching the site's theme (#FFD700) */}
            <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff176" />   {/* light yellow */}
              <stop offset="60%" stopColor="#FFD700" />  {/* brand gold/yellow */}
              <stop offset="100%" stopColor="#e5c100" /> {/* dark gold */}
            </linearGradient>

            {/* Bright Neon Yellow Accent for lightning and highlights */}
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />   {/* pure white glow */}
              <stop offset="35%" stopColor="#fff59d" />  {/* soft yellow */}
              <stop offset="100%" stopColor="#FFD700" /> {/* brand yellow */}
            </linearGradient>
            
            {/* Metallic Silver gradient for tools */}
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />   {/* slate-50 */}
              <stop offset="45%" stopColor="#cbd5e1" />  {/* slate-300 */}
              <stop offset="100%" stopColor="#475569" /> {/* slate-600 */}
            </linearGradient>

            {/* Modern carbon/fiberglass handle gradient for hammer (fits yellow/black theme) */}
            <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />   {/* slate-600 */}
              <stop offset="50%" stopColor="#334155" />  {/* slate-700 */}
              <stop offset="100%" stopColor="#1e293b" /> {/* slate-800 */}
            </linearGradient>

            {/* Hexagon Border gradient in pure yellow/gold */}
            <linearGradient id="hexBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff59d" />   {/* light yellow */}
              <stop offset="50%" stopColor="#FFD700" />  {/* brand yellow */}
              <stop offset="100%" stopColor="#ca9b00" /> {/* dark golden bronze */}
            </linearGradient>

            {/* Inner Shield Gradient fill - adapts dynamically to light/dark */}
            <linearGradient id="shieldBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={lightMode ? "#27272a" : "#f4f4f5"} stopOpacity="0.9" />
              <stop offset="100%" stopColor={lightMode ? "#09090b" : "#e4e4e7"} stopOpacity="0.95" />
            </linearGradient>

            {/* High-tech yellow glow filter */}
            <filter id="glowFilter" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal Outer Shadow (glowing yellow/gold) */}
          <path 
            d="M 50,4 L 90,27 L 90,73 L 50,96 L 10,73 L 10,27 Z" 
            fill="none" 
            stroke="url(#hexBorderGrad)" 
            strokeWidth="3" 
            opacity="0.45"
            filter="url(#glowFilter)"
            strokeLinejoin="round"
          />

          {/* Hexagonal Shield Body */}
          <path 
            d="M 50,5.5 L 89,28 L 89,72 L 50,94.5 L 11,72 L 11,28 Z" 
            fill="url(#shieldBg)" 
            stroke="url(#hexBorderGrad)" 
            strokeWidth="2.5" 
            strokeLinejoin="round"
          />

          {/* Rotating Mechanical Gear Group */}
          <g 
            className="transition-transform duration-[800ms] cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:rotate-[180deg]"
            style={{ transformOrigin: '50px 50px' }}
          >
            {/* Gear Rim */}
            <circle cx="50" cy="50" r="23" stroke="url(#toolGrad)" strokeWidth="4" fill="none" opacity="0.9" />
            
            {/* Gear Spokes */}
            <line x1="50" y1="27" x2="50" y2="73" stroke="url(#toolGrad)" strokeWidth="3.5" opacity="0.65" />
            <line x1="27" y1="50" x2="73" y2="50" stroke="url(#toolGrad)" strokeWidth="3.5" opacity="0.65" />
            
            {/* Gear Teeth (Programmatic rendering) */}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d="M 45,28 L 47,19 L 53,19 L 55,28 Z"
                fill="url(#toolGrad)"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}

            {/* Inner Hub (Blocks spokes, houses tools) */}
            <circle cx="50" cy="50" r="14.5" fill={pageBgColor} stroke="url(#toolGrad)" strokeWidth="2.5" />
          </g>

          {/* Crossed Craftsman Tools (Hammer and Wrench) */}
          <g className="transition-transform duration-300 group-hover:scale-[1.03]" style={{ transformOrigin: '50px 50px' }}>
            
            {/* 1. Wrench (Chave de Boca) - Diagonal bottom-left to top-right */}
            <g transform="rotate(-45 50 50)">
              {/* Wrench Shaft */}
              <rect x="47.5" y="32" width="5" height="36" rx="1.5" fill="url(#silverGrad)" />
              {/* Wrench Center Detail */}
              <rect x="48.5" y="38" width="3" height="24" rx="0.5" fill="url(#toolGrad)" opacity="0.8" />
              
              {/* Wrench Open Jaw (Top) */}
              <path 
                d="M 42.5,33 C 40.5,27.5 59.5,27.5 57.5,33 L 54.5,35.5 C 53.5,33.5 46.5,33.5 45.5,35.5 Z" 
                fill="url(#silverGrad)" 
              />
              
              {/* Wrench Closed Ring (Bottom) */}
              <circle cx="50" cy="68" r="6" fill="url(#silverGrad)" />
              <circle cx="50" cy="68" r="2.8" fill={pageBgColor} />
            </g>

            {/* 2. Hammer (Martelo de Garra) - Diagonal bottom-right to top-left */}
            <g transform="rotate(45 50 50)">
              {/* Handle */}
              <rect x="48.5" y="30" width="3" height="38" rx="1" fill="url(#handleGrad)" />
              {/* Handle Rubber Grip */}
              <rect x="48.5" y="52" width="3" height="16" rx="0.8" fill="#1e293b" />
              
              {/* Hammer Metal Head */}
              <path 
                d="M 38.5,24.5 L 51,24.5 C 55,24.5 58,27.5 59.5,31 L 57,31.5 C 56,29 54,27.5 51,27.5 L 48.5,27.5 L 48.5,30 L 38.5,30 Z" 
                fill="url(#silverGrad)" 
              />
              {/* Hammer Strike Face Accent */}
              <path d="M 38.5,24.5 L 37.5,25.5 V 29 L 38.5,30 Z" fill="url(#toolGrad)" />
            </g>

            {/* 3. Central Power Lightning Bolt (Energia/Precisão) */}
            <path 
              d="M 53.5,37 L 43.5,49.5 H 49 L 46.5,63 L 56.5,50.5 H 51 Z" 
              fill="url(#neonGrad)" 
              stroke={pageBgColor} 
              strokeWidth="2" 
              strokeLinejoin="round"
              className="drop-shadow-[0_2px_4px_rgba(255,215,0,0.5)]"
            />
          </g>
        </svg>
      </div>
      
      {/* Brand Typography */}
      <div className="flex flex-col leading-none select-none">
        <span className={`font-black text-xl tracking-wider uppercase transition-colors duration-300 ${textColor} group-hover:text-[#FFD700]`}>
          Mestre
        </span>
        <span className="font-bold text-[0.72rem] tracking-[0.16em] uppercase text-[#FFD700] mt-1 transition-all duration-300 group-hover:text-yellow-300 group-hover:tracking-[0.18em]">
          das Ferramentas
        </span>
      </div>
    </div>
  );
};