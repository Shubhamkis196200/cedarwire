import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label, Select } from '../components/FormElements'

export function CalorieCounter() {
  const [age, setAge] = useState(''); const [weight, setWeight] = useState(''); const [height, setHeight] = useState('')
  const [gender, setGender] = useState('male'); const [activity, setActivity] = useState('1.55')
  const [result, setResult] = useState<{bmr:number;tdee:number;lose:number;gain:number}|null>(null)
  const calculate = () => {
    const a=parseFloat(age),w=parseFloat(weight),h=parseFloat(height)
    if(!a||!w||!h) return
    const bmr = gender==='male' ? 10*w+6.25*h-5*a+5 : 10*w+6.25*h-5*a-161
    const tdee = Math.round(bmr * parseFloat(activity))
    setResult({ bmr: Math.round(bmr), tdee, lose: tdee - 500, gain: tdee + 500 })
  }
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Gender</Label><Select value={gender} onChange={e=>setGender(e.target.value)}><option value="male">Male</option><option value="female">Female</option></Select></div>
        <div><Label>Age</Label><Input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="30" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Weight (kg)</Label><Input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="70" /></div>
        <div><Label>Height (cm)</Label><Input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175" /></div>
      </div>
      <div><Label>Activity Level</Label><Select value={activity} onChange={e=>setActivity(e.target.value)}>
        <option value="1.2">Sedentary</option><option value="1.375">Light exercise</option><option value="1.55">Moderate exercise</option><option value="1.725">Heavy exercise</option><option value="1.9">Athlete</option>
      </Select></div>
      <Button onClick={calculate} size="lg" className="w-full">Calculate Calories</Button>
      {result && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center"><div className="text-3xl font-bold">{result.bmr}</div><div className="text-sm text-muted mt-1">BMR (cal/day)</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-accent">{result.tdee}</div><div className="text-sm text-muted mt-1">Maintenance</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-green-600">{result.lose}</div><div className="text-sm text-muted mt-1">Weight Loss</div></Card>
          <Card className="text-center"><div className="text-3xl font-bold text-blue-600">{result.gain}</div><div className="text-sm text-muted mt-1">Weight Gain</div></Card>
        </div>
      )}
    </div>
  )
}
