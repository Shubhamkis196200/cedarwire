import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const hslToHex = (h:number,s:number,l:number):string => {
  s/=100;l/=100;const a=s*Math.min(l,1-l);const f=(n:number)=>{const k=(n+h/30)%12;const color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,'0')};return`#${f(0)}${f(8)}${f(4)}`
}
export function ColorPaletteGenerator() {
  const [palettes, setPalettes] = useState<{name:string;colors:string[]}[]>([])
  const generate = () => {
    const baseH = Math.random()*360
    const results = [
      {name:'Analogous',colors:Array.from({length:5},(_,i)=>hslToHex((baseH+i*30)%360,70,50+i*5))},
      {name:'Complementary',colors:[hslToHex(baseH,70,50),hslToHex(baseH,70,65),hslToHex(baseH,30,85),hslToHex((baseH+180)%360,70,50),hslToHex((baseH+180)%360,70,65)]},
      {name:'Triadic',colors:[hslToHex(baseH,70,50),hslToHex((baseH+120)%360,70,50),hslToHex((baseH+240)%360,70,50),hslToHex(baseH,40,75),hslToHex((baseH+120)%360,40,75)]},
      {name:'Monochrome',colors:Array.from({length:5},(_,i)=>hslToHex(baseH,70-i*10,30+i*15))},
    ]
    setPalettes(results)
  }
  const [copied, setCopied] = useState('')
  const copy = (hex:string) => {navigator.clipboard.writeText(hex);setCopied(hex);setTimeout(()=>setCopied(''),1500)}
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button onClick={generate} size="lg" className="w-full">Generate Palettes</Button>
      {palettes.map(p=>(
        <Card key={p.name}><div className="font-semibold mb-3">{p.name}</div>
          <div className="flex gap-2">{p.colors.map((c,i)=>(
            <div key={i} className="flex-1 cursor-pointer" onClick={()=>copy(c)}>
              <div className="aspect-square rounded-xl border border-border" style={{backgroundColor:c}}/>
              <div className="text-xs text-center mt-1 font-mono">{copied===c?'Copied!':c}</div>
            </div>
          ))}</div>
        </Card>
      ))}
    </div>
  )
}
