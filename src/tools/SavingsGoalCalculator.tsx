import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function SavingsGoalCalculator() {
  const [goal, setGoal] = useState(''); const [saved, setSaved] = useState('0'); const [monthly, setMonthly] = useState(''); const [rate, setRate] = useState('5')
  const [result, setResult] = useState<{months:number;years:number;totalContrib:number;interest:number}|null>(null)
  const calc = () => {
    const g=parseFloat(goal),s=parseFloat(saved),m=parseFloat(monthly),r=parseFloat(rate)/100/12
    if(!g||!m) return
    let bal=s,months=0
    while(bal<g&&months<600){bal=bal*(1+r)+m;months++}
    const totalContrib=s+m*months
    setResult({months,years:Math.round(months/12*10)/10,totalContrib:Math.round(totalContrib),interest:Math.round(bal-totalContrib)})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Savings Goal ($)</Label><Input type="number" value={goal} onChange={e=>setGoal(e.target.value)} placeholder="50000"/></div>
        <div><Label>Already Saved ($)</Label><Input type="number" value={saved} onChange={e=>setSaved(e.target.value)}/></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Monthly Savings ($)</Label><Input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} placeholder="500"/></div>
        <div><Label>Annual Return (%)</Label><Input type="number" value={rate} onChange={e=>setRate(e.target.value)}/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate</Button>
      {result && <div className="grid grid-cols-2 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold text-accent">{result.years} yrs</div><div className="text-sm text-muted mt-1">Time to Goal</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">{result.months} mo</div><div className="text-sm text-muted mt-1">Total Months</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">${result.totalContrib.toLocaleString()}</div><div className="text-sm text-muted mt-1">Contributions</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold text-green-600">${result.interest.toLocaleString()}</div><div className="text-sm text-muted mt-1">Interest Earned</div></Card>
      </div>}
    </div>
  )
}
