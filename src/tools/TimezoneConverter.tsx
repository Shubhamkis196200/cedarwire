import { useState } from 'react'
import { Card } from '../components/Card'
import { Input, Label, Select } from '../components/FormElements'
const zones = [{name:'UTC',offset:0},{name:'New York (EST)',offset:-5},{name:'Chicago (CST)',offset:-6},{name:'Denver (MST)',offset:-7},{name:'Los Angeles (PST)',offset:-8},{name:'London (GMT)',offset:0},{name:'Paris (CET)',offset:1},{name:'Dubai (GST)',offset:4},{name:'Mumbai (IST)',offset:5.5},{name:'Shanghai (CST)',offset:8},{name:'Tokyo (JST)',offset:9},{name:'Sydney (AEST)',offset:10}]
export function TimezoneConverter() {
  const [time, setTime] = useState('12:00'); const [from, setFrom] = useState('0')
  const convert = (offset:number) => {
    const [h,m] = time.split(':').map(Number)
    const utc = h - parseFloat(from) + offset
    const hr = ((utc % 24) + 24) % 24
    return `${Math.floor(hr).toString().padStart(2,'0')}:${(m||0).toString().padStart(2,'0')}`
  }
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Time</Label><Input type="time" value={time} onChange={e=>setTime(e.target.value)}/></div>
        <div><Label>From Timezone</Label><Select value={from} onChange={e=>setFrom(e.target.value)}>{zones.map(z=><option key={z.name} value={z.offset}>{z.name}</option>)}</Select></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {zones.map(z=>(
          <Card key={z.name} className="text-center"><div className="text-2xl font-bold font-mono">{convert(z.offset)}</div><div className="text-sm text-muted mt-1">{z.name}</div></Card>
        ))}
      </div>
    </div>
  )
}
