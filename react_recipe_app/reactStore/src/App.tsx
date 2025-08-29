import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router} from 'react-router'
import SideBar from './component/SideBar'

function App() {
 

  return (
   <>
   
    <Router>
    <div className=' flex h-screen'>

      <SideBar/>


    </div>

    </Router>
   
   
   </>
  )
}

export default App
