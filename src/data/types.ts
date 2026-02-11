export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
}

export type Category = 'wellness' | 'style' | 'travel' | 'food' | 'relationships' | 'home' | 'career';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  { id: 'wellness', name: 'Wellness', description: 'Mind, body, and everything in between', color: '#5B8C5A', icon: '🌿' },
  { id: 'style', name: 'Style', description: 'Fashion forward, planet first', color: '#C57B57', icon: '✨' },
  { id: 'travel', name: 'Travel', description: 'Adventures big and small', color: '#6B8F9B', icon: '🌍' },
  { id: 'food', name: 'Food', description: 'Nourish your life', color: '#B5835A', icon: '🍽' },
  { id: 'relationships', name: 'Relationships', description: 'Love, connection, community', color: '#9B6B8F', icon: '💛' },
  { id: 'home', name: 'Home', description: 'Design your sanctuary', color: '#8B9B6B', icon: '🏡' },
  { id: 'career', name: 'Career', description: 'Work smarter, live fuller', color: '#7B8C9B', icon: '🚀' },
];

export const authors: Author[] = [
  { name: 'Maya Chen', role: 'Senior Lifestyle Editor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya', bio: 'Maya covers wellness and sustainable living with a focus on accessible, evidence-based practices. Previously at Well+Good and mindbodygreen.' },
  { name: 'Jordan Ellis', role: 'Style & Culture Writer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan', bio: 'Jordan explores the intersection of fashion, identity, and sustainability. Their work has appeared in i-D, Dazed, and The Cut.' },
  { name: 'Priya Sharma', role: 'Travel & Food Editor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', bio: 'Priya is a James Beard Award-nominated food writer who believes every meal tells a story. She covers travel and dining culture.' },
  { name: 'Sam Okafor', role: 'Career & Finance Columnist', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam', bio: 'Sam writes about the future of work, financial wellness, and building a career on your own terms. Former analyst turned full-time writer.' },
  { name: 'Lily Nakamura', role: 'Home & Design Editor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily', bio: 'Lily is an interior design enthusiast who champions minimalism, sustainability, and creating spaces that truly feel like home.' },
];
