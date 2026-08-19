export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  iconName: string;
  popular?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'haie' | 'pelouse' | 'friche';
  location: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  challenge: string;
  solution: string;
  defaultSliderPosition?: number;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  details: string;
  hedgeLength?: number;
  lawnArea?: number;
  evacuateWaste: boolean;
  preferredPeriod: string;
}
