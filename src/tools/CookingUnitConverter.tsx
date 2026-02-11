import { useState } from 'react'
import { Card } from '../components/Card'
import { Input, Label, Select } from '../components/FormElements'
const conversions:{[k:string]:{[k:string]:number}} = {
  tsp:{tsp:1,tbsp:1/3,cup:1/48,ml:4.929,oz:1/6},
  tbsp:{tsp:3,tbsp:1,cup:1/16,ml:14.787,oz:0.5},
  cup:{tsp:48,tbsp:16,cup:1,ml:236.588,oz:8},
  ml:{tsp:0.2029,tbsp:0.0676,cup:0.00423,ml:1,oz:0.0338},
  oz:{tsp:6,tbsp:2,cup:0.125,ml:29.574,oz:1},
}
export function CookingUnitConverter() {
  const [amount, setAmount] = useState('1'); const [from, setFrom] = useState('cup'); const [to, setTo] = useState('ml')
  const result = Math.round((parseFloat(amount)||0) * (conversions[from]?.[to]||0) * 1000) / 1000
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div><Label>Amount</Label><Input type="number" value={amount} onChange={e=>setAmount(e.target.value)}/></div>
        <div><Label>From</Label><Select value={from} onChange={e=>setFrom(e.target.value)}>{Object.keys(conversions).map(u=><option key={u}>{u}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={e=>setTo(e.target.value)}>{Object.keys(conversions).map(u=><option key={u}>{u}</option>)}</Select></div>
      </div>
      <Card className="text-center"><div className="text-lg text-muted">{amount} {from} =</div><div className="text-4xl font-bold text-accent">{result} {to}</div></Card>
      <Card><div className="font-semibold mb-3">Quick Reference</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>1 cup = 16 tbsp</div><div>1 cup = 236.6 ml</div><div>1 tbsp = 3 tsp</div><div>1 oz = 29.6 ml</div>
        </div>
      </Card>
    </div>
  )
}
