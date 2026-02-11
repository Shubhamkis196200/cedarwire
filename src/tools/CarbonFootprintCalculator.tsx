import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function CarbonFootprintCalculator() {
  const [driving, setDriving] = useState('10000'); const [flights, setFlights] = useState('2'); const [diet, setDiet] = useState('mixed'); const [electricity, setElectricity] = useState('900')
  const [result, setResult] = useState<{total:number;breakdown:{cat:string;tons:number;pct:number}[];tips:string[]}|null>(null)
  const calc = () => {
    const d=parseFloat(driving)*0.000404, f=parseInt(flights)*0.9, e=parseFloat(electricity)*0.0004*12
    const dietMap:{[k:string]:number}={vegan:1.5,vegetarian:2.5,mixed:3.3,heavy_meat:5}
    const dd=dietMap[diet]||3.3
    const total=Math.round((d+f+e+dd)*10)/10
    const breakdown=[{cat:'Transportation',tons:Math.round(d*10)/10,pct:0},{cat:'Flights',tons:Math.round(f*10)/10,pct:0},{cat:'Home Energy',tons:Math.round(e*10)/10,pct:0},{cat:'Diet',tons:dd,pct:0}]
    breakdown.forEach(b=>b.pct=Math.round(b.tons/total*100))
    const tips:string[]=[]
    if(d>3)tips.push('Consider carpooling or public transit')
    if(f>2)tips.push('Offset flight emissions or choose train travel')
    if(diet==='heavy_meat')tips.push('Try Meatless Mondays to reduce food emissions')
    if(e>4)tips.push('Switch to renewable energy or improve insulation')
    setResult({total,breakdown,tips})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Annual Driving (km)</Label><Input type="number" value={driving} onChange={e=>setDriving(e.target.value)}/></div>
        <div><Label>Flights Per Year</Label><Input type="number" value={flights} onChange={e=>setFlights(e.target.value)}/></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Diet</Label><Select value={diet} onChange={e=>setDiet(e.target.value)}><option value="vegan">Vegan</option><option value="vegetarian">Vegetarian</option><option value="mixed">Mixed</option><option value="heavy_meat">Heavy Meat</option></Select></div>
        <div><Label>Monthly Electricity (kWh)</Label><Input type="number" value={electricity} onChange={e=>setElectricity(e.target.value)}/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Footprint</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-4xl font-bold">{result.total}</div><div className="text-sm text-muted mt-1">Tons CO₂ per year</div><div className="text-sm mt-2">{result.total<6?'🌱 Below average!':result.total<10?'🌍 About average':'🔴 Above average'}</div></Card>
        <Card>{result.breakdown.map(b=><div key={b.cat} className="mb-3"><div className="flex justify-between text-sm mb-1"><span>{b.cat}</span><span>{b.tons}t ({b.pct}%)</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width:`${b.pct}%`}}/></div></div>)}</Card>
        {result.tips.length>0&&<Card><div className="font-semibold mb-3">Reduction Tips</div>{result.tips.map((t,i)=><div key={i} className="flex items-start gap-2 py-1"><span>🌱</span><span className="text-sm">{t}</span></div>)}</Card>}
      </div>}
    </div>
  )
}
