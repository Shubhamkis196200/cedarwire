import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Select, Label, Checkbox } from '../components/FormElements'
const routines:{[k:string]:{step:string;product:string;note:string}[]} = {
  oily:[{step:'Cleanser',product:'Gel or foam cleanser',note:'Removes excess oil'},{step:'Toner',product:'BHA/Salicylic acid toner',note:'Unclogs pores'},{step:'Serum',product:'Niacinamide serum',note:'Controls oil production'},{step:'Moisturizer',product:'Oil-free gel moisturizer',note:'Lightweight hydration'},{step:'Sunscreen',product:'Matte SPF 50',note:'Non-greasy protection'}],
  dry:[{step:'Cleanser',product:'Cream or milk cleanser',note:'Gentle, non-stripping'},{step:'Toner',product:'Hyaluronic acid toner',note:'Adds hydration'},{step:'Serum',product:'Hyaluronic acid serum',note:'Deep moisture boost'},{step:'Moisturizer',product:'Rich cream moisturizer',note:'Locks in moisture'},{step:'Sunscreen',product:'Moisturizing SPF 50',note:'Hydrating protection'}],
  combination:[{step:'Cleanser',product:'Gentle gel cleanser',note:'Balanced cleansing'},{step:'Toner',product:'Balancing toner',note:'Evens skin'},{step:'Serum',product:'Vitamin C serum',note:'Brightening & protection'},{step:'Moisturizer',product:'Lightweight lotion',note:'Balanced hydration'},{step:'Sunscreen',product:'Lightweight SPF 50',note:'Daily protection'}],
  sensitive:[{step:'Cleanser',product:'Micellar water',note:'Ultra gentle'},{step:'Toner',product:'Centella toner',note:'Calming & soothing'},{step:'Serum',product:'Ceramide serum',note:'Barrier repair'},{step:'Moisturizer',product:'Fragrance-free cream',note:'Soothing moisture'},{step:'Sunscreen',product:'Mineral SPF 50',note:'Less irritating'}],
}
export function SkincareRoutineBuilder() {
  const [skin, setSkin] = useState(''); const [concerns, setConcerns] = useState<string[]>([])
  const [result, setResult] = useState<{step:string;product:string;note:string}[]|null>(null)
  const toggleConcern = (c:string) => setConcerns(prev=>prev.includes(c)?prev.filter(x=>x!==c):[...prev,c])
  const build = () => { if(!skin) return; const r = [...(routines[skin]||[])]; if(concerns.includes('acne')) r.splice(2,0,{step:'Treatment',product:'Benzoyl peroxide spot treatment',note:'Apply to breakouts'}); if(concerns.includes('aging')) r.splice(2,0,{step:'Anti-aging',product:'Retinol serum (PM only)',note:'Use 2-3x per week'}); setResult(r) }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Skin Type</Label><Select value={skin} onChange={e=>setSkin(e.target.value)}><option value="">Select...</option><option value="oily">Oily</option><option value="dry">Dry</option><option value="combination">Combination</option><option value="sensitive">Sensitive</option></Select></div>
      <div><Label>Concerns (optional)</Label><div className="flex flex-wrap gap-3">{['acne','aging','dark spots','redness'].map(c=><Checkbox key={c} label={c} checked={concerns.includes(c)} onChange={()=>toggleConcern(c)}/>)}</div></div>
      <Button onClick={build} size="lg" className="w-full">Build My Routine</Button>
      {result && <div className="space-y-3">{result.map((r,i)=>(
        <Card key={i}><div className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">{i+1}</div><div><div className="font-semibold">{r.step}</div><div className="text-sm text-accent">{r.product}</div><div className="text-sm text-muted">{r.note}</div></div></div></Card>
      ))}</div>}
    </div>
  )
}
