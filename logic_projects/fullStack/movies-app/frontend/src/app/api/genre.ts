import { apiSlice } from "./apiSlice";
import { GENRE_URL } from "../constants";


interface Genre {
  _id: Object;
  name: string;
}

//we use injectEndpoints to create endpoints
export const genresApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllGenres: builder.query({
            query: () => ({
                url: GENRE_URL,
            }),
           
        }),//end of get all gengres
        createGenre: builder.mutation({
            query: (newGenre) => ({
                url: GENRE_URL,
                method: "POST",
                body: newGenre,
            }),
        }),//end of create genre
        updateGenre: builder.mutation({
            query: ({id, name}) => ({
                url: `${GENRE_URL}/${id}`,
                method: "PUT",
                body: {name},
            }),
            
        }),//end of update genre

            deleteGenre: builder.mutation({
                query: (id) => ({
                    url: `${GENRE_URL}/${id}`,
                    method: "DELETE",
                }),
            }),//end of delete genre
            getGenreById: builder.query({
                query: (id) => ({
                    url: `${GENRE_URL}/${id}`,
                }),
            }),//end of get genre by id

          
        })//end of endpoints
    })//end of injectEndpoints

    //we export the hooks to be used in our components
    export const {
        useGetAllGenresQuery,
        useGetGenreByIdQuery,
        useCreateGenreMutation,
        useUpdateGenreMutation,
        useDeleteGenreMutation,
      } = genresApiSlice