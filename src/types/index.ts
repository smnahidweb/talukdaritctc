/**
 * Core Type Definitions for Talukdar IT & Computer Training Centre
 */

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels" | "Beginner to Intermediate";
  totalLectures?: string;
  projects?: string;
  image: string;
  features: string[];
  fees?: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  ctaText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CareerItem {
  id: string;
  title: string;
  description: string;
  roles: string[];
  iconName: string;
}

export interface SiteContact {
  linkedinUrl: string | undefined;
  instagramUrl: string | undefined;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  whatsappUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: SiteContact;
}
