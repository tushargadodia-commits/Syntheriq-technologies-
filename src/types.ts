export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string;
  category: 'web' | 'mobile' | 'ai' | 'enterprise';
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  impactMetrics: string[];
  imageBg: string;
}

export interface WhyChooseUsPillar {
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  bio: string;
  philosophy: string;
  location: string;
  email: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  selectedService: string;
  budgetRange: string;
  projectDetails: string;
}
