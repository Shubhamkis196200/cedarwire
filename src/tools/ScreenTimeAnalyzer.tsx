import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Label, Slider } from '../components/FormElements'
export function ScreenTimeAnalyzer() {
  const [social, setSocial] = useState(2); const [work, setWork] = useState(6); const [entertainment, setEntertainment] = useState(2); const [news, setNews] = useState(1)
  const [result, setResult] = useState<{total:number;yearly:number;score:string;tips:string[]}|null>(null)
  const analyze = () => {
    const total=social+work+entertainment+news
    const yearly=Math.round(total*365)
    const nonWork=total-work
    let score='',tips:string[]=[]
    if(nonWork<=3){score='Healthy';tips=['Great balance! Keep maintaining boundaries']}
    else if(nonWork<=5){score='Moderate';tips=['Consider reducing social media by 30min','Try a digital sunset — no screens 1hr before bed','Replace 30min of scrolling with reading']}
    else{score='High';tips=['Set app timers on your phone','Designate screen-free zones at home','Try a weekend digital detox','Use grayscale mode to reduce appeal','Find offline hobbies to replace screen time']}
    setResult({total,yearly,score,tips})
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Social Media: {social}h/day</Label><Slider value={social} min={0} max={12} onChange={setSocial}/></div>
      <div><Label>Work/Productivity: {work}h/day</Label><Slider value={work} min={0} max={16} onChange={setWork}/></div>
      <div><Label>Entertainment: {entertainment}h/day</Label><Slider value={entertainment} min={0} max={12} onChange={setEntertainment}/></div>
      <div><Label>News/Browsing: {news}h/day</Label><Slider value={news} min={0} max={8} onChange={setNews}/></div>
      <Button onClick={analyze} size="lg" className="w-full">Analyze Screen Time</Button>
      {result && <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center"><div className="text-3xl font-bold">{result.total}h</div><div className="text-sm text-muted">Daily Total</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-accent">{Math.round(result.total*365/24)} days</div><div className="text-sm text-muted">Per Year</div></Card>
          <Card className="text-center"><div className={`text-xl font-bold ${result.score==='Healthy'?'text-green-500':result.score==='Moderate'?'text-yellow-500':'text-red-500'}`}>{result.score}</div><div className="text-sm text-muted">Rating</div></Card>
        </div>
        <Card>{result.tips.map((t,i)=><div key={i} className="flex items-start gap-2 py-1"><span>💡</span><span className="text-sm">{t}</span></div>)}</Card>
      </div>}
    </div>
  )
}
