import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
const meanings:{[k:number]:{title:string;desc:string}} = {
  1:{title:'The Leader',desc:'Independent, pioneering, and ambitious. You are a natural leader with strong willpower and determination.'},
  2:{title:'The Diplomat',desc:'Cooperative, sensitive, and balanced. You excel at bringing harmony and understanding to relationships.'},
  3:{title:'The Communicator',desc:'Creative, expressive, and joyful. You have a natural gift for inspiring others through art and words.'},
  4:{title:'The Builder',desc:'Practical, disciplined, and hardworking. You create solid foundations and value stability.'},
  5:{title:'The Adventurer',desc:'Freedom-loving, adaptable, and curious. You thrive on variety, travel, and new experiences.'},
  6:{title:'The Nurturer',desc:'Responsible, loving, and protective. You are drawn to caring for others and creating beautiful spaces.'},
  7:{title:'The Seeker',desc:'Analytical, introspective, and spiritual. You seek deeper truths and understanding of the world.'},
  8:{title:'The Achiever',desc:'Ambitious, authoritative, and success-oriented. You have strong business sense and executive ability.'},
  9:{title:'The Humanitarian',desc:'Compassionate, generous, and wise. You are drawn to making the world a better place for all.'},
}
export function NumerologyCalculator() {
  const [dob, setDob] = useState('')
  const [result, setResult] = useState<{number:number;data:typeof meanings[1]}|null>(null)
  const calc = () => {
    if(!dob) return
    let sum = dob.replace(/-/g,'').split('').reduce((s,d)=>s+parseInt(d),0)
    while(sum>9&&sum!==11&&sum!==22)sum=sum.toString().split('').reduce((s,d)=>s+parseInt(d),0)
    const num = sum>9?sum%9||9:sum
    setResult({number:num,data:meanings[num]||meanings[1]})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Date of Birth</Label><Input type="date" value={dob} onChange={e=>setDob(e.target.value)}/></div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Life Path Number</Button>
      {result && <Card className="text-center">
        <div className="text-6xl font-bold text-accent">{result.number}</div>
        <div className="text-xl font-semibold mt-2">{result.data.title}</div>
        <p className="text-muted mt-3">{result.data.desc}</p>
      </Card>}
    </div>
  )
}
