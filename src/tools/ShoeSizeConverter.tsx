import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'
const chart = [{us:6,uk:5.5,eu:38.5,cm:24},{us:6.5,uk:6,eu:39,cm:24.5},{us:7,uk:6.5,eu:40,cm:25},{us:7.5,uk:7,eu:40.5,cm:25.5},{us:8,uk:7.5,eu:41,cm:26},{us:8.5,uk:8,eu:42,cm:26.5},{us:9,uk:8.5,eu:42.5,cm:27},{us:9.5,uk:9,eu:43,cm:27.5},{us:10,uk:9.5,eu:44,cm:28},{us:10.5,uk:10,eu:44.5,cm:28.5},{us:11,uk:10.5,eu:45,cm:29},{us:12,uk:11.5,eu:46,cm:30}]
export function ShoeSizeConverter() {
  const [system, setSystem] = useState('us'); const [size, setSize] = useState('')
  const [result, setResult] = useState<typeof chart[0]|null>(null)
  const convert = () => {
    const s=parseFloat(size); if(!s) return
    const match = chart.reduce((best,row) => Math.abs((row as any)[system]-s)<Math.abs((best as any)[system]-s)?row:best)
    setResult(match)
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>System</Label><Select value={system} onChange={e=>setSystem(e.target.value)}><option value="us">US</option><option value="uk">UK</option><option value="eu">EU</option><option value="cm">CM</option></Select></div>
        <div><Label>Your Size</Label><Input type="number" step="0.5" value={size} onChange={e=>setSize(e.target.value)} placeholder="9"/></div>
      </div>
      <Button onClick={convert} size="lg" className="w-full">Convert</Button>
      {result && <div className="grid grid-cols-4 gap-3">
        <Card className="text-center"><div className="text-2xl font-bold">US {result.us}</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">UK {result.uk}</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">EU {result.eu}</div></Card>
        <Card className="text-center"><div className="text-2xl font-bold">{result.cm}cm</div></Card>
      </div>}
    </div>
  )
}
