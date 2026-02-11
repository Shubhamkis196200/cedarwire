import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const moods:{[k:string]:{name:string;colors:{hex:string;name:string}[];desc:string}} = {
  calm:{name:'Calm & Serene',colors:[{hex:'#E8E4E1',name:'Warm Gray'},{hex:'#D4C5B9',name:'Soft Taupe'},{hex:'#B8C4B8',name:'Sage Green'},{hex:'#A0B4C3',name:'Dusty Blue'},{hex:'#F5F0EB',name:'Linen White'}],desc:'Soft, muted tones create a peaceful retreat'},
  energetic:{name:'Bright & Energetic',colors:[{hex:'#FF6B35',name:'Tangerine'},{hex:'#FFD166',name:'Saffron'},{hex:'#06D6A0',name:'Emerald'},{hex:'#118AB2',name:'Ocean Blue'},{hex:'#FFFFFF',name:'Clean White'}],desc:'Vibrant colors that inspire creativity and joy'},
  cozy:{name:'Warm & Cozy',colors:[{hex:'#8B4513',name:'Saddle Brown'},{hex:'#D2691E',name:'Chocolate'},{hex:'#DEB887',name:'Burlywood'},{hex:'#F5DEB3',name:'Wheat'},{hex:'#FFF8DC',name:'Cornsilk'}],desc:'Rich earth tones for a welcoming, intimate space'},
  elegant:{name:'Elegant & Sophisticated',colors:[{hex:'#1A1A2E',name:'Deep Navy'},{hex:'#16213E',name:'Midnight'},{hex:'#C4A35A',name:'Antique Gold'},{hex:'#E8E4E1',name:'Warm Marble'},{hex:'#F5F0EB',name:'Cream'}],desc:'Dark and metallic accents for timeless luxury'},
  fresh:{name:'Fresh & Natural',colors:[{hex:'#2D5016',name:'Forest Green'},{hex:'#6B8E23',name:'Olive'},{hex:'#90EE90',name:'Light Green'},{hex:'#F0FFF0',name:'Honeydew'},{hex:'#FFFAF0',name:'Floral White'}],desc:'Nature-inspired palette bringing the outdoors in'},
}
export function RoomColorPalette() {
  const [mood, setMood] = useState<string|null>(null)
  const m = mood ? moods[mood] : null
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <p className="text-muted">Choose a mood for your room:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{Object.entries(moods).map(([k,v])=><Button key={k} variant={mood===k?'primary':'outline'} onClick={()=>setMood(k)}>{v.name}</Button>)}</div>
      {m && <Card>
        <div className="text-xl font-semibold mb-2">{m.name}</div>
        <p className="text-sm text-muted mb-4">{m.desc}</p>
        <div className="flex gap-2 mb-4">{m.colors.map((c,i)=><div key={i} className="flex-1"><div className="aspect-square rounded-xl border border-border" style={{backgroundColor:c.hex}}/><div className="text-xs text-center mt-1">{c.name}</div><div className="text-xs text-center text-muted">{c.hex}</div></div>)}</div>
      </Card>}
    </div>
  )
}
