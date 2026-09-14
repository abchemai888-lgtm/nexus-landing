import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, PhoneCall } from 'lucide-react';
import { NexusLogo } from './NexusLogo';

interface NavbarProps {
  onOpenContact: () => void;
  onGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المميزات', href: '#value' },
    { label: 'النظام', href: '#modules' },
    { label: 'الأسعار', href: '#pricing' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#061A3A]/90 backdrop-blur-xl border-b border-[#168BFF]/25 shadow-[0_4px_30px_rgba(6,26,58,0.85)] py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Lockup Area */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="flex items-center gap-3 group transition-opacity hover:opacity-95"
              aria-label="NEXUS Home"
            >
              <NexusLogo size="sm" />
              <div className="flex flex-col text-left select-none" style={{ direction: 'ltr' }}>
                <span className="font-brand font-black text-xl sm:text-2xl tracking-wider text-white leading-none group-hover:text-[#10D9F5] transition-colors">
                  NEXUS
                </span>
                <span className="font-brand text-[8px] sm:text-[9px] tracking-[0.2em] text-[#10D9F5] font-semibold uppercase mt-1 leading-none">
                  BUSINESS OS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm font-medium text-[#AAB7CC] hover:text-white transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#10D9F5] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onOpenContact}
                className="text-sm font-medium text-[#10D9F5] hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1.5"
              >
                <span>تواصل معنا</span>
              </button>
            </nav>

            {/* Action CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-[#AAB7CC] hover:text-white bg-[#0A2550]/60 border border-[#168BFF]/25 hover:border-[#10D9F5]/40 transition-all cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#10D9F5]" />
                <span>طلب استشارة</span>
              </button>

              <button
                onClick={onGetStarted}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm btn-primary cursor-pointer group"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl text-[#AAB7CC] hover:text-white bg-[#0A2550]/80 border border-[#168BFF]/30 hover:border-[#10D9F5] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10D9F5]"
                aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#061A3A]/98 backdrop-blur-2xl border-b border-[#168BFF]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#168BFF]/20">
              <div className="flex items-center gap-2.5" style={{ direction: 'ltr' }}>
                <NexusLogo size="xs" />
                <span className="font-brand font-black text-lg text-white">NEXUS</span>
                <span className="text-[10px] text-[#10D9F5] font-brand font-semibold">OS</span>
              </div>
              <span className="text-xs text-[#AAB7CC]">نظام تشغيل الأعمال</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-right text-base font-medium text-white hover:text-[#10D9F5] py-2.5 px-3 rounded-xl hover:bg-[#0A2550]/60 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-right text-base font-medium text-[#10D9F5] hover:text-white py-2.5 px-3 rounded-xl hover:bg-[#0A2550]/60 transition-colors flex items-center justify-between"
              >
                <span>تواصل معنا</span>
                <PhoneCall className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="w-full mt-4 py-3.5 rounded-xl font-bold text-center text-sm btn-primary flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(18,104,243,0.4)]"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
};
