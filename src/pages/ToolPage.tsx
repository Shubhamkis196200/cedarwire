import { useParams } from 'react-router-dom'
import { Suspense } from 'react'
import { SEO } from '../components/SEO'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { tools } from '../data/tools'
import { toolComponents } from '../tools'

export function ToolPage() {
  const { slug } = useParams<{ slug: string }>()
  const tool = tools.find(t => t.slug === slug)
  const Component = slug ? toolComponents[slug] : null

  if (!tool || !Component) return <div className="max-w-7xl mx-auto px-4 py-12 text-center"><h1 className="text-2xl font-bold">Tool not found</h1></div>

  return (
    <>
      <SEO title={tool.name} description={tool.description} path={`/tools/${tool.slug}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <Breadcrumbs items={[{ label: 'Tools', path: '/tools' }, { label: tool.name }]} />
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">{tool.icon}</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold">{tool.name}</h1>
          <p className="text-muted text-lg mt-2">{tool.description}</p>
          <span className="inline-block mt-3 text-xs bg-surface-alt px-3 py-1 rounded-full">{tool.category}</span>
        </div>
        <Suspense fallback={<div className="text-center py-12 text-muted">Loading tool...</div>}>
          <Component />
        </Suspense>
      </div>
    </>
  )
}
