import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function PregnancyDueDate() {
  const [lmp, setLmp] = useState('')
  const [result, setResult] = useState<{due:string;weeks:number;trimester:string;milestones:{week:number;desc:string}[]}|null>(null)
  const calc = () => {
    if(!lmp) return
    const d = new Date(lmp); d.setDate(d.getDate()+280)
    const now = new Date(); const diff = Math.floor((now.getTime()-new Date(lmp).getTime())/(1000*60*60*24*7))
    const weeks = Math.max(0,Math.min(42,diff))
    const trimester = weeks<=13?'First':weeks<=26?'Second':'Third'
    setResult({due:d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'}),weeks,trimester,milestones:[
      {week:8,desc:'Heartbeat can be detected'},{week:12,desc:'End of first trimester'},{week:20,desc:'Halfway point — anatomy scan'},{week:24,desc:'Viability milestone'},{week:28,desc:'Third trimester begins'},{week:37,desc:'Full term begins'},{week:40,desc:'Due date'}
    ]})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>First Day of Last Period</Label><Input type="date" value={lmp} onChange={e=>setLmp(e.target.value)}/></div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Due Date</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-2xl font-bold text-accent">{result.due}</div><div className="text-sm text-muted mt-2">Currently ~{result.weeks} weeks • {result.trimester} Trimester</div></Card>
        <Card><div className="font-semibold mb-3">Milestones</div>{result.milestones.map((m,i)=><div key={i} className={`flex justify-between py-2 border-b border-border last:border-0 ${result.weeks>=m.week?'text-green-600':'text-muted'}`}><span>Week {m.week}</span><span className="text-sm">{m.desc}</span></div>)}</Card>
      </div>}
    </div>
  )
}
