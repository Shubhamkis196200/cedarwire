import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Select, Label, Input } from '../components/FormElements'
export function LifeExpectancyCalculator() {
  const [age, setAge] = useState(''); const [gender, setGender] = useState('male'); const [exercise, setExercise] = useState('moderate'); const [smoking, setSmoking] = useState('never'); const [diet, setDiet] = useState('good'); const [stress, setStress] = useState('moderate')
  const [result, setResult] = useState<{expectancy:number;factors:{name:string;impact:number}[]}|null>(null)
  const calc = () => {
    let base = gender==='male'?76:81
    const factors:{name:string;impact:number}[] = []
    if(exercise==='high'){factors.push({name:'Active lifestyle',impact:3})}else if(exercise==='low'){factors.push({name:'Sedentary lifestyle',impact:-3})}
    if(smoking==='current'){factors.push({name:'Current smoker',impact:-10})}else if(smoking==='former'){factors.push({name:'Former smoker',impact:-3})}
    if(diet==='excellent'){factors.push({name:'Excellent diet',impact:3})}else if(diet==='poor'){factors.push({name:'Poor diet',impact:-4})}
    if(stress==='high'){factors.push({name:'High stress',impact:-3})}else if(stress==='low'){factors.push({name:'Low stress',impact:2})}
    const adj = factors.reduce((s,f)=>s+f.impact,0)
    setResult({expectancy:base+adj,factors})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Current Age</Label><Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="35"/></div>
        <div><Label>Gender</Label><Select value={gender} onChange={e=>setGender(e.target.value)}><option value="male">Male</option><option value="female">Female</option></Select></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Exercise</Label><Select value={exercise} onChange={e=>setExercise(e.target.value)}><option value="low">Rarely</option><option value="moderate">Moderate</option><option value="high">Active (5+/week)</option></Select></div>
        <div><Label>Smoking</Label><Select value={smoking} onChange={e=>setSmoking(e.target.value)}><option value="never">Never</option><option value="former">Former</option><option value="current">Current</option></Select></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Diet Quality</Label><Select value={diet} onChange={e=>setDiet(e.target.value)}><option value="poor">Poor</option><option value="good">Good</option><option value="excellent">Excellent</option></Select></div>
        <div><Label>Stress Level</Label><Select value={stress} onChange={e=>setStress(e.target.value)}><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option></Select></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Estimate Life Expectancy</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-5xl font-bold text-accent">{result.expectancy}</div><div className="text-sm text-muted mt-1">Estimated years</div>{age&&<div className="text-lg mt-2">~{result.expectancy-parseInt(age)} years remaining</div>}</Card>
        {result.factors.length>0&&<Card><div className="font-semibold mb-3">Impact Factors</div>{result.factors.map((f,i)=><div key={i} className="flex justify-between py-1"><span>{f.name}</span><span className={f.impact>0?'text-green-600':'text-red-600'}>{f.impact>0?'+':''}{f.impact} years</span></div>)}</Card>}
        <p className="text-xs text-muted text-center">This is a simplified estimate for educational purposes only. Consult a healthcare provider for personalized advice.</p>
      </div>}
    </div>
  )
}
