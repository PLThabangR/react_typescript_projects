"use server"
import { use } from 'react'

//function to fetch data
const fetchData = async() => {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  return response.json()
}

const UseHook = () => {
  
  //USe hook let you to read and to load resources asynchronously such as promises and context
const data = use(fetchData())  

  return (
    <div>
      <h2>This is th use</h2>
      <h1>{data.title}</h1>
    </div>
  )
}

export default UseHook