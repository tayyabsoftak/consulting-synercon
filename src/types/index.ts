// News and Blog Types
export interface NewsItem {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}

// Footer Types
export interface SocialLink {
  icon: string;
  href: string;
  alt: string;
}

export interface FooterLink {
  label: string;
  href?: string;
}

// Offering Types
export interface Offering {
  image: string;
  name: string;
  description: string;
  points: string[];
}
