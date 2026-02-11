import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'

export function BudgetPlanner() {
  const [income, setIncome] = useState('')
  const [result, setResult] = useState<{needs:number;wants:number;savings:number}|null>(null)
  const calculate = () => {
    const i = parseFloat(income)
    if (!i) return
    setResult({ needs: Math.round(i * 0.5), wants: Math.round(i * 0.3), savings: Math.round(i * 0.2) })
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Monthly Income ($)</Label><Input type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="5000" /></div>
      <Button onClick={calculate} size="lg" className="w-full">Plan Budget (50/30/20)</Button>
      {result && (
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center"><div className="text-3xl font-bold text-green-600">${result.needs}</div><div className="text-sm text-muted mt-1">Needs (50%)</div><div className="text-xs text-muted">Rent, food, bills</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-blue-600">${result.wants}</div><div className="text-sm text-muted mt-1">Wants (30%)</div><div className="text-xs text-muted">Entertainment, dining</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-accent">${result.savings}</div><div className="text-sm text-muted mt-1">Savings (20%)</div><div className="text-xs text-muted">Investments, emergency</div></Card>
        </div>
      )}
    </div>
  )
}
