import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
export function AgeCalculator() {
  const [dob, setDob] = useState('')
  const [result, setResult] = useState<{years:number;months:number;days:number;totalDays:number;nextBday:number}|null>(null)
  const calc = () => {
    if(!dob) return
    const birth=new Date(dob),now=new Date()
    let years=now.getFullYear()-birth.getFullYear(),months=now.getMonth()-birth.getMonth(),days=now.getDate()-birth.getDate()
    if(days<0){months--;const prev=new Date(now.getFullYear(),now.getMonth(),0);days+=prev.getDate()}
    if(months<0){years--;months+=12}
    const totalDays=Math.floor((now.getTime()-birth.getTime())/(1000*60*60*24))
    const next=new Date(now.getFullYear(),birth.getMonth(),birth.getDate())
    if(next<=now)next.setFullYear(next.getFullYear()+1)
    const nextBday=Math.ceil((next.getTime()-now.getTime())/(1000*60*60*24))
    setResult({years,months,days,totalDays,nextBday})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Date of Birth</Label><Input type="date" value={dob} onChange={e=>setDob(e.target.value)}/></div>
      <Button onClick={calc} size="lg" className="w-full">Calculate Age</Button>
      {result && <div className="space-y-4">
        <Card className="text-center"><div className="text-4xl font-bold">{result.years} <span className="text-xl text-muted">years</span> {result.months} <span className="text-xl text-muted">months</span> {result.days} <span className="text-xl text-muted">days</span></div></Card>
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center"><div className="text-2xl font-bold">{result.totalDays.toLocaleString()}</div><div className="text-sm text-muted">Total Days Lived</div></Card>
          <Card className="text-center"><div className="text-2xl font-bold text-accent">{result.nextBday}</div><div className="text-sm text-muted">Days to Next Birthday 🎂</div></Card>
        </div>
      </div>}
    </div>
  )
}
