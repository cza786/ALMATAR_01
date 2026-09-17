'use client';

import { useState } from 'react';
import Header from './Header';
import SideDrawer from './SideDrawer';
import Footer from './Footer';
import ScrollAnimation from './ScrollAnimation';
import { LanguageProvider } from '../context/LanguageContext';

export default function SiteShell({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <LanguageProvider>
      <ScrollAnimation />
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
