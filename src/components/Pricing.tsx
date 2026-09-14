import React from 'react';
import { ArrowLeft, Check, Info, Sparkles, Star } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  // STRICT COMPLIANCE: Using ONLY the exact plan names and prices provided
  const plans: Array<
    PricingPlan & {
      isPopular?: boolean;
      features: string[];
    }
  > = [
    {
      id: 'regular',
      name: 'عادي',
      price: '300',
      taglineAr: 'الخطة الأساسية لبدء تشغيل أعمالك على نظام NEXUS.',
      ctaTextAr: 'اختيار خطة عادي',
      features: [
        'الوصول إلى لوحة التحكم المركزية',
        'إدارة العملاء وسجلات التواصل',
        'متابعة المشروعات والمهام الأساسية',
        'فواتير ومطالبات مالية قياسية',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '500',
      isPopular: true,
      taglineAr: 'المستوى الاحترافي للشركات والمؤسسات المتنامية.',
      ctaTextAr: 'اختيار خطة Pro',
      features: [
        'كافة مزايا الخطة العادية',
        'إدارة متقدمة لصفقات المبيعات (Pipeline)',
        'تخصيص صلاحيات متعددة لفريق العمل',
        'أولوية في الدعم الفني والتجهيز',
      ],
    },
    {
      id: 'business',
      name: 'Business',
      price: '1,300',
      taglineAr: 'بنية تشغيلية متقدمة للأعمال ذات المتطلبات الموسعة.',
      ctaTextAr: 'اختيار خطة Business',
      features: [
        'كافة مزايا خطة Pro الاحترافية',
        'بيئة تشغيل مخصصة ذات طاقة استيعابية كبرى',
        'إعداد متقدم للمسارات والعمليات الداخلية',
        'مدير حساب واستشارات تشغيلية مخصصة',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 relative bg-[#061A3A] border-t border-[#168BFF]/15 scroll-mt-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#1268F3]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2550] border border-[#168BFF]/30 text-xs font-semibold text-[#10D9F5] mb-3 uppercase tracking-wider font-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRICING TIERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            خطط الأسعار
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7CC]">
            اختر الخطة المناسبة لحجم ونطاق أعمالك للانضمام إلى نظام تشغيل NEXUS
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`nexus-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'border-[#10D9F5]/70 bg-[#0A2550]/80 shadow-[0_20px_50px_-15px_rgba(16,217,245,0.35)] ring-1 ring-[#10D9F5]/50 md:-translate-y-2'
                    : 'hover:-translate-y-1 hover:border-[#10D9F5]/40 hover:shadow-[0_15px_35px_-10px_rgba(18,104,243,0.3)]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 bg-gradient-to-r from-[#1268F3] to-[#10D9F5] text-white text-[11px] font-bold px-4 py-1 rounded-b-xl shadow-md flex items-center gap-1.5 font-brand">
                    <Star className="w-3 h-3 fill-current" />
                    <span>POPULAR CHOICE</span>
                  </div>
                )}

                {/* Card Header & Price */}
                <div>
                  <div className={`flex items-center justify-between mb-4 ${isPopular ? 'mt-3' : ''}`}>
                    <h3 className="text-2xl font-bold text-white font-brand">
                      {plan.name}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#061A3A] text-[#10D9F5] border border-[#168BFF]/25 font-brand">
                      NEXUS PLAN
                    </span>
                  </div>

                  <p className="text-sm text-[#AAB7CC] min-h-[44px] mb-6 leading-relaxed">
                    {plan.taglineAr}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-[#061A3A]/85 border border-[#168BFF]/25 text-center">
                    <div className="flex items-center justify-center gap-1 text-white">
                      <span className="font-brand font-black text-5xl sm:text-6xl tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-xs text-[#10D9F5] mt-2 font-medium">
                      السعر المعتمد للخطة
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AAB7CC]">
                        <Check className="w-4 h-4 text-[#10D9F5] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name, plan.price)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer group transition-all duration-300 ${
                      isPopular
                        ? 'btn-primary shadow-[0_8px_25px_rgba(18,104,243,0.5)]'
                        : 'btn-secondary hover:border-[#10D9F5] hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaTextAr}</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification Notice Note (Explicitly required by the prompt) */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-[#0A2550]/40 border border-[#168BFF]/25 flex items-start gap-3.5 text-right">
          <Info className="w-5 h-5 text-[#10D9F5] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#AAB7CC] leading-relaxed">
            ملاحظة: تفاصيل الباقات الإضافية والمواصفات الكاملة سيتم تحديدها وإعلانها فور اعتماد المواصفات النهائية للخطط، والأسعار الموضحة أعلاه تمثل القيمة المعتمدة لكل مستوى تشغيلي.
          </p>
        </div>

      </div>
    </section>
  );
};
