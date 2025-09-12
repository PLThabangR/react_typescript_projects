import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store  from './app/store'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Register from './Pages/Auth/Register.tsx'
import Login from './Pages/Auth/Login.tsx'

//Auth 


//Restricted

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path='/' element={<App/>}>
            {/* home component */}
        <Route index={true} path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        </Route>
        
    )
)


createRoot(document.getElementById('root')!).render(

 <Provider store={store}>
<RouterProvider router={router} />
    </Provider>

 
   
 
)
