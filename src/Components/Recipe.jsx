import React from 'react'

const Recipe = () => {

  return (
    <div>
      <div className="box bg-gray-500">
            <div className="top w-screen h-screen flex flex-col items-center gap-3">
              <h1 className='mt-7'>Search, Cook, Enjoy with MealMap</h1>
            <p>Personalized results based on what you love to cook</p>
            <input type="text" placeholder='Enter dish...' />
            </div>
      </div>
    </div>
  )
}

export default Recipe
