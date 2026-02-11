import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input } from '../components/FormElements'
type Item = {id:number;name:string;value:number}
export function NetWorthTracker() {
  const [assets, setAssets] = useState<Item[]>([]); const [liabilities, setLiabilities] = useState<Item[]>([])
  const [an, setAn] = useState(''); const [av, setAv] = useState(''); const [ln, setLn] = useState(''); const [lv, setLv] = useState('')
  const addA = ()=>{if(!an||!av) return;setAssets([...assets,{id:Date.now(),name:an,value:parseFloat(av)}]);setAn('');setAv('')}
  const addL = ()=>{if(!ln||!lv) return;setLiabilities([...liabilities,{id:Date.now(),name:ln,value:parseFloat(lv)}]);setLn('');setLv('')}
  const totalA = assets.reduce((s,a)=>s+a.value,0), totalL = liabilities.reduce((s,l)=>s+l.value,0)
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className={`text-center ${totalA-totalL>=0?'':'border-red-200'}`}><div className="text-sm text-muted">Net Worth</div><div className={`text-4xl font-bold ${totalA-totalL>=0?'text-green-600':'text-red-600'}`}>${(totalA-totalL).toLocaleString()}</div></Card>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-green-600">Assets (${totalA.toLocaleString()})</h3>
          <div className="flex gap-2"><Input value={an} onChange={e=>setAn(e.target.value)} placeholder="Asset name"/><Input type="number" value={av} onChange={e=>setAv(e.target.value)} placeholder="Value" className="w-32"/><Button size="sm" onClick={addA}>+</Button></div>
          {assets.map(a=><div key={a.id} className="flex justify-between items-center p-2 bg-green-50 rounded-lg"><span>{a.name}</span><div className="flex items-center gap-2"><span className="font-semibold">${a.value.toLocaleString()}</span><button onClick={()=>setAssets(assets.filter(x=>x.id!==a.id))} className="text-red-400 text-sm">✕</button></div></div>)}
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-red-600">Liabilities (${totalL.toLocaleString()})</h3>
          <div className="flex gap-2"><Input value={ln} onChange={e=>setLn(e.target.value)} placeholder="Liability name"/><Input type="number" value={lv} onChange={e=>setLv(e.target.value)} placeholder="Value" className="w-32"/><Button size="sm" onClick={addL}>+</Button></div>
          {liabilities.map(l=><div key={l.id} className="flex justify-between items-center p-2 bg-red-50 rounded-lg"><span>{l.name}</span><div className="flex items-center gap-2"><span className="font-semibold">${l.value.toLocaleString()}</span><button onClick={()=>setLiabilities(liabilities.filter(x=>x.id!==l.id))} className="text-red-400 text-sm">✕</button></div></div>)}
        </div>
      </div>
    </div>
  )
}
