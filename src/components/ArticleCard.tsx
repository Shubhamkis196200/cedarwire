import { Link } from 'react-router-dom';
import { Article } from '../data/types';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    wellness: 'bg-sage/10 text-sage',
    style: 'bg-terracotta/10 text-terracotta',
    travel: 'bg-[#6B8F9B]/10 text-[#6B8F9B]',
    food: 'bg-[#B5835A]/10 text-[#B5835A]',
    relationships: 'bg-[#9B6B8F]/10 text-[#9B6B8F]',
    home: 'bg-[#8B9B6B]/10 text-[#8B9B6B]',
    career: 'bg-[#7B8C9B]/10 text-[#7B8C9B]',
  };

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.slug}`} className="group flex gap-4 items-start">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-24 h-24 rounded-lg object-cover flex-shrink-0 group-hover:opacity-90 transition-opacity"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <span className={`inline-block font-ui text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category]} mb-1`}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          <h4 className="font-headline text-base text-charcoal group-hover:text-sage transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <p className="font-ui text-xs text-warm-gray mt-1">{article.readTime}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug}`} className="group block">
        <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <span className={`inline-block font-ui text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]} mb-2`}>
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
        <h3 className="font-headline text-lg text-charcoal group-hover:text-sage transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="font-ui text-xs text-warm-gray mt-2">{article.author.name} · {article.readTime}</p>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <span className={`inline-block font-ui text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]} mb-2`}>
        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
      </span>
      <h3 className="font-headline text-xl text-charcoal group-hover:text-sage transition-colors leading-snug mb-2">
        {article.title}
      </h3>
      <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
      <p className="font-ui text-xs text-warm-gray">{article.author.name} · {article.readTime}</p>
    </Link>
  );
}
