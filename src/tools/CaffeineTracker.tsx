import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const drinks = [{name:'Coffee (8oz)',mg:95,icon:'☕'},{name:'Espresso',mg:63,icon:'☕'},{name:'Black Tea',mg:47,icon:'🍵'},{name:'Green Tea',mg:28,icon:'🍵'},{name:'Cola (12oz)',mg:34,icon:'🥤'},{name:'Energy Drink',mg:80,icon:'⚡'},{name:'Dark Chocolate (1oz)',mg:12,icon:'🍫'},{name:'Decaf Coffee',mg:3,icon:'☕'}]
export function CaffeineTracker() {
  const [log, setLog] = useState<{name:string;mg:number;time:string}[]>([])
  const total = log.reduce((s,l)=>s+l.mg,0)
  const limit = 400
  const add = (name:string,mg:number) => setLog([...log,{name,mg,time:new Date().toLocaleTimeString()}])
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <Card className="text-center"><div className="text-4xl font-bold" style={{color:total>limit?'#ef4444':'#e07a5f'}}>{total}mg</div><div className="text-sm text-muted mt-1">of {limit}mg daily limit</div><div className="w-full bg-gray-200 rounded-full h-3 mt-3"><div className={`h-3 rounded-full transition-all ${total>limit?'bg-red-500':'bg-accent'}`} style={{width:`${Math.min(100,total/limit*100)}%`}}/></div></Card>
      <div className="grid grid-cols-2 gap-3">{drinks.map(d=>(
        <Button key={d.name} variant="outline" onClick={()=>add(d.name,d.mg)} className="justify-start text-left"><span className="mr-2">{d.icon}</span>{d.name} <span className="ml-auto text-muted text-xs">{d.mg}mg</span></Button>
      ))}</div>
      {log.length>0&&<Card><div className="flex justify-between items-center mb-3"><span className="font-semibold">Today's Log</span><Button size="sm" variant="secondary" onClick={()=>setLog([])}>Clear</Button></div>
        {log.map((l,i)=><div key={i} className="flex justify-between py-1 text-sm border-b border-border last:border-0"><span>{l.name}</span><span className="text-muted">{l.mg}mg • {l.time}</span></div>)}
      </Card>}
    </div>
  )
}
