import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Select, Label, Checkbox } from '../components/FormElements'
const meals:{[k:string]:{breakfast:string[];lunch:string[];dinner:string[];snack:string[]}} = {
  balanced:{breakfast:['Greek yogurt with berries and granola','Avocado toast with poached eggs','Overnight oats with banana','Smoothie bowl with mixed fruits','Whole grain pancakes with maple syrup','Scrambled eggs with spinach','Chia pudding with mango'],lunch:['Grilled chicken Caesar salad','Quinoa bowl with roasted vegetables','Turkey and avocado wrap','Lentil soup with crusty bread','Mediterranean bowl with falafel','Tuna poke bowl','Caprese sandwich with pesto'],dinner:['Baked salmon with asparagus','Chicken stir-fry with brown rice','Pasta primavera with garlic bread','Grilled steak with sweet potato','Shrimp tacos with slaw','Vegetable curry with naan','Herb-roasted chicken with vegetables'],snack:['Apple with almond butter','Trail mix','Hummus with veggies','Protein bar','Mixed nuts','Cheese and crackers','Dark chocolate']},
  vegetarian:{breakfast:['Tofu scramble with peppers','Banana pancakes','Acai bowl','Avocado toast with tomato','Berry smoothie','Granola with almond milk','French toast with berries'],lunch:['Black bean burrito bowl','Caprese salad','Veggie stir-fry','Mushroom soup','Falafel plate','Grilled cheese with tomato soup','Buddha bowl'],dinner:['Eggplant parmesan','Veggie pad thai','Mushroom risotto','Bean chili','Stuffed peppers','Vegetable lasagna','Chickpea curry'],snack:['Edamame','Fruit salad','Hummus plate','Granola bar','Roasted chickpeas','Guacamole with chips','Smoothie']},
}
export function MealPlanGenerator() {
  const [diet, setDiet] = useState('balanced')
  const [plan, setPlan] = useState<{day:string;breakfast:string;lunch:string;dinner:string;snack:string}[]|null>(null)
  const generate = () => {
    const m = meals[diet]||meals.balanced
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    setPlan(days.map((d,i)=>({day:d,breakfast:m.breakfast[i%m.breakfast.length],lunch:m.lunch[i%m.lunch.length],dinner:m.dinner[i%m.dinner.length],snack:m.snack[i%m.snack.length]})))
  }
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Diet Type</Label><Select value={diet} onChange={e=>setDiet(e.target.value)}><option value="balanced">Balanced</option><option value="vegetarian">Vegetarian</option></Select></div>
        <div className="flex items-end"><Button onClick={generate} size="lg" className="w-full">Generate Weekly Plan</Button></div>
      </div>
      {plan && <div className="space-y-3">{plan.map(p=>(
        <Card key={p.day}><div className="font-semibold text-accent mb-2">{p.day}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div><span className="font-medium">🌅 Breakfast:</span> {p.breakfast}</div>
            <div><span className="font-medium">☀️ Lunch:</span> {p.lunch}</div>
            <div><span className="font-medium">🌙 Dinner:</span> {p.dinner}</div>
            <div><span className="font-medium">🍎 Snack:</span> {p.snack}</div>
          </div>
        </Card>
      ))}</div>}
    </div>
  )
}
