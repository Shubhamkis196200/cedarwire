import { useState } from 'react'
import { Card } from '../components/Card'
const timeline:{phase:string;weeks:string;tasks:string[]}[] = [
  {phase:'8 Weeks Before',weeks:'8',tasks:['Research moving companies','Create a moving budget','Start decluttering room by room','Begin collecting packing supplies','Notify your landlord if renting']},
  {phase:'6 Weeks Before',weeks:'6',tasks:['Book moving company','Start packing rarely used items','Transfer medical records','Update address with post office','Research new area services']},
  {phase:'4 Weeks Before',weeks:'4',tasks:['Notify utilities of move date','Pack non-essential rooms','Arrange school transfers','Update subscriptions and deliveries','Sell or donate unwanted items']},
  {phase:'2 Weeks Before',weeks:'2',tasks:['Confirm moving company details','Pack most rooms','Prepare essentials box','Clean current home','Back up digital files']},
  {phase:'Moving Week',weeks:'1',tasks:['Final packing','Defrost freezer','Pack suitcases for first few days','Do final walkthrough','Hand over keys']},
  {phase:'After Moving',weeks:'0',tasks:['Unpack essentials first','Set up utilities','Update drivers license','Register to vote at new address','Meet your neighbors']},
]
export function MovingChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const toggle = (t:string) => {const s=new Set(checked);s.has(t)?s.delete(t):s.add(t);setChecked(s)}
  const total = timeline.flatMap(p=>p.tasks).length
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="text-center"><div className="text-3xl font-bold text-accent">{checked.size}/{total}</div><div className="text-sm text-muted mt-1">tasks completed</div><div className="w-full bg-gray-200 rounded-full h-3 mt-3"><div className="bg-accent h-3 rounded-full transition-all" style={{width:`${checked.size/total*100}%`}}/></div></Card>
      {timeline.map(phase=>(
        <Card key={phase.phase}><div className="font-semibold text-accent mb-3">{phase.phase}</div>
          {phase.tasks.map(t=>(
            <label key={t} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm"><input type="checkbox" checked={checked.has(t)} onChange={()=>toggle(t)} className="accent-accent"/><span className={checked.has(t)?'line-through text-muted':''}>{t}</span></label>
          ))}
        </Card>
      ))}
    </div>
  )
}
