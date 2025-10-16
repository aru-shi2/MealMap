import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Dish = () => {

    const {mealId}=useParams()
    const [Meal, setMeal] = useState([])

    useEffect(() => {
      const fetchDish= async () => {
        const res = await fetch(`http://localhost:3000/dish/${mealId}`)
    const data=await res.json()
    setMeal(data[0])
    console.log(data)
      }
      fetchDish();
      
    }, [mealId])
    

  return (
    <div>
      <h1 className='text-7xl'>{Meal.strMeal}</h1>
    </div>
  )
}

export default Dish
