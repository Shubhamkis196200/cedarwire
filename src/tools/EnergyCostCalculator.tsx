import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
type Appliance = {name:string;watts:number;hours:number}
export function EnergyCostCalculator() {
  const [rate, setRate] = useState('0.12'); const [appliances, setAppliances] = useState<Appliance[]>([{name:'Refrigerator',watts:150,hours:24},{name:'AC Unit',watts:1500,hours:8},{name:'TV',watts:100,hours:5},{name:'Laptop',watts:50,hours:8},{name:'Lighting',watts:60,hours:6}])
  const [nn, setNn] = useState(''); const [nw, setNw] = useState(''); const [nh, setNh] = useState('')
  const add = () => {if(!nn||!nw||!nh) return;setAppliances([...appliances,{name:nn,watts:parseInt(nw),hours:parseInt(nh)}]);setNn('');setNw('');setNh('')}
  const r = parseFloat(rate)||0
  const daily = appliances.reduce((s,a)=>s+a.watts*a.hours/1000,0)
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div><Label>Electricity Rate ($/kWh)</Label><Input type="number" step="0.01" value={rate} onChange={e=>setRate(e.target.value)}/></div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center"><div className="text-2xl font-bold">{daily.toFixed(1)} kWh</div><div className="text-sm text-muted">Daily Usage</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold text-accent">${(daily*r).toFixed(2)}</div><div className="text-sm text-muted">Daily Cost</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold text-red-500">${(daily*r*30).toFixed(0)}</div><div className="text-sm text-muted">Monthly Cost</div></Card>
      </div>
      <Card><table className="w-full text-sm"><thead><tr className="border-b border-border"><th className="text-left py-2">Appliance</th><th className="text-right">Watts</th><th className="text-right">Hrs/day</th><th className="text-right">$/month</th><th></th></tr></thead>
        <tbody>{appliances.map((a,i)=><tr key={i} className="border-b border-border"><td className="py-2">{a.name}</td><td className="text-right">{a.watts}W</td><td className="text-right">{a.hours}h</td><td className="text-right font-semibold">${(a.watts*a.hours/1000*r*30).toFixed(2)}</td><td><button onClick={()=>setAppliances(appliances.filter((_,j)=>j!==i))} className="text-red-400 ml-2">✕</button></td></tr>)}</tbody></table></Card>
      <div className="grid grid-cols-4 gap-2">
        <Input value={nn} onChange={e=>setNn(e.target.value)} placeholder="Appliance"/>
        <Input type="number" value={nw} onChange={e=>setNw(e.target.value)} placeholder="Watts"/>
        <Input type="number" value={nh} onChange={e=>setNh(e.target.value)} placeholder="Hours/day"/>
        <Button onClick={add}>Add</Button>
      </div>
    </div>
  )
}
