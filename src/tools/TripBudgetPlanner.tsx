import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
type Expense = {id:number;name:string;amount:number;category:string}
export function TripBudgetPlanner() {
  const [budget, setBudget] = useState(''); const [expenses, setExpenses] = useState<Expense[]>([])
  const [name, setName] = useState(''); const [amount, setAmount] = useState(''); const [cat, setCat] = useState('Transport')
  const add = () => {if(!name||!amount) return; setExpenses([...expenses,{id:Date.now(),name,amount:parseFloat(amount),category:cat}]);setName('');setAmount('')}
  const total = expenses.reduce((s,e)=>s+e.amount,0)
  const b = parseFloat(budget)||0
  const cats = ['Transport','Accommodation','Food','Activities','Shopping','Other']
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div><Label>Total Budget ($)</Label><Input type="number" value={budget} onChange={e=>setBudget(e.target.value)} placeholder="3000"/></div>
      {b>0&&<Card><div className="flex justify-between mb-2"><span>Spent: ${total.toLocaleString()}</span><span>Remaining: ${(b-total).toLocaleString()}</span></div><div className="w-full bg-gray-200 rounded-full h-3"><div className={`h-3 rounded-full transition-all ${total>b?'bg-red-500':'bg-accent'}`} style={{width:`${Math.min(100,total/b*100)}%`}}/></div></Card>}
      <div className="grid grid-cols-4 gap-2">
        <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Expense name" className="col-span-1"/>
        <Input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount"/>
        <select value={cat} onChange={e=>setCat(e.target.value)} className="rounded-xl border border-border px-2 text-sm">{cats.map(c=><option key={c}>{c}</option>)}</select>
        <Button onClick={add}>Add</Button>
      </div>
      {cats.filter(c=>expenses.some(e=>e.category===c)).map(c=>(
        <Card key={c}><div className="font-semibold mb-2">{c} — ${expenses.filter(e=>e.category===c).reduce((s,e)=>s+e.amount,0).toLocaleString()}</div>
          {expenses.filter(e=>e.category===c).map(e=><div key={e.id} className="flex justify-between py-1 text-sm"><span>{e.name}</span><div className="flex items-center gap-2"><span>${e.amount}</span><button onClick={()=>setExpenses(expenses.filter(x=>x.id!==e.id))} className="text-red-400">✕</button></div></div>)}
        </Card>
      ))}
    </div>
  )
}
