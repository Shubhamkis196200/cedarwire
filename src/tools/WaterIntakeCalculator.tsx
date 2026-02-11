import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'

export function WaterIntakeCalculator() {
  const [weight, setWeight] = useState(''); const [activity, setActivity] = useState('moderate'); const [climate, setClimate] = useState('temperate')
  const [result, setResult] = useState<{liters:number;glasses:number}|null>(null)
  const calculate = () => {
    const w = parseFloat(weight); if (!w) return
    let base = w * 0.033
    if (activity === 'high') base *= 1.3; else if (activity === 'low') base *= 0.9
    if (climate === 'hot') base *= 1.2; else if (climate === 'cold') base *= 0.95
    setResult({ liters: Math.round(base * 10) / 10, glasses: Math.round(base / 0.25) })
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Weight (kg)</Label><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="70" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Activity Level</Label><Select value={activity} onChange={e=>setActivity(e.target.value)}><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option></Select></div>
        <div><Label>Climate</Label><Select value={climate} onChange={e=>setClimate(e.target.value)}><option value="cold">Cold</option><option value="temperate">Temperate</option><option value="hot">Hot</option></Select></div>
      </div>
      <Button onClick={calculate} size="lg" className="w-full">Calculate Water Intake</Button>
      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center"><div className="text-4xl font-bold text-blue-500">💧 {result.liters}L</div><div className="text-sm text-muted mt-1">Daily Water Intake</div></Card>
          <Card className="text-center"><div className="text-4xl font-bold">{result.glasses}</div><div className="text-sm text-muted mt-1">Glasses (250ml)</div></Card>
        </div>
      )}
    </div>
  )
}
