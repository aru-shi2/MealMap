import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-[rgba(15,12,26,0.69)] w-screen absolute top-0 z-50 flex justify-between text-xl pb-4 pt-4 text-white font-bold'>
        <div className="logo ml-6">MealMap</div>
      <div>
        <div className='flex gap-8 mr-6'>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/recipe">Recipe</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
