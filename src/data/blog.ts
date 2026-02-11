export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  { slug: 'morning-routines-successful-people', title: '10 Morning Routines of Highly Successful People', excerpt: 'Discover the science-backed morning habits that set high achievers apart, from cold showers to journaling practices.', date: '2026-02-01', author: 'Sarah Chen', category: 'Wellness', readTime: '10 min' },
  { slug: 'minimalist-wardrobe-guide', title: 'The Complete Guide to Building a Minimalist Wardrobe', excerpt: 'How to create a capsule wardrobe that simplifies your mornings, saves money, and always looks polished.', date: '2026-01-28', author: 'James Rivera', category: 'Style', readTime: '12 min' },
  { slug: 'financial-independence-guide', title: 'Your Step-by-Step Guide to Financial Independence', excerpt: 'From emergency funds to investment strategies, a comprehensive roadmap to achieving financial freedom.', date: '2026-01-25', author: 'Maya Patel', category: 'Finance', readTime: '15 min' },
  { slug: 'mindfulness-beginners-guide', title: 'Mindfulness for Beginners: A Practical Guide', excerpt: 'Learn the fundamentals of mindfulness meditation and how to integrate it into your daily routine.', date: '2026-01-20', author: 'David Kim', category: 'Wellness', readTime: '11 min' },
  { slug: 'sustainable-living-tips', title: '30 Practical Ways to Live More Sustainably', excerpt: 'Easy, actionable changes you can make today to reduce your environmental impact without sacrificing comfort.', date: '2026-01-15', author: 'Emma Wilson', category: 'Lifestyle', readTime: '13 min' },
  { slug: 'home-office-design-guide', title: 'Designing the Perfect Home Office for Productivity', excerpt: 'Expert tips on ergonomics, lighting, organization, and decor to create a workspace that boosts focus.', date: '2026-01-10', author: 'Alex Thompson', category: 'Home', readTime: '10 min' },
  { slug: 'healthy-meal-prep-guide', title: 'The Ultimate Guide to Healthy Meal Prep', excerpt: 'Save time, eat better, and reduce waste with our comprehensive meal preparation strategies and recipes.', date: '2026-01-05', author: 'Lisa Chang', category: 'Food', readTime: '14 min' },
  { slug: 'digital-detox-guide', title: 'How to Do a Digital Detox Without Going Crazy', excerpt: 'A realistic approach to reducing screen time and reclaiming your attention in the digital age.', date: '2026-01-01', author: 'Sarah Chen', category: 'Wellness', readTime: '9 min' },
]
