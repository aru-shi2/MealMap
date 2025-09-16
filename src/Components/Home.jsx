import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-center max-h-screen absolute'>
      <img className='w-screen h-screen' src="/images/home.jpg" alt="bg" />
    </div>
    <div className='absolute bg-gray-900 w-screen h-screen opacity-83'></div>
    <div className=' text-white'>
      <h1 className='absolute text-5xl top-[25%] left-[22%] mb-5'>Explore flavors, Anytime, Anywhere</h1>
      <span className='absolute top-[38%] left-[17%] text-xl flex-wrap'>Welcome to your everyday cookbook.
        Discover easy dinners,festive treats, and everything in between </span>
        <button className='absolute top-[50%] left-[47%] px-6 h-12 rounded-2xl bg-blue-900'>Explore</button>
    </div>
    </div>
  )
}

export default Home