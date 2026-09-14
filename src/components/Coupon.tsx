import React, { useState } from 'react';
import { Tag, Check, AlertCircle, Loader2, Sparkles, Gift } from 'lucide-react';
import { CouponValidationResult } from '../types';

export const Coupon: React.FC = () => {
  const [couponCode, setCouponCode] = useState('');
  const [validationState, setValidationState] = useState<CouponValidationResult>({
    status: 'idle',
    message: '',
  });

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = couponCode.trim();

    if (!cleanCode) {
      setValidationState({
        status: 'invalid',
        message: 'يرجى إدخال رمز الكوبون أولاً.',
      });
      return;
    }

    setValidationState({ status: 'checking', message: 'جارٍ التحقق من كود الكوبون...' });
    try {
      const response = await fetch('/api/coupon', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: cleanCode }),
      });
      const result = await response.json();
      if (result.valid) {
        setValidationState({ status: 'valid', code: result.code, discountPercent: result.discountPercent, message: result.message });
      } else {
        setValidationState({ status: 'invalid', message: result.message });
      }
    } catch {
      setValidationState({ status: 'invalid', message: 'تعذر التحقق من الكوبون حاليًا. حاول مرة أخرى.' });
    }
  };

  return (
    <section className="py-16 relative bg-[#061A3A] border-t border-[#168BFF]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="nexus-card rounded-3xl p-7 sm:p-10 border border-[#168BFF]/30 backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle accent in background */}
          <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#10D9F5]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Headline and Description */}
            <div className="text-center md:text-right flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2550] text-xs font-semibold text-[#10D9F5] mb-2 font-brand border border-[#168BFF]/30">
                <Tag className="w-3.5 h-3.5" />
                <span>COUPON VOUCHER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
                لديك كوبون خصم؟
              </h3>
              <p className="text-sm text-[#AAB7CC] leading-relaxed">
                أدخل رمز الكوبون المعتمد لتطبيقه مباشرة على خطتك التشغيلية.
              </p>
            </div>

            {/* Input Form */}
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form onSubmit={handleApplyCoupon} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      if (validationState.status !== 'idle') {
                        setValidationState({ status: 'idle', message: '' });
                      }
                    }}
                    placeholder="أدخل كود الخصم (مثل 000)"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#061A3A] border border-[#168BFF]/35 text-white placeholder-[#AAB7CC]/60 text-sm focus:outline-none focus:border-[#10D9F5] focus:ring-1 focus:ring-[#10D9F5] transition-all font-brand tracking-wider"
                    maxLength={20}
                    aria-label="أدخل كود الخصم"
                  />
                </div>

                <button
                  type="submit"
                  disabled={validationState.status === 'checking'}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm btn-primary cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 flex-shrink-0"
                >
                  {validationState.status === 'checking' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جارٍ التحقق...</span>
                    </>
                  ) : (
                    <span>تطبيق</span>
                  )}
                </button>
              </form>

              {/* Validation Result Messages */}
              {validationState.status === 'valid' && (
                <div className="mt-3.5 p-3.5 rounded-xl bg-[#10D9F5]/10 border border-[#10D9F5]/40 flex items-start gap-2.5 text-xs sm:text-sm text-[#10D9F5] animate-in fade-in duration-200">
                  <Gift className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#10D9F5]" />
                  <span className="leading-relaxed font-medium">{validationState.message}</span>
                </div>
              )}

              {validationState.status === 'invalid' && (
                <div className="mt-3.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{validationState.message}</span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
