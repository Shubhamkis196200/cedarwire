import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const qs = [
  {q:'Which means more to you?',a:{text:'Receiving a thoughtful compliment',lang:'words'}, b:{text:'A warm, long hug',lang:'touch'}},
  {q:'Which feels more meaningful?',a:{text:'Someone helping with your chores',lang:'service'}, b:{text:'Receiving a surprise gift',lang:'gifts'}},
  {q:'What would you prefer?',a:{text:'Undivided attention and quality conversation',lang:'time'}, b:{text:'Hearing "I love you" or "I appreciate you"',lang:'words'}},
  {q:'Which feels more special?',a:{text:'A back massage after a long day',lang:'touch'}, b:{text:'A full day spent together doing activities',lang:'time'}},
  {q:'Which gesture touches you more?',a:{text:'Someone runs an errand for you',lang:'service'}, b:{text:'Receiving a meaningful, personal gift',lang:'gifts'}},
  {q:'What makes you feel most loved?',a:{text:'Physical closeness and affection',lang:'touch'}, b:{text:'Words of encouragement and appreciation',lang:'words'}},
  {q:'Which would brighten your day?',a:{text:'Your partner cooks you dinner',lang:'service'}, b:{text:'An unplanned date together',lang:'time'}},
  {q:'Which would you rather receive?',a:{text:'A handwritten love letter',lang:'words'}, b:{text:'A gift that shows they know you well',lang:'gifts'}},
  {q:'What feels more intimate?',a:{text:'Holding hands while walking',lang:'touch'}, b:{text:'Your partner takes care of something stressful for you',lang:'service'}},
  {q:'Which means more?',a:{text:'A weekend getaway together',lang:'time'}, b:{text:'A thoughtful "just because" present',lang:'gifts'}},
]
const langInfo:{[k:string]:{name:string;desc:string;tips:string[]}} = {
  words:{name:'Words of Affirmation',desc:'You feel most loved through verbal compliments, encouragement, and expressions of appreciation.',tips:['Leave love notes','Give specific compliments','Send encouraging texts','Express gratitude verbally']},
  touch:{name:'Physical Touch',desc:'Physical affection, closeness, and touch make you feel most connected and loved.',tips:['Hold hands regularly','Give long hugs','Physical presence during tough times','Gentle touches in passing']},
  time:{name:'Quality Time',desc:'Undivided attention and shared experiences are how you feel most valued.',tips:['Schedule regular date nights','Put phones away together','Share hobbies and activities','Have deep conversations']},
  service:{name:'Acts of Service',desc:'Actions speak louder than words for you. Helpful deeds show love best.',tips:['Help without being asked','Take on a stressful task','Cook a meal','Handle errands proactively']},
  gifts:{name:'Receiving Gifts',desc:'Thoughtful, meaningful gifts (not necessarily expensive) make you feel cherished.',tips:['Give meaningful small gifts','Remember special dates','Bring back souvenirs','Create personalized presents']},
}
export function LoveLanguageQuiz() {
  const [current, setCurrent] = useState(0); const [scores, setScores] = useState<{[k:string]:number}>({words:0,touch:0,time:0,service:0,gifts:0})
  const [result, setResult] = useState<{primary:string;data:typeof langInfo.words;scores:{[k:string]:number}}|null>(null)
  const answer = (lang:string) => {
    const s={...scores};s[lang]++
    if(current<qs.length-1){setScores(s);setCurrent(current+1)}
    else{const primary=Object.entries(s).sort((a,b)=>b[1]-a[1])[0][0];setResult({primary,data:langInfo[primary],scores:s})}
  }
  if(result) return(
    <div className="max-w-lg mx-auto space-y-6">
      <Card className="text-center"><div className="text-3xl font-bold text-accent">{result.data.name}</div><p className="text-muted mt-2">{result.data.desc}</p></Card>
      <Card><div className="font-semibold mb-3">All Languages</div>{Object.entries(result.scores).sort((a,b)=>b[1]-a[1]).map(([k,v])=>(
        <div key={k} className="mb-2"><div className="flex justify-between text-sm mb-1"><span>{langInfo[k].name}</span><span>{v}/{qs.length}</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-accent h-2 rounded-full" style={{width:`${v/qs.length*100}%`}}/></div></div>
      ))}</Card>
      <Card><div className="font-semibold mb-3">How to Show Love</div>{result.data.tips.map((t,i)=><div key={i} className="flex items-start gap-2 py-1"><span>💝</span><span className="text-sm">{t}</span></div>)}</Card>
      <Button variant="outline" className="w-full" onClick={()=>{setCurrent(0);setScores({words:0,touch:0,time:0,service:0,gifts:0});setResult(null)}}>Retake Quiz</Button>
    </div>
  )
  return(
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-sm text-muted">Question {current+1} of {qs.length}</div>
      <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-accent h-2 rounded-full transition-all" style={{width:`${(current/qs.length)*100}%`}}/></div>
      <h3 className="text-xl font-semibold">{qs[current].q}</h3>
      <div className="space-y-3"><Button variant="outline" className="w-full text-left" onClick={()=>answer(qs[current].a.lang)}>{qs[current].a.text}</Button><Button variant="outline" className="w-full text-left" onClick={()=>answer(qs[current].b.lang)}>{qs[current].b.text}</Button></div>
    </div>
  )
}
