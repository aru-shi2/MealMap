import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  useEffect(() => {
    const fetchRecipe=async () => {
       const response=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        const data=response.json()
        console.log(data)
    }
    fetchRecipe()
}, [])


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Recipe",
    element:<Recipe/>
  }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
