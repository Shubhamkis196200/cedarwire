import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
const palettes:{[k:string]:{name:string;colors:string[];desc:string}[]} = {
  navy:[{name:'Classic',colors:['#1B2A4A','#FFFFFF','#C4A35A','#8B4513'],desc:'Navy + white + gold'},{name:'Coastal',colors:['#1B2A4A','#87CEEB','#F5F5DC','#2E8B57'],desc:'Navy + sky blue + beige'},{name:'Bold',colors:['#1B2A4A','#DC143C','#FFFFFF','#808080'],desc:'Navy + red + white'}],
  black:[{name:'Monochrome',colors:['#000000','#333333','#666666','#FFFFFF'],desc:'Black + grays + white'},{name:'Elegant',colors:['#000000','#C4A35A','#1A1A1A','#F5F5DC'],desc:'Black + gold + cream'},{name:'Edgy',colors:['#000000','#DC143C','#1A1A1A','#FFFFFF'],desc:'Black + red + white'}],
  white:[{name:'Fresh',colors:['#FFFFFF','#87CEEB','#F0F0F0','#1B2A4A'],desc:'White + light blue + navy'},{name:'Earthy',colors:['#FFFFFF','#D2B48C','#8B7355','#2E8B57'],desc:'White + tan + olive'},{name:'Soft',colors:['#FFFFFF','#FFB6C1','#E6E6FA','#D3D3D3'],desc:'White + blush + lavender'}],
  earth:[{name:'Desert',colors:['#D2B48C','#8B4513','#F5DEB3','#556B2F'],desc:'Tan + brown + wheat + olive'},{name:'Forest',colors:['#2E8B57','#8B4513','#F5F5DC','#A0522D'],desc:'Green + brown + cream'},{name:'Autumn',colors:['#CC5500','#8B0000','#DAA520','#2F4F2F'],desc:'Burnt orange + burgundy + gold'}],
}
export function OutfitColorMatcher() {
  const [base, setBase] = useState('')
  const [result, setResult] = useState<{name:string;colors:string[];desc:string}[]|null>(null)
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <p className="text-muted">Select your base color to get matching outfit combinations:</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(palettes).map(([key,val])=>(
          <Button key={key} variant={base===key?'primary':'outline'} onClick={()=>{setBase(key);setResult(val)}} className="capitalize">{key}</Button>
        ))}
      </div>
      {result && <div className="space-y-4">{result.map((p,i)=>(
        <Card key={i}>
          <div className="font-semibold mb-2">{p.name}</div>
          <div className="flex gap-2 mb-2">{p.colors.map((c,j)=><div key={j} className="w-12 h-12 rounded-lg border border-border" style={{backgroundColor:c}}/>)}</div>
          <div className="text-sm text-muted">{p.desc}</div>
        </Card>
      ))}</div>}
    </div>
  )
}
