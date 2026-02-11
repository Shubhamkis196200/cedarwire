import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import { categories } from '../data/types';
import ArticleCard from '../components/ArticleCard';
import NewsletterCTA from '../components/NewsletterCTA';

export default function Home() {
  const featured = articles.find(a => a.featured)!;
  const trending = articles.filter(a => a.trending).slice(0, 5);
  const editorsPicks = articles.filter(a => a.editorsPick);
  const latest = articles.filter(a => a.id !== featured.id).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>CedarWire — Lifestyle & Trends for the Thoughtfully Modern</title>
        <meta name="description" content="CedarWire covers wellness, style, food, travel, relationships, home, and career — for people who care about living well and thinking deeply." />
        <meta property="og:title" content="CedarWire — Lifestyle & Trends" />
        <meta property="og:description" content="Lifestyle & trends for the thoughtfully modern." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cedarwire.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CedarWire",
          "url": "https://cedarwire.netlify.app",
          "logo": "https://cedarwire.netlify.app/logo.png",
          "sameAs": []
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative">
        <Link to={`/article/${featured.slug}`} className="group block relative aspect-[21/9] max-h-[520px] overflow-hidden">
          <img src={featured.image} alt={featured.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-3xl">
            <span className="inline-block font-ui text-xs font-bold uppercase tracking-wider text-sage bg-white/90 px-3 py-1 rounded-full mb-3">
              {featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}
            </span>
            <h1 className="font-headline text-3xl md:text-5xl text-white leading-tight mb-3 group-hover:text-cream transition-colors">
              {featured.title}
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl hidden sm:block">{featured.subtitle}</p>
            <p className="font-ui text-xs text-white/60 mt-3">{featured.author.name} · {featured.readTime}</p>
          </div>
        </Link>
      </section>

      {/* Trending Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <span className="font-ui text-xs font-bold uppercase tracking-wider text-terracotta flex-shrink-0">Trending</span>
          {trending.map(a => (
            <Link
              key={a.id}
              to={`/article/${a.slug}`}
              className="category-pill flex-shrink-0 font-ui text-sm text-charcoal bg-cream px-4 py-2 rounded-full hover:bg-sage hover:text-white transition-all"
            >
              {a.title.length > 40 ? a.title.slice(0, 40) + '…' : a.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl mb-6">Latest Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {latest.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Editor's Picks */}
            <div className="bg-cream rounded-2xl p-6 mb-8">
              <h3 className="font-headline text-xl mb-5 flex items-center gap-2">
                <span className="text-terracotta">✦</span> Editor's Picks
              </h3>
              <div className="space-y-5">
                {editorsPicks.map(article => (
                  <ArticleCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-headline text-xl mb-5">Explore</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-cream-dark transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{cat.icon}</span>
                      <div>
                        <span className="font-ui text-sm font-semibold text-charcoal group-hover:text-sage transition-colors">{cat.name}</span>
                        <p className="text-xs text-warm-gray">{cat.description}</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-warm-gray group-hover:text-sage transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <NewsletterCTA />
      </section>
    </>
  );
}
