import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
type Goal = {id:number;name:string;target:number;current:number;unit:string}
export function FitnessGoalTracker() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [name, setName] = useState(''); const [target, setTarget] = useState(''); const [unit, setUnit] = useState('reps')
  const add = () => {
    if(!name||!target) return
    setGoals([...goals,{id:Date.now(),name,target:parseFloat(target),current:0,unit}])
    setName(''); setTarget('')
  }
  const update = (id:number,val:number) => setGoals(goals.map(g=>g.id===id?{...g,current:Math.min(val,g.target)}:g))
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div><Label>Goal Name</Label><Input value={name} onChange={e=>setName(e.target.value)} placeholder="Push-ups"/></div>
        <div><Label>Target</Label><Input type="number" value={target} onChange={e=>setTarget(e.target.value)} placeholder="100"/></div>
        <div><Label>Unit</Label><Select value={unit} onChange={e=>setUnit(e.target.value)}><option>reps</option><option>km</option><option>min</option><option>kg</option><option>days</option></Select></div>
      </div>
      <Button onClick={add} className="w-full">Add Goal</Button>
      {goals.length === 0 && <p className="text-center text-muted">Add your first fitness goal above</p>}
      {goals.map(g => {
        const pct = Math.round((g.current/g.target)*100)
        return (
          <Card key={g.id}>
            <div className="flex justify-between items-center mb-2"><span className="font-semibold">{g.name}</span><span className="text-sm text-muted">{g.current}/{g.target} {g.unit}</span></div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3"><div className="bg-accent h-3 rounded-full transition-all" style={{width:`${pct}%`}}/></div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={()=>update(g.id,g.current+1)}>+1</Button>
              <Button size="sm" variant="outline" onClick={()=>update(g.id,g.current+5)}>+5</Button>
              <Button size="sm" variant="outline" onClick={()=>update(g.id,g.current+10)}>+10</Button>
              <Button size="sm" variant="secondary" onClick={()=>setGoals(goals.filter(x=>x.id!==g.id))}>Remove</Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
