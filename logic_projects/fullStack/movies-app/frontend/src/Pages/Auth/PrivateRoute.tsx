import { useSelector,} from "react-redux"
import { Navigate ,Outlet} from "react-router-dom"


const PrivateRoute = () => {

     
     //Grab the user information from the store
     const {userInfo} = useSelector((state:any) => state.auth)

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute