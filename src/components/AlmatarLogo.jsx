'use client';

import React from 'react';

export default function AlmatarLogo({ width = '220px', height = 'auto', className = '' }) {
  return (
    <div className={`almatar-vector-logo ${className}`} style={{ width, height, display: 'inline-flex', alignItems: 'center' }}>
      <svg
        viewBox="0 0 340 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        aria-label="ALMATAR Integrated Oilfield & Projects Management Logo"
      >
        <defs>
          {/* Rich Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="40%" stopColor="#D97706" />
            <stop offset="85%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Premium Metallic Cyan Gradient */}
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Deep Navy/Black Shield Gradient */}
          <linearGradient id="darkShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Drop Shadow for Emblem */}
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D97706" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* EMBLEM / SHIELD ICON */}
        <g filter="url(#logoGlow)" transform="translate(4, 4)">
          {/* Shield Outer Ring */}
          <path
            d="M34 4 L62 16 V38 C62 55.5 49.5 68 34 72 C18.5 68 6 55.5 6 38 V16 L34 4 Z"
            fill="url(#darkShieldGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
          />

          {/* Oil Rig Derrick Lines */}
          <path
            d="M34 16 L20 54 H48 L34 16 Z"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M25 36 H43"
            stroke="url(#goldGrad)"
            strokeWidth="1.8"
          />
          <path
            d="M22 46 H46"
            stroke="url(#goldGrad)"
            strokeWidth="1.8"
          />

          {/* Flame / Energy Drop Peak */}
          <path
            d="M34 14 C36 10 39 12 39 16 C39 19 36 21 34 21 C32 21 29 19 29 16 C29 12 32 10 34 14 Z"
            fill="url(#cyanGrad)"
          />

          {/* Foundation Beam */}
          <path
            d="M14 54 H54"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* BRAND TYPOGRAPHY */}
        <g transform="translate(80, 10)">
          {/* Main Title: ALMATAR */}
          <text
            x="0"
            y="32"
            fill="#FFFFFF"
            fontSize="30"
            fontWeight="800"
            fontFamily="'Outfit', 'Inter', sans-serif"
            letterSpacing="3"
          >
            ALMATAR
          </text>

          {/* Gold Accent Line */}
          <rect
            x="0"
            y="39"
            width="240"
            height="2.5"
            rx="1"
            fill="url(#goldGrad)"
          />

          {/* Subtitle / Description */}
          <text
            x="0"
            y="54"
            fill="#94A3B8"
            fontSize="10.5"
            fontWeight="600"
            fontFamily="'Inter', 'Cairo', sans-serif"
            letterSpacing="1.2"
          >
            INTEGRATED OILFIELD & PROJECTS MANAGEMENT
          </text>
        </g>
      </svg>
    </div>
  );
}
