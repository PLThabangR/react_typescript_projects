import { useNavigate } from "react-router-dom";
import { useGetAllGenresQuery } from "../../app/api/genre";
import { useCreateMovieMutation,useUpoloadMovieImageMutation } from "../../app/api/movies"
import { use, useState } from "react";



const CreateMovie = () => {
  // Destructure RTK Query functions
    const { createMovie } = useCreateMovieMutation();
  const { getAllGenres } = useGetAllGenresQuery({});
  const { uploadMovieImage } = useUpoloadMovieImageMutation();

  // useNavigate router instance
  const    useNavigate = useNavigate0();

//hooks to create movie
const [movieData,setMovieData] = useState<Movie>({
  title: '',
  genreId: '',
  numberInStock: 0,
 

  image: '',
});  
    
  return (

  
    
    <>


      <h1>Create Movie</h1>

    </>
  )
}

export default CreateMovie