import { apiSlice } from "./apiSlice";
import {USERS_URL} from '../constants';


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: {...credentials}
            })
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: {...credentials}
            })
        })
    })
})