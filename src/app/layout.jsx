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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=9" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=9" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=9" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=9" />
        <link rel="icon" type="image/png" sizes="144x144" href="/favicon-144x144.png?v=9" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=9" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png?v=9" />
        <link rel="shortcut icon" href="/favicon.ico?v=9" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=9" />
        <meta name="theme-color" content="#090d16" />
        <link rel="canonical" href="https://www.almatar-oil.com" />
        <meta property="og:url" content="https://www.almatar-oil.com" />
        <meta property="og:title" content="ALMATAR | Integrated Oilfield & Projects Management" />
        <meta property="og:description" content="Specialized well intervention, coiled tubing, stimulation, drilling fluids, and oilfield services." />
        <meta property="og:image" content="/opengraph-image.png?v=9" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/opengraph-image.png?v=9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ALMATAR Integrated Oilfield & Projects Management",
              "url": "https://www.almatar-oil.com",
              "logo": "https://www.almatar-oil.com/images/almatar_logo_transparent.png",
              "image": "https://www.almatar-oil.com/opengraph-image.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+963-93-982-2415",
                "contactType": "customer service",
                "email": "info@almatar-oil.com"
              }
            })
          }}
        />
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
