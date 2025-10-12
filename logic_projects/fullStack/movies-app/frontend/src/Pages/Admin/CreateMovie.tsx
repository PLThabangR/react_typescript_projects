import { useNavigate } from "react-router-dom";
import { useGetAllGenresQuery } from "../../app/api/genre";
import { useCreateMovieMutation,useUpoloadMovieImageMutation } from "../../app/api/movies"
import { use, useEffect, useState } from "react";
import type { Movie } from "../../types/Movie";
import "./createMovie.css";



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

},[genres])//end of useEffect

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // Get the name and value of the input
  const { name, value } = e.target;

  // Check if the input name is 'genre' THEN UPDATE THE GENRE ELSE OTHER VALUES IN THE STATE
  if(name==='genre'){
    // Find the genre object with the matching name
    const selectedGenre = genres?.find((genre) => genre.name === value);

    // Update the movieData 
     setMovieData((prevData) => ({
       ...prevData,
       genre: selectedGenre?.name || { _id: {}, name  :"" ,},
    }));
  }else{
    // Update the movieData state with the new value
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }
 
};
    

  return (
    <>
      <div className="container flex  items-center justify-center mt-4 ">
        <form>
          <p className="text-green-200  w-[50rem] text-2xl mb-4">
            Create movie
          </p>
          <div>
            <label className="block">
              Name:
              <input
                type="text"
                placeholder="Movie name"
                className="w-full px-2 py-2 border bg-white border-gray-300 rounded-md "
                value={movieData.title}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="block">
              Year:
              <input
                type="text"
                placeholder="Movie year"
                className="w-full px-2 py-2 border bg-white border-gray-300 rounded-md "
                value={movieData.year}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="block">
              Details:
              <textarea
                name="details"
                placeholder="Movie description"
                className="w-full px-2 py-2 border bg-white border-gray-300 rounded-md "
                value={movieData.details}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>

          <div>
            <label className="block">
              Cast(comma-seperated):
              <input
                type="text"
                placeholder="Movie Cast"
                className="w-full px-2 py-2 border bg-white border-gray-300 rounded-md "
                value={movieData.cast.join(",")}
                onChange={(e) =>
                  setMovieData({
                    ...movieData,
                    cast: e.target.value.split(", "),
                  })
                }
              />
            </label>
          </div>

          <div className="mb-4 mt-4">
            <label
              className={
                !selectedImage
                  ? "upload-label-default"
                  : "upload-label-selected"
              }
            >
              {!selectedImage && "Upload Image"}
              <input
                type="file"
                accept="image/*"
                // onChange={handleImageChange}
                className={!selectedImage ? "hidden" : "block"}
              />
            </label>
          </div>


          <button
            type="button"
            // onClick={handleCreateMovie}
            className="bg-teal-500 text-white px-4 py-2 rounded"
            disabled={isCreating || isUploading}
          >
            {isCreating || isUploading ? "Creating..." : "Create Movie"}
          </button>
        </form>
      </div>
    </>
  ); 
}

export default CreateMovie