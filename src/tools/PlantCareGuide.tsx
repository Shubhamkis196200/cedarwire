import { useState } from 'react'
import { Card } from '../components/Card'
import { Input, Label } from '../components/FormElements'
const plants = [
  {name:'Pothos',light:'Low to bright indirect',water:'Every 1-2 weeks',humidity:'Any',difficulty:'Easy',tip:'Practically unkillable. Let soil dry between waterings.',icon:'🌿'},
  {name:'Snake Plant',light:'Low to bright indirect',water:'Every 2-3 weeks',humidity:'Any',difficulty:'Easy',tip:'Thrives on neglect. Perfect for beginners.',icon:'🌱'},
  {name:'Monstera',light:'Bright indirect',water:'Every 1-2 weeks',humidity:'Medium-High',difficulty:'Easy',tip:'Give it a moss pole to climb for bigger leaves.',icon:'🍃'},
  {name:'Fiddle Leaf Fig',light:'Bright indirect',water:'Every 1-2 weeks',humidity:'Medium',difficulty:'Moderate',tip:'Avoid moving it. They hate change.',icon:'🌳'},
  {name:'Peace Lily',light:'Low to medium',water:'Weekly',humidity:'Medium',difficulty:'Easy',tip:'It droops dramatically when thirsty, then perks right back up.',icon:'🌸'},
  {name:'Rubber Plant',light:'Medium to bright indirect',water:'Every 1-2 weeks',humidity:'Medium',difficulty:'Easy',tip:'Wipe leaves with a damp cloth monthly.',icon:'🌿'},
  {name:'ZZ Plant',light:'Low to bright indirect',water:'Every 2-3 weeks',humidity:'Any',difficulty:'Easy',tip:'Stores water in its rhizomes — very drought tolerant.',icon:'🌱'},
  {name:'Calathea',light:'Medium indirect',water:'Weekly',humidity:'High',difficulty:'Moderate',tip:'Use filtered water. They are sensitive to chemicals.',icon:'🍃'},
  {name:'Succulent',light:'Bright direct',water:'Every 2-3 weeks',humidity:'Low',difficulty:'Easy',tip:'Ensure pot has drainage. Overwatering is the #1 killer.',icon:'🌵'},
  {name:'Orchid',light:'Bright indirect',water:'Weekly (ice cube method)',humidity:'Medium-High',difficulty:'Moderate',tip:'Rest in bright spot. Water with 3 ice cubes weekly.',icon:'🌺'},
]
export function PlantCareGuide() {
  const [search, setSearch] = useState('')
  const filtered = plants.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div><Label>Search Plants</Label><Input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name..."/></div>
      <div className="grid md:grid-cols-2 gap-4">{filtered.map(p=>(
        <Card key={p.name}>
          <div className="flex items-center gap-2 mb-3"><span className="text-2xl">{p.icon}</span><div><div className="font-semibold">{p.name}</div><span className={`text-xs px-2 py-0.5 rounded-full ${p.difficulty==='Easy'?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-700'}`}>{p.difficulty}</span></div></div>
          <div className="space-y-1 text-sm"><div><span className="font-medium">☀️ Light:</span> {p.light}</div><div><span className="font-medium">💧 Water:</span> {p.water}</div><div><span className="font-medium">💨 Humidity:</span> {p.humidity}</div></div>
          <div className="mt-3 text-sm text-muted bg-surface-alt rounded-lg p-2">💡 {p.tip}</div>
        </Card>
      ))}</div>
    </div>
  )
}
