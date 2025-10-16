import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dish from './Components/Dish'

function App() {

//   useEffect(() => {
//     const fetchRecipe=async () => {
//        const response=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
//         const data=response.json()
//         console.log(data)
//     }
//     fetchRecipe()
// }, [])

const router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/recipe",
    element:<><Navbar/><Recipe/></>
  },
  {
    path:"/dish/:mealId",
    element:<><Navbar/><Dish/></>
  },
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
