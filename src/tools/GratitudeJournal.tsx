import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Textarea } from '../components/FormElements'
type Entry = {id:number;date:string;items:string[];mood:string}
export function GratitudeJournal() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [text, setText] = useState(''); const [mood, setMood] = useState('😊')
  const moods = ['😊','😃','🥰','😌','🤔','😐','😢']
  const save = () => {
    if(!text.trim()) return
    const items = text.split('\n').filter(l=>l.trim())
    setEntries([{id:Date.now(),date:new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}),items,mood},...entries])
    setText(''); setMood('😊')
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <Card>
        <div className="font-semibold mb-3">What are you grateful for today?</div>
        <Textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write one thing per line...&#10;1. Morning coffee&#10;2. A good conversation&#10;3. Sunny weather" rows={4}/>
        <div className="flex items-center gap-3 mt-3"><span className="text-sm text-muted">Mood:</span>{moods.map(m=><button key={m} onClick={()=>setMood(m)} className={`text-2xl transition ${mood===m?'scale-125':''}`}>{m}</button>)}</div>
        <Button onClick={save} className="w-full mt-4">Save Entry</Button>
      </Card>
      {entries.length>0&&<div className="text-center"><span className="text-sm text-muted">{entries.length} entries • {entries.reduce((s,e)=>s+e.items.length,0)} things to be grateful for</span></div>}
      {entries.map(e=>(
        <Card key={e.id}><div className="flex justify-between items-center mb-2"><span className="text-sm text-muted">{e.date}</span><span className="text-2xl">{e.mood}</span></div>
          {e.items.map((item,i)=><div key={i} className="flex items-start gap-2 py-0.5"><span className="text-accent">✦</span><span className="text-sm">{item}</span></div>)}
        </Card>
      ))}
    </div>
  )
}
