import React from 'react';
import { ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';
import { NexusLogo } from './NexusLogo';

interface FinalCTAProps {
  onGetStarted: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#061A3A] overflow-hidden border-t border-[#168BFF]/15">
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-t from-[#1268F3]/20 via-[#10D9F5]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Official Brand Logo */}
        <div className="mb-8 flex justify-center">
          <NexusLogo variant="primary" size="lg" />
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
          جاهز لتشغيل أعمالك بطريقة أكثر اتصالًا؟
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#AAB7CC] max-w-2xl mx-auto mb-10 leading-relaxed">
          ابدأ مع NEXUS وابنِ تجربة أكثر تنظيمًا واستقرارًا لإدارة عملياتك اليومية.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-base btn-primary flex items-center justify-center gap-3 cursor-pointer group shadow-[0_8px_30px_rgba(16,217,245,0.35)]"
          >
            <span>ابدأ الآن</span>
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </button>
          
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base btn-secondary flex items-center justify-center gap-2.5 cursor-pointer text-white hover:border-[#10D9F5]"
          >
            <MessageSquare className="w-4 h-4 text-[#10D9F5]" />
            <span>طلب استشارة تشغيلية</span>
          </button>
        </div>

        {/* Official Tagline */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A2550]/80 border border-[#168BFF]/30 text-xs sm:text-sm font-semibold font-brand text-white shadow-inner">
          <Sparkles className="w-4 h-4 text-[#10D9F5]" />
          <span dir="ltr">
            Connect Everything. <span className="text-[#10D9F5]">Grow Beyond.</span>
          </span>
        </div>

      </div>
    </section>
  );
};
