import { Link } from 'react-router-dom';
import { categories } from '../data/types';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-headline text-3xl text-white">CedarWire</Link>
            <p className="mt-3 text-warm-gray text-sm leading-relaxed">
              Lifestyle & trends for the thoughtfully modern. We cover wellness, style, food, travel, and everything in between.
            </p>
          </div>
          <div>
            <h4 className="font-ui text-sm font-semibold text-white uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-warm-gray hover:text-white text-sm transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-warm-gray hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-warm-gray hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-warm-gray hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-warm-gray hover:text-white text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-warm-gray text-sm mb-4">Get the best of CedarWire delivered to your inbox weekly.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-charcoal-light text-white placeholder-warm-gray text-sm px-4 py-2 rounded-lg border border-warm-gray/30 focus:border-sage focus:outline-none"
              />
              <button className="bg-sage text-white font-ui text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sage-light transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-charcoal-light pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">© 2026 CedarWire. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-warm-gray hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-warm-gray hover:text-white transition-colors text-sm">Instagram</a>
            <a href="#" className="text-warm-gray hover:text-white transition-colors text-sm">Pinterest</a>
            <Link to="/rss.xml" className="text-warm-gray hover:text-white transition-colors text-sm">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
