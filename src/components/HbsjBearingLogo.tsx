import React from 'react';

interface HbsjBearingLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  showSubtitle?: boolean;
}

export const HbsjBearingLogo: React.FC<HbsjBearingLogoProps> = ({
  className = 'h-10',
  variant = 'horizontal',
  showSubtitle = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector Emblem matching the official HBSJ BEARING emblem */}
      <svg
        viewBox="0 0 280 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-12 overflow-visible"
      >
        <defs>
          <linearGradient id="hbsjBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e6fff" />
            <stop offset="35%" stopColor="#0d52b9" />
            <stop offset="70%" stopColor="#0a3c8a" />
            <stop offset="100%" stopColor="#062557" />
          </linearGradient>

          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#cbd5e1" />
            <stop offset="60%" stopColor="#64748b" />
            <stop offset="90%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="arcBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#082f49" />
          </linearGradient>

          <radialGradient id="ballGrad1" cx="35%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#e2e8f0" />
            <stop offset="55%" stopColor="#64748b" />
            <stop offset="85%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="75%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Sweeping Top Arcs */}
        <path
          d="M 12,24 C 55,2 170,0 248,32 C 220,24 130,12 35,26 Z"
          fill="url(#arcBlue)"
          filter="url(#softGlow)"
        />
        <path
          d="M 38,27 C 110,14 195,18 244,35 C 215,30 135,20 50,28 Z"
          fill="url(#chromeGrad)"
          opacity="0.9"
        />

        {/* Main "HBSJ" Typography */}
        <g transform="skewX(-11) translate(16, 0)">
          <text
            x="8"
            y="54"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="41"
            letterSpacing="-0.5"
            fill="url(#hbsjBlueGrad)"
            stroke="#1d4ed8"
            strokeWidth="0.8"
            style={{ fontStyle: 'italic' }}
          >
            HBSJ
          </text>
        </g>

        {/* Lower Sweeping Horizon Line */}
        <path
          d="M 10,61 C 55,62 105,65 140,71 C 90,67 40,65 10,63 Z"
          fill="url(#arcBlue)"
          opacity="0.8"
        />

        {/* "BEARING" Subtitle in brushed titanium */}
        <text
          x="28"
          y="71"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="12.5"
          letterSpacing="4.8"
          fill="url(#chromeGrad)"
        >
          BEARING
        </text>

        {/* 3 Iconic Ball Bearings at the bottom right */}
        {/* Bearing 3 (Smallest, Left) */}
        <g transform="translate(162, 53) scale(0.48)">
          <circle cx="20" cy="20" r="18" fill="url(#ringGrad)" stroke="#334155" strokeWidth="1" />
          <circle cx="20" cy="20" r="13" fill="#090d16" />
          <circle cx="20" cy="20" r="8" fill="url(#ringGrad)" />
          <circle cx="20" cy="20" r="5" fill="#090d16" />
          <circle cx="20" cy="9.5" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="14" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="26" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="20" cy="30.5" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="26" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="14" r="3.2" fill="url(#ballGrad1)" />
        </g>

        {/* Bearing 2 (Medium, Middle) */}
        <g transform="translate(192, 43) scale(0.68)">
          <circle cx="20" cy="20" r="18" fill="url(#ringGrad)" stroke="#475569" strokeWidth="1" />
          <circle cx="20" cy="20" r="13" fill="#05070e" />
          <circle cx="20" cy="20" r="8" fill="url(#ringGrad)" />
          <circle cx="20" cy="20" r="5" fill="#05070e" />
          <circle cx="20" cy="9.5" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="14" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="26" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="20" cy="30.5" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="26" r="3.2" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="14" r="3.2" fill="url(#ballGrad1)" />
        </g>

        {/* Bearing 1 (Largest, Right) */}
        <g transform="translate(228, 32) scale(0.92)">
          <circle cx="20" cy="20" r="19" fill="url(#ringGrad)" stroke="#64748b" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="13.5" fill="#020408" />
          <circle cx="20" cy="20" r="8" fill="url(#ringGrad)" />
          <circle cx="20" cy="20" r="4.8" fill="#020408" />
          <circle cx="20" cy="9.5" r="3.3" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="13.8" r="3.3" fill="url(#ballGrad1)" />
          <circle cx="27.5" cy="26.2" r="3.3" fill="url(#ballGrad1)" />
          <circle cx="20" cy="30.5" r="3.3" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="26.2" r="3.3" fill="url(#ballGrad1)" />
          <circle cx="12.5" cy="13.8" r="3.3" fill="url(#ballGrad1)" />
        </g>
      </svg>

      {/* Brand Label & Global Tag */}
      {showSubtitle && (
        <div className="flex flex-col border-l border-slate-300 pl-2.5">
          <span className="font-display font-black text-xs sm:text-sm tracking-tight text-[#0a192f] flex items-center gap-1.5">
            <span>HBSJ</span>
            <span className="text-slate-400">&</span>
            <span className="text-amber-600">USJ</span>
          </span>
          <span className="text-[10px] text-[#0052cc] tracking-wider uppercase font-bold">
            Usines Chine · Qualité Européenne · Worldwide
          </span>
        </div>
      )}
    </div>
  );
};
