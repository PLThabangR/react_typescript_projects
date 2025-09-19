import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const AdminRoutes = () => {
    //get user from store
    const {userInfo} = useSelector((state:any) => state.auth)
    //check if user is available and that if user is admin 
    if(userInfo && userInfo.isAdmin){
        //if user is admin return outlet relevent page if is admin
        return <Outlet />
    }else{
        //if user is not admin redirect to login
        return <Navigate to="/login" />
    }


}

export default AdminRoutes