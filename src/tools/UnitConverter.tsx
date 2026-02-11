import { useState } from 'react'
import { Card } from '../components/Card'
import { Input, Label, Select } from '../components/FormElements'
const categories:{[k:string]:{units:{name:string;toBase:number}[]}} = {
  Length:{units:[{name:'mm',toBase:0.001},{name:'cm',toBase:0.01},{name:'m',toBase:1},{name:'km',toBase:1000},{name:'inch',toBase:0.0254},{name:'foot',toBase:0.3048},{name:'yard',toBase:0.9144},{name:'mile',toBase:1609.34}]},
  Weight:{units:[{name:'mg',toBase:0.001},{name:'g',toBase:1},{name:'kg',toBase:1000},{name:'oz',toBase:28.3495},{name:'lb',toBase:453.592},{name:'ton',toBase:907185}]},
  Temperature:{units:[{name:'°C',toBase:1},{name:'°F',toBase:1},{name:'K',toBase:1}]},
  Volume:{units:[{name:'ml',toBase:0.001},{name:'L',toBase:1},{name:'gal (US)',toBase:3.78541},{name:'qt',toBase:0.946353},{name:'cup',toBase:0.236588},{name:'fl oz',toBase:0.0295735}]},
}
export function UnitConverter() {
  const [cat, setCat] = useState('Length'); const [from, setFrom] = useState('m'); const [to, setTo] = useState('foot'); const [val, setVal] = useState('1')
  const convert = () => {
    const v = parseFloat(val)||0
    if(cat==='Temperature'){
      if(from==='°C'&&to==='°F') return v*9/5+32
      if(from==='°F'&&to==='°C') return (v-32)*5/9
      if(from==='°C'&&to==='K') return v+273.15
      if(from==='K'&&to==='°C') return v-273.15
      if(from==='°F'&&to==='K') return (v-32)*5/9+273.15
      if(from==='K'&&to==='°F') return (v-273.15)*9/5+32
      return v
    }
    const units = categories[cat].units
    const f=units.find(u=>u.name===from), t=units.find(u=>u.name===to)
    if(!f||!t) return 0
    return v*f.toBase/t.toBase
  }
  const r = Math.round(convert()*1000000)/1000000
  const units = categories[cat].units
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Category</Label><Select value={cat} onChange={e=>{setCat(e.target.value);const u=categories[e.target.value].units;setFrom(u[0].name);setTo(u[1]?.name||u[0].name)}}>{Object.keys(categories).map(c=><option key={c}>{c}</option>)}</Select></div>
      <div className="grid grid-cols-3 gap-4">
        <div><Label>Value</Label><Input type="number" value={val} onChange={e=>setVal(e.target.value)}/></div>
        <div><Label>From</Label><Select value={from} onChange={e=>setFrom(e.target.value)}>{units.map(u=><option key={u.name}>{u.name}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={e=>setTo(e.target.value)}>{units.map(u=><option key={u.name}>{u.name}</option>)}</Select></div>
      </div>
      <Card className="text-center"><div className="text-lg text-muted">{val} {from} =</div><div className="text-4xl font-bold text-accent">{r} {to}</div></Card>
    </div>
  )
}
