import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function BodyFatCalculator() {
  const [gender, setGender] = useState('male'); const [waist, setWaist] = useState(''); const [neck, setNeck] = useState(''); const [height, setHeight] = useState(''); const [hip, setHip] = useState('')
  const [result, setResult] = useState<{bf:number;cat:string}|null>(null)
  const calc = () => {
    const w=parseFloat(waist),n=parseFloat(neck),h=parseFloat(height),hp=parseFloat(hip)
    if(!w||!n||!h) return
    let bf
    if(gender==='male') bf=495/(1.0324-0.19077*Math.log10(w-n)+0.15456*Math.log10(h))-450
    else { if(!hp) return; bf=495/(1.29579-0.35004*Math.log10(w+hp-n)+0.22100*Math.log10(h))-450 }
    bf=Math.round(bf*10)/10
    const cat = bf<14?'Athletic':bf<20?'Fit':bf<25?'Average':'Above Average'
    setResult({bf,cat})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Gender</Label><Select value={gender} onChange={e=>setGender(e.target.value)}><option value="male">Male</option><option value="female">Female</option></Select></div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Waist (cm)</Label><Input type="number" value={waist} onChange={e=>setWaist(e.target.value)} placeholder="85"/></div>
        <div><Label>Neck (cm)</Label><Input type="number" value={neck} onChange={e=>setNeck(e.target.value)} placeholder="37"/></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Height (cm)</Label><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175"/></div>
        {gender==='female'&&<div><Label>Hip (cm)</Label><Input type="number" value={hip} onChange={e=>setHip(e.target.value)} placeholder="95"/></div>}
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Body Fat</Button>
      {result && <Card className="text-center"><div className="text-5xl font-bold">{result.bf}%</div><div className="text-lg text-muted mt-2">{result.cat}</div></Card>}
    </div>
  )
}
