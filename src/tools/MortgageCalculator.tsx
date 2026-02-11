import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function MortgageCalculator() {
  const [price, setPrice] = useState(''); const [down, setDown] = useState('20'); const [rate, setRate] = useState(''); const [years, setYears] = useState('30')
  const [result, setResult] = useState<{monthly:number;totalPaid:number;totalInterest:number}|null>(null)
  const calc = () => {
    const p=parseFloat(price),d=parseFloat(down),r=parseFloat(rate),y=parseInt(years)
    if(!p||!r) return
    const loan=p*(1-d/100),mr=r/100/12,n=y*12
    const monthly=loan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1)
    setResult({monthly:Math.round(monthly),totalPaid:Math.round(monthly*n),totalInterest:Math.round(monthly*n-loan)})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Home Price ($)</Label><Input type="number" value={price} onChange={e=>setPrice(e.target.value)} placeholder="400000"/></div>
        <div><Label>Down Payment (%)</Label><Input type="number" value={down} onChange={e=>setDown(e.target.value)}/></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Interest Rate (%)</Label><Input type="number" step="0.1" value={rate} onChange={e=>setRate(e.target.value)} placeholder="6.5"/></div>
        <div><Label>Loan Term (years)</Label><Input type="number" value={years} onChange={e=>setYears(e.target.value)}/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-4xl font-bold text-accent">${result.monthly.toLocaleString()}</div><div className="text-sm text-muted mt-1">Monthly Payment</div></Card>
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center"><div className="text-2xl font-bold">${result.totalPaid.toLocaleString()}</div><div className="text-sm text-muted mt-1">Total Paid</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold text-red-500">${result.totalInterest.toLocaleString()}</div><div className="text-sm text-muted mt-1">Total Interest</div></Card>
        </div>
      </div>}
    </div>
  )
}
