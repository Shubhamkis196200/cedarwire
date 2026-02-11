import { useState, useRef } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const passage = `The art of living well has fascinated humanity for millennia. From the ancient Greek philosophers who debated the nature of the good life to modern wellness experts who advocate for mindfulness and intentional living, the pursuit of a fulfilling existence remains one of our most fundamental quests. What does it truly mean to live well in the modern world? This question has no single answer, yet the exploration itself can be profoundly rewarding. Consider the daily routines of highly successful people throughout history. Many share common threads: a dedication to continuous learning, a commitment to physical health, meaningful connections with others, and a sense of purpose that extends beyond personal gain. Benjamin Franklin famously structured his days around thirteen virtues he wished to cultivate. Maya Angelou began each morning with prayer and writing. These individuals understood that the quality of our days determines the quality of our lives. In recent years, scientific research has validated much of what philosophers have long intuited. Studies in positive psychology reveal that happiness is less about circumstance and more about mindset. Gratitude practices, regular exercise, deep social connections, and engagement in meaningful work consistently emerge as predictors of life satisfaction across cultures and demographics.`
const wordCount = passage.split(/\s+/).length
export function ReadingSpeedTest() {
  const [state, setState] = useState<'ready'|'reading'|'done'>('ready')
  const [wpm, setWpm] = useState(0)
  const startRef = useRef(0)
  const start = () => {setState('reading');startRef.current=Date.now()}
  const finish = () => {const elapsed=(Date.now()-startRef.current)/60000;setWpm(Math.round(wordCount/elapsed));setState('done')}
  const rating = wpm<200?'Below Average':wpm<300?'Average':wpm<400?'Above Average':'Speed Reader'
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {state==='ready'&&<div className="text-center space-y-4"><p className="text-muted">Click start, read the passage, then click done when finished.</p><Button size="lg" onClick={start}>Start Reading Test</Button></div>}
      {state==='reading'&&<div><Card><p className="text-base leading-relaxed">{passage}</p></Card><Button size="lg" className="w-full mt-4" onClick={finish}>I'm Done Reading</Button></div>}
      {state==='done'&&<div className="space-y-4">
        <Card className="text-center"><div className="text-5xl font-bold text-accent">{wpm}</div><div className="text-xl text-muted mt-1">Words Per Minute</div><div className="text-lg font-semibold mt-2">{rating}</div></Card>
        <Card><div className="text-sm space-y-1"><div>📊 Average adult: 200-250 WPM</div><div>📚 College student: 300 WPM</div><div>⚡ Speed reader: 400+ WPM</div><div>🏆 World record: 25,000+ WPM</div></div></Card>
        <Button variant="outline" className="w-full" onClick={()=>setState('ready')}>Try Again</Button>
      </div>}
    </div>
  )
}
