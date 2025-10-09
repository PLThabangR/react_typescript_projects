import { createMovie } from './../../../../backend/src/controller/moviesController';
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
            query: (newMovie: any) => ({
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

        addMovieReview: builder.mutation({
            query: ({id,rating,comment}) => ({
                url: `${MOVIE_URL}/review-movie/${id}`,
                method: 'POST',
                body: {id,rating,comment}
            })
            
        }),//end of add movie review

        deleteMovie: builder.mutation({
            query: (id) => ({
                url: `${MOVIE_URL}/delete-movie/${id}`,
                method: 'DELETE'
            })
        }),//end of delete movie


            





        })//end of endpoints builder
      
 
    })//end of movieApiSlice

