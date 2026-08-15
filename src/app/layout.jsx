'use client';

import { useState } from 'react';
import './globals.css';
import Header from '../components/Header';
import SideDrawer from '../components/SideDrawer';
import Footer from '../components/Footer';

import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>ALMATAR | Integrated Oilfield & Projects Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ALMATAR Integrated Oilfield & Projects Management provides specialized well intervention, coiled tubing, stimulation, cementing, wellhead maintenance, drilling fluids, and construction services in Syria." />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/almatar_logo_raw.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/almatar_logo_raw.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/almatar_logo_raw.png?v=3" />
        <meta name="theme-color" content="#090d16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
          <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
