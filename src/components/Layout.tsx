import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">CW</div>
            <span className="font-display font-bold text-xl">CedarWire</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/tools" className="hover:text-accent transition">Tools</Link>
            <Link to="/blog" className="hover:text-accent transition">Blog</Link>
            <Link to="/about" className="hover:text-accent transition">About</Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            <Link to="/tools" onClick={() => setMenuOpen(false)} className="hover:text-accent">Tools</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-accent">Blog</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-accent">About</Link>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-white/70 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display font-bold text-xl text-white mb-3">CedarWire</div>
            <p className="text-sm leading-relaxed">Your daily source for lifestyle trends, wellness tips, culture insights, and modern living guides.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools" className="hover:text-white transition">Wellness</Link></li>
              <li><Link to="/tools" className="hover:text-white transition">Finance</Link></li>
              <li><Link to="/tools" className="hover:text-white transition">Style</Link></li>
              <li><Link to="/tools" className="hover:text-white transition">Home & Living</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools" className="hover:text-white transition">All Tools</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">About</h4>
            <p className="text-sm leading-relaxed">CedarWire delivers practical tools and expert insights to help you live better every day.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm">© 2026 CedarWire. All rights reserved.</div>
      </footer>
    </div>
  )
}
