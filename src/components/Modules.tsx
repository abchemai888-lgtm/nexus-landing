import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  TrendingUp,
  Receipt,
  Settings,
  BarChart3,
  Cpu,
  ArrowUpRight,
  Sparkles,
  Check,
} from 'lucide-react';
import { ProductModule } from '../types';

export const Modules: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('dashboard');

  // Core Product Modules specified by user with key capabilities
  const coreModules: Array<
    ProductModule & {
      icon: React.ReactNode;
      capabilities: string[];
    }
  > = [
    {
      id: 'dashboard',
      nameEn: 'Dashboard',
      nameAr: 'لوحة التحكم',
      descriptionAr: 'واجهة مركزية تعرض مؤشرات وحالة مسارات العمل بوضوح وسلاسة في مكان واحد.',
      iconName: 'LayoutDashboard',
      icon: <LayoutDashboard className="w-6 h-6 text-[#10D9F5]" />,
      capabilities: ['مؤشرات أداء فورية', 'ملخص مالي وتشغيلي', 'تنبيهات المهام الحرجة'],
    },
    {
      id: 'clients',
      nameEn: 'Clients',
      nameAr: 'العملاء',
      descriptionAr: 'إدارة ملفات العملاء وسجلات التواصل معهم بطريقة منظمة تسهم في سرعة الوصول.',
      iconName: 'Users',
      icon: <Users className="w-6 h-6 text-[#168BFF]" />,
      capabilities: ['سجل موحد لكل عميل', 'أرشيف المراسلات والاتصالات', 'ربط مباشر بالفواتير والمشروعات'],
    },
    {
      id: 'projects',
      nameEn: 'Projects',
      nameAr: 'المشروعات',
      descriptionAr: 'تنظيم مراحل المشروعات والمهام والمسؤوليات برؤية شاملة تضمن وضوح الإنجاز.',
      iconName: 'FolderKanban',
      icon: <FolderKanban className="w-6 h-6 text-[#10D9F5]" />,
      capabilities: ['مراحل وجداول زمنية', 'توزيع المهام والمسؤوليات', 'تتبع نسب الإنجاز الفعلي'],
    },
    {
      id: 'sales',
      nameEn: 'Sales',
      nameAr: 'المبيعات',
      descriptionAr: 'متابعة الصفقات والفرص البيعية وحركتها التنفيذية خطوة بخطوة ضمن مسار موحد.',
      iconName: 'TrendingUp',
      icon: <TrendingUp className="w-6 h-6 text-[#1268F3]" />,
      capabilities: ['قنوات الفرص البيعية (Pipeline)', 'تحويل الصفقات لمشروعات', 'تقييم كفاءة مسارات البيع'],
    },
    {
      id: 'invoices',
      nameEn: 'Invoices',
      nameAr: 'الفواتير',
      descriptionAr: 'تنظيم الفواتير والدفعات وحالات السداد لربط المعاملات بالمشروعات والعملاء مباشرة.',
      iconName: 'Receipt',
      icon: <Receipt className="w-6 h-6 text-[#168BFF]" />,
      capabilities: ['إصدار وتوثيق المطالبات', 'تتبع الأرصدة والمستحقات', 'تزامن آلي مع حساب العميل'],
    },
    {
      id: 'settings',
      nameEn: 'Settings',
      nameAr: 'الإعدادات',
      descriptionAr: 'تهيئة مساحة العمل، الصلاحيات، وتفضيلات النظام لتلائم طبيعة أعمالك الخاصة.',
      iconName: 'Settings',
      icon: <Settings className="w-6 h-6 text-[#10D9F5]" />,
      capabilities: ['إدارة صلاحيات الفريق', 'تخصيص الحقول والتصنيفات', 'خيارات الأمان والنسخ الاحتياطي'],
    },
  ];

  // Conceptual modules allowed by prompt (clearly designated as conceptual)
  const conceptualModules: Array<ProductModule & { icon: React.ReactNode }> = [
    {
      id: 'reports',
      nameEn: 'Reports',
      nameAr: 'التقارير',
      descriptionAr: 'تصور استشرافي لاستعراض البيانات المجمعة وتحليل مسارات الأداء الشاملة عبر فترات زمنية متباينة.',
      iconName: 'BarChart3',
      icon: <BarChart3 className="w-5 h-5 text-[#10D9F5]" />,
      isConceptual: true,
    },
    {
      id: 'operations',
      nameEn: 'Operations',
      nameAr: 'العمليات',
      descriptionAr: 'مفهوم متقدم لتنسيق الإجراءات اللوجستية والتشغيلية المترابطة آليًا لتسريع دورة الإنجاز.',
      iconName: 'Cpu',
      icon: <Cpu className="w-5 h-5 text-[#168BFF]" />,
      isConceptual: true,
    },
  ];

  return (
    <section id="modules" className="py-20 sm:py-24 relative bg-[#061A3A] scroll-mt-24">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#10D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A2550] border border-[#168BFF]/30 text-xs font-semibold text-[#168BFF] mb-3 uppercase tracking-wider font-brand">
            <Sparkles className="w-3.5 h-3.5 text-[#10D9F5]" />
            <span>CORE MODULES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            كل ما تحتاجه لإدارة أعمالك
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7CC] leading-relaxed">
            مجموعة من الوحدات المتكاملة والمصممة لتمنح أعمالك تجربة تشغيل متسقة بلا انقطاع.
          </p>
        </div>

        {/* Core Modules 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreModules.map((module) => {
            const isSelected = selectedModuleId === module.id;
            return (
              <div
                key={module.id}
                onClick={() => setSelectedModuleId(module.id)}
                className={`nexus-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? 'border-[#10D9F5]/60 bg-[#0A2550]/80 shadow-[0_15px_35px_-10px_rgba(16,217,245,0.25)] ring-1 ring-[#10D9F5]/40'
                    : 'hover:-translate-y-1 hover:border-[#168BFF]/50'
                }`}
              >
                <div>
                  {/* Icon & English badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#061A3A] border border-[#168BFF]/30 flex items-center justify-center group-hover:border-[#10D9F5] group-hover:shadow-[0_0_20px_rgba(16,217,245,0.35)] transition-all duration-300">
                      {module.icon}
                    </div>
                    <span
                      dir="ltr"
                      className="font-brand font-bold text-xs uppercase tracking-widest text-[#10D9F5] bg-[#061A3A]/80 px-2.5 py-1 rounded-md border border-[#168BFF]/25"
                    >
                      {module.nameEn}
                    </span>
                  </div>

                  {/* Module Arabic Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#10D9F5] transition-colors">
                    {module.nameAr}
                  </h3>

                  {/* Description */}
                  <p className="text-[#AAB7CC] text-sm leading-relaxed mb-4">
                    {module.descriptionAr}
                  </p>

                  {/* Feature Capabilities Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-[#168BFF]/15">
                    {module.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#AAB7CC]">
                        <Check className="w-3.5 h-3.5 text-[#10D9F5] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer status indicator */}
                <div className="mt-6 pt-4 border-t border-[#168BFF]/15 flex items-center justify-between text-xs text-[#AAB7CC]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#10D9F5] animate-pulse" />
                    وحدة تشغيلية متصلة
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#168BFF] group-hover:text-[#10D9F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Additions Box (Explicitly marked as conceptual to strictly abide by Prompt Rules) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0A2550]/40 border border-[#168BFF]/25 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5 pb-4 border-b border-[#168BFF]/20">
            <div>
              <span className="text-xs font-semibold text-[#10D9F5] uppercase tracking-wider font-brand">
                CONCEPTUAL ROADMAP
              </span>
              <h4 className="text-lg font-bold text-white mt-1">
                مفاهيم إضافية قيد الدراسة ضمن بيئة العمل
              </h4>
            </div>
            <span className="text-xs px-3.5 py-1 rounded-full bg-[#061A3A] text-[#AAB7CC] border border-[#168BFF]/30 font-medium">
              تمثيل مفهومي توضيحي فقط
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {conceptualModules.map((cMod) => (
              <div
                key={cMod.id}
                className="p-4 sm:p-5 rounded-xl bg-[#061A3A]/70 border border-[#168BFF]/20 flex items-start gap-4 hover:border-[#10D9F5]/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#0A2550] border border-[#168BFF]/30 shrink-0">
                  {cMod.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{cMod.nameAr}</span>
                    <span dir="ltr" className="text-xs text-[#10D9F5] font-brand">({cMod.nameEn})</span>
                  </div>
                  <p className="text-xs text-[#AAB7CC] mt-1.5 leading-relaxed">
                    {cMod.descriptionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
