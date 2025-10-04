
import './App.css'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TrendzList from './components/TrendzList'

function App() {

  return (
   <>
   
   <Navigation/>

   <div className='flex justify-center'>
      {/* <MainContent/> */}

      <div className='w-[30%]'>
            <PeopleToFollow/>
            <TrendzList/>
      </div>

   </div>
   </>
  )
}

export default App
