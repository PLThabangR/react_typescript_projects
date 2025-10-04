
import './App.css'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'

function App() {

  return (
   <>
   
   <Navigation/>

   <div className='flex justify-center'>
      {/* <MainContent/> */}

      <div className='w-[30%]'>
            <PeopleToFollow/>
      </div>

   </div>
   </>
  )
}

export default App
