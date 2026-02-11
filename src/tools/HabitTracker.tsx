import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input } from '../components/FormElements'
type Habit = {id:number;name:string;days:boolean[]}
export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [name, setName] = useState('')
  const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const add = () => {if(!name) return;setHabits([...habits,{id:Date.now(),name,days:Array(7).fill(false)}]);setName('')}
  const toggle = (id:number,day:number) => setHabits(habits.map(h=>h.id===id?{...h,days:h.days.map((d,i)=>i===day?!d:d)}:h))
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex gap-2"><Input value={name} onChange={e=>setName(e.target.value)} placeholder="New habit (e.g., Meditate)" onKeyDown={e=>e.key==='Enter'&&add()}/><Button onClick={add}>Add</Button></div>
      {habits.length===0&&<p className="text-center text-muted py-8">Add your first habit to start tracking!</p>}
      {habits.map(h=>{
        const streak=h.days.filter(Boolean).length
        return(
          <Card key={h.id}>
            <div className="flex justify-between items-center mb-3"><span className="font-semibold">{h.name}</span><div className="flex items-center gap-2"><span className="text-sm text-muted">{streak}/7 days</span><button onClick={()=>setHabits(habits.filter(x=>x.id!==h.id))} className="text-red-400 text-sm">✕</button></div></div>
            <div className="grid grid-cols-7 gap-2">{dayNames.map((d,i)=>(
              <button key={i} onClick={()=>toggle(h.id,i)} className={`py-2 rounded-lg text-xs font-medium transition ${h.days[i]?'bg-accent text-white':'bg-gray-100 hover:bg-gray-200'}`}>{d}</button>
            ))}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3"><div className="bg-accent h-2 rounded-full transition-all" style={{width:`${streak/7*100}%`}}/></div>
          </Card>
        )
      })}
    </div>
  )
}
