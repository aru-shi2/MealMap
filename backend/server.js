import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import { useState } from 'react'
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())

app.post('/', async (req, res) => {
const {dish}=req.body
  console.log(dish);


  const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    const data=await response.json()
    console.log(data.meals)

  res.send(data.meals)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
