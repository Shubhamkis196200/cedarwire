import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const questions = [
  {q:'What colors appeal to you most?',opts:[{text:'Whites, creams, soft grays',style:'minimalist'},{text:'Rich jewel tones',style:'maximalist'},{text:'Earth tones and naturals',style:'bohemian'},{text:'Navy, hunter green, brass',style:'traditional'}]},
  {q:'Ideal weekend activity?',opts:[{text:'Organizing and decluttering',style:'minimalist'},{text:'Visiting art galleries',style:'maximalist'},{text:'Outdoor farmers market',style:'bohemian'},{text:'Antique shopping',style:'traditional'}]},
  {q:'Preferred material?',opts:[{text:'Clean glass and steel',style:'minimalist'},{text:'Velvet and marble',style:'maximalist'},{text:'Rattan and wood',style:'bohemian'},{text:'Leather and dark wood',style:'traditional'}]},
  {q:'How do you feel about patterns?',opts:[{text:'Less is more',style:'minimalist'},{text:'Bold and dramatic',style:'maximalist'},{text:'Eclectic mix',style:'bohemian'},{text:'Classic stripes and plaids',style:'traditional'}]},
  {q:'Your dream room feature?',opts:[{text:'Floor-to-ceiling windows',style:'minimalist'},{text:'Statement chandelier',style:'maximalist'},{text:'Indoor plant wall',style:'bohemian'},{text:'Built-in bookshelves',style:'traditional'}]},
]
const results:{[k:string]:{name:string;desc:string;tips:string[]}} = {
  minimalist:{name:'Minimalist Modern',desc:'Clean lines, open space, and intentional simplicity define your style.',tips:['Stick to a neutral palette','Choose quality over quantity','Embrace negative space','Use hidden storage solutions']},
  maximalist:{name:'Maximalist Glam',desc:'Bold, layered, and luxurious — you love making a statement.',tips:['Layer textures generously','Mix patterns confidently','Add metallic accents','Gallery walls are your friend']},
  bohemian:{name:'Bohemian Natural',desc:'Earthy, eclectic, and connected to nature — free-spirited living.',tips:['Mix vintage and new pieces','Add plenty of plants','Use natural materials','Layer rugs and textiles']},
  traditional:{name:'Classic Traditional',desc:'Timeless elegance with rich materials and refined details.',tips:['Invest in quality furniture','Use symmetrical arrangements','Add crown molding','Choose classic patterns']},
}
export function HomeDecorStyleQuiz() {
  const [current, setCurrent] = useState(0); const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<typeof results.minimalist|null>(null)
  const answer = (style:string) => {
    const newA=[...answers,style]
    if(current<questions.length-1){setAnswers(newA);setCurrent(current+1)}
    else{const counts:{[k:string]:number}={};newA.forEach(s=>counts[s]=(counts[s]||0)+1);const top=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0];setResult(results[top])}
  }
  const reset = () => {setCurrent(0);setAnswers([]);setResult(null)}
  if(result) return (
    <div className="max-w-lg mx-auto space-y-6">
      <Card className="text-center"><div className="text-3xl font-bold text-accent">{result.name}</div><p className="text-muted mt-2">{result.desc}</p></Card>
      <Card><div className="font-semibold mb-3">Design Tips</div>{result.tips.map((t,i)=><div key={i} className="flex items-start gap-2 py-1"><span>✨</span><span className="text-sm">{t}</span></div>)}</Card>
      <Button onClick={reset} variant="outline" className="w-full">Retake Quiz</Button>
    </div>
  )
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-sm text-muted">Question {current+1} of {questions.length}</div>
      <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-accent h-2 rounded-full transition-all" style={{width:`${(current/questions.length)*100}%`}}/></div>
      <h3 className="text-xl font-semibold">{questions[current].q}</h3>
      <div className="space-y-3">{questions[current].opts.map((o,i)=><Button key={i} variant="outline" className="w-full justify-start" onClick={()=>answer(o.style)}>{o.text}</Button>)}</div>
    </div>
  )
}
