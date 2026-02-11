import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Card, CardTitle, CardDescription } from '../components/Card'
import { tools, categories } from '../data/tools'
import { } from 'react'

export function HomePage() {
  const featured = tools.slice(0, 6)
  return (
    <>
      <SEO title="Lifestyle Trends, Culture & Modern Living" description="CedarWire delivers practical tools, expert insights, and trending lifestyle content to help you live better every day." path="/" />
      <section className="bg-gradient-to-br from-surface to-surface-alt py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">✨ Your Lifestyle Companion</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">Tools & Insights for <span className="text-accent">Modern Living</span></h1>
          <p className="text-muted text-lg md:text-xl mt-6 max-w-2xl mx-auto">Discover 55+ free interactive tools, expert guides, and trending lifestyle content — from wellness calculators to style quizzes.</p>
          <div className="flex gap-4 justify-center mt-8">
            <Link to="/tools" className="inline-flex items-center px-7 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition">Explore Tools →</Link>
            <Link to="/blog" className="inline-flex items-center px-7 py-3 border-2 border-border rounded-xl font-semibold hover:border-accent hover:text-accent transition">Read Blog</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div><h2 className="font-display text-3xl font-bold">Popular Tools</h2><p className="text-muted mt-2">Interactive calculators and planners for every aspect of life</p></div>
          <Link to="/tools" className="text-accent font-semibold hover:underline hidden md:block">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(tool => (
            <Link to={`/tools/${tool.slug}`} key={tool.slug}>
              <Card className="h-full hover:border-accent/30">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <CardTitle>{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
                <div className="mt-3"><span className="text-xs bg-surface-alt px-2 py-1 rounded-full">{tool.category}</span></div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <Link to="/tools" key={cat}>
                <Card className="text-center hover:border-accent/30">
                  <div className="font-semibold">{cat}</div>
                  <div className="text-sm text-muted mt-1">{tools.filter(t => t.category === cat).length} tools</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center"><div className="text-4xl mb-3">🛠️</div><h3 className="font-display text-xl font-bold">55+ Free Tools</h3><p className="text-muted mt-2 text-sm">Calculators, quizzes, trackers and planners that actually work</p></div>
          <div className="text-center"><div className="text-4xl mb-3">📚</div><h3 className="font-display text-xl font-bold">Expert Content</h3><p className="text-muted mt-2 text-sm">In-depth guides on wellness, finance, style and modern living</p></div>
          <div className="text-center"><div className="text-4xl mb-3">🔒</div><h3 className="font-display text-xl font-bold">100% Private</h3><p className="text-muted mt-2 text-sm">All tools run in your browser — no data stored or shared</p></div>
        </div>
      </section>
    </>
  )
}
