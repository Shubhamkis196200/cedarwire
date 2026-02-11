import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import ShareButtons from '../components/ShareButtons';
import NewsletterCTA from '../components/NewsletterCTA';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-headline text-4xl mb-4">Article Not Found</h1>
        <Link to="/" className="text-sage hover:underline">← Back to home</Link>
      </div>
    );
  }

  const related = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const dateFormatted = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{article.title} — CedarWire</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cedarwire.netlify.app/article/${article.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.excerpt,
          "image": article.image,
          "datePublished": article.date,
          "author": { "@type": "Person", "name": article.author.name },
          "publisher": {
            "@type": "Organization",
            "name": "CedarWire",
            "logo": { "@type": "ImageObject", "url": "https://cedarwire.netlify.app/logo.png" }
          },
          "mainEntityOfPage": `https://cedarwire.netlify.app/article/${article.slug}`
        })}</script>
      </Helmet>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] max-h-[480px] overflow-hidden">
        <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover" />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Category & Meta */}
        <div className="mb-4">
          <Link
            to={`/category/${article.category}`}
            className="font-ui text-xs font-bold uppercase tracking-wider text-sage hover:text-sage-dark transition-colors"
          >
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </Link>
        </div>

        <h1 className="font-headline text-4xl md:text-5xl text-charcoal leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-charcoal-light leading-relaxed mb-6">{article.subtitle}</p>

        {/* Author & Share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-cream-dark mb-10">
          <div className="flex items-center gap-3">
            <img src={article.author.avatar} alt={article.author.name} className="w-11 h-11 rounded-full bg-cream" />
            <div>
              <p className="font-ui text-sm font-semibold text-charcoal">{article.author.name}</p>
              <p className="font-ui text-xs text-warm-gray">{dateFormatted} · {article.readTime}</p>
            </div>
          </div>
          <ShareButtons article={article} />
        </div>

        {/* Content */}
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-cream-dark">
          {article.tags.map(tag => (
            <span key={tag} className="font-ui text-xs bg-cream text-charcoal-light px-3 py-1.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="bg-cream rounded-2xl p-6 mt-10 flex items-start gap-4">
          <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 rounded-full bg-cream-dark flex-shrink-0" />
          <div>
            <p className="font-ui text-sm font-bold text-charcoal">{article.author.name}</p>
            <p className="font-ui text-xs text-sage font-medium mb-2">{article.author.role}</p>
            <p className="text-sm text-charcoal-light leading-relaxed">{article.author.bio}</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="font-headline text-2xl mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map(a => (
              <ArticleCard key={a.id} article={a} variant="compact" />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <NewsletterCTA />
      </section>
    </>
  );
}
