import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Select, Label } from '../components/FormElements'

export function SleepQualityScorer() {
  const [hours, setHours] = useState('7'); const [wakeups, setWakeups] = useState('1')
  const [latency, setLatency] = useState('15'); const [consistency, setConsistency] = useState('yes')
  const [result, setResult] = useState<{score:number;grade:string;tips:string[]}|null>(null)
  const calculate = () => {
    let score = 100
    const h = parseFloat(hours)
    if (h < 6) score -= 30; else if (h < 7) score -= 15; else if (h > 9) score -= 10
    score -= parseInt(wakeups) * 10
    const lat = parseInt(latency)
    if (lat > 30) score -= 20; else if (lat > 15) score -= 10
    if (consistency === 'no') score -= 15
    score = Math.max(0, Math.min(100, score))
    const grade = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Poor'
    const tips: string[] = []
    if (h < 7) tips.push('Aim for 7-9 hours of sleep')
    if (parseInt(wakeups) > 1) tips.push('Reduce disruptions — keep room dark and quiet')
    if (lat > 15) tips.push('Try a relaxation routine before bed')
    if (consistency === 'no') tips.push('Go to bed and wake up at the same time daily')
    if (tips.length === 0) tips.push('Great sleep hygiene! Keep it up!')
    setResult({ score, grade, tips })
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Hours of Sleep</Label><Select value={hours} onChange={e=>setHours(e.target.value)}>{[4,5,6,7,8,9,10].map(h=><option key={h} value={h}>{h}</option>)}</Select></div>
        <div><Label>Night Wakeups</Label><Select value={wakeups} onChange={e=>setWakeups(e.target.value)}>{[0,1,2,3,4,5].map(w=><option key={w} value={w}>{w}</option>)}</Select></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Time to Fall Asleep (min)</Label><Select value={latency} onChange={e=>setLatency(e.target.value)}><option value="5">Under 5</option><option value="15">5-15</option><option value="30">15-30</option><option value="60">Over 30</option></Select></div>
        <div><Label>Consistent Schedule?</Label><Select value={consistency} onChange={e=>setConsistency(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></Select></div>
      </div>
      <Button onClick={calculate} size="lg" className="w-full">Score My Sleep</Button>
      {result && (
        <Card>
          <div className="text-center mb-4">
            <div className="text-5xl font-bold">{result.score}</div>
            <div className={`text-xl font-semibold mt-1 ${result.score >= 80 ? 'text-green-500' : result.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>{result.grade}</div>
          </div>
          <div className="space-y-2">{result.tips.map((t,i) => <div key={i} className="flex items-start gap-2 text-sm"><span>💡</span><span>{t}</span></div>)}</div>
        </Card>
      )}
    </div>
  )
}
