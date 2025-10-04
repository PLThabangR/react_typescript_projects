import React, { use } from 'react'

//function to fetch data
const fetchData = async() => {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
  return response.json()
}

const Use = () => {
  //USe hook let you to read and to load resources asynchronously such as promises and context
const data = use(fetchData())  

  return (
    <div>

    </div>
  )
}

export default Use