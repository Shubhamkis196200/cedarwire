import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'

export function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [unit, setUnit] = useState<'metric'|'imperial'>('metric')
  const [result, setResult] = useState<{bmi:number;category:string;color:string}|null>(null)

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height)
    if (!w || !h) return
    let bmi: number
    if (unit === 'metric') bmi = w / ((h/100) ** 2)
    else bmi = (w * 703) / (h ** 2)
    let category = '', color = ''
    if (bmi < 18.5) { category = 'Underweight'; color = 'text-blue-500' }
    else if (bmi < 25) { category = 'Normal weight'; color = 'text-green-500' }
    else if (bmi < 30) { category = 'Overweight'; color = 'text-yellow-500' }
    else { category = 'Obese'; color = 'text-red-500' }
    setResult({ bmi: Math.round(bmi * 10) / 10, category, color })
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Unit System</Label><Select value={unit} onChange={e => setUnit(e.target.value as any)}><option value="metric">Metric (kg/cm)</option><option value="imperial">Imperial (lb/in)</option></Select></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Weight ({unit === 'metric' ? 'kg' : 'lb'})</Label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" /></div>
        <div><Label>Height ({unit === 'metric' ? 'cm' : 'in'})</Label><Input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" /></div>
      </div>
      <Button onClick={calculate} size="lg" className="w-full">Calculate BMI</Button>
      {result && (
        <Card className="text-center">
          <div className="text-5xl font-bold font-display">{result.bmi}</div>
          <div className={`text-xl font-semibold mt-2 ${result.color}`}>{result.category}</div>
          <div className="mt-4 text-sm text-muted">
            <div className="flex justify-between"><span>Underweight</span><span>&lt; 18.5</span></div>
            <div className="flex justify-between"><span>Normal</span><span>18.5–24.9</span></div>
            <div className="flex justify-between"><span>Overweight</span><span>25–29.9</span></div>
            <div className="flex justify-between"><span>Obese</span><span>≥ 30</span></div>
          </div>
        </Card>
      )}
    </div>
  )
}
