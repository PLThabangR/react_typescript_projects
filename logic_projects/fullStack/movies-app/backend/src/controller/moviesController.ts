
import { Request, Response , NextFunction} from "express";
import MovieModel from "../model/Movies";
import type{Genre} from "../model/Genre";
import type { Movie } from "../types/Movies";

export const createMovie = async (res: Response, req: Request, next: NextFunction) => {
    const { title: title, image, year, details, genre, cast } = req.body;
    try{
        if(!title || !image || !year || !details || !genre || !cast){
            throw new Error("All fields are required");
        }

        //check if movie already exists
        const movieExists = await MovieModel.findOne({title});
        if(movieExists){
            throw new Error("Movie already exists");
        }

        //check if genre exists
        const genreExists = await Genre.findOne({name: genre});
        if(!genreExists){
            throw new Error("Genre does not exist");
        }

        const newMovie:Movie ={
            title: title.toString(),
            image : image.toString(),
            year : Number(year),
            details : details.toString(),
            genre:Genre,
            cast: cast.toString(),
         
        }

        //create new movie object
        const createdMovie = new MovieModel({...newMovie});


        //save movie to the database
        await createdMovie.save();
        //send response with new movie details
        res.status(201).json(newMovie);

    }catch(error:any){
    return res.status(500).json({message: (error as Error).message});
    }
}


export const getAllMovies = async (res: Response, req: Request, next: NextFunction) => {}


export const getMovieById = async (res: Response, req: Request, next: NextFunction) => {}


export const updateMovie = async (res: Response, req: Request, next: NextFunction) => {}


export const deleteMovie = async (res: Response, req: Request, next: NextFunction) => {}

