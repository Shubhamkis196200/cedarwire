import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import { categories } from '../data/types';
import ArticleCard from '../components/ArticleCard';

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const categoryArticles = articles.filter(a => a.category === id);

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-headline text-4xl mb-4">Category Not Found</h1>
        <Link to="/" className="text-sage hover:underline">← Back to home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} — CedarWire</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-3 block">{category.icon}</span>
          <h1 className="font-headline text-4xl md:text-5xl text-charcoal mb-3">{category.name}</h1>
          <p className="text-charcoal-light text-lg">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {categoryArticles.length === 0 ? (
          <p className="text-center text-warm-gray text-lg">No articles in this category yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
