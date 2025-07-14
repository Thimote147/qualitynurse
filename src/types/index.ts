// Types definitions for Quality Nurse website
import { ReactNode } from 'react';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  category: 'basic' | 'advanced' | 'specialized';
}

export interface UsefulLink {
  title: string;
  description: string;
  url: string;
  category: 'medical' | 'administrative' | 'emergency';
}

export interface ContactInfo {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  inami: string;
}

export interface FormData {
  lastname: string;
  firstname: string;
  email: string;
  object: string;
  message: string;
}

export interface Testimonial {
  name: string;
  message: string;
  rating: number;
  service: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Sector {
  name: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: ReactNode;
}