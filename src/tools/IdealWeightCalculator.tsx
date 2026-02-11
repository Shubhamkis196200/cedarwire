import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function IdealWeightCalculator() {
  const [height, setHeight] = useState(''); const [gender, setGender] = useState('male')
  const [result, setResult] = useState<{robinson:number;miller:number;hamwi:number}|null>(null)
  const calc = () => {
    const h = parseFloat(height); if(!h) return
    const inches = h / 2.54; const over5ft = Math.max(0, inches - 60)
    let robinson, miller, hamwi
    if(gender==='male'){robinson=52+1.9*over5ft;miller=56.2+1.41*over5ft;hamwi=48+2.7*over5ft}
    else{robinson=49+1.7*over5ft;miller=53.1+1.36*over5ft;hamwi=45.5+2.2*over5ft}
    setResult({robinson:Math.round(robinson),miller:Math.round(miller),hamwi:Math.round(hamwi)})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Height (cm)</Label><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175"/></div>
        <div><Label>Gender</Label><Select value={gender} onChange={e=>setGender(e.target.value)}><option value="male">Male</option><option value="female">Female</option></Select></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate</Button>
      {result && <div className="grid grid-cols-3 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold">{result.robinson}kg</div><div className="text-sm text-muted mt-1">Robinson</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">{result.miller}kg</div><div className="text-sm text-muted mt-1">Miller</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">{result.hamwi}kg</div><div className="text-sm text-muted mt-1">Hamwi</div></Card>
      </div>}
    </div>
  )
}
