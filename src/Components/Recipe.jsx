import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [dish, setdish] = useState("");
  const [Recipe, setRecipe] = useState([])

  const {food}=useParams()

  const handleClick=async () => {
    const res = await fetch(`http://localhost:3000/recipe/${dish}`)
    const data=await res.json()
    setRecipe(data)
    console.log(data)
  }

  return (
    <div >
      <div className="box max-w-screen overflow-x-hidden">
        <div className='flex items-center justify-center h-[4%] absolute'>
      <img className='w-screen size-165' src="/images/recipe.jpg" alt="bg" />
    </div>
    <div className='absolute bg-gray-900 w-screen h-[54%] opacity-78'></div>
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
              className="bg-gray-700 border-2 border-gray-800 text-white px-5 mt-5 w-xl pt-2 pb-2 rounded-xl"
              type="text"
              placeholder="Enter dish..."
            />
            <button onClick={handleClick} className="bg-gray-700 text-white px-4 h-9 rounded-3xl">
              Search
            </button>
          </div>
        </div>


        <div className="recipies bg-[#2c2e33] w-screen mt-10 pt-6 flex flex-wrap absolute top-75">
          {Recipe.map(item =>(
            <div key={item.idMeal} className="dish w-[20%] pb-5 bg-[#525255] rounded-xl ml-8 mr-8 mb-10">
            <div className="top flex flex-col flex-wrap items-center">
              <img className="w-[79%] mt-4 rounded-2xl" src={item.strMealThumb} alt="" />
              </div>
              <h1 className="text-2xl mt-4 text-center break-words mr-5 ml-5 font-bold text-white mb-4">{item.strMeal}</h1>
            <div className="bottom flex justify-between px-4 text-xl font-bold">
              <button className="px-2 h-11 w-22 bg-[#1f1c1c] text-white rounded-xl">Recipe</button>
              <button className="px-2 h-11 w-20 bg-[#1f1c1c] text-white  rounded-xl">Link</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
