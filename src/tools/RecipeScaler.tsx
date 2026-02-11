import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Input, Label } from '../components/FormElements'
type Ing = {name:string;amount:number;unit:string}
export function RecipeScaler() {
  const [original, setOriginal] = useState('4'); const [target, setTarget] = useState('8')
  const [ingredients, setIngredients] = useState<Ing[]>([{name:'Flour',amount:2,unit:'cups'},{name:'Sugar',amount:1,unit:'cup'},{name:'Butter',amount:0.5,unit:'cup'},{name:'Eggs',amount:2,unit:''},{name:'Milk',amount:1,unit:'cup'}])
  const [newName, setNewName] = useState(''); const [newAmt, setNewAmt] = useState(''); const [newUnit, setNewUnit] = useState('')
  const ratio = (parseInt(target)||1)/(parseInt(original)||1)
  const add = () => {if(!newName||!newAmt) return; setIngredients([...ingredients,{name:newName,amount:parseFloat(newAmt),unit:newUnit}]);setNewName('');setNewAmt('');setNewUnit('')}
  const fmt = (n:number) => {const r=Math.round(n*100)/100; return r%1===0?r.toString():r.toFixed(2).replace(/0$/,'')}
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Original Servings</Label><Input type="number" value={original} onChange={e=>setOriginal(e.target.value)}/></div>
        <div><Label>Target Servings</Label><Input type="number" value={target} onChange={e=>setTarget(e.target.value)}/></div>
      </div>
      <Card><div className="text-center text-2xl font-bold text-accent mb-4">{ratio}x scale</div>
        <table className="w-full text-sm"><thead><tr className="border-b border-border"><th className="text-left py-2">Ingredient</th><th className="text-right">Original</th><th className="text-right">Scaled</th></tr></thead>
        <tbody>{ingredients.map((ing,i)=><tr key={i} className="border-b border-border"><td className="py-2">{ing.name}</td><td className="text-right">{ing.amount} {ing.unit}</td><td className="text-right font-semibold text-accent">{fmt(ing.amount*ratio)} {ing.unit}</td></tr>)}</tbody></table>
      </Card>
      <div className="grid grid-cols-4 gap-2">
        <Input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Ingredient"/>
        <Input type="number" value={newAmt} onChange={e=>setNewAmt(e.target.value)} placeholder="Amount"/>
        <Input value={newUnit} onChange={e=>setNewUnit(e.target.value)} placeholder="Unit"/>
        <Button onClick={add}>Add</Button>
      </div>
    </div>
  )
}
