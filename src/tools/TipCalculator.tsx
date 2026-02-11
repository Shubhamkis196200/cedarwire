import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Slider } from '../components/FormElements'
export function TipCalculator() {
  const [bill, setBill] = useState(''); const [tip, setTip] = useState(18); const [people, setPeople] = useState('1')
  const b = parseFloat(bill)||0, p = parseInt(people)||1
  const tipAmt = b*tip/100, total = b+tipAmt, perPerson = total/p
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Bill Amount ($)</Label><Input type="number" value={bill} onChange={e=>setBill(e.target.value)} placeholder="85.00"/></div>
      <div><Label>Tip: {tip}%</Label><Slider value={tip} min={0} max={50} onChange={setTip}/><div className="flex justify-between mt-2 gap-2">{[15,18,20,25].map(t=><Button key={t} size="sm" variant={tip===t?'primary':'outline'} onClick={()=>setTip(t)}>{t}%</Button>)}</div></div>
      <div><Label>Split Between</Label><Input type="number" value={people} onChange={e=>setPeople(e.target.value)} min={1}/></div>
      {b > 0 && <div className="grid grid-cols-2 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold">${tipAmt.toFixed(2)}</div><div className="text-sm text-muted mt-1">Tip Amount</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold text-accent">${total.toFixed(2)}</div><div className="text-sm text-muted mt-1">Total</div></Card>
        {p>1&&<Card className="text-center col-span-2"><div className="text-3xl font-bold text-green-600">${perPerson.toFixed(2)}</div><div className="text-sm text-muted mt-1">Per Person</div></Card>}
      </div>}
    </div>
  )
}
