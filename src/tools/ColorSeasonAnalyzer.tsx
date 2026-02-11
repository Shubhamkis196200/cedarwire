import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Select, Label } from '../components/FormElements'
const seasons:{[k:string]:{name:string;desc:string;colors:string[];avoid:string[]}} = {
  'warm-light':{name:'Spring',desc:'Warm and light coloring. You look best in warm, bright, clear colors.',colors:['#FF6B35','#FFA07A','#98FB98','#87CEEB','#FFD700','#FF69B4'],avoid:['Black','Dark navy','Burgundy']},
  'warm-dark':{name:'Autumn',desc:'Warm and deep coloring. Rich, earthy tones complement you beautifully.',colors:['#8B4513','#CC5500','#556B2F','#DAA520','#CD853F','#800020'],avoid:['Neon colors','Icy pastels','Pure white']},
  'cool-light':{name:'Summer',desc:'Cool and muted coloring. Soft, dusty, and muted colors are your best friends.',colors:['#E6E6FA','#B0C4DE','#DDA0DD','#98AFC7','#C8A2C8','#AFEEEE'],avoid:['Orange','Bright yellow','Tomato red']},
  'cool-dark':{name:'Winter',desc:'Cool and dramatic coloring. Bold, clear, high-contrast colors make you shine.',colors:['#000080','#DC143C','#FFFFFF','#008000','#4B0082','#FF1493'],avoid:['Muted browns','Dusty rose','Beige']},
}
export function ColorSeasonAnalyzer() {
  const [undertone, setUndertone] = useState(''); const [depth, setDepth] = useState('')
  const [result, setResult] = useState<{name:string;desc:string;colors:string[];avoid:string[]}|null>(null)
  const analyze = () => {
    const key = `${undertone}-${depth}`
    setResult(seasons[key]||null)
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Skin Undertone</Label><Select value={undertone} onChange={e=>setUndertone(e.target.value)}><option value="">Select...</option><option value="warm">Warm (yellow/golden)</option><option value="cool">Cool (pink/blue)</option></Select></div>
        <div><Label>Overall Depth</Label><Select value={depth} onChange={e=>setDepth(e.target.value)}><option value="">Select...</option><option value="light">Light</option><option value="dark">Dark/Deep</option></Select></div>
      </div>
      <Button onClick={analyze} size="lg" className="w-full">Find My Season</Button>
      {result && <Card>
        <div className="text-center mb-4"><div className="text-3xl font-bold">{result.name}</div><p className="text-muted mt-2">{result.desc}</p></div>
        <div className="mb-4"><div className="font-semibold mb-2">Your Best Colors</div><div className="flex gap-2 flex-wrap">{result.colors.map((c,i)=><div key={i} className="w-14 h-14 rounded-xl border border-border" style={{backgroundColor:c}}/>)}</div></div>
        <div><div className="font-semibold mb-2">Colors to Avoid</div><div className="flex gap-2 flex-wrap">{result.avoid.map((a,i)=><span key={i} className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">{a}</span>)}</div></div>
      </Card>}
    </div>
  )
}
