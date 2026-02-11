import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function RentVsBuy() {
  const [rent, setRent] = useState(''); const [price, setPrice] = useState(''); const [down, setDown] = useState('20'); const [rate, setRate] = useState('6.5'); const [years, setYears] = useState('10')
  const [result, setResult] = useState<{rentCost:number;buyCost:number;equity:number;verdict:string}|null>(null)
  const calc = () => {
    const r=parseFloat(rent),p=parseFloat(price),d=parseFloat(down)/100,ir=parseFloat(rate)/100/12,y=parseInt(years),n=y*12
    if(!r||!p) return
    const loan=p*(1-d),mp=loan*(ir*Math.pow(1+ir,n*3))/(Math.pow(1+ir,n*3)-1)
    const rentCost=Math.round(r*n*1.03) // avg rent increase
    const buyCost=Math.round(mp*n+p*d+p*0.01*y) // mortgage + down + maintenance
    const equity=Math.round(p*1.03**y-loan*0.7) // rough equity
    const verdict = buyCost-equity < rentCost ? 'Buying may be better' : 'Renting may be better'
    setResult({rentCost,buyCost,equity,verdict})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Monthly Rent ($)</Label><Input type="number" value={rent} onChange={e=>setRent(e.target.value)} placeholder="2000"/></div>
        <div><Label>Home Price ($)</Label><Input type="number" value={price} onChange={e=>setPrice(e.target.value)} placeholder="400000"/></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div><Label>Down (%)</Label><Input type="number" value={down} onChange={e=>setDown(e.target.value)}/></div>
        <div><Label>Rate (%)</Label><Input type="number" value={rate} onChange={e=>setRate(e.target.value)}/></div>
        <div><Label>Years</Label><Input type="number" value={years} onChange={e=>setYears(e.target.value)}/></div>
      </div>
      <Button onClick={calc} size="lg" className="w-full">Compare</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-2xl font-bold text-accent">{result.verdict}</div></Card>
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center"><div className="text-2xl font-bold">${result.rentCost.toLocaleString()}</div><div className="text-sm text-muted mt-1">Total Rent Cost</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold">${result.buyCost.toLocaleString()}</div><div className="text-sm text-muted mt-1">Total Buy Cost</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold text-green-600">${result.equity.toLocaleString()}</div><div className="text-sm text-muted mt-1">Est. Equity</div></Card>
        </div>
      </div>}
    </div>
  )
}
