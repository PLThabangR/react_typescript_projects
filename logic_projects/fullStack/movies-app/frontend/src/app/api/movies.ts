
import {apiSlice} from './apiSlice'
import {MOVIE_URL,UPLOAD_URL} from '../constants'


export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: () => ({
                url: `${MOVIE_URL}/all-movies`,
            }),
        }),//end of get all movies
        createMovie: builder.mutation({
            query: (newMovie) => ({
                url: `${MOVIE_URL}/create-movie`,
                method: 'POST',
                body: {...newMovie}
            })
        }),//end of create movie
        updateMovie: builder.mutation({
            query: (updatedMovie) => ({
                url: `${MOVIE_URL}/update-movie/${updatedMovie.id}`,
                method: 'PUT',
                body: {...updatedMovie}
            })
        }),//end of update movie
            //Start of add revieww
        addMovieReview: builder.mutation({
            query: ({id,rating,comment}) => ({
                url: `${MOVIE_URL}/review-movie/${id}`,
                method: 'POST',
                body: {id,rating,comment}
            })
            
        }),//end of add movie review

        //start get movie
        getMovieById: builder.query({
            query: (id) => ({
                url: `${MOVIE_URL}/${id}`,
            }),
        }),//end of get movie by id

        deleteMovie: builder.mutation({
            query: (id) => ({
                url: `${MOVIE_URL}/delete-movie/${id}`,
                method: 'DELETE'
            })
        }),//end of delete movie

        grtRandomMovies: builder.query({
            query: () => ({
                url: `${MOVIE_URL}/random-movies`,
            }),
        }),//end of get random movies

        getLatestMovies: builder.query({
            query: () => ({
                url: `${MOVIE_URL}/latest-movies`,
            }),
        }),//end of get latest movies

        getTopMovies: builder.query({
            query: () => ({
                url: `${MOVIE_URL}/top-movies`,
            }),
        }),
            
        // getMoviesByGenre: builder.query({
        //     query: (genre) => ({
        //         url: `${MOVIE_URL}/movies-by-genre/${genre}`,
        //     }),
        // }),

     upoloadMovieImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: data
            })
        }),






        })//end of endpoints builder
      
 
    })//end of movieApiSlice


    //rxport to be used as hooks 
export const {
    useGetAllMoviesQuery,
    useCreateMovieMutation,
    useUpdateMovieMutation,
    useAddMovieReviewMutation,
    useGetMovieByIdQuery,
    useDeleteMovieMutation,
    useGrtRandomMoviesQuery,
    useGetLatestMoviesQuery,
    useGetTopMoviesQuery,
    // useGetMoviesByGenreQuery,
    useUpoloadMovieImageMutation
} = movieApiSlice
