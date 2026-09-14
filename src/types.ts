export interface ProductModule {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionAr: string;
  iconName: 'LayoutDashboard' | 'Users' | 'FolderKanban' | 'TrendingUp' | 'Receipt' | 'Settings' | 'BarChart3' | 'Cpu';
  isConceptual?: boolean;
}

export interface ValueCard {
  id: string;
  number: string;
  titleAr: string;
  descriptionAr: string;
  iconName: 'Settings2' | 'Network' | 'LineChart' | 'Compass';
}

export interface StepItem {
  number: string;
  titleAr: string;
  descriptionAr: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  taglineAr: string;
  ctaTextAr: string;
}

export interface CouponValidationResult {
  status: 'idle' | 'checking' | 'valid' | 'invalid';
  message: string;
  code?: string;
}


