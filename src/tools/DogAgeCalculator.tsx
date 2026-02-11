import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function DogAgeCalculator() {
  const [age, setAge] = useState(''); const [size, setSize] = useState('medium')
  const [result, setResult] = useState<{humanAge:number;stage:string}|null>(null)
  const calc = () => {
    const a=parseFloat(age); if(!a) return
    const multipliers:{[k:string]:number[]}={small:[15,9,5],medium:[15,9,6],large:[15,9,7],giant:[12,9,8]}
    const m=multipliers[size]
    let humanAge=0
    if(a<=1)humanAge=a*m[0]; else if(a<=2)humanAge=m[0]+(a-1)*m[1]; else humanAge=m[0]+m[1]+(a-2)*m[2]
    humanAge=Math.round(humanAge)
    const stage=humanAge<15?'Puppy':humanAge<30?'Young Adult':humanAge<55?'Adult':'Senior'
    setResult({humanAge,stage})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Dog's Age (years)</Label><Input type="number" step="0.5" value={age} onChange={e=>setAge(e.target.value)} placeholder="3"/></div>
        <div><Label>Size</Label><Select value={size} onChange={e=>setSize(e.target.value)}><option value="small">Small (&lt;20 lb)</option><option value="medium">Medium (20-50 lb)</option><option value="large">Large (50-100 lb)</option><option value="giant">Giant (100+ lb)</option></Select></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Human Age</Button>
      {result && <Card className="text-center"><div className="text-5xl mb-2">🐕</div><div className="text-4xl font-bold text-accent">{result.humanAge} human years</div><div className="text-lg text-muted mt-2">Life Stage: {result.stage}</div></Card>}
    </div>
  )
}
