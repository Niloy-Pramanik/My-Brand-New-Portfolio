/**
 * Type Definitions - Central type definitions for the application
 * 
 * This file provides type safety across all components and sections
 */

/**
 * Skill Category Type
 */
export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string; // Tailwind gradient class
  skills: Skill[];
}

/**
 * Project Type
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  award?: string;
}

/**
 * Research Publication Type
 */
export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  date: string;
  link: string;
  tags: string[];
}

/**
 * Article/Blog Post Type
 */
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  image?: string;
  link: string;
  tags: string[];
  readTime: number;
}

/**
 * Testimonial Type
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number; // 1-5 stars
}

/**
 * Social Link Type
 */
export interface SocialLink {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
}

/**
 * Navigation Link Type
 */
export interface NavLink {
  id: string;
  label: string;
  href: string;
  section: string;
}

/**
 * Contact Form Data Type
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Button Props Type
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Card Props Type
 */
export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Section Props Type (Base for all section components)
 */
export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Theme Type
 */
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Animation Variant Type
 */
export type AnimationVariant =
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'fadeIn'
  | 'scaleIn'
  | 'rotateIn'
  | 'bounceIn';

/**
 * Color Palette Type
 */
export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
}

/**
 * API Response Type (for potential API calls)
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination Type (if needed)
 */
export interface PaginationInfo {
  page: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

/**
 * Filter Options Type
 */
export interface FilterOptions {
  category?: string;
  tags?: string[];
  searchQuery?: string;
  sortBy?: 'date' | 'popularity' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}

/**
 * Meta Information Type (for SEO)
 */
export interface MetaInfo {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

/**
 * Stats Counter Type
 */
export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: React.ComponentType<{ size?: number }>;
}

/**
 * Timeline Event Type
 */
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  icon?: React.ComponentType;
}
