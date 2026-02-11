import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Card, CardTitle, CardDescription } from '../components/Card'
import { tools, categories } from '../data/tools'
import { useState } from 'react'
import { Button } from '../components/Button'

export function ToolsPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const filtered = tools.filter(t => {
    if (filter && t.category !== filter) return false
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.description.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })
  return (
    <>
      <SEO title="All Tools" description="55+ free interactive lifestyle tools — calculators, quizzes, planners and trackers." path="/tools" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-display text-4xl font-bold mb-3">All Tools</h1>
        <p className="text-muted text-lg mb-8">55+ free interactive tools for wellness, finance, style, and more</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Search tools..." value={search} onChange={e => setSearch(e.target.value)} />
          <div className="flex gap-2 flex-wrap">
            <Button size="sm" variant={filter === null ? 'primary' : 'outline'} onClick={() => setFilter(null)}>All</Button>
            {categories.map(cat => <Button key={cat} size="sm" variant={filter === cat ? 'primary' : 'outline'} onClick={() => setFilter(cat)}>{cat}</Button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(tool => (
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
        {filtered.length === 0 && <p className="text-center text-muted py-12">No tools found matching your search.</p>}
      </div>
    </>
  )
}
