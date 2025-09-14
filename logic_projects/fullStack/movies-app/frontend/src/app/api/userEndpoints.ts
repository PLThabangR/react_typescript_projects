import { apiSlice } from "./apiSlice";
import {USER_URL} from '../constants';



///We use injectEndpoints to create endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: {...credentials}
            })
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: `${USER_URL}`,
                method: 'POST',
                body: {...credentials}
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: 'POST'
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: 'PUT',
                body: {...data}
            })
        })
    })
})



export const {useLoginMutation, useRegisterMutation,useLogoutUserMutation,useProfileMutation} = usersApiSlice;