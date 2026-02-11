import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const qs = [
  {q:'At a party, you prefer to:',a:'Talk to many people, including strangers',b:'Talk deeply with a few people you know'},
  {q:'You tend to focus on:',a:'The big picture and possibilities',b:'Facts and concrete details'},
  {q:'When making decisions, you rely more on:',a:'Logic and objective analysis',b:'Personal values and how others feel'},
  {q:'You prefer your life to be:',a:'Planned and organized',b:'Flexible and spontaneous'},
  {q:'You recharge by:',a:'Being around other people',b:'Having alone time'},
  {q:'You are more interested in:',a:'What could be (future possibilities)',b:'What is (present reality)'},
  {q:'In disagreements, you value:',a:'Being fair and truthful',b:'Being tactful and kind'},
  {q:'You work best when:',a:'Following a clear schedule',b:'Going with the flow'},
]
const types:{[k:string]:{name:string;desc:string;strengths:string[]}} = {
  ENTJ:{name:'The Commander',desc:'Bold, strategic leaders who love a challenge.',strengths:['Strategic vision','Natural leadership','Decisive','Efficient']},
  ENTP:{name:'The Debater',desc:'Smart, curious thinkers who enjoy intellectual challenges.',strengths:['Innovative','Quick-witted','Charismatic','Resourceful']},
  ENFJ:{name:'The Protagonist',desc:'Inspiring leaders who captivate and mesmerize their listeners.',strengths:['Charismatic','Empathetic','Organized','Altruistic']},
  ENFP:{name:'The Campaigner',desc:'Enthusiastic, creative free spirits who always find a reason to smile.',strengths:['Creative','Sociable','Optimistic','Energetic']},
  INTJ:{name:'The Architect',desc:'Imaginative and strategic thinkers with a plan for everything.',strengths:['Strategic','Independent','Determined','Insightful']},
  INTP:{name:'The Logician',desc:'Innovative inventors with an unquenchable thirst for knowledge.',strengths:['Analytical','Objective','Original','Open-minded']},
  INFJ:{name:'The Advocate',desc:'Quiet, mystical idealists who are deeply principled.',strengths:['Insightful','Principled','Compassionate','Creative']},
  INFP:{name:'The Mediator',desc:'Poetic, kind altruistic people always eager to help a cause.',strengths:['Idealistic','Empathetic','Open-minded','Creative']},
  ESTJ:{name:'The Executive',desc:'Excellent administrators, unsurpassed at managing things or people.',strengths:['Organized','Loyal','Dedicated','Honest']},
  ESTP:{name:'The Entrepreneur',desc:'Smart, energetic, and very perceptive people who truly enjoy living on the edge.',strengths:['Bold','Practical','Direct','Sociable']},
  ESFJ:{name:'The Consul',desc:'Extraordinarily caring, social people who are always eager to help.',strengths:['Loyal','Warm','Practical','Supportive']},
  ESFP:{name:'The Entertainer',desc:'Spontaneous, energetic people who enjoy life and everything it has to offer.',strengths:['Bold','Practical','Observant','Social']},
  ISTJ:{name:'The Logistician',desc:'Practical and fact-minded individuals whose reliability cannot be doubted.',strengths:['Responsible','Thorough','Dependable','Patient']},
  ISTP:{name:'The Virtuoso',desc:'Bold, practical experimenters and masters of all kinds of tools.',strengths:['Optimistic','Practical','Creative','Spontaneous']},
  ISFJ:{name:'The Defender',desc:'Very dedicated and warm protectors, always ready to defend their loved ones.',strengths:['Supportive','Reliable','Patient','Observant']},
  ISFP:{name:'The Adventurer',desc:'Flexible, charming artists who are always ready to explore and experience something new.',strengths:['Charming','Sensitive','Imaginative','Passionate']},
}
export function PersonalityTypeQuiz() {
  const [current, setCurrent] = useState(0); const [scores, setScores] = useState({E:0,I:0,N:0,S:0,T:0,F:0,J:0,P:0})
  const [result, setResult] = useState<{type:string;data:typeof types.ENTJ}|null>(null)
  const dims = [['E','I'],['N','S'],['T','F'],['J','P']]
  const answer = (choice:'a'|'b') => {
    const dim = dims[Math.floor(current/2)]
    const s={...scores};if(choice==='a')s[dim[0] as keyof typeof s]++;else s[dim[1] as keyof typeof s]++
    if(current<qs.length-1){setScores(s);setCurrent(current+1)}
    else{setScores(s);const type=dims.map(([a,b])=>s[a as keyof typeof s]>=s[b as keyof typeof s]?a:b).join('');setResult({type,data:types[type]||types.INTJ})}
  }
  if(result) return(
    <div className="max-w-lg mx-auto space-y-6">
      <Card className="text-center"><div className="text-4xl font-bold text-accent">{result.type}</div><div className="text-xl mt-1">{result.data.name}</div><p className="text-muted mt-2">{result.data.desc}</p></Card>
      <Card><div className="font-semibold mb-3">Key Strengths</div>{result.data.strengths.map((s,i)=><div key={i} className="flex items-center gap-2 py-1"><span className="text-accent">★</span>{s}</div>)}</Card>
      <Button variant="outline" className="w-full" onClick={()=>{setCurrent(0);setScores({E:0,I:0,N:0,S:0,T:0,F:0,J:0,P:0});setResult(null)}}>Retake Quiz</Button>
    </div>
  )
  return(
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-sm text-muted">Question {current+1} of {qs.length}</div>
      <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-accent h-2 rounded-full transition-all" style={{width:`${(current/qs.length)*100}%`}}/></div>
      <h3 className="text-xl font-semibold">{qs[current].q}</h3>
      <div className="space-y-3"><Button variant="outline" className="w-full text-left" onClick={()=>answer('a')}>{qs[current].a}</Button><Button variant="outline" className="w-full text-left" onClick={()=>answer('b')}>{qs[current].b}</Button></div>
    </div>
  )
}
