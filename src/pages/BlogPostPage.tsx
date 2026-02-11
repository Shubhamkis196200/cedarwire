import { useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { blogPosts } from '../data/blog'
import { blogContent } from '../blog'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  const content = slug ? blogContent[slug] : null

  if (!post || !content) {
    return <div className="max-w-4xl mx-auto px-4 py-12 text-center"><h1 className="text-2xl font-bold">Post not found</h1></div>
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} type="article" />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: post.title }]} />
        <header className="mb-10">
          <div className="text-sm text-muted mb-3">{post.category} • {post.readTime}</div>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-muted">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-code:text-accent prose-code:bg-surface-alt prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
          {content.content.split('\n').map((para, i) => {
            if (para.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{para.slice(3)}</h2>
            if (para.startsWith('**') && para.endsWith('**')) return <p key={i} className="font-semibold mt-4">{para.slice(2, -2)}</p>
            if (para.startsWith('- ')) return <li key={i} className="ml-6">{para.slice(2)}</li>
            if (para.trim()) return <p key={i} className="mb-4 leading-relaxed">{para}</p>
            return null
          })}
        </div>
      </article>
    </>
  )
}
