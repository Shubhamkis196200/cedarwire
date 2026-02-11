import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
export function CompoundInterest() {
  const [principal, setPrincipal] = useState(''); const [rate, setRate] = useState(''); const [years, setYears] = useState(''); const [compound, setCompound] = useState('12'); const [monthly, setMonthly] = useState('0')
  const [result, setResult] = useState<{total:number;interest:number;contrib:number;breakdown:{year:number;balance:number}[]}|null>(null)
  const calc = () => {
    const p=parseFloat(principal),r=parseFloat(rate)/100,y=parseInt(years),n=parseInt(compound),m=parseFloat(monthly)
    if(!p||!r||!y) return
    const breakdown:{year:number;balance:number}[] = []
    let bal = p
    for(let yr=1;yr<=y;yr++){for(let i=0;i<n;i++){bal=bal*(1+r/n)+m*(12/n)}; breakdown.push({year:yr,balance:Math.round(bal)})}
    const contrib=p+m*12*y
    setResult({total:Math.round(bal),interest:Math.round(bal-contrib),contrib:Math.round(contrib),breakdown})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Initial Investment ($)</Label><Input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} placeholder="10000"/></div>
        <div><Label>Annual Rate (%)</Label><Input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="7"/></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div><Label>Years</Label><Input type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="10"/></div>
        <div><Label>Compound</Label><Select value={compound} onChange={e=>setCompound(e.target.value)}><option value="1">Annually</option><option value="4">Quarterly</option><option value="12">Monthly</option><option value="365">Daily</option></Select></div>
        <div><Label>Monthly Add ($)</Label><Input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)}/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Calculate</Button>
      {result && <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center"><div className="text-2xl font-bold text-accent">${result.total.toLocaleString()}</div><div className="text-sm text-muted mt-1">Final Balance</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold">${result.contrib.toLocaleString()}</div><div className="text-sm text-muted mt-1">Contributions</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold text-green-600">${result.interest.toLocaleString()}</div><div className="text-sm text-muted mt-1">Interest</div></Card>
        </div>
        <Card><div className="font-semibold mb-3">Growth Over Time</div>{result.breakdown.map(b=><div key={b.year} className="flex justify-between py-1 text-sm border-b border-border last:border-0"><span>Year {b.year}</span><span className="font-mono font-semibold">${b.balance.toLocaleString()}</span></div>)}</Card>
      </div>}
    </div>
  )
}
