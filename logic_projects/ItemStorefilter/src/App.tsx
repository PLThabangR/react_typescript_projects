import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router'
import SideBar from './component/SideBar'
import MainContent from './component/MainContent'
import ProductPage from './component/ProductPage'
import TopSellers from './component/TopSellers'
import PopularBlogs from './component/PopularBlogs'

function App() {
 

  return (
   <>
   
    <Router>
    <div className=' flex h-screen'>

      <SideBar/>

<div className='w-full rounded-2xl flex justify-between fllex-wrap'>

<Routes>
<Route path='/' element={<MainContent/>}></Route>
<Route path='/product/:id' element={<ProductPage/>}></Route>

</Routes>
</div>
    <TopSellers/>
    <PopularBlogs/>

    </div>

    </Router>
   
   
   </>
  )
}

export default App
