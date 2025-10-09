//type
import type { Movie } from './../types/Movies';
import type { Genre } from '../types/Genre';

//express 
import { Request, Response , NextFunction} from "express";

//Model
import MovieModel from "../model/Movies";
import GenreModel from "../model/Genre";


export const createMovie = async (req: Request,res: Response) => {
    const { title, image, year, details, genre, cast } = req.body;

   
    try{
         if(!req.body){
        throw new Error("Request body is empty");
    }
   




        if(!title || !image || !year || !details || !genre || !cast){
            throw new Error("All fields are required");
        }

        //check if movie already exists
        const movieExists = await MovieModel.findOne({title});
        if(movieExists){
            throw new Error("Movie already exists");
        }

        //check if genre exists
        const genreExists = await GenreModel.findOne({name: genre});
        if(!genreExists){
            throw new Error("Genre does not exist");
        }
        
      //  const  reviewExists = await ReviewModel.findById({movieExists.Reviews._id});
            
        //
        const newMovie= new MovieModel<Movie>({
            title: title.toString(),
            image : image.toString(),
            year : Number(year),
            details : details.toString(),
            genre:genreExists, //refence to genre document
            cast: cast as string[]  ,// ensure its always a array
       
            
        })

      


        //save movie to the database
        await newMovie.save();
        //send response with new movie details
        res.status(201).json(newMovie);

    }catch(error:any){
    return res.status(500).json({message: (error as Error).message});
    }
}


export const getAllMovies = async (req: Request,res: Response) => {
    try{
            //all movies
        const movies = await MovieModel.find();
        //send response
        res.status(200).json(movies);
    }catch(error:any){
        return res.status(500).json({message: (error as Error).message});
    }
}


export const getMovieById = async (req: Request,res: Response) => {

const {id} = req.params;

try{

   
    //get movie by id
    const movie = await MovieModel.findById(id);
    //if movie not found
    if(!movie){
        return res.status(404).json({message: "Movie not found"});
    }
    //send response
    return  res.status(200).json(movie);

}catch(error:any){
    res.status(500).json({message: (error as Error).message});
}

}


export const updateMovie = async (req: Request,res: Response) => {
 const {id} = req.params;


 try{
     if(!id){
        return res.status(404).json({message: "id not found"});
     }
        //get movie by id
        const movie = await MovieModel.findById(id);
        //if movie not found
        if(!movie){
            return res.status(404).json({message: "Movie not found"});
        }

       
     const updatedMovie = await MovieModel.findByIdAndUpdate(id,req.body,{new: true});
      
   
        //send response
        res.status(200).json(updatedMovie);


 }catch(error:any){
    res.status(500).json({message: (error as Error).message});
 }




}


export const deleteMovie = async (req: Request,res: Response) => {
    console.log("delete movie api is hit")
const {id} = req.params;

try{
     
        //get movie by id
        const movie = await MovieModel.findById(id);
        //if movie not found
        if(!movie){
            return res.status(404).json({message: "Movie not found"});
        }
        //delete movie from the database
        await MovieModel.findByIdAndDelete(id);
        //send response
        res.status(200).json({message:"Movie deleted",movie});
 }catch(error:any){
    res.status(500).json({message: (error as Error).message});
 }


}

export const  getNewMovies = async(req: Request, res: Response) => { 
    console.log("getting new movies");
    try{
        //-1 wil get us latest movies using the sort method from mongodb
        //Limit will return the number of movies to be returned in the query
        const movies = await MovieModel.find().sort({createdAt: -1}).limit(10);
        res.status(200).json(movies);
    }catch(error:any){
        res.status(500).json({message: (error as Error).message});
    }
}

export const topMovies = async(req: Request, res: Response) => {
    
    try{
        //-1 wil get us latest movies using the sort method from mongodb
        //Limit will return the number of movies to be returned in the query
        const topRatedMovies = await MovieModel.find().sort({numReviews: -1}).limit(10);
        res.status(200).json(topRatedMovies);
    }catch(error:any){
        res.status(500).json({message: (error as Error).message});
    }
}

export const randomMovies = async(req: Request, res: Response) => {
    
    try{
        //Getting random movies
        const randomMovies = await MovieModel.aggregate([{$sample: {size: 10}}]);
        res.status(200).json(randomMovies);
    }catch(error:any){
        res.status(500).json({message: (error as Error).message});

    }
}