import React, { useState } from 'react';
import { ArrowLeft, Play, Sparkles, CheckCircle2, ArrowRightLeft } from 'lucide-react';
import { NexusLogo } from './NexusLogo';

interface HeroProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExplore }) => {
  const [activeModule, setActiveModule] = useState<string>('Sales');

  // Connected business operating system modules with connection insights
  const connectedModules = [
    {
      id: 'Clients',
      labelAr: 'العملاء',
      labelEn: 'Clients',
      x: '20%',
      y: '26%',
      icon: '👤',
      connectionAr: 'ملفات العملاء متزامنة تلقائيًا مع الصفقات البيعية والمشاريع والفواتير الصادرة.',
    },
    {
      id: 'Sales',
      labelAr: 'المبيعات',
      labelEn: 'Sales',
      x: '80%',
      y: '26%',
      icon: '📈',
      connectionAr: 'حركة المبيعات والفرص تحوّل الصفقات فورًا إلى مشروعات تنفيذية ومطالبات فوترة.',
    },
    {
      id: 'Projects',
      labelAr: 'المشروعات',
      labelEn: 'Projects',
      x: '18%',
      y: '72%',
      icon: '📁',
      connectionAr: 'مراحل التنفيذ والمهام ترتبط بسجلات العميل ومحطات الاستحقاق المالي بوضوح.',
    },
    {
      id: 'Invoices',
      labelAr: 'الفواتير',
      labelEn: 'Invoices',
      x: '82%',
      y: '72%',
      icon: '🧾',
      connectionAr: 'الدفعات وحالات السداد تنعكس آليًا على لوحة التحكم ومؤشرات المبيعات المباشرة.',
    },
    {
      id: 'Operations',
      labelAr: 'العمليات',
      labelEn: 'Operations',
      x: '50%',
      y: '14%',
      icon: '⚙️',
      connectionAr: 'تنسيق الإجراءات والموافقات وسير العمل الداخلي لضمان سرعة إنجاز الأنشطة.',
    },
    {
      id: 'Reports',
      labelAr: 'التقارير',
      labelEn: 'Reports',
      x: '50%',
      y: '86%',
      icon: '📊',
      connectionAr: 'مؤشرات الأداء المجمعة تمنحك رؤية فورية شاملة لاتخاذ القرارات الاستراتيجية بثقة.',
    },
  ];

  const activeModuleData = connectedModules.find((m) => m.id === activeModule) || connectedModules[1];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center bg-[#061A3A] scroll-mt-24"
    >
      {/* Background Graphic Asset & Cosmic Atmospheric Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Globe Network Asset layer with deep dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
          style={{ backgroundImage: `url('/src/assets/images/nexus_globe_hero_1789332284231.jpg')` }}
        />
        
        {/* Deep dark fade gradient at top and bottom to seamlessly merge with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061A3A] via-[#061A3A]/85 to-[#061A3A]" />

        {/* Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#1268F3]/20 via-[#10D9F5]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[380px] h-[380px] bg-[#10D9F5]/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-[#1268F3]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Precision Background Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Official Tagline & Brand Descriptor Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0A2550]/90 border border-[#168BFF]/30 text-xs sm:text-sm font-medium text-[#AAB7CC] shadow-[0_0_20px_rgba(18,104,243,0.2)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10D9F5] animate-pulse shrink-0" />
            <span className="font-brand font-semibold text-white tracking-wider text-[11px] sm:text-xs">BUSINESS OPERATING SYSTEM</span>
            <span className="text-[#168BFF]">|</span>
            <span
              style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
              className="text-white font-brand text-[11px] sm:text-xs"
            >
              Connect Everything. <span className="text-[#10D9F5]">Grow Beyond.</span>
            </span>
          </div>

          {/* Prominent Official NEXUS Brand Lockup */}
          <div className="my-2 relative flex items-center justify-center">
            {/* Ambient aura behind official logo */}
            <div className="absolute inset-0 bg-[#10D9F5]/20 rounded-full blur-2xl transform scale-110 pointer-events-none" />
            <NexusLogo variant="primary" size="xl" />
          </div>
        </div>

        {/* Main Headline & Supporting Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] mb-5">
            كل أعمالك.{' '}
            <span className="bg-gradient-to-r from-white via-[#10D9F5] to-[#168BFF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,217,245,0.4)]">
              في نظام واحد.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#AAB7CC] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            NEXUS هو نظام تشغيل أعمال يربط عملياتك اليومية في تجربة واحدة أكثر وضوحًا وتنظيمًا.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base btn-primary flex items-center justify-center gap-2.5 cursor-pointer group shadow-[0_8px_30px_rgba(18,104,243,0.4)]"
            >
              <span>ابدأ الآن</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base btn-secondary flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-[#10D9F5] fill-[#10D9F5]" />
              <span>اكتشف نظام التشغيل</span>
            </button>
          </div>
        </div>

        {/* Abstract Connected Business Operating System Interactive Centerpiece */}
        <div className="mt-2 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0A2550]/70 to-[#061A3A]/90 border border-[#168BFF]/30 p-5 sm:p-8 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(6,26,58,0.9)] overflow-hidden">
            
            {/* Ambient inner glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#1268F3]/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Concept Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#168BFF]/20 pb-4 mb-6 text-center sm:text-right gap-3">
              <div>
                <div className="text-xs uppercase font-brand tracking-widest text-[#10D9F5] font-semibold flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10D9F5] animate-ping" />
                  <span>ONE CONNECTED BUSINESS SYSTEM</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  نظام تشغيل موحد يربط كافة مفاصل أعمالك
                </h3>
              </div>
              <div className="text-xs text-[#AAB7CC] bg-[#061A3A]/90 px-3 py-1.5 rounded-lg border border-[#168BFF]/25 font-brand flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10D9F5]" />
                <span>NEXUS CORE OS</span>
              </div>
            </div>

            {/* Interactive Connected Architecture Diagram */}
            <div className="relative h-72 sm:h-88 md:h-96 w-full flex items-center justify-center select-none overflow-hidden">
              
              {/* SVG Dynamic Network Lines connecting Center to Satellites */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="line-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10D9F5" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#1268F3" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#168BFF" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* Connection lines from center (50%, 50%) */}
                <line x1="50%" y1="50%" x2="20%" y2="26%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="26%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="18%" y2="72%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="82%" y2="72%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="50%" y2="14%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="50%" y2="86%" stroke="url(#line-glow-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />

                {/* Center Outer Orbit Rings */}
                <circle cx="50%" cy="50%" r="80" fill="none" stroke="#168BFF" strokeOpacity="0.25" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="120" fill="none" stroke="#10D9F5" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="6 6" />
              </svg>

              {/* Central NEXUS Core Hub with illuminated energy ring */}
              <div className="relative z-20 flex flex-col items-center justify-center p-3 rounded-full bg-[#061A3A]/90 border-2 border-[#10D9F5]/40 shadow-[0_0_35px_rgba(16,217,245,0.35)] transition-transform hover:scale-105">
                <NexusLogo variant="primary" size="sm" />
                <span className="font-brand font-black text-[9px] text-[#10D9F5] tracking-widest mt-0.5">CORE HUB</span>
              </div>

              {/* Connected Abstract Satellite Modules */}
              {connectedModules.map((module) => {
                const isActive = activeModule === module.id;
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setActiveModule(module.id)}
                    style={{ left: module.x, top: module.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 border ${
                      isActive
                        ? 'bg-[#1268F3] text-white border-[#10D9F5] shadow-[0_0_25px_rgba(16,217,245,0.6)] scale-110 ring-2 ring-[#10D9F5]/40'
                        : 'bg-[#061A3A]/95 text-[#AAB7CC] border-[#168BFF]/35 hover:border-[#10D9F5] hover:text-white hover:bg-[#0A2550]'
                    }`}
                    aria-label={`عرض تفاصيل وحدة ${module.labelAr}`}
                  >
                    <span className="text-sm sm:text-base">{module.icon}</span>
                    <div className="text-right">
                      <div className="text-[11px] sm:text-xs font-bold font-brand">{module.labelEn}</div>
                      <div className="text-[9px] sm:text-[10px] opacity-80">{module.labelAr}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Connection Insight Bar */}
            <div className="mt-4 p-3.5 rounded-2xl bg-[#061A3A]/80 border border-[#168BFF]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-right animate-in fade-in duration-300">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-8 h-8 rounded-lg bg-[#0A2550] border border-[#10D9F5]/40 flex items-center justify-center text-sm shrink-0">
                  {activeModuleData.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white font-brand">{activeModuleData.labelEn}</span>
                    <span className="text-xs text-[#10D9F5] font-semibold">({activeModuleData.labelAr})</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10D9F5]/10 text-[#10D9F5] border border-[#10D9F5]/20 font-brand">
                      CONNECTED
                    </span>
                  </div>
                  <p className="text-xs text-[#AAB7CC] mt-0.5">
                    {activeModuleData.connectionAr}
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-[#10D9F5] flex items-center gap-1.5 shrink-0 self-end sm:self-center font-brand">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>BIDIRECTIONAL SYNC</span>
              </div>
            </div>

            {/* Bottom Brand Pillars Bar */}
            <div className="mt-6 pt-5 border-t border-[#168BFF]/20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="p-3 rounded-xl bg-[#061A3A]/70 border border-[#168BFF]/20">
                <div className="text-xs font-bold text-white font-brand">Simplify Operations</div>
                <div className="text-[11px] text-[#AAB7CC] mt-0.5">تبسيط مسارات العمل</div>
              </div>
              <div className="p-3 rounded-xl bg-[#061A3A]/70 border border-[#168BFF]/20">
                <div className="text-xs font-bold text-white font-brand">Empower Your Team</div>
                <div className="text-[11px] text-[#AAB7CC] mt-0.5">تمكين فريقك بالوضوح</div>
              </div>
              <div className="p-3 rounded-xl bg-[#061A3A]/70 border border-[#168BFF]/20">
                <div className="text-xs font-bold text-white font-brand">Drive Growth</div>
                <div className="text-[11px] text-[#AAB7CC] mt-0.5">دفع عجلة النمو المستدام</div>
              </div>
              <div className="p-3 rounded-xl bg-[#061A3A]/70 border border-[#168BFF]/20">
                <div className="text-xs font-bold text-[#10D9F5] font-brand">Connect Everything</div>
                <div className="text-[11px] text-[#AAB7CC] mt-0.5">ربط كل شيء معًا</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
