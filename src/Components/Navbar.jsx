import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[rgba(15,12,26,0.69)] w-screen absolute flex justify-between text-xl pb-4 pt-4 text-white '>
        <div className="logo ml-6">MealMap</div>
      <div>
        <ul className='flex gap-8 mr-6'>
            <li>Home</li>
            <li>Recipe</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
