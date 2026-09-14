import React from 'react';
import { NexusLogo } from './NexusLogo';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061A3A] border-t border-[#168BFF]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-12 border-b border-[#168BFF]/15">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <a href="#hero" className="mb-4 inline-block" aria-label="NEXUS">
              <NexusLogo variant="horizontal" size="md" />
            </a>
            
            <p
              style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
              className="text-sm text-[#AAB7CC] mt-2 font-brand font-medium tracking-wide"
            >
              Connect Everything. <span className="text-[#10D9F5]">Grow Beyond.</span>
            </p>
          </div>

          {/* Navigation Links (As requested in section 11 & 12) */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Footer Navigation">
            <button
              onClick={() => scrollTo('#hero')}
              className="text-sm text-[#AAB7CC] hover:text-white transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('#value')}
              className="text-sm text-[#AAB7CC] hover:text-white transition-colors cursor-pointer"
            >
              المميزات
            </button>
            <button
              onClick={() => scrollTo('#modules')}
              className="text-sm text-[#AAB7CC] hover:text-white transition-colors cursor-pointer"
            >
              النظام
            </button>
            <button
              onClick={() => scrollTo('#pricing')}
              className="text-sm text-[#AAB7CC] hover:text-white transition-colors cursor-pointer"
            >
              الأسعار
            </button>
            <button
              onClick={onOpenContact}
              className="text-sm text-[#10D9F5] hover:text-white transition-colors cursor-pointer"
            >
              تواصل معنا
            </button>
          </nav>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AAB7CC]/70 gap-4">
          <div className="font-brand">
            © 2026 NEXUS. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10D9F5]" />
            <span>BUSINESS OPERATING SYSTEM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
