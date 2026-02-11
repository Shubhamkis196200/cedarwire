import { useState } from 'react'
import { Card } from '../components/Card'
import { Textarea, Label } from '../components/FormElements'
export function WordCounter() {
  const [text, setText] = useState('')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g,'').length
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s=>s.trim()).length : 0
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(s=>s.trim()).length : 0
  const readTime = Math.ceil(words/200)
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div><Label>Enter or paste your text</Label><Textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Start typing or paste text here..." rows={8}/></div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <Card className="text-center"><div className="text-2xl font-bold text-accent">{words}</div><div className="text-xs text-muted">Words</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{chars}</div><div className="text-xs text-muted">Characters</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{charsNoSpace}</div><div className="text-xs text-muted">No Spaces</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{sentences}</div><div className="text-xs text-muted">Sentences</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{paragraphs}</div><div className="text-xs text-muted">Paragraphs</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{readTime}m</div><div className="text-xs text-muted">Read Time</div></Card>
      </div>
    </div>
  )
}
