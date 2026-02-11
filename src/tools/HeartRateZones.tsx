import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function HeartRateZones() {
  const [age, setAge] = useState('')
  const [result, setResult] = useState<{max:number;zones:{name:string;min:number;max:number;desc:string}[]}|null>(null)
  const calc = () => {
    const a=parseInt(age); if(!a) return
    const max=220-a
    setResult({max, zones:[
      {name:'Zone 1 - Recovery',min:Math.round(max*0.5),max:Math.round(max*0.6),desc:'Very light, warm-up'},
      {name:'Zone 2 - Fat Burn',min:Math.round(max*0.6),max:Math.round(max*0.7),desc:'Light, fat burning'},
      {name:'Zone 3 - Aerobic',min:Math.round(max*0.7),max:Math.round(max*0.8),desc:'Moderate, endurance'},
      {name:'Zone 4 - Threshold',min:Math.round(max*0.8),max:Math.round(max*0.9),desc:'Hard, performance'},
      {name:'Zone 5 - Maximum',min:Math.round(max*0.9),max:max,desc:'Maximum effort, sprints'},
    ]})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Your Age</Label><Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="30"/></div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Zones</Button>
      {result && <div className="space-y-3">
        <Card className="text-center"><div className="text-3xl font-bold text-red-500">{result.max} BPM</div><div className="text-sm text-muted">Max Heart Rate</div></Card>
        {result.zones.map((z,i)=><Card key={i}><div className="flex justify-between items-center"><div><div className="font-semibold">{z.name}</div><div className="text-sm text-muted">{z.desc}</div></div><div className="text-xl font-bold">{z.min}-{z.max}</div></div></Card>)}
      </div>}
    </div>
  )
}
