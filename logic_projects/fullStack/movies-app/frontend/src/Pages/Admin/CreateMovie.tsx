import { useNavigate } from "react-router-dom";
import { useGetAllGenresQuery } from "../../app/api/genre";
import { useCreateMovieMutation,useUpoloadMovieImageMutation } from "../../app/api/movies"
import { use, useState } from "react";
import type { Movie } from "../../types/Movie";



const CreateMovie = () => {
  // Destructure RTK Query functions
    const { createMovie } = useCreateMovieMutation();
  const { getAllGenres } = useGetAllGenresQuery({});
  const { uploadMovieImage } = useUpoloadMovieImageMutation();

  // useNavigate router instance
  const    useNavigate = useNavigate0();

//hooks to create movie
const [movieData,setMovieData] = useState<Movie>({

 title: "",
 image: "",
 year: 0,
 details: "",
 genre: { _id: {}, name: "" },
 cast: [],
 reviews: [],
 rating: 0,
 numReviews: 0
 , createdAt: new Date()
});  
    
  return (

  
    
    <>


      <h1>Create Movie</h1>

    </>
  )
}

export default CreateMovie