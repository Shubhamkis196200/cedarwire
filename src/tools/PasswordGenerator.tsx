import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Slider, Label, Checkbox } from '../components/FormElements'
export function PasswordGenerator() {
  const [length, setLength] = useState(16); const [upper, setUpper] = useState(true); const [lower, setLower] = useState(true); const [numbers, setNumbers] = useState(true); const [symbols, setSymbols] = useState(true)
  const [password, setPassword] = useState(''); const [copied, setCopied] = useState(false)
  const generate = () => {
    let chars = ''
    if(lower) chars+='abcdefghijklmnopqrstuvwxyz'
    if(upper) chars+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numbers) chars+='0123456789'
    if(symbols) chars+='!@#$%^&*()_+-=[]{}|;:,.<>?'
    if(!chars) chars='abcdefghijklmnopqrstuvwxyz'
    let pw=''; for(let i=0;i<length;i++) pw+=chars[Math.floor(Math.random()*chars.length)]
    setPassword(pw); setCopied(false)
  }
  const copy = () => {navigator.clipboard.writeText(password);setCopied(true)}
  const strength = length>=20&&upper&&lower&&numbers&&symbols?'Very Strong':length>=12&&[upper,lower,numbers,symbols].filter(Boolean).length>=3?'Strong':length>=8?'Moderate':'Weak'
  const strengthColor = strength==='Very Strong'?'text-green-600':strength==='Strong'?'text-green-500':strength==='Moderate'?'text-yellow-500':'text-red-500'
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div><Label>Length: {length}</Label><Slider value={length} min={4} max={64} onChange={setLength}/></div>
      <div className="grid grid-cols-2 gap-3">
        <Checkbox label="Uppercase (A-Z)" checked={upper} onChange={setUpper}/>
        <Checkbox label="Lowercase (a-z)" checked={lower} onChange={setLower}/>
        <Checkbox label="Numbers (0-9)" checked={numbers} onChange={setNumbers}/>
        <Checkbox label="Symbols (!@#$)" checked={symbols} onChange={setSymbols}/>
      </div>
      <Button onClick={generate} size="lg" className="w-full">Generate Password</Button>
      {password && <Card>
        <div className="font-mono text-lg break-all bg-surface-alt rounded-lg p-4 mb-3">{password}</div>
        <div className="flex justify-between items-center">
          <span className={`font-semibold ${strengthColor}`}>{strength}</span>
          <Button size="sm" variant="outline" onClick={copy}>{copied?'Copied!':'Copy'}</Button>
        </div>
      </Card>}
    </div>
  )
}
