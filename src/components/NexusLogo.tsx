import React from 'react';

// The single official NEXUS brand logo asset uploaded by the user (transparent PNG)
export const OFFICIAL_NEXUS_LOGO = '/790425178_122208222968767401_8164880442564947998_n-removebg-preview.png';

interface NexusLogoProps {
  variant?: 'horizontal' | 'primary' | 'mark' | 'icon';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

/**
 * Official NEXUS Brand Logo Component
 * Strictly utilizing the official uploaded transparent PNG asset:
 * (790425178_122208222968767401_8164880442564947998_n-removebg-preview.png)
 * Preserves the circular outline, ribbon N, NEXUS wordmark, business descriptor, and tagline.
 * Zero distortion, zero artificial cropping, natural alpha transparency.
 */
export const NexusLogo: React.FC<NexusLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  // Proportional 1:1 aspect-ratio sizing mapped cleanly to prevent distortion
  const sizeClasses: Record<NonNullable<NexusLogoProps['size']>, string> = {
    xs: 'h-8 w-8',
    sm: 'h-10 w-10 sm:h-11 sm:w-11',
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-20 w-20 sm:h-24 sm:w-24',
    xl: 'h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48',
    '2xl': 'h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64',
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ direction: 'ltr' }}
    >
      <img
        src={OFFICIAL_NEXUS_LOGO}
        alt="NEXUS — Business Operating System"
        className={`${sizeClasses[size]} aspect-square object-contain drop-shadow-[0_4px_12px_rgba(16,217,245,0.15)]`}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
