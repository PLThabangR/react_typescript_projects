import { useNavigate } from "react-router-dom";
import { useGetAllGenresQuery } from "../../app/api/genre";
import { useCreateMovieMutation,useUpoloadMovieImageMutation } from "../../app/api/movies"
import { use, useEffect, useState } from "react";
import type { Movie } from "../../types/Movie";



const CreateMovie = () => {
  // Destructure RTK Query functions
    const [createMovie,{ isLoading:isCreating, error:createMovieErrorDetail }] = useCreateMovieMutation();
  const [uploadMovieImage,{ isLoading:isUploading, error:uploadMovieImageErrorDetail }] = useUpoloadMovieImageMutation();

   const {data :genres,refetch, isLoading:isGenresLoading, isError:isGenresError } = useGetAllGenresQuery({});
  // useNavigate router instance
  const navigate = useNavigate();

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
const [selectedImage,setSelectedImage] = useState<File | null>(null);

//On the first load we want to get all genres
useEffect(()=>{ 
// get all genres and set initial state values
if(genres){
  setMovieData((movieData) => ({
    ...movieData,
    genre: genres[0]._id,
    name: genres[0].name || { _id: {}, name: "" },
  }));
}

},[genres])
    

  return (

  
    
    <>


      <h1>Create Movie</h1>

    </>
  )
}

export default CreateMovie