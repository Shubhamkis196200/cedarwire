import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Card } from '../components/Card'
import { blogPosts } from '../data/blog'

export function BlogPage() {
  return (
    <>
      <SEO title="Blog" description="Expert insights on wellness, lifestyle trends, style, and modern living." path="/blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-display text-4xl font-bold mb-3">Blog</h1>
        <p className="text-muted text-lg mb-10">Expert insights on wellness, lifestyle, and modern living</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full hover:border-accent/30">
                <div className="text-xs text-muted mb-2">{post.category} • {post.readTime}</div>
                <h2 className="font-display text-xl font-bold mb-2 hover:text-accent transition">{post.title}</h2>
                <p className="text-muted text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
