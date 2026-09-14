import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { NexusLogo } from './NexusLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedPlan }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || 'تعذر حفظ الطلب');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ. حاول مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061A3A]/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleReset();
        }
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#061A3A] border border-[#168BFF]/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(6,26,58,0.95)]">
        
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 left-5 p-2 rounded-xl text-[#AAB7CC] hover:text-white hover:bg-[#0A2550] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#10D9F5]/20 border border-[#10D9F5] flex items-center justify-center mx-auto mb-4 text-[#10D9F5]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              تم استلام طلبك بنجاح
            </h3>
            <p className="text-sm text-[#AAB7CC] mb-6 max-w-sm mx-auto leading-relaxed">
              شكرًا لاهتمامك بنظام NEXUS. سيقوم فريقنا بمراجعة تفاصيل طلبك والتواصل معك عبر البريد الإلكتروني.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl font-semibold text-sm btn-primary cursor-pointer"
            >
              العودة للموقع
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <NexusLogo variant="primary" size="md" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedPlan ? `طلب الانضمام إلى خطة (${selectedPlan})` : 'تواصل مع فريق NEXUS'}
              </h3>
              <p className="text-xs sm:text-sm text-[#AAB7CC] mt-1.5">
                سجّل بياناتك لبدء تجهيز بيئة تشغيل أعمالك الموحدة
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#AAB7CC] mb-1.5 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="أدخل اسمك الكريم"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A2550]/60 border border-[#168BFF]/30 text-white placeholder-[#AAB7CC]/50 text-sm focus:outline-none focus:border-[#10D9F5] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#AAB7CC] mb-1.5 text-right">
                  البريد الإلكتروني للعمل
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A2550]/60 border border-[#168BFF]/30 text-white placeholder-[#AAB7CC]/50 text-sm focus:outline-none focus:border-[#10D9F5] font-brand text-left transition-all"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#AAB7CC] mb-1.5 text-right">
                  اسم الشركة أو المؤسسة
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="اسم النشاط أو المؤسسة"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A2550]/60 border border-[#168BFF]/30 text-white placeholder-[#AAB7CC]/50 text-sm focus:outline-none focus:border-[#10D9F5] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#AAB7CC] mb-1.5 text-right">
                  رسالتك أو استفسارك (اختياري)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="أضف أي تفاصيل تود مشاركتها معنا بخصوص طبيعة أعمالك..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0A2550]/60 border border-[#168BFF]/30 text-white placeholder-[#AAB7CC]/50 text-sm focus:outline-none focus:border-[#10D9F5] resize-none transition-all"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-right">{error}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-bold text-sm btn-primary flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'جارٍ الحفظ...' : 'إرسال الطلب'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
