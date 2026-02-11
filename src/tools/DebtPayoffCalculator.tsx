import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function DebtPayoffCalculator() {
  const [balance, setBalance] = useState(''); const [rate, setRate] = useState(''); const [payment, setPayment] = useState('')
  const [result, setResult] = useState<{months:number;totalPaid:number;totalInterest:number}|null>(null)
  const calc = () => {
    const b=parseFloat(balance),r=parseFloat(rate)/100/12,p=parseFloat(payment)
    if(!b||!r||!p||p<=b*r) return
    const months=Math.ceil(-Math.log(1-b*r/p)/Math.log(1+r))
    const totalPaid=Math.round(p*months)
    setResult({months,totalPaid,totalInterest:totalPaid-Math.round(b)})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Debt Balance ($)</Label><Input type="number" value={balance} onChange={e=>setBalance(e.target.value)} placeholder="15000"/></div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Interest Rate (%)</Label><Input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="18"/></div>
        <div><Label>Monthly Payment ($)</Label><Input type="number" value={payment} onChange={e=>setPayment(e.target.value)} placeholder="500"/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Payoff</Button>
      {result && <div className="grid grid-cols-3 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold text-accent">{Math.round(result.months/12*10)/10} yrs</div><div className="text-sm text-muted mt-1">Payoff Time</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">${result.totalPaid.toLocaleString()}</div><div className="text-sm text-muted mt-1">Total Paid</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold text-red-500">${result.totalInterest.toLocaleString()}</div><div className="text-sm text-muted mt-1">Interest Cost</div></Card>
      </div>}
    </div>
  )
}
