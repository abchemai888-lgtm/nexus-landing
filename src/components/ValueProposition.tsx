import React from 'react';
import { Layers, Network, Eye, TrendingUp, Sparkles, ArrowLeft } from 'lucide-react';
import { ValueCard } from '../types';

export const ValueProposition: React.FC = () => {
  const cards: Array<ValueCard & { icon: React.ReactNode; badgeEn: string }> = [
    {
      id: 'organize',
      number: '01',
      titleAr: 'نظّم عملياتك',
      descriptionAr: 'اجمع العمليات اليومية في مساحة عمل واحدة أكثر تنظيمًا ووضوحًا.',
      badgeEn: 'ORGANIZE',
      iconName: 'Settings2',
      icon: <Layers className="w-6 h-6 text-[#10D9F5]" />,
    },
    {
      id: 'connect',
      number: '02',
      titleAr: 'اربط معلوماتك',
      descriptionAr: 'اجعل بيانات العملاء والمبيعات والمشروعات والفواتير ضمن تجربة مترابطة وسلسة.',
      badgeEn: 'CONNECT',
      iconName: 'Network',
      icon: <Network className="w-6 h-6 text-[#168BFF]" />,
    },
    {
      id: 'track',
      number: '03',
      titleAr: 'تابع أعمالك',
      descriptionAr: 'احصل على رؤية أوضح لما يحدث داخل أعمالك من خلال مؤشرات لحظية دقيقة.',
      badgeEn: 'TRACK',
      iconName: 'Compass',
      icon: <Eye className="w-6 h-6 text-[#10D9F5]" />,
    },
    {
      id: 'grow',
      number: '04',
      titleAr: 'نمِ أعمالك',
      descriptionAr: 'ابنِ أساسًا تشغيليًا قويًا يساعدك على إدارة التوسع بكفاءة واستقرار دائم.',
      badgeEn: 'SCALE',
      iconName: 'LineChart',
      icon: <TrendingUp className="w-6 h-6 text-[#1268F3]" />,
    },
  ];

  return (
    <section id="value" className="py-20 sm:py-24 relative bg-[#061A3A] border-t border-[#168BFF]/15 scroll-mt-24">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-[#1268F3]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[250px] bg-[#10D9F5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2550] border border-[#168BFF]/30 text-xs font-semibold text-[#10D9F5] mb-3 uppercase tracking-wider font-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            نظام واحد لإدارة أعمالك بشكل أذكى
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7CC] leading-relaxed">
            بيئة عمل متكاملة مصممة لإعادة تعريف طريقة إدارة وتنظيم الأنشطة التشغيلية بانسجام تام.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="nexus-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#10D9F5]/40 hover:shadow-[0_15px_35px_-10px_rgba(18,104,243,0.3)]"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-l from-transparent via-[#10D9F5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header with Icon and Sequential Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#061A3A] border border-[#168BFF]/30 flex items-center justify-center group-hover:border-[#10D9F5] group-hover:shadow-[0_0_15px_rgba(16,217,245,0.3)] transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className="font-brand font-bold text-sm text-[#AAB7CC]/50 group-hover:text-[#10D9F5] transition-colors">
                    {card.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#10D9F5] transition-colors">
                  {card.titleAr}
                </h3>

                {/* Card Description */}
                <p className="text-[#AAB7CC] text-sm leading-relaxed">
                  {card.descriptionAr}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#168BFF]/15 flex items-center justify-between text-xs text-[#AAB7CC]/70 font-brand">
                <span className="tracking-wider">{card.badgeEn}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] group-hover:bg-[#10D9F5] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
