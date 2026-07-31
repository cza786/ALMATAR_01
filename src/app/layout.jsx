'use client';

import { useState } from 'react';
import './globals.css';
import Header from '../components/Header';
import SideDrawer from '../components/SideDrawer';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>ALMATAR | Integrated Oilfield & Projects Management</title>
        <meta name="description" content="ALMATAR Integrated Oilfield & Projects Management provides specialized well intervention, coiled tubing, stimulation, cementing, wellhead maintenance, drilling fluids, and construction services in Syria." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
        <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
