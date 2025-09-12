//import from react icons
import {
    AiOutlineHome,AiOutlineLogin,AiOutlineUserAdd
} from 'react-icons/ai';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

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
  const {userInfo}= useSelector((state:any) => state.auth);
  //instance of dispatch to pass data to redux auth feature
  const dispatch = useDispatch();

  // communicate to the backend using RTK
  const [logoutApiCall] = useLoginMutation();

  //create dropdawon
  const [dropdownOpen, setDropdownOpen] = useState(false);

    //function to manipulate the drop down
  const handleDropdown = () => {
    //toggle drop down
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout=()=>{
   // logoutApiCall();
    dispatch(logout());
    navigate('/login');
  }

  return (
    <>
    <div className='fixed bottom-10 bg-[@0f0f0f] left-[30rem] transform translate-x-1/2  transform translate-y-1/2  z-50  border-2 border w-[30%] px-[4rem] mb-[2rem] rounded'>
        <section className='flex justify-between items-center'>
            {/* section 1 */}

            <div className='flex justify-center items-center mb-[2rem]'>
                <Link to='/' className='flex items-center transition-transform'><AiOutlineHome className="mr-2 mt-[3rem]" size={26}/>
                    <span className='hidden nav-item  mt-[3rem]'>Home</span>
                </Link>

                  <Link to='/movies' className='flex items-center transition-transform transform hover:translate-x-2 ml-[1rem] '><MdOutlineLocalMovies className="mr-2 mt-[3rem]" size={26}/>
                    <span className='hidden nav-item  mt-[3rem]'>Shop</span>
                </Link>
             </div>


            {/* section 2 */}
            <div className='relative'>
                <button onClick={handleDropdown} className='text-gray-800 focus:outline-none'>{userInfo ? (<span className='text-white'>{userInfo.username}</span>):(<></>)}
                
                    { userInfo && (<MdOutlineArrowDropDownCircle viewBox='0 0 24 24' stroke="white" className={`h-4 w-4 ml-1 ${dropdownOpen?"transform rotate-180" :""}`} size={26}/>)    }
                
                </button>

                {
                    dropdownOpen && userInfo&&(
                        <ul className={`absolute right-0 mt-2 mr-14 w-[10rem] bg-gray-600 space-y-2  text-gray-600 ${!userInfo.isAdmin?"-top-20":"-top-24"}`}    >

                            {
                                userInfo.isAdmin &&(
                                    <Link to='/admin/movies/dashboard' className='block px-4 py-2 hover:bg-gray-100 '>Dashboard
                                    </Link>
                           ) }

                           <li><Link to='/profile' className='block px-4 py-2 hover:bg-gray-100 '>Profile</Link></li>

                            <li >
                                <button onClick={handleLogout} className='block px-4 py-2 hover:bg-gray-100 '>Logout</button>
                            </li>




                        </ul>

                    )}

                    {
                        !userInfo && (
                            <ul  className='flex'>
                                <li>

                                    <Link to='/login' className='flex items-center mt-5 transition-transform transform hover:translate-x-2 mb-[2rem] '>
                                    <AiOutlineLogin className="mr-2 mt-[4px]" size={26}/>
                                        <span className='hidden nav-item  mt-[4rem]'>LOGIN</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/register' className='flex items-center mt-5 transition-transform transform hover:translate-x-2 ml-[1rem] '>
                                    <AiOutlineUserAdd className="mr-2 mt-[4px]" size={26}/>
                                        <span className='hidden nav-item  mt-[4rem]'>REGISTER</span>
                                    </Link>
                                </li>

                            </ul>
                        )
                    }



            </div>


    </section>
    
    </div>
    </>
  )
}

export default Navigation