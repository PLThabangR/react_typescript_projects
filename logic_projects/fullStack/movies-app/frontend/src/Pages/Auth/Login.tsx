import React, { useEffect,useState } from 'react'
//import from redux toolkit
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../app/features/auth/auth';

//import from react router
import { Link, useLocation, useNavigate } from 'react-router-dom';

//import component
import Loader from '../../components/Loader';

//toast 
import {  toast } from 'react-toastify';

//import from RTK
import { useLoginMutation } from '../../app/api/userEndpoints'



const Login = () => {
    //intance of hooks
const navigate = useNavigate();
const dispatch = useDispatch();
const [login, {isLoading}] = useLoginMutation();
const {userInfo}= useSelector((state:any) => state.auth);

//use location 
const {search}= useLocation();

//search params
const sp = new URLSearchParams(search);
//redirect user to home page
const redirect = sp.get('redirect') || '/';

// user states

const [email,setEmail]= useState('');
const [password,setPassword]= useState('');


const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

try {
    //register function from rtk
    const res = await login({email,password}).unwrap();
    //We call the setCredentials function using dispatch
    dispatch(setCredentials({...res}));
    //redirect user to login
    navigate(redirect);
    toast.success('Logged in successfully');
} catch (error:any) {
    toast.error(error?.data?.message || error.message );
}

}


useEffect(() => {
    //we are searching for user info
    if(userInfo){
        navigate(redirect);
    }

    
},[navigate,userInfo,redirect]);
  return (
    <>
 <div className="pl-[10rem] flex flex-wrap">
        <div className='mr-[4rem] mt-[1rem]'>
        <h1 className='text-[2rem] font-bold mb-4'>Login</h1>

        <form onSubmit={handleLogin} className='container w-[30rem]'>

           

              <div className="my-[2rem]">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" className="mt-1 block p-2 w-full rounded bg-white " id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

              <div className="my-[2rem]">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input type="text" className="mt-1 block p-2 w-full rounded bg-white " id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

          

            <button disabled={isLoading} type="submit" className='rounded text-white py-2 px-4 bg-teal-500 cursor-pointer my-[1rem] '>
                {isLoading ? "Logging in..." : 'Login'}
            </button>

            <div className='text-white'>
                Don't have an account? <Link to='/register' className='text-teal-500 hover:underline'>Register</Link>
            </div>
            {/* Render the loader when app is loading */}
            {isLoading && <Loader/>}

        </form>
        </div>

        <img src={"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2luZW1hfGVufDB8fDB8fHww"}
        className='w-[50%] h-[100%]  mx-[2px] rounded-lg  cover-center'
        />
 </div>
    
    </>
  )
}

export default Login