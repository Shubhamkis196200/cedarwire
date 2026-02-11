import { useState } from 'react'
import { Card } from '../components/Card'
import { } from '../components/Button'
import { Select, Label } from '../components/FormElements'
const capsules:{[k:string]:{tops:string[];bottoms:string[];outerwear:string[];shoes:string[];accessories:string[]}} = {
  minimal:{tops:['White tee','Black tee','Striped Breton top','Chambray shirt','White button-down','Cream knit sweater'],bottoms:['Dark straight jeans','Black trousers','Khaki chinos','Navy shorts'],outerwear:['Black blazer','Denim jacket','Trench coat'],shoes:['White sneakers','Black loafers','Ankle boots'],accessories:['Leather belt','Canvas tote','Simple watch']},
  professional:{tops:['White dress shirt','Light blue dress shirt','Cream silk blouse','Black turtleneck','Gray cashmere sweater','Navy polo'],bottoms:['Charcoal wool trousers','Navy dress pants','Black pencil skirt','Dark wash jeans'],outerwear:['Navy blazer','Camel overcoat','Cardigan'],shoes:['Oxford shoes','Heeled boots','Clean sneakers'],accessories:['Leather briefcase','Silk scarf','Quality watch']},
  casual:{tops:['Graphic tee','Flannel shirt','Hoodie','Henley','Linen shirt','Band tee'],bottoms:['Relaxed jeans','Joggers','Cargo pants','Denim shorts'],outerwear:['Bomber jacket','Puffer vest','Fleece pullover'],shoes:['Running shoes','Slides','Canvas sneakers'],accessories:['Baseball cap','Crossbody bag','Sunglasses']},
}
export function WardrobeCapsulePlanner() {
  const [style, setStyle] = useState(''); const [result, setResult] = useState<typeof capsules.minimal|null>(null)
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div><Label>Your Style</Label><Select value={style} onChange={e=>{setStyle(e.target.value);setResult(capsules[e.target.value]||null)}}><option value="">Select style...</option><option value="minimal">Minimalist</option><option value="professional">Professional</option><option value="casual">Casual</option></Select></div>
      {result && <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(result).map(([cat, items])=>(
          <Card key={cat}><div className="font-semibold capitalize mb-3">{cat}</div><ul className="space-y-1">{items.map((item,i)=><li key={i} className="text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"/>{item}</li>)}</ul></Card>
        ))}
      </div>}
      {result && <Card className="text-center"><div className="text-3xl font-bold text-accent">{Object.values(result).flat().length} pieces</div><div className="text-sm text-muted mt-1">Total items for a complete capsule wardrobe</div><div className="text-sm text-muted mt-2">This creates 50+ unique outfit combinations!</div></Card>}
    </div>
  )
}
