import { useState, useEffect, useRef } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
export function PomodoroTimer() {
  const [mode, setMode] = useState<'work'|'break'|'longbreak'>('work')
  const [time, setTime] = useState(25*60); const [running, setRunning] = useState(false); const [sessions, setSessions] = useState(0)
  const intervalRef = useRef<any>(null)
  const durations = {work:25*60,break:5*60,longbreak:15*60}
  useEffect(()=>{
    if(running){intervalRef.current=setInterval(()=>setTime(t=>{if(t<=1){setRunning(false);if(mode==='work'){const s=sessions+1;setSessions(s);if(s%4===0){setMode('longbreak');return durations.longbreak}else{setMode('break');return durations.break}}else{setMode('work');return durations.work}}return t-1}),1000)}
    else if(intervalRef.current)clearInterval(intervalRef.current)
    return()=>{if(intervalRef.current)clearInterval(intervalRef.current)}
  },[running])
  const reset = (m:'work'|'break'|'longbreak') => {setRunning(false);setMode(m);setTime(durations[m])}
  const mins=Math.floor(time/60),secs=time%60
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex gap-2 justify-center">{(['work','break','longbreak'] as const).map(m=><Button key={m} variant={mode===m?'primary':'outline'} size="sm" onClick={()=>reset(m)} className="capitalize">{m==='longbreak'?'Long Break':m}</Button>)}</div>
      <Card className="text-center py-12"><div className="text-7xl font-bold font-mono">{mins.toString().padStart(2,'0')}:{secs.toString().padStart(2,'0')}</div><div className={`text-lg font-semibold mt-2 capitalize ${mode==='work'?'text-accent':'text-green-500'}`}>{mode==='longbreak'?'Long Break':mode}</div></Card>
      <div className="flex gap-3 justify-center">
        <Button size="lg" onClick={()=>setRunning(!running)}>{running?'Pause':'Start'}</Button>
        <Button size="lg" variant="outline" onClick={()=>reset(mode)}>Reset</Button>
      </div>
      <Card className="text-center"><div className="text-2xl font-bold">{sessions}</div><div className="text-sm text-muted">Completed Sessions</div></Card>
    </div>
  )
}
