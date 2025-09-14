import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store  from './app/store'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Register from './Pages/Auth/Register.tsx'
import Login from './Pages/Auth/Login.tsx'
import PrivateRoute from './Pages/Auth/PrivateRoute.tsx'
import Profile from './Pages/User/Profile.tsx'

//Auth 


//Restricted

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path='/' element={<App/>}>
            {/* Public routes */}
        <Route index={true} path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
            {/* end of public routes  */}

        {/* private routes */}
        <Route path="" element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>

        </Route>
        {/* end of private routes */}
        </Route>
        
    )
)


createRoot(document.getElementById('root')!).render(

 <Provider store={store}>
<RouterProvider router={router} />
    </Provider>

 
   
 
)
