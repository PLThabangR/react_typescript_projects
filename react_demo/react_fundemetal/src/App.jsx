import { useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState(0)
const numbers = [1, 2, 3, 4, 5]
const employes = [{name:"ram", age: 30},{name:"shyam", age: 20},{name:"hari", age: 40}]
const date = new Date()
  return (
    <>
      
   { employes.map((employee,index)=>(
    <ul key={index}>
      <li>{employee.name},{employee.age}</li>
    </ul>
   ))}
     
    </>
  )
}

export default App
