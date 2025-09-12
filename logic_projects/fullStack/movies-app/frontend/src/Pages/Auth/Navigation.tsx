//import from react icons
import {
    AiOutlineHome,AiOutlineLogin,AiOutlineUserAdd
} from 'react-icons/ai';

import {MdOutlineLocalMovies} from 'react-icons/md'

//import from react and react router
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//import from RTK
import { useLoginMutation } from '../../app/api/userEndpoints'

//import from redux 
import { logout } from '../../app/features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';


const Navigation = () => {
    //Instance of hooks
   const navigate = useNavigate();
   // get user from redux auth using selector
  const {userInfo}= useSelector((state: any) => state.user);
  //pass data to redux auth feature
  const dispatch = useDispatch();

  // communicate to the backend using RTK
  const [logoutApiCall] = useLoginMutation();

  //create dropdawon
  const [dropdown, setDropdown] = useState(false);

    //function to manipulate the drop down
  const handleDropdown = () => {
    //toggle drop down
    setDropdown(!dropdown);
  };

  return (
    <>
    
    
    
    </>
  )
}

export default Navigation