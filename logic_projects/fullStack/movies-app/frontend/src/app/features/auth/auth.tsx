import { createSlice } from '@reduxjs/toolkit';

import type { UserType } from '../../../Pages/User/UserType';

    interface AuthState {
        userInfo: UserType | null
    }
//declare initial state variable
const initialState:AuthState = {
   
    // get user infor from local storage if exist
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo') as string) : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {

        setCredentials: (state, action) => {
            //set state with payload
          state.userInfo = action.payload  
          //set datta to local storage
          localStorage.setItem('userInfo', JSON.stringify(action.payload));

          //expiration time and convert  to string then set to local storage
          const expirationTime = (new Date().getTime() + 30 * 24 *60*60* 1000).toString();
          localStorage.setItem('expirationTime', expirationTime);
        },
     
        logout: (state) => {
            state.userInfo = null;
            localStorage.clear();
            
        },
    },
});



////we export the actions functions thats why we use actions
export const { setCredentials, logout } = authSlice.actions;
//we export the our reducer from our authSlice hence we use authSlice.reducer
export default authSlice.reducer;