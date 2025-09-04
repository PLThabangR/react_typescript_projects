import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router'
import SideBar from './component/SideBar'
import MainContent from './component/MainContent'

function App() {
 

  return (
   <>
   
    <Router>
    <div className=' flex h-screen'>

      <SideBar/>

<div className='w-full bg-amber-700 rounded-2xl flex justify-between fllex-wrap'>

<Routes>
<Route path='/' element={<MainContent/>}></Route>

</Routes>
</div>

    </div>

    </Router>
   
   
   </>
  )
}

export default App
