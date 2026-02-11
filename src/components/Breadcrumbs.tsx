import { Link } from 'react-router-dom'

interface BreadcrumbItem { label: string; path?: string }

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted mb-6">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span>/</span>
            {item.path ? <Link to={item.path} className="hover:text-accent">{item.label}</Link> : <span className="text-primary">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
