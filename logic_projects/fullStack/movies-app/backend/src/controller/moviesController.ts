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
            
        
        const newMovie= new MovieModel<Movie>({
            title: title.toString(),
            image : image.toString(),
            year : Number(year),
            details : details.toString(),
            genre:genreExists, //refence to genre document
            cast: cast as string ,// ensure its always a array
       
            
        })

      


        //save movie to the database
        await newMovie.save();
        //send response with new movie details
        res.status(201).json(newMovie);

    }catch(error:any){
    return res.status(500).json({message: (error as Error).message});
    }
}


export const getAllMovies = async (res: Response, req: Request) => {
    try{
            //all movies
        const movies = await MovieModel.find({}).populate('genre');
        //send response
        res.status(200).json(movies);
    }catch(error:any){
        return res.status(500).json({message: (error as Error).message});
    }
}


export const getMovieById = async (res: Response, req: Request) => {}


export const updateMovie = async (res: Response, req: Request) => {}


export const deleteMovie = async (res: Response, req: Request) => {}

