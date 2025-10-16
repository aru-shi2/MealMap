import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())

app.get('/recipe/:dish', async (req, res) => {
const dish=req.params.dish
  console.log(dish);


  const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    const data=await response.json()
    console.log(data.meals)

  res.json(data.meals)
})

app.get('/dish/:mealId', async (req, res) => {
const Id=req.params.mealId
  console.log(Id);


  const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`);
    const data=await response.json()
    console.log(data.meals)

  res.json(data.meals)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
