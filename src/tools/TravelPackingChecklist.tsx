import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Label, Input } from '../components/FormElements'
const lists:{[k:string]:string[]} = {
  essentials:['Passport/ID','Phone charger','Medications','Wallet','Travel insurance docs','Copies of reservations'],
  clothing:['Underwear','Socks','T-shirts','Pants/shorts','Sleepwear','Comfortable shoes'],
  toiletries:['Toothbrush & toothpaste','Deodorant','Shampoo & conditioner','Sunscreen','Face wash','Razor'],
  beach:['Swimsuit','Sunglasses','Beach towel','Flip flops','Aloe vera','Waterproof phone pouch'],
  winter:['Heavy coat','Gloves','Scarf','Thermal underwear','Warm boots','Hand warmers'],
  business:['Laptop & charger','Business cards','Dress shoes','Suit/blazer','Notebook','Presentation materials'],
  tech:['Laptop','Universal adapter','Portable charger','Headphones','Camera','Memory cards'],
}
export function TravelPackingChecklist() {
  const [days, setDays] = useState('5'); const [types, setTypes] = useState<string[]>(['essentials','clothing','toiletries','tech'])
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const toggle = (item:string) => {const s=new Set(checked);s.has(item)?s.delete(item):s.add(item);setChecked(s)}
  const toggleType = (t:string) => setTypes(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])
  const allItems = types.flatMap(t=>lists[t]||[])
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Trip Duration (days)</Label><Input type="number" value={days} onChange={e=>setDays(e.target.value)}/></div>
        <div><Label>Trip Type</Label><div className="flex flex-wrap gap-2 mt-1">{Object.keys(lists).map(t=><Button key={t} size="sm" variant={types.includes(t)?'primary':'outline'} onClick={()=>toggleType(t)} className="capitalize">{t}</Button>)}</div></div>
      </div>
      <Card><div className="flex justify-between items-center mb-4"><span className="font-semibold">{checked.size}/{allItems.length} packed</span><div className="w-48 bg-gray-200 rounded-full h-2"><div className="bg-accent h-2 rounded-full transition-all" style={{width:`${allItems.length?checked.size/allItems.length*100:0}%`}}/></div></div></Card>
      <div className="grid md:grid-cols-2 gap-4">
        {types.map(t=>(
          <Card key={t}><div className="font-semibold capitalize mb-3">{t}</div>
            {(lists[t]||[]).map((item,i)=>(
              <label key={i} className="flex items-center gap-2 py-1 cursor-pointer text-sm">
                <input type="checkbox" checked={checked.has(item)} onChange={()=>toggle(item)} className="accent-accent"/>
                <span className={checked.has(item)?'line-through text-muted':''}>{item}</span>
              </label>
            ))}
          </Card>
        ))}
      </div>
    </div>
  )
}
