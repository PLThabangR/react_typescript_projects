import { Suspense } from 'react'

import './App.css'
import { User } from './components/User'
import Form from './components/Form'
import HookForm from './components/HookForm'
import UseHook from './components/React_19/UseHook'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
        {/* <User/> */}
          {/* <Form/> */}
           <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
          {/* <HookForm/> */}
          <Suspense>
<UseHook/>
          </Suspense>
          
    </>
  )
}

export default App
