import { apiSlice } from "./apiSlice";
import { GENRE_URL } from "../constants";


//we use injectEndpoints to create endpoints
export const genresApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => ({
                url: GENRE_URL,
            }),
            providesTags: ["Genre"],
        }),//end of get all gengres
        createGenre: builder.mutation({
            query: (genre) => ({
                url: GENRE_URL,
                method: "POST",
                body: genre,
            }),
            invalidatesTags: ["Genre"],
        })
    }),
});