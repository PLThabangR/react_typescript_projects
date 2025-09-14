import { useEffect,useState } from 'react'
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
import { useProfileMutation } from '../../app/api/userEndpoints'


const Profile = () => {
    //intance of hooks
const navigate = useNavigate();
const dispatch = useDispatch();
const [profile, {isLoading}] = useProfileMutation();

//Grab the user information from the store
const {userInfo}= useSelector((state:any) => state.auth);

//use location 
const {search}= useLocation();

//search params
const sp = new URLSearchParams(search);
//redirect user to home page
const redirect = sp.get('redirect') || '/';

// user states
const [name,setName]= useState('');
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');
const [confirmPassword,setConfirmPassword]= useState('');


const handleUpdateUser = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword){
        toast.error('Password do not match');
        return;
}

try {
    //profile update function from rtk
    const res = await profile({
        _id:userInfo?._id,
        name,email,password}).unwrap();
    //We call the setCredentials function using dispatch
    dispatch(setCredentials({...res}));
    //redirect user to home
    // navigate(redirect);
    toast.success('Profile updated successfully');
} catch (error:any) {
    toast.error(error?.data?.message || error.message );
}

}


useEffect(() => {
    //set user states with current user information
  setName(userInfo?.name);
  setEmail(userInfo?.email);

    
}, [userInfo?.name,userInfo?.email]);
  return (
    <>
 <div className="pl-[10rem] flex flex-wrap">
        <div className='mr-[4rem] mt-[1rem]'>
        <h1 className='text-[2rem] font-bold mb-4'>User Profile</h1>

        <form onSubmit={handleUpdateUser} className='container w-[30rem]'>

            <div className="my-[2rem]">
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input type="text" className="mt-1 block p-2 w-full rounded bg-white " id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

              <div className="my-[2rem]">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" className="mt-1 block p-2 w-full rounded bg-white " id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

              <div className="my-[2rem]">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input type="text" className="mt-1 block p-2 w-full rounded bg-white " id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="my-[2rem]">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
                <input type="text" className="mt-1 block p-2 w-full rounded bg-white " id="confirmPassword" placeholder="confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button disabled={isLoading} type="submit" className='rounded text-white py-2 px-4 bg-teal-500 cursor-pointer my-[1rem] '>
                {isLoading ? "Updating..." : 'Update info'}
            </button>

          
            {isLoading && <Loader/>}

        </form>
        </div>

 </div>
    
    </>
  )
}

export default Profile