import { Link } from 'react-router-dom';
import { categories } from '../data/types';

export default function Header() {
  return (
    <header className="bg-body border-b border-cream-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-headline text-3xl text-charcoal tracking-tight hover:text-sage transition-colors">
            CedarWire
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="font-ui text-sm font-medium text-charcoal-light hover:text-sage transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="hidden sm:inline-block font-ui text-sm font-medium text-charcoal-light hover:text-sage"
            >
              About
            </Link>
            <button className="bg-sage text-white font-ui text-sm font-semibold px-4 py-2 rounded-full hover:bg-sage-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
