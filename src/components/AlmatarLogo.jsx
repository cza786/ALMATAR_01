'use client';

import React from 'react';

export default function AlmatarLogo({ width = '220px', height = 'auto', className = '' }) {
  return (
    <div className={`almatar-vector-logo ${className}`} style={{ width, height, display: 'inline-flex', alignItems: 'center' }}>
      <img
        src="/images/almatar_logo_raw.png?v=5"
        alt="ALMATAR Integrated Oilfield & Projects Management Logo"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}
