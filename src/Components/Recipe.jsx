import React from "react";
import { useState } from "react";

const Recipe = () => {
  const [dish, setdish] = useState("");
  const [Recipe, setRecipe] = useState([])

  const handleClick=async () => {
    const res = await fetch('http://localhost:3000/',{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({dish})
      })
    const r=await res.json()
    setRecipe(r)
    console.log(r)
  }

  return (
    <div>
      <div className="box bg-gray-500 max-w-screen overflow-x-hidden h-screen">
        <div className='flex items-center justify-center h-[5%] absolute'>
      <img className='w-screen size-150' src="/images/recipe.jpg" alt="bg" />
    </div>
    <div className='absolute bg-gray-900 w-screen h-screen opacity-78'></div>
        <div className="top flex flex-col absolute left-75 items-center gap-5 text-white font-bold">
          <h1 className="mt-30 text-5xl">
            Search, Cook, Enjoy with 
            <span className="text-amber-400"> MealMap</span>
          </h1>
          <p className="text-2xl">
            Personalized results based on what you love to cook
          </p>
          <div className="search space-x-5">
            <input
              value={dish}
              onChange={(e)=>setdish(e.target.value)}
              className="bg-gray-800 text-white px-5 mt-5 w-xl pt-2 pb-2 rounded-xl"
              type="text"
              placeholder="Enter dish..."
            />
            <button onClick={handleClick} className="bg-gray-700 text-white px-4 h-9 rounded-3xl">
              Search
            </button>
          </div>
        </div>

        <div className="recipies mt-10 bg-blue-950 max-w-screen flex flex-wrap absolute top-70">
          {Recipe.map(item =>(
            <div key={item.idMeal} className="dish w-[20%] bg-green-500 rounded-xl ml-8 mr-8 mb-10">
            <div className="top flex flex-col items-center">
              <img className="w-[90%] mt-4 rounded-2xl" src={item.strMealThumb} alt="" />
            <h1>{item.strMeal}</h1>
            </div>
            <div className="bottom flex justify-between px-4 bg-amber-900">
              <button className="px-5 h-8 bg-blue-400 rounded-xl">Recipe</button>
              <button className="px-5 h-8 bg-blue-400 rounded-xl">Link</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
