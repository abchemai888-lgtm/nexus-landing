import React from 'react';
import { UserPlus, LayoutGrid, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      titleAr: 'أنشئ حسابك',
      descriptionAr: 'سجّل في النظام وابدأ تجهيز بيئة العمل الخاصة بمؤسستك في خطوات معدودة وبلا تعقيد.',
      badgeEn: 'ONBOARDING',
      icon: <UserPlus className="w-6 h-6 text-[#10D9F5]" />,
    },
    {
      number: '02',
      titleAr: 'نظّم أعمالك',
      descriptionAr: 'رتّب العملاء والمشاريع والعمليات في واجهات متصلة تعزز وضوح المسارات اليومية لفرقك.',
      badgeEn: 'INTEGRATION',
      icon: <LayoutGrid className="w-6 h-6 text-[#168BFF]" />,
    },
    {
      number: '03',
      titleAr: 'تابع ونمِ أعمالك',
      descriptionAr: 'احصل على رؤية فورية ومتكاملة تساعدك على اتخاذ القرارات وإدارة التوسع بثقة واستقرار.',
      badgeEn: 'GROWTH',
      icon: <Sparkles className="w-6 h-6 text-[#1268F3]" />,
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative bg-[#061A3A] border-t border-[#168BFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2550] border border-[#168BFF]/30 text-xs font-semibold text-[#10D9F5] mb-3 uppercase tracking-wider font-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THREE SIMPLE STEPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            ابدأ ببساطة
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7CC]">
            ثلاث خطوات عملية لبدء تشغيل نظام أعمالك الموحد
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Connecting horizontal line on desktop aligned with icons */}
          <div className="hidden md:block absolute top-[52px] left-24 right-24 h-[2px] bg-gradient-to-r from-[#10D9F5]/40 via-[#168BFF]/40 to-[#1268F3]/40 z-0 pointer-events-none" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="nexus-card rounded-2xl p-6 sm:p-8 relative z-10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-[#10D9F5]/40 hover:shadow-[0_15px_35px_-10px_rgba(18,104,243,0.3)]"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#061A3A] border border-[#168BFF]/35 flex items-center justify-center group-hover:border-[#10D9F5] group-hover:shadow-[0_0_20px_rgba(16,217,245,0.35)] transition-all duration-300 relative z-10">
                    {step.icon}
                  </div>
                  <span className="font-brand font-black text-3xl sm:text-4xl text-[#168BFF]/30 group-hover:text-[#10D9F5] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#10D9F5] transition-colors">
                  {step.titleAr}
                </h3>

                {/* Step Description */}
                <p className="text-[#AAB7CC] text-sm leading-relaxed">
                  {step.descriptionAr}
                </p>
              </div>

              {/* Bottom Micro indicator */}
              <div className="mt-8 pt-4 border-t border-[#168BFF]/15 flex items-center justify-between text-xs text-[#AAB7CC]/70 font-brand">
                <span>{step.badgeEn}</span>
                <span className="w-2 h-2 rounded-full bg-[#10D9F5]/40 group-hover:bg-[#10D9F5] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
