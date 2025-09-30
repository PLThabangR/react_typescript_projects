import { useState } from 'react'
import './App.css'
import Person from './pages/Person'
import Card from './pages/Card'

function App() {

const [count, setCount] = useState(0)
const numbers = [1, 2, 3, 4, 5]
const employes = [{name:"ram", age: 30},{name:"shyam", age: 20},{name:"hari", age: 40}]
const date = new Date()
  return (
    <>

    
    <Card>
      <h1>App </h1>
      <p>This is a app display through card</p>
    </Card>


 
     
    </>
  )
}

export default App
