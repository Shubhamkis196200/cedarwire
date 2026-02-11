import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const questions = [
  'I feel overwhelmed by my responsibilities',
  'I have trouble sleeping due to worry',
  'I feel irritable or short-tempered',
  'I experience physical tension (headaches, tight muscles)',
  'I struggle to concentrate or make decisions',
  'I feel tired even after sleeping',
  'I have less interest in things I usually enjoy',
  'I eat more or less than usual due to stress',
  'I feel anxious about the future',
  'I find it hard to relax even when I have free time',
]
export function StressLevelTest() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [result, setResult] = useState<{score:number;level:string;color:string;tips:string[]}|null>(null)
  const setA = (i:number,v:number) => {const a=[...answers];a[i]=v;setAnswers(a)}
  const calc = () => {
    if(answers.some(a=>a===-1)) return
    const score=answers.reduce((s,a)=>s+a,0)
    const max=questions.length*4
    const pct=Math.round(score/max*100)
    let level,color,tips:string[]
    if(pct<=25){level='Low';color='text-green-500';tips=['Your stress levels are healthy','Keep up your current coping strategies']}
    else if(pct<=50){level='Moderate';color='text-yellow-500';tips=['Consider daily meditation or deep breathing','Prioritize tasks to avoid overwhelm','Schedule regular breaks during work','Try journaling to process thoughts']}
    else if(pct<=75){level='High';color='text-orange-500';tips=['Seek support from friends or family','Consider professional counseling','Establish firm work-life boundaries','Practice progressive muscle relaxation','Limit caffeine and screen time before bed']}
    else{level='Very High';color='text-red-500';tips=['Strongly consider speaking with a professional','Identify and eliminate unnecessary stressors','Practice self-compassion','Focus on basics: sleep, nutrition, movement','Reach out to a trusted person today']}
    setResult({score:pct,level,color,tips})
  }
  if(result) return(
    <div className="max-w-lg mx-auto space-y-6">
      <Card className="text-center"><div className="text-5xl font-bold">{result.score}%</div><div className={`text-2xl font-semibold mt-2 ${result.color}`}>{result.level} Stress</div></Card>
      <Card><div className="font-semibold mb-3">Recommendations</div>{result.tips.map((t,i)=><div key={i} className="flex items-start gap-2 py-1"><span>🌿</span><span className="text-sm">{t}</span></div>)}</Card>
      <Button variant="outline" className="w-full" onClick={()=>{setResult(null);setAnswers(Array(questions.length).fill(-1))}}>Retake Test</Button>
    </div>
  )
  const opts = ['Never','Rarely','Sometimes','Often','Always']
  return(
    <div className="max-w-lg mx-auto space-y-6">
      <p className="text-muted">Rate how often you've experienced each statement in the past month:</p>
      {questions.map((q,i)=>(
        <Card key={i}><div className="text-sm font-medium mb-3">{i+1}. {q}</div>
          <div className="flex gap-2 flex-wrap">{opts.map((o,v)=><Button key={v} size="sm" variant={answers[i]===v?'primary':'outline'} onClick={()=>setA(i,v)}>{o}</Button>)}</div>
        </Card>
      ))}
      <Button size="lg" className="w-full" onClick={calc}>Get Results</Button>
    </div>
  )
}
