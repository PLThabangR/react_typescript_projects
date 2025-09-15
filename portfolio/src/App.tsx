
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Nav from './Nav'
import Project from './Project'
import Experience from './Experience'
import Footer from './Footer'

function App() {


  return (
   <>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/projects' element={<Project/>}></Route>
<Route path='/experinces' element={<Experience/>}></Route>


    </Routes>
    <Footer/>
   </>
  )
}

export default App
