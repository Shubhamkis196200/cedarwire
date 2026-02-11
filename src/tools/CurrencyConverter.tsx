import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
const rates:{[k:string]:number} = {USD:1,EUR:0.92,GBP:0.79,JPY:149.5,CAD:1.36,AUD:1.53,CHF:0.88,CNY:7.24,INR:83.1,MXN:17.1,BRL:4.97,KRW:1320}
export function CurrencyConverter() {
  const [amount, setAmount] = useState('100'); const [from, setFrom] = useState('USD'); const [to, setTo] = useState('EUR')
  const convert = () => {const a=parseFloat(amount)||0; return Math.round(a/rates[from]*rates[to]*100)/100}
  const result = convert()
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Amount</Label><Input type="number" value={amount} onChange={e=>setAmount(e.target.value)}/></div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>From</Label><Select value={from} onChange={e=>setFrom(e.target.value)}>{Object.keys(rates).map(c=><option key={c}>{c}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={e=>setTo(e.target.value)}>{Object.keys(rates).map(c=><option key={c}>{c}</option>)}</Select></div>
      </div>
      <Card className="text-center"><div className="text-lg text-muted">{parseFloat(amount)||0} {from} =</div><div className="text-4xl font-bold text-accent">{result.toLocaleString()} {to}</div><div className="text-sm text-muted mt-2">Rate: 1 {from} = {Math.round(rates[to]/rates[from]*10000)/10000} {to}</div></Card>
      <p className="text-xs text-muted text-center">Rates are approximate and for reference only</p>
    </div>
  )
}
