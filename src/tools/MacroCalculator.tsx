import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function MacroCalculator() {
  const [calories, setCalories] = useState(''); const [goal, setGoal] = useState('balanced')
  const [result, setResult] = useState<{protein:number;carbs:number;fat:number}|null>(null)
  const calc = () => {
    const c=parseFloat(calories); if(!c) return
    const splits:{[k:string]:[number,number,number]} = {balanced:[0.3,0.4,0.3],lowcarb:[0.4,0.2,0.4],highprotein:[0.4,0.35,0.25],keto:[0.3,0.05,0.65]}
    const [p,cb,f] = splits[goal]||splits.balanced
    setResult({protein:Math.round(c*p/4),carbs:Math.round(c*cb/4),fat:Math.round(c*f/9)})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Daily Calories</Label><Input type="number" value={calories} onChange={e=>setCalories(e.target.value)} placeholder="2000"/></div>
        <div><Label>Diet Type</Label><Select value={goal} onChange={e=>setGoal(e.target.value)}><option value="balanced">Balanced</option><option value="lowcarb">Low Carb</option><option value="highprotein">High Protein</option><option value="keto">Keto</option></Select></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Macros</Button>
      {result && <div className="grid grid-cols-3 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold text-red-500">{result.protein}g</div><div className="text-sm text-muted mt-1">Protein</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold text-yellow-500">{result.carbs}g</div><div className="text-sm text-muted mt-1">Carbs</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold text-blue-500">{result.fat}g</div><div className="text-sm text-muted mt-1">Fat</div></Card>
      </div>}
    </div>
  )
}
