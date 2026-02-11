import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
const sizes = [{mm:14.9,us:4,uk:'H'},{mm:15.3,us:4.5,uk:'I'},{mm:15.7,us:5,uk:'J'},{mm:16.1,us:5.5,uk:'K'},{mm:16.5,us:6,uk:'L'},{mm:16.9,us:6.5,uk:'M'},{mm:17.3,us:7,uk:'N'},{mm:17.7,us:7.5,uk:'O'},{mm:18.2,us:8,uk:'P'},{mm:18.6,us:8.5,uk:'Q'},{mm:19,us:9,uk:'R'},{mm:19.4,us:9.5,uk:'S'},{mm:19.8,us:10,uk:'T'},{mm:20.2,us:10.5,uk:'U'},{mm:20.6,us:11,uk:'V'}]
export function RingSizeFinder() {
  const [diameter, setDiameter] = useState('')
  const [result, setResult] = useState<typeof sizes[0]|null>(null)
  const find = () => {
    const d=parseFloat(diameter); if(!d) return
    setResult(sizes.reduce((best,s)=>Math.abs(s.mm-d)<Math.abs(best.mm-d)?s:best))
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <p className="text-muted">Measure the inner diameter of an existing ring in mm, or wrap a string around your finger and measure the length.</p>
      <div><Label>Inner Diameter (mm)</Label><Input type="number" step="0.1" value={diameter} onChange={e=>setDiameter(e.target.value)} placeholder="17.3"/></div>
      <Button onClick={find} size="lg" className="w-full">Find Ring Size</Button>
      {result && <div className="grid grid-cols-3 gap-4">
        <Card className="text-center"><div className="text-3xl font-bold">US {result.us}</div><div className="text-sm text-muted mt-1">US Size</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">UK {result.uk}</div><div className="text-sm text-muted mt-1">UK Size</div></Card>
        <Card className="text-center"><div className="text-3xl font-bold">{result.mm}mm</div><div className="text-sm text-muted mt-1">Diameter</div></Card>
      </div>}
    </div>
  )
}
