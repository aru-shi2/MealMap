import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate();
  
  const handleClick=()=>{
    navigate("/recipe");
  }

  return (
    <>
    <div className='h-screen'>
      <div className='flex items-center justify-center max-h-screen absolute'>
      <img className='w-screen h-screen' src="/images/home.jpg" alt="bg" />
    </div>
    <div className='absolute bg-gray-900 w-screen h-screen opacity-83'></div>

    
    <div className='relative flex flex-col items-center gap-10 justify-center text-white h-screen'>
      <h1 className='text-5xl'>Explore flavors, Anytime, Anywhere</h1>
      <span className='text-xl flex-wrap'>Welcome to your everyday cookbook.
        Discover easy dinners,festive treats, and everything in between </span>
        <button onClick={handleClick} className='px-6 h-12 rounded-2xl bg-blue-900'>Explore</button>
    </div>
    </div>
    </>
  )
}

export default Home