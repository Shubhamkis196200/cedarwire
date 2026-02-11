import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function RunningPaceCalculator() {
  const [dist, setDist] = useState(''); const [hours, setHours] = useState(''); const [mins, setMins] = useState(''); const [secs, setSecs] = useState('')
  const [result, setResult] = useState<{pace:string;speed:number;splits:{name:string;time:string}[]}|null>(null)
  const calc = () => {
    const d=parseFloat(dist),totalSec=(parseInt(hours||'0')*3600)+(parseInt(mins||'0')*60)+parseInt(secs||'0')
    if(!d||!totalSec) return
    const pacePerKm=totalSec/d, pm=Math.floor(pacePerKm/60), ps=Math.round(pacePerKm%60)
    const speed=Math.round((d/(totalSec/3600))*10)/10
    const splits = [{name:'5K',time:fmt(pacePerKm*5)},{name:'10K',time:fmt(pacePerKm*10)},{name:'Half Marathon',time:fmt(pacePerKm*21.0975)},{name:'Marathon',time:fmt(pacePerKm*42.195)}]
    setResult({pace:`${pm}:${ps.toString().padStart(2,'0')} /km`,speed,splits})
  }
  const fmt = (s:number) => {const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=Math.round(s%60);return h>0?`${h}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`:`${m}:${sec.toString().padStart(2,'0')}`}
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Distance (km)</Label><Input type="number" value={dist} onChange={e=>setDist(e.target.value)} placeholder="5"/></div>
      <div className="grid grid-cols-3 gap-3">
        <div><Label>Hours</Label><Input type="number" value={hours} onChange={e=>setHours(e.target.value)} placeholder="0"/></div>
        <div><Label>Minutes</Label><Input type="number" value={mins} onChange={e=>setMins(e.target.value)} placeholder="25"/></div>
        <div><Label>Seconds</Label><Input type="number" value={secs} onChange={e=>setSecs(e.target.value)} placeholder="0"/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Pace</Button>
      {result && <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center"><div className="text-3xl font-bold">{result.pace}</div><div className="text-sm text-muted mt-1">Pace</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold">{result.speed} km/h</div><div className="text-sm text-muted mt-1">Speed</div></Card>
        </div>
        <Card><div className="font-semibold mb-3">Predicted Race Times</div>{result.splits.map((s,i)=><div key={i} className="flex justify-between py-1 border-b border-border last:border-0"><span>{s.name}</span><span className="font-mono font-semibold">{s.time}</span></div>)}</Card>
      </div>}
    </div>
  )
}
