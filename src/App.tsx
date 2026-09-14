/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Modules } from './components/Modules';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Coupon } from './components/Coupon';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenContact = () => {
    setSelectedPlan(null);
    setIsContactOpen(true);
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(`${planName} - ${price}`);
    setIsContactOpen(true);
  };

  const handleGetStarted = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    const modulesSection = document.querySelector('#modules');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#061A3A] text-white flex flex-col selection:bg-[#1268F3] selection:text-white">
      {/* Sticky Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onGetStarted={handleGetStarted}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero
          onGetStarted={handleGetStarted}
          onExplore={handleExplore}
        />
        <ValueProposition />
        <Modules />
        <HowItWorks />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Coupon />
        <FinalCTA onGetStarted={handleGetStarted} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Contact & Registration Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
