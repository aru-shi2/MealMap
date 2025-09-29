import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

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
    path:"/recipe/:food",
    element:<><Navbar/><Recipe/></>
  }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
